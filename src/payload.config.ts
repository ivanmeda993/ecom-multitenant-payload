import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { resendAdapter } from "@payloadcms/email-resend";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";

import path from "node:path";
import { fileURLToPath } from "node:url";
import { type Config, buildConfig } from "payload";
import sharp from "sharp";

import { Products } from "@/collections/products";
import { Tags } from "@/collections/tags";
import { Tenants } from "@/collections/tenants";
import { COOKIE_PREFIX } from "@/constants";
import { defaultLexical } from "@/fields/default-lexical";
import { getServerSideURL } from "@/lib/get-url";
import { multiTenantPlugin } from "@payloadcms/plugin-multi-tenant";
import { Categories } from "./collections/categories";
import { Media } from "./collections/media";
import { Users } from "./collections/users";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const payloadConfig = buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  // IMPORTANT: this is the prefix for all cookies
  cookiePrefix: COOKIE_PREFIX,
  collections: [Users, Tenants, Products, Categories, Tags, Media],
  editor: defaultLexical,
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
    connectOptions: {
      dbName: process.env.DATABASE_NAME || "",
    },
  }),
  email: resendAdapter({
    defaultFromAddress: process.env.RESEND_FROM_EMAIL || "",
    defaultFromName: process.env.RESEND_FROM_NAME || "",
    apiKey: process.env.RESEND_API_KEY || "",
  }),
  cors: [getServerSideURL()].filter(Boolean),
  sharp,
  plugins: [
    multiTenantPlugin<Config>({
      collections: {
        products: {},
      },
      tenantsArrayField: {
        includeDefaultField: false,
      },
      userHasAccessToAllTenants: (user) =>
        Boolean(user?.roles?.includes("super-admin")),
    }),
    vercelBlobStorage({
      enabled: true, // Optional, defaults to true
      // Specify which collections should use Vercel Blob

      clientUploads: true,
      collections: {
        media: true,
      },
      // Token provided by Vercel once Blob storage is added to your Vercel project
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
});

export default payloadConfig;
