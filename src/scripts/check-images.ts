import { dogsData } from "./dogs";

interface ImageCheck {
  name: string;
  type: "image" | "coverImage";
  url: string;
}

async function checkImageUrl(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, { method: "HEAD" });
    return response.ok;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Error checking ${url}:`, error.message);
    } else {
      console.error(`Error checking ${url}:`, String(error));
    }
    return false;
  }
}

async function main() {
  const images: ImageCheck[] = [];

  // Collect all image URLs
  for (const dog of dogsData) {
    images.push({
      name: dog.name,
      type: "image",
      url: dog.image,
    });
  }

  // Check all images
  let failedCount = 0;

  for (const img of images) {
    const isValid = await checkImageUrl(img.url);

    if (isValid) {
      console.log(`✅ VALID: ${img.name} ${img.type} - ${img.url}`);
    } else {
      console.log(`❌ FAILED: ${img.name} ${img.type} - ${img.url}`);
      failedCount++;
    }
  }

  console.log(
    `\nResults: ${images.length - failedCount} valid, ${failedCount} failed`
  );
}

main().catch((err) => {
  console.error("Script error:", err);
  process.exit(1);
});
