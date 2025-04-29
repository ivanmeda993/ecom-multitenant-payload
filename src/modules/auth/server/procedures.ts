import { LOGIN_SCHEMA, REGISTER_SCHEMA } from "@/modules/auth/schema";
import { generateAuthCookie } from "@/modules/auth/utils";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import { TRPCError } from "@trpc/server";
import { headers as getHeaders } from "next/headers";

export const authRouter = createTRPCRouter({
  session: baseProcedure.query(async ({ ctx: { payload } }) => {
    const headers = await getHeaders();

    const session = await payload.auth({ headers });

    return session;
  }),

  register: baseProcedure
    .input(REGISTER_SCHEMA)
    .mutation(async ({ input, ctx: { payload } }) => {
      const existingUserData = await payload.find({
        collection: "users",
        limit: 1,
        where: {
          username: {
            equals: input.username,
          },
        },
      });

      const existingUser = existingUserData.docs[0];

      if (existingUser) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Username already taken",
        });
      }

      const tenant = await payload.create({
        collection: "tenants",
        data: {
          name: input.username,
          slug: input.username,
          stipeAccountId: "test",
        },
      });

      await payload.create({
        collection: "users",
        data: {
          ...input,
          tenants: [
            {
              tenant: tenant.id,
            },
          ],
        },
      });
      const data = await payload.login({
        collection: "users",
        data: input,
      });

      if (!data.token) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Invalid credentials",
        });
      }

      await generateAuthCookie(data.token);

      return data;
    }),

  login: baseProcedure
    .input(LOGIN_SCHEMA)
    .mutation(async ({ input, ctx: { payload } }) => {
      const data = await payload.login({
        collection: "users",
        data: input,
      });

      if (!data.token) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Invalid credentials",
        });
      }

      await generateAuthCookie(data.token);

      return data;
    }),
});
