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
      {
        name: "Siberian Husky",
        slug: "husky",
        description:
          "The Siberian Husky is a medium-sized working dog breed with a thick coat and distinctive markings. Originally bred by the Chukchi people of northeastern Asia for sled-pulling in harsh conditions.",
        countryOfOrigin: "Russia",
        size: "medium",
        coatType: "long",
        temperament: [
          {
            trait: "Active",
          },
        ],
        lifeExpectancy: "12-14 years",
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
      {
        name: "Boston Terrier",
        slug: "boston-terrier",
        description:
          "The Boston Terrier is a small, compact dog with a short tail and erect ears. Known for its tuxedo-like markings, this breed is lively, intelligent, and well-mannered.",
        countryOfOrigin: "United States",
        size: "small",
        coatType: "short",
        temperament: [
          {
            trait: "Friendly",
          },
        ],
        lifeExpectancy: "11-13 years",
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
      {
        name: "Dachshund",
        slug: "dachshund",
        description:
          "The Dachshund is a small hound with a long body and short legs. Originally bred for hunting badgers and other burrowing animals, they are known for their playful personality and courage.",
        countryOfOrigin: "Germany",
        size: "small",
        coatType: "short",
        temperament: [
          {
            trait: "Active",
          },
        ],
        lifeExpectancy: "12-16 years",
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
      {
        name: "Cocker Spaniel",
        slug: "cocker-spaniel",
        description:
          "The Cocker Spaniel is a medium-sized sporting dog with a silky coat and expressive eyes. Known for their gentle, playful temperament and excellent hunting abilities.",
        countryOfOrigin: "United Kingdom",
        size: "medium",
        coatType: "medium",
        temperament: [
          {
            trait: "Friendly",
          },
        ],
        lifeExpectancy: "12-15 years",
      },
      {
        name: "Cavalier King Charles Spaniel",
        slug: "cavalier-king-charles-spaniel",
        description:
          "The Cavalier King Charles Spaniel is a small spaniel breed known for its gentle, affectionate nature. With silky coats and expressive eyes, they make excellent companion dogs.",
        countryOfOrigin: "United Kingdom",
        size: "small",
        coatType: "medium",
        temperament: [
          {
            trait: "Friendly",
          },
        ],
        lifeExpectancy: "9-14 years",
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
      {
        name: "Bullmastiff",
        slug: "bullmastiff",
        description:
          "The Bullmastiff is a large, powerful dog with a broad head and short muzzle. Originally bred to guard estates against poachers, they are known for their loyalty and protective nature.",
        countryOfOrigin: "United Kingdom",
        size: "large",
        coatType: "short",
        temperament: [
          {
            trait: "Protective",
          },
        ],
        lifeExpectancy: "8-10 years",
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
      {
        name: "French Bulldog",
        slug: "french-bulldog",
        description:
          "The French Bulldog is a small breed of domestic dog with a muscular body, short snout, and bat-like ears. Known for their affectionate nature and adaptability to apartment living.",
        countryOfOrigin: "France",
        size: "small",
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
    name: "Colleen T",
    slug: "colleen-t",
    breedSlug: "golden-retriever",
    tenantSlug: "admin",
    tags: ["Friendly"],
    description:
      "A friendly and devoted breed, famous for their intelligence and eagerness to please, often used in therapy and as family companions.",
    price: 1500,
    featured: false,
    sex: "female",
    color: "white",
    weight: 23.6,
    dateOfBirth: "2023-10-01",
    ageInWeeks: 10,
    microchipped: true,
    vaccinated: true,
    pedigree: true,
    image:
      "https://images.unsplash.com/photo-1592769606534-fe78d27bf450?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Steven Max",
    slug: "steven-max",
    breedSlug: "labrador-retriever",
    tenantSlug: "premium-dog-breeders",
    tags: ["Friendly"],
    description:
      "Labradors are energetic and highly intelligent, perfect for active families and excel in various working roles.",
    price: 1000,
    featured: false,
    sex: "male",
    color: "tan",
    weight: 18.0,
    dateOfBirth: "2023-10-01",
    ageInWeeks: 8,
    microchipped: true,
    vaccinated: true,
    pedigree: true,
    image:
      "https://images.unsplash.com/photo-1561495376-dc9c7c5b8726?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Nathaniel L",
    slug: "nathaniel-l",
    breedSlug: "chesapeake-bay-retriever",
    tenantSlug: "admin",
    tags: ["Friendly"],
    description:
      "Chesapeake Bay Retriever is known for its friendly temperament.",
    price: 900,
    featured: false,
    sex: "male",
    color: "black",
    weight: 25.0,
    dateOfBirth: "2023-10-01",
    ageInWeeks: 11,
    microchipped: true,
    vaccinated: true,
    pedigree: false,
    image:
      "https://moderndogmagazine.com/wp-content/uploads/2018/11/bigstock-7346114_JL-Photo.jpg",
  },
  {
    name: "Gina X",
    slug: "gina-x",
    breedSlug: "flat-coated-retriever",
    tenantSlug: "admin",
    tags: ["Friendly"],
    description: "Flat-Coated Retriever is known for its friendly temperament.",
    price: 1200,
    featured: true,
    sex: "male",
    color: "brown",
    weight: 14.1,
    dateOfBirth: "2023-10-01",
    ageInWeeks: 8,
    microchipped: true,
    vaccinated: true,
    pedigree: true,
    image:
      "https://pet-health-content-media.chewy.com/wp-content/uploads/2024/09/11162851/202107flat-coated-retriever-3.jpg",
  },
  {
    name: "Leslie II",
    slug: "leslie-ii",
    breedSlug: "nova-scotia-duck-tolling-retriever",
    tenantSlug: "royal-puppy-palace",
    tags: ["Friendly"],
    description:
      "Nova Scotia Duck Tolling Retriever is known for its friendly temperament.",
    price: 1000,
    featured: true,
    sex: "female",
    color: "tan",
    weight: 25.6,
    dateOfBirth: "2023-10-01",
    ageInWeeks: 16,
    microchipped: true,
    vaccinated: true,
    pedigree: false,
    image:
      "https://dogtime.com/wp-content/uploads/sites/12/2023/07/GettyImages-1280594384-1-e1692383020758.jpg?w=1024",
  },
  {
    name: "Randy Q",
    slug: "randy-q",
    breedSlug: "german-shepherd",
    tenantSlug: "royal-puppy-palace",
    tags: ["Friendly"],
    description:
      "Renowned for intelligence and versatility, German Shepherds excel in police work, search-and-rescue missions, and as loyal companions.",
    price: 1200,
    featured: false,
    sex: "male",
    color: "black",
    weight: 32.8,
    dateOfBirth: "2023-10-01",
    ageInWeeks: 13,
    microchipped: true,
    vaccinated: true,
    pedigree: true,
    image:
      "https://i.pinimg.com/736x/03/93/49/039349d38594397fb809cd0f7a2ccdb2.jpg",
  },
  {
    name: "Kristie X",
    slug: "kristie-x",
    breedSlug: "australian-shepherd",
    tenantSlug: "premium-dog-breeders",
    tags: ["Friendly"],
    description: "Australian Shepherd is known for its friendly temperament.",
    price: 900,
    featured: true,
    sex: "female",
    color: "brown",
    weight: 20.6,
    dateOfBirth: "2023-10-01",
    ageInWeeks: 8,
    microchipped: true,
    vaccinated: true,
    pedigree: false,
    image:
      "https://nativepet.com/cdn/shop/articles/Australian-Shepherd-lying-on-the-grass.jpg?v=1659086303&width=1000",
  },
  {
    name: "Kyle Max",
    slug: "kyle-max",
    breedSlug: "belgian-shepherd",
    tenantSlug: "royal-puppy-palace",
    tags: ["Friendly"],
    description: "Belgian Shepherd is known for its friendly temperament.",
    price: 1500,
    featured: true,
    sex: "male",
    color: "white",
    weight: 28.7,
    dateOfBirth: "2023-10-01",
    ageInWeeks: 14,
    microchipped: true,
    vaccinated: true,
    pedigree: true,
    image:
      "https://cdn.dotpe.in/longtail/item_thumbnails/7562157/hOdwvKbJ-800-800.webp",
  },
  {
    name: "Michael X",
    slug: "michael-x",
    breedSlug: "border-collie",
    tenantSlug: "royal-puppy-palace",
    tags: ["Friendly"],
    description: "Border Collie is known for its friendly temperament.",
    price: 1200,
    featured: false,
    sex: "male",
    color: "brown",
    weight: 11.6,
    dateOfBirth: "2023-10-01",
    ageInWeeks: 10,
    microchipped: true,
    vaccinated: true,
    pedigree: true,
    image:
      "https://dogtime.com/wp-content/uploads/sites/12/2023/11/E1A4DAF1-4BF1-43F1-B23F-D6C7215FEBC5-e1700655081549.jpeg?w=1024",
  },
  {
    name: "Heather III",
    slug: "heather-iii",
    breedSlug: "shetland-sheepdog",
    tenantSlug: "admin",
    tags: ["Friendly"],
    description: "Shetland Sheepdog is known for its friendly temperament.",
    price: 1200,
    featured: true,
    sex: "female",
    color: "cream",
    weight: 12.7,
    dateOfBirth: "2023-10-01",
    ageInWeeks: 15,
    microchipped: true,
    vaccinated: true,
    pedigree: false,
    image:
      "https://www.dailypaws.com/thmb/fuKTlara9mMgYqDE0DKEEys1g7Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/shetland-sheepdog-puppy-sitting-plaid-collar-1338744344-2000-6eff93e863ec41dd9d3f6a109c86ddc7.jpg",
  },
  {
    name: "Sarah Q",
    slug: "sarah-q",
    breedSlug: "husky",
    tenantSlug: "royal-puppy-palace",
    tags: ["Active"],
    description: "Siberian Husky is known for its active temperament.",
    price: 900,
    featured: false,
    sex: "female",
    color: "cream",
    weight: 25.1,
    dateOfBirth: "2023-10-01",
    ageInWeeks: 9,
    microchipped: true,
    vaccinated: true,
    pedigree: true,
    image:
      "https://rukminim2.flixcart.com/image/850/1000/kz1lle80/poster/c/x/m/small-cute-alaskan-malamute-dog-multicolour-photo-paper-print-original-imagb5hak8peymun.jpeg?q=90&crop=false",
  },
  {
    name: "Evan Z",
    slug: "evan-z",
    breedSlug: "jack-russell-terrier",
    tenantSlug: "premium-dog-breeders",
    tags: ["Friendly"],
    description: "Jack Russell Terrier is known for its friendly temperament.",
    price: 1500,
    featured: true,
    sex: "male",
    color: "cream",
    weight: 4.7,
    dateOfBirth: "2023-10-01",
    ageInWeeks: 14,
    microchipped: true,
    vaccinated: true,
    pedigree: true,
    image:
      "https://www.rover.com/blog/wp-content/uploads/2018/11/jack-russel-3466175_1920.jpg",
  },
  {
    name: "Dillon L",
    slug: "dillon-l",
    breedSlug: "bull-terrier",
    tenantSlug: "royal-puppy-palace",
    tags: ["Friendly"],
    description: "Bull Terrier is known for its friendly temperament.",
    price: 1500,
    featured: false,
    sex: "female",
    color: "tan",
    weight: 24.8,
    dateOfBirth: "2023-10-01",
    ageInWeeks: 14,
    microchipped: true,
    vaccinated: true,
    pedigree: true,
    image:
      "https://www.warrenphotographic.co.uk/photography/bigs/27195-Miniature-English-Bull-Terrier-pup-6-weeks-old-white-background.jpg",
  },
  {
    name: "Robert L",
    slug: "robert-l",
    breedSlug: "yorkshire-terrier",
    tenantSlug: "royal-puppy-palace",
    tags: ["Friendly"],
    description: "Yorkshire Terrier is known for its friendly temperament.",
    price: 900,
    featured: true,
    sex: "female",
    color: "tan",
    weight: 11.9,
    dateOfBirth: "2023-10-01",
    ageInWeeks: 13,
    microchipped: true,
    vaccinated: true,
    pedigree: true,
    image:
      "https://dogtime.com/wp-content/uploads/sites/12/2023/07/GettyImages-647607816.jpg?w=1024",
  },
  {
    name: "Connie Max",
    slug: "connie-max",
    breedSlug: "west-highland-white-terrier",
    tenantSlug: "premium-dog-breeders",
    tags: ["Friendly"],
    description:
      "West Highland White Terrier is known for its friendly temperament.",
    price: 1100,
    featured: true,
    sex: "female",
    color: "brown",
    weight: 12.0,
    dateOfBirth: "2023-10-01",
    ageInWeeks: 12,
    microchipped: true,
    vaccinated: true,
    pedigree: false,
    image:
      "https://www.southernliving.com/thmb/ivJ-XYOVI2-VJa7NNfsBfm9CKmU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Conniepuppy2pic2-0cfca298f726469388097eba05c49f5f.jpg",
  },
  {
    name: "Aaron X",
    slug: "aaron-x",
    breedSlug: "scottish-terrier",
    tenantSlug: "admin",
    tags: ["Friendly"],
    description: "Scottish Terrier is known for its friendly temperament.",
    price: 900,
    featured: false,
    sex: "female",
    color: "black",
    weight: 19.5,
    dateOfBirth: "2023-10-01",
    ageInWeeks: 11,
    microchipped: true,
    vaccinated: true,
    pedigree: true,
    image: "https://www.k9rl.com/wp-content/uploads/2017/02/Scottie-puppy.jpg",
  },
  {
    name: "Lynn III",
    slug: "lynn-iii",
    breedSlug: "boston-terrier",
    tenantSlug: "admin",
    tags: ["Friendly"],
    description: "Boston Terrier is known for its friendly temperament.",
    price: 1400,
    featured: false,
    sex: "female",
    color: "black",
    weight: 14.1,
    dateOfBirth: "2023-10-01",
    ageInWeeks: 10,
    microchipped: true,
    vaccinated: true,
    pedigree: true,
    image:
      "https://cdn.shopify.com/s/files/1/0025/4846/5729/files/A_brown_and_white_Boston_Terrier_puppy_lounging_in_the_grass..jpg?v=1724262796",
  },
  {
    name: "Heather T",
    slug: "heather-t",
    breedSlug: "beagle",
    tenantSlug: "admin",
    tags: ["Friendly"],
    description:
      "Known for their keen sense of smell and tracking instinct, Beagles are curious and merry companions.",
    price: 1200,
    featured: true,
    sex: "female",
    color: "golden",
    weight: 33.1,
    dateOfBirth: "2023-10-01",
    ageInWeeks: 12,
    microchipped: true,
    vaccinated: true,
    pedigree: true,
    image:
      "https://m.media-amazon.com/images/I/61TUUBnBDnS._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "James II",
    slug: "james-ii",
    breedSlug: "basset-hound",
    tenantSlug: "royal-puppy-palace",
    tags: ["Friendly"],
    description: "Basset Hound is known for its friendly temperament.",
    price: 1400,
    featured: true,
    sex: "male",
    color: "brown",
    weight: 10.5,
    dateOfBirth: "2023-10-01",
    ageInWeeks: 11,
    microchipped: true,
    vaccinated: true,
    pedigree: false,
    image:
      "https://affectionatebassethounds.com/available/1-Franklin-M-10-A-.jpg",
  },
  {
    name: "Connor Q",
    slug: "connor-q",
    breedSlug: "bloodhound",
    tenantSlug: "admin",
    tags: ["Friendly"],
    description: "Bloodhound is known for its friendly temperament.",
    price: 1500,
    featured: true,
    sex: "male",
    color: "golden",
    weight: 6.3,
    dateOfBirth: "2023-10-01",
    ageInWeeks: 8,
    microchipped: true,
    vaccinated: true,
    pedigree: true,
    image:
      "https://i.pinimg.com/564x/63/09/d3/6309d3df61f7c408666d4cfb8e899d4b.jpg",
  },

  {
    name: "Katherine Z",
    slug: "katherine-z",
    breedSlug: "dachshund",
    tenantSlug: "premium-dog-breeders",
    tags: ["Active"],
    description: "Dachshund is known for its active temperament.",
    price: 1200,
    featured: false,
    sex: "female",
    color: "black",
    weight: 21.2,
    dateOfBirth: "2023-10-01",
    ageInWeeks: 10,
    microchipped: true,
    vaccinated: true,
    pedigree: true,
    image:
      "https://fabricofmylife.co.uk/wp-content/uploads/2022/03/March-2022-3-819x1024.jpg",
  },
  {
    name: "Ashley Q",
    slug: "ashley-q",
    breedSlug: "pointer",
    tenantSlug: "premium-dog-breeders",
    tags: ["Friendly"],
    description: "Pointer is known for its friendly temperament.",
    price: 1300,
    featured: true,
    sex: "female",
    color: "white",
    weight: 11.5,
    dateOfBirth: "2023-10-01",
    ageInWeeks: 14,
    microchipped: true,
    vaccinated: true,
    pedigree: true,
    image:
      "https://media.zenfs.com/en/pethelpful_915/e466d3980b69a94cdf5d81e608b39bbc",
  },

  {
    name: "Johnny L",
    slug: "johnny-l",
    breedSlug: "pug",
    tenantSlug: "premium-dog-breeders",
    tags: ["Friendly"],
    description: "Pug is known for its friendly temperament.",
    price: 1200,
    featured: false,
    sex: "female",
    color: "brown",
    weight: 27.8,
    dateOfBirth: "2023-10-01",
    ageInWeeks: 15,
    microchipped: true,
    vaccinated: true,
    pedigree: true,
    image:
      "https://mypetsays.co.uk/cdn/shop/articles/mypetsays_take_care_of_a_pug_puppy.jpg?v=1583313821&width=1500",
  },
  {
    name: "Anne Jr",
    slug: "anne-jr",
    breedSlug: "shih-tzu",
    tenantSlug: "premium-dog-breeders",
    tags: ["Friendly"],
    description: "Shih Tzu is known for its friendly temperament.",
    price: 1100,
    featured: true,
    sex: "female",
    color: "black",
    weight: 32.2,
    dateOfBirth: "2023-10-01",
    ageInWeeks: 16,
    microchipped: true,
    vaccinated: true,
    pedigree: false,
    image:
      "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2021/11/30121625/Shih-Tzu.jpg",
  },
  {
    name: "Matthew B",
    slug: "matthew-b",
    breedSlug: "maltese",
    tenantSlug: "admin",
    tags: ["Friendly"],
    description: "Maltese is known for its friendly temperament.",
    price: 1000,
    featured: false,
    sex: "male",
    color: "white",
    weight: 6.2,
    dateOfBirth: "2023-10-01",
    ageInWeeks: 14,
    microchipped: true,
    vaccinated: true,
    pedigree: false,
    image:
      "https://a-z-animals.com/media/2022/03/dog-food-for-Maltese-header.jpg",
  },
  {
    name: "Jessica B",
    slug: "jessica-b",
    breedSlug: "french-bulldog",
    tenantSlug: "premium-dog-breeders",
    tags: ["Friendly"],
    description:
      "French Bulldogs are affectionate, playful, and adaptable to various living conditions, making excellent apartment pets.",
    price: 1300,
    featured: false,
    sex: "female",
    color: "cream",
    weight: 30.7,
    dateOfBirth: "2023-10-01",
    ageInWeeks: 13,
    microchipped: true,
    vaccinated: true,
    pedigree: true,
    image: "https://pawtion.co.uk/cdn/shop/articles/frenchie.jpg?v=1721852481",
  },
  {
    name: "Joseph Jr",
    slug: "joseph-jr",
    breedSlug: "bulldog",
    tenantSlug: "admin",
    tags: ["Friendly"],
    description: "Bulldog is known for its friendly temperament.",
    price: 1300,
    featured: false,
    sex: "male",
    color: "cream",
    weight: 8.8,
    dateOfBirth: "2023-10-01",
    ageInWeeks: 14,
    microchipped: true,
    vaccinated: true,
    pedigree: false,
    image:
      "https://m.media-amazon.com/images/I/71zYX0AeEdL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "Michael Q",
    slug: "michael-q",
    breedSlug: "dalmatian",
    tenantSlug: "premium-dog-breeders",
    tags: ["Friendly"],
    description: "Dalmatian is known for its friendly temperament.",
    price: 1300,
    featured: false,
    sex: "female",
    color: "golden",
    weight: 19.3,
    dateOfBirth: "2023-10-01",
    ageInWeeks: 10,
    microchipped: true,
    vaccinated: true,
    pedigree: true,
    image:
      "https://assets.wfcdn.com/im/51265209/compr-r85/3125/31254990/Dalmatian+Puppy+Statue.jpg",
  },
];
