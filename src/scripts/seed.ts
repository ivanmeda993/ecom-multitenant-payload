import config from "@/payload.config";
import { getPayload } from "payload";

const dogBreeds = [
  {
    name: "Retrievers",
    color: "#FFB347",
    slug: "retrievers",
    subcategories: [
      { name: "Golden Retriever", slug: "golden-retriever" },
      { name: "Labrador Retriever", slug: "labrador-retriever" },
      { name: "Chesapeake Bay Retriever", slug: "chesapeake-bay-retriever" },
      { name: "Flat-Coated Retriever", slug: "flat-coated-retriever" },
      {
        name: "Nova Scotia Duck Tolling Retriever",
        slug: "nova-scotia-duck-tolling-retriever",
      },
    ],
  },
  {
    name: "Shepherds",
    color: "#7EC8E3",
    slug: "shepherds",
    subcategories: [
      { name: "German Shepherd", slug: "german-shepherd" },
      { name: "Australian Shepherd", slug: "australian-shepherd" },
      { name: "Belgian Shepherd", slug: "belgian-shepherd" },
      { name: "Border Collie", slug: "border-collie" },
      { name: "Shetland Sheepdog", slug: "shetland-sheepdog" },
    ],
  },
  {
    name: "Terriers",
    color: "#D8B5FF",
    slug: "terriers",
    subcategories: [
      { name: "Jack Russell Terrier", slug: "jack-russell-terrier" },
      { name: "Bull Terrier", slug: "bull-terrier" },
      { name: "Yorkshire Terrier", slug: "yorkshire-terrier" },
      {
        name: "West Highland White Terrier",
        slug: "west-highland-white-terrier",
      },
      { name: "Scottish Terrier", slug: "scottish-terrier" },
    ],
  },
  {
    name: "Hounds",
    color: "#FFE066",
    slug: "hounds",
    subcategories: [
      { name: "Beagle", slug: "beagle" },
      { name: "Basset Hound", slug: "basset-hound" },
      { name: "Bloodhound", slug: "bloodhound" },
      { name: "Greyhound", slug: "greyhound" },
      { name: "Dachshund", slug: "dachshund" },
    ],
  },
  {
    name: "Sporting Dogs",
    color: "#96E6B3",
    slug: "sporting-dogs",
    subcategories: [
      { name: "Pointer", slug: "pointer" },
      { name: "Setter", slug: "setter" },
      { name: "Spaniel", slug: "spaniel" },
      { name: "Vizsla", slug: "vizsla" },
      { name: "Weimaraner", slug: "weimaraner" },
    ],
  },
  {
    name: "Working Dogs",
    color: "#FF9AA2",
    slug: "working-dogs",
    subcategories: [
      { name: "Boxer", slug: "boxer" },
      { name: "Doberman Pinscher", slug: "doberman-pinscher" },
      { name: "Great Dane", slug: "great-dane" },
      { name: "Rottweiler", slug: "rottweiler" },
      { name: "Saint Bernard", slug: "saint-bernard" },
    ],
  },
  {
    name: "Toy Dogs",
    color: "#B5B9FF",
    slug: "toy-dogs",
    subcategories: [
      { name: "Chihuahua", slug: "chihuahua" },
      { name: "Pomeranian", slug: "pomeranian" },
      { name: "Pug", slug: "pug" },
      { name: "Shih Tzu", slug: "shih-tzu" },
      { name: "Maltese", slug: "maltese" },
    ],
  },
  {
    name: "Non-Sporting Dogs",
    color: "#FFCAB0",
    slug: "non-sporting-dogs",
    subcategories: [
      { name: "Bulldog", slug: "bulldog" },
      { name: "Dalmatian", slug: "dalmatian" },
      { name: "Poodle", slug: "poodle" },
      { name: "Chow Chow", slug: "chow-chow" },
      { name: "Bichon Frise", slug: "bichon-frise" },
    ],
  },
  {
    name: "Herding Dogs",
    color: "#FFD700",
    slug: "herding-dogs",
    subcategories: [
      { name: "Australian Cattle Dog", slug: "australian-cattle-dog" },
      { name: "Pembroke Welsh Corgi", slug: "pembroke-welsh-corgi" },
      { name: "Cardigan Welsh Corgi", slug: "cardigan-welsh-corgi" },
      { name: "Old English Sheepdog", slug: "old-english-sheepdog" },
      { name: "Collie", slug: "collie" },
    ],
  },
  {
    name: "Mixed Breeds",
    color: "#FF6B6B",
    slug: "mixed-breeds",
    subcategories: [
      { name: "Labradoodle", slug: "labradoodle" },
      { name: "Goldendoodle", slug: "goldendoodle" },
      { name: "Cockapoo", slug: "cockapoo" },
      { name: "Puggle", slug: "puggle" },
      { name: "Schnoodle", slug: "schnoodle" },
    ],
  },
];

const seed = async () => {
  const payload = await getPayload({ config });

  const adminTenant = await payload.create({
    collection: "tenants",
    data: {
      name: "admin",
      slug: "admin",
      stipeAccountId: "acct_1H29922eZvKYlo2C",
      stripeDetailsSubmitted: true,
    },
  });

  // create admin user
  await payload.create({
    collection: "users",
    data: {
      email: "admin@gmail.com",
      username: "admin",
      password: "Test1234!",
      roles: ["super-admin"],
      tenants: [
        {
          tenant: adminTenant.id,
        },
      ],
    },
  });

  // Create dog breeder tenant
  const breederTenant = await payload.create({
    collection: "tenants",
    data: {
      name: "Premium Dog Breeders",
      slug: "premium-dog-breeders",
      stipeAccountId: "acct_1H29922eZvKYlo2C",
      stripeDetailsSubmitted: true,
    },
  });

  // Create breeder user
  await payload.create({
    collection: "users",
    data: {
      email: "breeder@example.com",
      username: "breeder",
      password: "Test1234!",
      roles: ["user"],
      tenants: [
        {
          tenant: breederTenant.id,
        },
      ],
    },
  });

  for (const breed of dogBreeds) {
    const parentBreed = await payload.create({
      collection: "categories",
      data: {
        name: breed.name,
        slug: breed.slug,
        color: breed.color,
        parent: null,
      },
    });

    for (const subBreed of breed.subcategories || []) {
      await payload.create({
        collection: "categories",
        data: {
          name: subBreed.name,
          slug: subBreed.slug,
          parent: parentBreed.id,
        },
      });
    }
  }
};

try {
  await seed();
  console.log("Seeding completed");
  process.exit(0);
} catch (error) {
  console.error("Error seeding:", error);
  process.exit(1);
}
