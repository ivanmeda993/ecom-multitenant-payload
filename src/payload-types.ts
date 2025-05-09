/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * Supported timezones in IANA format.
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "supportedTimezones".
 */
export type SupportedTimezones =
  | 'Pacific/Midway'
  | 'Pacific/Niue'
  | 'Pacific/Honolulu'
  | 'Pacific/Rarotonga'
  | 'America/Anchorage'
  | 'Pacific/Gambier'
  | 'America/Los_Angeles'
  | 'America/Tijuana'
  | 'America/Denver'
  | 'America/Phoenix'
  | 'America/Chicago'
  | 'America/Guatemala'
  | 'America/New_York'
  | 'America/Bogota'
  | 'America/Caracas'
  | 'America/Santiago'
  | 'America/Buenos_Aires'
  | 'America/Sao_Paulo'
  | 'Atlantic/South_Georgia'
  | 'Atlantic/Azores'
  | 'Atlantic/Cape_Verde'
  | 'Europe/London'
  | 'Europe/Berlin'
  | 'Africa/Lagos'
  | 'Europe/Athens'
  | 'Africa/Cairo'
  | 'Europe/Moscow'
  | 'Asia/Riyadh'
  | 'Asia/Dubai'
  | 'Asia/Baku'
  | 'Asia/Karachi'
  | 'Asia/Tashkent'
  | 'Asia/Calcutta'
  | 'Asia/Dhaka'
  | 'Asia/Almaty'
  | 'Asia/Jakarta'
  | 'Asia/Bangkok'
  | 'Asia/Shanghai'
  | 'Asia/Singapore'
  | 'Asia/Tokyo'
  | 'Asia/Seoul'
  | 'Australia/Brisbane'
  | 'Australia/Sydney'
  | 'Pacific/Guam'
  | 'Pacific/Noumea'
  | 'Pacific/Auckland'
  | 'Pacific/Fiji';

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  blocks: {};
  collections: {
    users: User;
    tenants: Tenant;
    dogs: Dog;
    breedGroups: BreedGroup;
    breeds: Breed;
    categories: Category;
    tags: Tag;
    media: Media;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {
    breedGroups: {
      breeds: 'breeds';
    };
    breeds: {
      dogs: 'dogs';
    };
    categories: {
      subcategories: 'categories';
    };
  };
  collectionsSelect: {
    users: UsersSelect<false> | UsersSelect<true>;
    tenants: TenantsSelect<false> | TenantsSelect<true>;
    dogs: DogsSelect<false> | DogsSelect<true>;
    breedGroups: BreedGroupsSelect<false> | BreedGroupsSelect<true>;
    breeds: BreedsSelect<false> | BreedsSelect<true>;
    categories: CategoriesSelect<false> | CategoriesSelect<true>;
    tags: TagsSelect<false> | TagsSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: string;
  };
  globals: {};
  globalsSelect: {};
  locale: null;
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  username: string;
  roles?: ('super-admin' | 'user')[] | null;
  tenants?:
    | {
        tenant: string | Tenant;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "tenants".
 */
export interface Tenant {
  id: string;
  /**
   * This is the name of the store (e.g. jhon doe's Store)
   */
  name: string;
  /**
   * This is the subdomain for the stor (e.g. jhon-doe.funroad.com)
   */
  slug: string;
  image?: (string | null) | Media;
  stipeAccountId: string;
  /**
   * You cannot create dogs until you submit your Stripe details
   */
  stripeDetailsSubmitted?: boolean | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "dogs".
 */
export interface Dog {
  id: string;
  tenant?: (string | null) | Tenant;
  name: string;
  slug: string;
  slugLock?: boolean | null;
  breed: string | Breed;
  badges?: (string | Tag)[] | null;
  description?: string | null;
  sex: 'male' | 'female';
  color: string;
  weight: number;
  dateOfBirth: string;
  ageInWeeks: number;
  microchipped?: boolean | null;
  vaccinated?: boolean | null;
  pedigree?: boolean | null;
  price: number;
  image: string | Media;
  coverImage?: (string | null) | Media;
  dogImages?: (string | Media)[] | null;
  available?: boolean | null;
  featured?: boolean | null;
  refundPolicy?: ('30-days' | '14-days' | '7-days' | '3-days' | '1-day' | 'no-refund') | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "breeds".
 */
export interface Breed {
  id: string;
  name: string;
  slug: string;
  breedGroup: string | BreedGroup;
  description?: string | null;
  countryOfOrigin?: string | null;
  size?: ('toy' | 'small' | 'medium' | 'large' | 'giant') | null;
  coatType?: ('short' | 'medium' | 'long' | 'wire' | 'curly' | 'double') | null;
  temperament?:
    | {
        trait?: string | null;
        id?: string | null;
      }[]
    | null;
  lifeExpectancy?: string | null;
  dogs?: {
    docs?: (string | Dog)[];
    hasNextPage?: boolean;
    totalDocs?: number;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "breedGroups".
 */
export interface BreedGroup {
  id: string;
  name: string;
  slug: string;
  breeds?: {
    docs?: (string | Breed)[];
    hasNextPage?: boolean;
    totalDocs?: number;
  };
  color?: string | null;
  description?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "tags".
 */
export interface Tag {
  id: string;
  name: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories".
 */
export interface Category {
  id: string;
  name: string;
  slug: string;
  slugLock?: boolean | null;
  color?: string | null;
  parent?: (string | null) | Category;
  subcategories?: {
    docs?: (string | Category)[];
    hasNextPage?: boolean;
    totalDocs?: number;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: string;
  document?:
    | ({
        relationTo: 'users';
        value: string | User;
      } | null)
    | ({
        relationTo: 'tenants';
        value: string | Tenant;
      } | null)
    | ({
        relationTo: 'dogs';
        value: string | Dog;
      } | null)
    | ({
        relationTo: 'breedGroups';
        value: string | BreedGroup;
      } | null)
    | ({
        relationTo: 'breeds';
        value: string | Breed;
      } | null)
    | ({
        relationTo: 'categories';
        value: string | Category;
      } | null)
    | ({
        relationTo: 'tags';
        value: string | Tag;
      } | null)
    | ({
        relationTo: 'media';
        value: string | Media;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  username?: T;
  roles?: T;
  tenants?:
    | T
    | {
        tenant?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "tenants_select".
 */
export interface TenantsSelect<T extends boolean = true> {
  name?: T;
  slug?: T;
  image?: T;
  stipeAccountId?: T;
  stripeDetailsSubmitted?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "dogs_select".
 */
export interface DogsSelect<T extends boolean = true> {
  tenant?: T;
  name?: T;
  slug?: T;
  slugLock?: T;
  breed?: T;
  badges?: T;
  description?: T;
  sex?: T;
  color?: T;
  weight?: T;
  dateOfBirth?: T;
  ageInWeeks?: T;
  microchipped?: T;
  vaccinated?: T;
  pedigree?: T;
  price?: T;
  image?: T;
  coverImage?: T;
  dogImages?: T;
  available?: T;
  featured?: T;
  refundPolicy?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "breedGroups_select".
 */
export interface BreedGroupsSelect<T extends boolean = true> {
  name?: T;
  slug?: T;
  breeds?: T;
  color?: T;
  description?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "breeds_select".
 */
export interface BreedsSelect<T extends boolean = true> {
  name?: T;
  slug?: T;
  breedGroup?: T;
  description?: T;
  countryOfOrigin?: T;
  size?: T;
  coatType?: T;
  temperament?:
    | T
    | {
        trait?: T;
        id?: T;
      };
  lifeExpectancy?: T;
  dogs?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories_select".
 */
export interface CategoriesSelect<T extends boolean = true> {
  name?: T;
  slug?: T;
  slugLock?: T;
  color?: T;
  parent?: T;
  subcategories?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "tags_select".
 */
export interface TagsSelect<T extends boolean = true> {
  name?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}