export const tenantsData = [
  {
    collection: "tenants",
    data: {
      name: "admin",
      slug: "admin",
      stipeAccountId: "acct_1H29922eZvKYlo2C",
      stripeDetailsSubmitted: true,
    },
  },
  {
    collection: "tenants",
    data: {
      name: "Premium Dog Breeders",
      slug: "premium-dog-breeders",
      stipeAccountId: "acct_1H29922eZvKYlo2C",
      stripeDetailsSubmitted: true,
    },
  },
  {
    collection: "tenants",
    data: {
      name: "Royal Puppy Palace",
      slug: "royal-puppy-palace",
      stipeAccountId: "acct_1H29922eZvKYlo2C",
      stripeDetailsSubmitted: true,
    },
  },
];

export const usersData = [
  {
    collection: "users",
    tenantSlug: "admin",
    data: {
      email: "admin@gmail.com",
      username: "admin",
      password: "Test1234!",
      roles: ["super-admin"],
    },
  },
  {
    collection: "users",
    tenantSlug: "premium-dog-breeders",
    data: {
      email: "breeder@example.com",
      username: "breeder",
      password: "Test1234!",
      roles: ["user"],
    },
  },

  {
    collection: "users",
    tenantSlug: "royal-puppy-palace",
    data: {
      email: "royal@example.com",
      username: "royal",
      password: "Test1234!",
      roles: ["user"],
    },
  },
];

export const addTenantToUsers = async (tenantId: string) => {
  const usersWithTenant = usersData.map((user) => ({
    ...user,
    tenants: [{ tenant: tenantId }],
  }));
  return usersWithTenant;
};

export const dogBreeds = [
  {
    name: "Retrievers",
    color: "#FFB347",
    slug: "retrievers",

    subcategories: [
      {
        name: "Golden Retriever",
        slug: "golden-retriever",
        description:
          "The Golden Retriever is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties. The name 'retriever' refers to the breed's ability to retrieve game by fetching it from the water.",
        countryOfOrigin: "United Kingdom",
        size: "large",
        coatType: "long",
        temperament: [
          {
            trait: "Friendly",
          },
        ],
        lifeExpectancy: "10-12 years",
      },
      {
        name: "Labrador Retriever",
        slug: "labrador-retriever",
        description:
          "The Labrador Retriever is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.",
        countryOfOrigin: "United Kingdom",
        size: "large",
        coatType: "short",
        temperament: [
          {
            trait: "Friendly",
          },
        ],
        lifeExpectancy: "10-12 years",
      },
      {
        name: "Chesapeake Bay Retriever",
        slug: "chesapeake-bay-retriever",
        description:
          "The Chesapeake Bay Retriever is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.",
        countryOfOrigin: "United Kingdom",
        size: "large",
        coatType: "long",
        temperament: [
          {
            trait: "Friendly",
          },
        ],
        lifeExpectancy: "10-12 years",
      },
      {
        name: "Flat-Coated Retriever",
        slug: "flat-coated-retriever",
        description:
          "The Flat-Coated Retriever is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.",
        countryOfOrigin: "United Kingdom",
        size: "large",
        coatType: "long",
        temperament: [
          {
            trait: "Friendly",
          },
        ],
        lifeExpectancy: "10-12 years",
      },
      {
        name: "Nova Scotia Duck Tolling Retriever",
        slug: "nova-scotia-duck-tolling-retriever",
        description:
          "The Nova Scotia Duck Tolling Retriever is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.",
        countryOfOrigin: "United Kingdom",
        size: "large",
        coatType: "long",
        temperament: [
          {
            trait: "Friendly",
          },
        ],
        lifeExpectancy: "10-12 years",
      },
    ],
  },
  {
    name: "Shepherds",
    color: "#7EC8E3",
    slug: "shepherds",
    subcategories: [
      {
        name: "German Shepherd",
        slug: "german-shepherd",
        description:
          "The German Shepherd is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.",
        countryOfOrigin: "Germany",
        size: "large",
        coatType: "long",
        temperament: [
          {
            trait: "Friendly",
          },
        ],
        lifeExpectancy: "10-12 years",
      },
      {
        name: "Australian Shepherd",
        slug: "australian-shepherd",
        description:
          "The Australian Shepherd is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.",
        countryOfOrigin: "United States",
        size: "large",
        coatType: "short",
        temperament: [
          {
            trait: "Friendly",
          },
        ],
        lifeExpectancy: "10-12 years",
      },
      {
        name: "Belgian Shepherd",
        slug: "belgian-shepherd",
        description:
          "The Belgian Shepherd is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.",
        countryOfOrigin: "Belgium",
        size: "large",
        coatType: "long",
        temperament: [
          {
            trait: "Friendly",
          },
        ],
        lifeExpectancy: "10-12 years",
      },
      {
        name: "Border Collie",
        slug: "border-collie",
        description:
          "The Border Collie is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.",
        countryOfOrigin: "United Kingdom",
        size: "large",
        coatType: "long",
        temperament: [
          {
            trait: "Friendly",
          },
        ],
        lifeExpectancy: "10-12 years",
      },
      {
        name: "Shetland Sheepdog",
        slug: "shetland-sheepdog",
        description:
          "The Shetland Sheepdog is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.",
        countryOfOrigin: "United Kingdom",
        size: "large",
        coatType: "long",
        temperament: [
          {
            trait: "Friendly",
          },
        ],
        lifeExpectancy: "10-12 years",
      },
    ],
  },
  {
    name: "Terriers",
    color: "#D8B5FF",
    slug: "terriers",
    subcategories: [
      {
        name: "Jack Russell Terrier",
        slug: "jack-russell-terrier",
        description:
          "The Jack Russell Terrier is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.",
        countryOfOrigin: "United Kingdom",
        size: "large",
        coatType: "short",
        temperament: [
          {
            trait: "Friendly",
          },
        ],
        lifeExpectancy: "10-12 years",
      },
      {
        name: "Bull Terrier",
        slug: "bull-terrier",
        description:
          "The Bull Terrier is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.",
        countryOfOrigin: "United Kingdom",
        size: "large",
        coatType: "short",
        temperament: [
          {
            trait: "Friendly",
          },
        ],
        lifeExpectancy: "10-12 years",
      },
      {
        name: "Yorkshire Terrier",
        slug: "yorkshire-terrier",
        description:
          "The Yorkshire Terrier is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.",
        countryOfOrigin: "United Kingdom",
        size: "large",
        coatType: "short",
        temperament: [
          {
            trait: "Friendly",
          },
        ],
        lifeExpectancy: "10-12 years",
      },
      {
        name: "West Highland White Terrier",
        slug: "west-highland-white-terrier",
        description:
          "The West Highland White Terrier is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.",
        countryOfOrigin: "United Kingdom",
        size: "large",
        coatType: "short",
        temperament: [
          {
            trait: "Friendly",
          },
        ],
        lifeExpectancy: "10-12 years",
      },
      {
        name: "Scottish Terrier",
        slug: "scottish-terrier",
        description:
          "The Scottish Terrier is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.",
        countryOfOrigin: "United Kingdom",
        size: "large",
        coatType: "short",
        temperament: [
          {
            trait: "Friendly",
          },
        ],
        lifeExpectancy: "10-12 years",
      },
    ],
  },
  {
    name: "Hounds",
    color: "#FFE066",
    slug: "hounds",
    subcategories: [
      {
        name: "Beagle",
        slug: "beagle",
        description:
          "The Beagle is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.",
        countryOfOrigin: "United Kingdom",
        size: "large",
        coatType: "short",
        temperament: [
          {
            trait: "Friendly",
          },
        ],
        lifeExpectancy: "10-12 years",
      },
      {
        name: "Basset Hound",
        slug: "basset-hound",
        description:
          "The Basset Hound is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.",
        countryOfOrigin: "United Kingdom",
        size: "large",
        coatType: "short",
        temperament: [
          {
            trait: "Friendly",
          },
        ],
        lifeExpectancy: "10-12 years",
      },
      {
        name: "Bloodhound",
        slug: "bloodhound",
        description:
          "The Bloodhound is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.",
        countryOfOrigin: "United Kingdom",
        size: "large",
        coatType: "short",
        temperament: [
          {
            trait: "Friendly",
          },
        ],
        lifeExpectancy: "10-12 years",
      },
      {
        name: "Greyhound",
        slug: "greyhound",
        description:
          "The Greyhound is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.",
        countryOfOrigin: "United Kingdom",
        size: "large",
        coatType: "short",
        temperament: [
          {
            trait: "Friendly",
          },
        ],
        lifeExpectancy: "10-12 years",
      },
    ],
  },
  {
    name: "Sporting Dogs",
    color: "#96E6B3",
    slug: "sporting-dogs",
    subcategories: [
      {
        name: "Pointer",
        slug: "pointer",
        description:
          "The Pointer is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.",
        countryOfOrigin: "United Kingdom",
        size: "large",
        coatType: "short",
        temperament: [
          {
            trait: "Friendly",
          },
        ],
        lifeExpectancy: "10-12 years",
      },
      {
        name: "Setter",
        slug: "setter",
        description:
          "The Setter is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.",
        countryOfOrigin: "United Kingdom",
        size: "large",
        coatType: "short",
        temperament: [
          {
            trait: "Friendly",
          },
        ],
        lifeExpectancy: "10-12 years",
      },
      {
        name: "Vizsla",
        slug: "vizsla",
        description:
          "The Vizsla is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.",
        countryOfOrigin: "United Kingdom",
        size: "large",
        coatType: "short",
        temperament: [
          {
            trait: "Friendly",
          },
        ],
        lifeExpectancy: "10-12 years",
      },
      {
        name: "Weimaraner",
        slug: "weimaraner",
        description:
          "The Weimaraner is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.",
        countryOfOrigin: "United Kingdom",
        size: "large",
        coatType: "short",
        temperament: [
          {
            trait: "Friendly",
          },
        ],
        lifeExpectancy: "10-12 years",
      },
    ],
  },
  {
    name: "Working Dogs",
    color: "#FF9AA2",
    slug: "working-dogs",
    subcategories: [
      {
        name: "Boxer",
        slug: "boxer",
        description:
          "The Boxer is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.",
        countryOfOrigin: "United Kingdom",
        size: "large",
        coatType: "short",
        temperament: [
          {
            trait: "Friendly",
          },
        ],
        lifeExpectancy: "10-12 years",
      },
      {
        name: "Doberman Pinscher",
        slug: "doberman-pinscher",
        description:
          "The Doberman Pinscher is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.",
        countryOfOrigin: "United Kingdom",
        size: "large",
        coatType: "short",
        temperament: [
          {
            trait: "Friendly",
          },
        ],
        lifeExpectancy: "10-12 years",
      },
      {
        name: "Great Dane",
        slug: "great-dane",
        description:
          "The Great Dane is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.",
        countryOfOrigin: "United Kingdom",
        size: "large",
        coatType: "short",
        temperament: [
          {
            trait: "Friendly",
          },
        ],
        lifeExpectancy: "10-12 years",
      },
      {
        name: "Rottweiler",
        slug: "rottweiler",
        description:
          "The Rottweiler is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.",
        countryOfOrigin: "United Kingdom",
        size: "large",
        coatType: "short",
        temperament: [
          {
            trait: "Friendly",
          },
        ],
        lifeExpectancy: "10-12 years",
      },
    ],
  },
  {
    name: "Toy Dogs",
    color: "#B5B9FF",
    slug: "toy-dogs",
    subcategories: [
      {
        name: "Chihuahua",
        slug: "chihuahua",
        description:
          "The Chihuahua is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.",
        countryOfOrigin: "United Kingdom",
        size: "large",
        coatType: "short",
        temperament: [
          {
            trait: "Friendly",
          },
        ],
        lifeExpectancy: "10-12 years",
      },
      {
        name: "Pomeranian",
        slug: "pomeranian",
        description:
          "The Pomeranian is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.",
        countryOfOrigin: "United Kingdom",
        size: "large",
        coatType: "short",
        temperament: [
          {
            trait: "Friendly",
          },
        ],
        lifeExpectancy: "10-12 years",
      },
      {
        name: "Pug",
        slug: "pug",
        description:
          "The Pug is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.",
        countryOfOrigin: "United Kingdom",
        size: "large",
        coatType: "short",
        temperament: [
          {
            trait: "Friendly",
          },
        ],
        lifeExpectancy: "10-12 years",
      },
      {
        name: "Shih Tzu",
        slug: "shih-tzu",
        description:
          "The Shih Tzu is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.",
        countryOfOrigin: "United Kingdom",
        size: "large",
        coatType: "short",
        temperament: [
          {
            trait: "Friendly",
          },
        ],
        lifeExpectancy: "10-12 years",
      },
      {
        name: "Maltese",
        slug: "maltese",
        description:
          "The Maltese is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.",
        countryOfOrigin: "United Kingdom",
        size: "large",
        coatType: "short",
        temperament: [
          {
            trait: "Friendly",
          },
        ],
        lifeExpectancy: "10-12 years",
      },
    ],
  },
  {
    name: "Non-Sporting Dogs",
    color: "#FFCAB0",
    slug: "non-sporting-dogs",
    subcategories: [
      {
        name: "Bulldog",
        slug: "bulldog",
        description:
          "The Bulldog is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.",
        countryOfOrigin: "United Kingdom",
        size: "large",
        coatType: "short",
        temperament: [
          {
            trait: "Friendly",
          },
        ],
        lifeExpectancy: "10-12 years",
      },
      {
        name: "Dalmatian",
        slug: "dalmatian",
        description:
          "The Dalmatian is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.",
        countryOfOrigin: "United Kingdom",
        size: "large",
        coatType: "short",
        temperament: [
          {
            trait: "Friendly",
          },
        ],
        lifeExpectancy: "10-12 years",
      },
      {
        name: "Poodle",
        slug: "poodle",
        description:
          "The Poodle is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.",
        countryOfOrigin: "United Kingdom",
        size: "large",
        coatType: "short",
        temperament: [
          {
            trait: "Friendly",
          },
        ],
        lifeExpectancy: "10-12 years",
      },
      {
        name: "Chow Chow",
        slug: "chow-chow",
        description:
          "The Chow Chow is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.",
        countryOfOrigin: "United Kingdom",
        size: "large",
        coatType: "short",
        temperament: [
          {
            trait: "Friendly",
          },
        ],
        lifeExpectancy: "10-12 years",
      },
      {
        name: "Bichon Frise",
        slug: "bichon-frise",
        description:
          "The Bichon Frise is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.",
        countryOfOrigin: "United Kingdom",
        size: "large",
        coatType: "short",
        temperament: [
          {
            trait: "Friendly",
          },
        ],
        lifeExpectancy: "10-12 years",
      },
    ],
  },
  {
    name: "Herding Dogs",
    color: "#FFD700",
    slug: "herding-dogs",
    subcategories: [
      {
        name: "Australian Cattle Dog",
        slug: "australian-cattle-dog",
        description:
          "The Australian Cattle Dog is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.",
        countryOfOrigin: "United Kingdom",
        size: "large",
        coatType: "short",
        temperament: [
          {
            trait: "Friendly",
          },
        ],
        lifeExpectancy: "10-12 years",
      },
      {
        name: "Pembroke Welsh Corgi",
        slug: "pembroke-welsh-corgi",
        description:
          "The Pembroke Welsh Corgi is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.",
        countryOfOrigin: "United Kingdom",
        size: "large",
        coatType: "short",
        temperament: [
          {
            trait: "Friendly",
          },
        ],
        lifeExpectancy: "10-12 years",
      },
      {
        name: "Collie",
        slug: "collie",
        description:
          "The Collie is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.",
        countryOfOrigin: "United Kingdom",
        size: "large",
        coatType: "short",
        temperament: [
          {
            trait: "Friendly",
          },
        ],
        lifeExpectancy: "10-12 years",
      },
    ],
  },
  {
    name: "Mixed Breeds",
    color: "#FF6B6B",
    slug: "mixed-breeds",
    subcategories: [
      {
        name: "Labradoodle",
        slug: "labradoodle",
        description:
          "The Labradoodle is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.",
        countryOfOrigin: "United Kingdom",
        size: "large",
        coatType: "short",
        temperament: [
          {
            trait: "Friendly",
          },
        ],
        lifeExpectancy: "10-12 years",
      },
      {
        name: "Goldendoodle",
        slug: "goldendoodle",
        description:
          "The Goldendoodle is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.",
        countryOfOrigin: "United Kingdom",
        size: "large",
        coatType: "short",
        temperament: [
          {
            trait: "Friendly",
          },
        ],
        lifeExpectancy: "10-12 years",
      },
      {
        name: "Cockapoo",
        slug: "cockapoo",
        description:
          "The Cockapoo is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.",
        countryOfOrigin: "United Kingdom",
        size: "large",
        coatType: "short",
        temperament: [
          {
            trait: "Friendly",
          },
        ],
        lifeExpectancy: "10-12 years",
      },
      {
        name: "Puggle",
        slug: "puggle",
        description:
          "The Puggle is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.",
        countryOfOrigin: "United Kingdom",
        size: "large",
        coatType: "short",
        temperament: [
          {
            trait: "Friendly",
          },
        ],
        lifeExpectancy: "10-12 years",
      },
    ],
  },
];
export const dogTagsData = [
  "Friendly",
  "Good with kids",
  "Hypoallergenic",
  "Apartment-friendly",
  "Active",
  "Calm",
  "Protective",
  "Easy to train",
  "Low shedding",
  "Rare breed",
];
export const dogsData = [
  {
    name: "Max",
    breedSlug: "german-shepherd",
    tenantSlug: "admin",
    tags: ["Friendly", "Good with kids", "Hypoallergenic", "Easy to train"],
    description:
      "Max is a friendly and energetic German Shepherd who loves to play fetch.",
    price: 1000,
    featured: true,
    sex: "male",
    color: "black",
    weight: 30,
    dateOfBirth: "2020-01-01",
    ageInWeeks: 14,
    microchipped: true,
    vaccinated: true,
    pedigree: true,
    image:
      "https://images.squarespace-cdn.com/content/v1/63deb27b4a085e065cb68f2a/b61cc348-d225-4b3d-bbb3-37c1ae2671a7/14-week-old-german-shepherd-puppy-in-grass.jpg",
    coverImage:
      "https://images.squarespace-cdn.com/content/v1/63deb27b4a085e065cb68f2a/d15cba67-62c9-456f-bb80-186ef4e44fa5/german-shepherd-puppies-for-sale-in-crate.jpg",
  },
];

export const populateDogs = async (
  tenantId: string,
  breedSlug: string,
  tags: string[]
) => {
  const dogsWithTenant = dogs.map((dog) => ({
    ...dog,
    tenant: tenantId,
  }));
  return dogsWithTenant;
};
