import React from "react";

// --- All Categories ---
export const ALL_CATEGORIES = [
  {
    category: "Meg Pub Core",
    words: ["Neck Oil", "Last Call", "Night Bus", "Chicken Goujons"],
    difficulty: 1,
    imageSrc: "https://i.postimg.cc/gj0s7kNx/Screenshot-2025-07-06-at-11-37-27.png",
  },
  {
    category: "Meg's Dislikes",
    words: ["Blue Cheese", "Mornings", "Technology", "Slow Walkers"],
    difficulty: 2,
    imageSrc: "https://i.postimg.cc/gj0s7kNx/Screenshot-2025-07-06-at-11-37-27.png",
  },
  {
    category: "Canoe Camp Core",
    words: ["50 Days", "Ghouling", "Loon", "Trench Foot"],
    difficulty: 3,
    imageSrc: "https://i.postimg.cc/gj0s7kNx/Screenshot-2025-07-06-at-11-37-27.png",
  },
  {
    category: "Words that Contain Meg",
    words: ["Emergency", "Homegirl", "Game", "Segment"],
    difficulty: 4,
    imageSrc: "https://i.postimg.cc/gj0s7kNx/Screenshot-2025-07-06-at-11-37-27.png",
  },
  {
    category: "Roads Meg has Lived On",
    words: ["Arica", "St Urbains", "Tanners Hill", "Sherbrooke"],
    difficulty: 1,
    imageSrc: "https://i.postimg.cc/gj0s7kNx/Screenshot-2025-07-06-at-11-37-27.png",
  },
  {
    category: "Things Typically Found in Megs Bag",
    words: ["Portable Charger", "Sweater", "Water Bottle", "Frisbee"],
    difficulty: 2,
    imageSrc: "https://i.postimg.cc/gj0s7kNx/Screenshot-2025-07-06-at-11-37-27.png",
  },
  {
    category: "Meg's Halloween Costumes",
    words: ["Avril Levine", "Lion", "Bunny", "Hells Angel"],
    difficulty: 3,
    imageSrc: "https://i.postimg.cc/gj0s7kNx/Screenshot-2025-07-06-at-11-37-27.png",
  },
  {
    category: "Words Used in Meg's Spotify Day List",
    words: ["Doof Doof Rave", "Iconic", "Brat", "Granola"],
    difficulty: 4,
    imageSrc: "https://i.postimg.cc/gj0s7kNx/Screenshot-2025-07-06-at-11-37-27.png",
  },
  {
    category: "Meg's Favourite Snacks",
    words: ["Chocolate", "Cookie Dough Ice Cream", "Vege Plate", "Beef Jerky"],
    difficulty: 1,
    imageSrc: "https://i.postimg.cc/gj0s7kNx/Screenshot-2025-07-06-at-11-37-27.png",
  },
  {
    category: "Famous Megs",
    words: ["Fox", "Atron", "Thee Stalion", "Markle"],
    difficulty: 2,
    imageSrc: "https://i.postimg.cc/gj0s7kNx/Screenshot-2025-07-06-at-11-37-27.png",
  },
  {
    category: "Things Meg Might Text You",
    words: ["Hi Angel!", "ILY!", "🤠❤️", "!!!!!!!!"],
    difficulty: 3,
    imageSrc: "https://i.postimg.cc/gj0s7kNx/Screenshot-2025-07-06-at-11-37-27.png",
  },
  {
    category: "Little Miss Characters Meg Identifies With",
    words: ["Sunshine", "Princess", "Helpful", "Brainy"],
    difficulty: 4,
    imageSrc: "https://i.ibb.co/pP1xn0Z/Connections.png",
  },
  {
    category: "Ingredients in Meg's Pesto Pasta",
    words: ["Nutritional Yeast", "Parmesan", "Sunflower Seed Mix", "Chilli Flakes"],
    difficulty: 1,
    imageSrc: "https://i.postimg.cc/gj0s7kNx/Screenshot-2025-07-06-at-11-37-27.png",
  },
  {
    category: "Hammersmith FC Accolades",
    words: ["Players Player", "Captain", "Clubwoman", "Joker"],
    difficulty: 2,
    imageSrc: "https://i.postimg.cc/gj0s7kNx/Screenshot-2025-07-06-at-11-37-27.png",
  },
  {
    category: "Meg's Love Languages",
    words: ["Memes", "Unexpected Hugs", "Food", "Quality Time"],
    difficulty: 3,
    imageSrc: "https://i.postimg.cc/gj0s7kNx/Screenshot-2025-07-06-at-11-37-27.png",
  },
  {
    category: "Things Meg is 'Keen' On",
    words: ["Sports", "Cooking", "Pub", "Running"],
    difficulty: 4,
    imageSrc: "https://i.ibb.co/pP1xn0Z/Connections.png",
  },
];

// --- Category Sets (always grouped together) ---
export const CATEGORY_SETS = [
  [
    ALL_CATEGORIES.find(cat => cat.category === "Meg Pub Core"),
    ALL_CATEGORIES.find(cat => cat.category === "Meg's Dislikes"),
    ALL_CATEGORIES.find(cat => cat.category === "Canoe Camp Core"),
    ALL_CATEGORIES.find(cat => cat.category === "Words that Contain Meg"),
  ],
  [
    ALL_CATEGORIES.find(cat => cat.category === "Roads Meg has Lived On"),
    ALL_CATEGORIES.find(cat => cat.category === "Things Typically Found in Megs Bag"),
    ALL_CATEGORIES.find(cat => cat.category === "Meg's Halloween Costumes"),
    ALL_CATEGORIES.find(cat => cat.category === "Words Used in Meg's Spotify Day List"),
  ],
  [
    ALL_CATEGORIES.find(cat => cat.category === "Meg's Favourite Snacks"),
    ALL_CATEGORIES.find(cat => cat.category === "Famous Megs"),
    ALL_CATEGORIES.find(cat => cat.category === "Things Meg Might Text You"),
    ALL_CATEGORIES.find(cat => cat.category === "Little Miss Characters Meg Identifies With"),
  ],
  [
    ALL_CATEGORIES.find(cat => cat.category === "Ingredients in Meg's Pesto Pasta"),
    ALL_CATEGORIES.find(cat => cat.category === "Hammersmith FC Accolades"),
    ALL_CATEGORIES.find(cat => cat.category === "Meg's Love Languages"),
    ALL_CATEGORIES.find(cat => cat.category === "Things Meg is 'Keen' On"),
  ],
  // Add more sets as needed
];

// --- Game Logic ---

export function getNextGame() {
  const currentIndex = parseInt(localStorage.getItem("currentSetIndex") || "0", 10);
  if (currentIndex >= CATEGORY_SETS.length) {
    return null;
  }
  const pickedSet = CATEGORY_SETS[currentIndex];
  localStorage.setItem("currentSetIndex", (currentIndex + 1).toString());
  return pickedSet;
}

export function resetUsedCategories() {
  localStorage.setItem("currentSetIndex", "0");
}

// --- PuzzleDataContext ---

export const PuzzleDataContext = React.createContext();

export function PuzzleDataProvider({ children }) {
  const [gameData, setGameData] = React.useState(() => getNextGame());

  return (
    <PuzzleDataContext.Provider value={{ gameData, setGameData }}>
      {children}
    </PuzzleDataContext.Provider>
  );
}

