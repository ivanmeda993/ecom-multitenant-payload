import type { Tenant } from "@/payload-types";
import config from "@/payload.config";
import { getPayload } from "payload";
import type { File } from "payload";
import {
  dogBreeds,
  dogTagsData,
  dogsData,
  tenantsData,
  usersData,
} from "./dogs";

const seed = async () => {
  const payload = await getPayload({ config });

  const tenantsResult: Tenant[] = [];

  for (const tenant of tenantsData) {
    const tenantResult = await payload.create({
      collection: "tenants",
      data: tenant.data,
    });
    tenantsResult.push(tenantResult as Tenant);
  }

  console.log("Tenants created:", tenantsResult);

  const usersResult = [];

  if (tenantsResult.length > 0) {
    for (const user of usersData) {
      const userResult = await payload.create({
        collection: "users",
        data: {
          ...user.data,
          tenants: [
            {
              tenant:
                tenantsResult.find((tenant) => tenant?.slug === user.tenantSlug)
                  ?.id || "",
            },
          ],
        },
      });
      usersResult.push(userResult);
    }
  }

  console.log("Users created:", usersResult);

  const dogsGroupsResult = [];
  const breedsResult = [];
  for (const dogGroup of dogBreeds) {
    const dogGroupResult = await payload.create({
      collection: "breedGroups",
      data: {
        name: dogGroup.name,
        slug: dogGroup.slug,
        color: dogGroup.color,
      },
    });
    dogsGroupsResult.push(dogGroupResult);

    for (const subCategory of dogGroup.subcategories) {
      const subCategoryResult = await payload.create({
        collection: "breeds",
        data: {
          ...subCategory,
          breedGroup: dogGroupResult.id,
        },
      });
      breedsResult.push(subCategoryResult);
    }
  }

  console.log("Breeds created:", breedsResult);
  const tagsResult = [];
  for (const tag of dogTagsData) {
    const tagResult = await payload.create({
      collection: "tags",
      data: {
        name: tag,
      },
    });
    tagsResult.push(tagResult);
  }

  console.log("Tags created:", tagsResult);
  // Filter out any null values from failed image uploads

  const dogsResult = [];
  const mainImagesResult = [];
  const coverImagesResult = [];
  for (const dog of dogsData) {
    // 1. create main images
    const mainImageBuffer = await fetchFileByURL(dog.image);
    const coverImageBuffer = await fetchFileByURL(dog.coverImage);
    const mainImageResult = await payload.create({
      collection: "media",
      data: {
        alt: dog.name,
      },
      file: mainImageBuffer,
    });
    mainImagesResult.push(mainImageResult);
    // 2. create cover images
    const coverImageResult = await payload.create({
      collection: "media",
      data: {
        alt: `${dog.name} cover image`,
      },
      file: coverImageBuffer,
    });
    coverImagesResult.push(coverImageResult);
    // 3. create dog
    const dogResult = await payload.create({
      collection: "dogs",
      data: {
        ...dog,
        image: mainImageResult.id,
        coverImage: coverImageResult.id,
        breed: breedsResult.find((breed) => breed.slug === dog.breedSlug)?.id,
        tags: tagsResult.filter((tag) => dog.tags.includes(tag.name)),
        tenant: tenantsResult.find((tenant) => tenant.slug === dog.tenantSlug)
          ?.id,
      },
    });
    dogsResult.push(dogResult);
  }
};

// Get all breed categories for random assignment

// Create about 30 dogs with various breeds and characteristics

// Combine all tenants for random assignment

try {
  await seed();
  console.log("Seeding completed");
  process.exit(0);
} catch (error) {
  console.error("Error seeding:", error);
  process.exit(1);
}

async function fetchFileByURL(url: string): Promise<File> {
  const res = await fetch(url, {
    credentials: "include",
    method: "GET",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch file from ${url}, status: ${res.status}`);
  }

  const data = await res.arrayBuffer();

  return {
    name: url.split("/").pop() || `file-${Date.now()}`,
    data: Buffer.from(data),
    mimetype: `image/${url.split(".").pop()}`,
    size: data.byteLength,
  };
}
