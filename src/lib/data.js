import React from "react";

// --- All Categories ---
export const ALL_CATEGORIES = [
  {
    category: "Meg Pub Core",
    words: ["Neck Oil", "Last Call", "Night Bus", "Chicken Goujons"],
    difficulty: 1,
    imageSrc: "https://i.postimg.cc/WzB8vgBC/Screenshot-2025-08-09-at-13-56-51.png",
  },
  {
    category: "Meg's Dislikes",
    words: ["Blue Cheese", "Early Mornings", "Dark Chocolate", "Slow Walkers"],
    difficulty: 3,
    imageSrc: "https://i.postimg.cc/yNzTBvFB/Screenshot-2025-08-07-at-21-14-45.png",
  },
  {
    category: "Canoe Camp Core",
    words: ["50 Days", "Ghouling", "Loon", "Trench Foot"],
    difficulty: 2,
    imageSrc: "https://i.postimg.cc/DmkT59bR/Screenshot-2025-08-07-at-21-02-48.png",
  },
  {
    category: "Words that Contain m-e-g",
    words: ["Emergency", "Manage", "Game", "Image"],
    difficulty: 4,
    imageSrc: "https://i.postimg.cc/zvT9gzFL/Screenshot-2025-08-09-at-14-38-38.png",
  },
  {
    category: "When people might tell Meg to slow down",
    words: ["Running", "Eating", "Walking", "Public Speaking"],
    difficulty: 1,
    imageSrc: "https://i.postimg.cc/L5y8G3GB/Screenshot-2025-08-09-at-14-32-42.png",
  },
  {
    category: "Things Typically Found in Megs Bag",
    words: ["Portable Charger", "Sweater", "Water Bottle", "Frisbee"],
    difficulty: 2,
    imageSrc: "https://i.postimg.cc/cLxv96jc/Screenshot-2025-08-09-at-14-17-13.png",
  },
  {
    category: "Meg's Halloween Costumes",
    words: ["Avril Levine", "Lion", "Bunny", "KISS"],
    difficulty: 3,
    imageSrc: "https://i.postimg.cc/CLqSV7SP/Screenshot-2025-07-31-at-22-01-49.png",
  },
  {
    category: "Words Used in Meg's Spotify Day List",
    words: ["Doof Doof Rave", "Iconic", "Brat", "Granola"],
    difficulty: 4,
    imageSrc: "https://i.postimg.cc/mZtmPggh/Screenshot-2025-08-09-at-13-46-11.png",
  },
  {
    category: "Meg's Favourite Snacks",
    words: ["Chocolate", "Cookie Dough Ice Cream", "Vege Plate", "Beef Jerky"],
    difficulty: 1,
    imageSrc: "https://i.postimg.cc/BQXtP2sH/Screenshot-2025-07-31-at-21-06-29.png",
  },
  {
    category: "Famous Megs",
    words: ["Fox", "Atron", "Thee Stalion", "Markle"],
    difficulty: 2,
    imageSrc: "https://i.postimg.cc/Jnp4Gz2p/Screenshot-2025-07-31-at-21-08-37.png",
  },
  {
    category: "Things Meg Might Text You",
    words: ["Hi Angel!", "ILY!", "🤠❤️", "!!!!!!!!"],
    difficulty: 3,
    imageSrc: "https://i.postimg.cc/zvYCV8fP/Screenshot-2025-08-09-at-14-28-33.png",
  },
  {
    category: "Little Miss Characters Meg Identifies With",
    words: ["Sunshine", "Princess", "Helpful", "Brainy"],
    difficulty: 4,
    imageSrc: "https://i.postimg.cc/02cnYYR0/Screenshot-2025-07-31-at-21-00-51.png",
  },
  {
    category: "Ingredients in Meg's Pesto Pasta",
    words: ["Nutritional Yeast", "Parmesan", "Sunflower Seed Mix", "Chilli Flakes"],
    difficulty: 1,
    imageSrc: "https://i.postimg.cc/xCpn9FX7/Screenshot-2025-07-31-at-21-48-53.png",
  },
  {
    category: "Hammersmith FC Accolades",
    words: ["Players Player", "Captain", "Clubwoman", "Joker"],
    difficulty: 2,
    imageSrc: "https://i.postimg.cc/kGych8V9/Screenshot-2025-08-07-at-20-52-41.png",
  },
  {
    category: "Meg's Love Languages",
    words: ["Memes", "Unexpected Hugs", "Sharing Food", "Quality Time"],
    difficulty: 3,
    imageSrc: "https://i.postimg.cc/hjT4Pq6j/Screenshot-2025-08-09-at-14-19-12.png",
  },
  {
    category: "Types of Gravy",
    words: ["Young", "Instant", "Baby", "Mushroom"],
    difficulty: 4,
    imageSrc: "https://i.postimg.cc/PqhtyDG6/Screenshot-2025-07-31-at-21-34-10.png",
  },
  {
    category: "Things The Scare Meg",
    words: ["Technology", "Driving", "Snakes", "Evil Competance"],
    difficulty: 1,
    imageSrc: "https://i.postimg.cc/BQnS70kf/Screenshot-2025-08-07-at-21-29-47.png",
  },
  {
    category: "Things Meg's Very Knowledgeable on",
    words: ["Harry Potter", "Train Timetables", "Model UN", "Heat Pumps"],
    difficulty: 2,
    imageSrc: "https://i.postimg.cc/j2GMfKJn/Screenshot-2025-08-07-at-21-37-12.png",
  },
  {
    category: "Homophones for Megs Friends",
    words: ["Leo", "New", "Gnat", "Whinny"],
    difficulty: 3,
    imageSrc: "https://i.postimg.cc/HLpgXC5R/Screenshot-2025-07-31-at-22-18-10.png",
  },
  {
    category: "MEGa __",
    words: ["Byte", "Watt", "Phone", "Star"],
    difficulty: 4,
    imageSrc: "https://i.postimg.cc/1X301M7v/Screenshot-2025-08-09-at-14-05-34.png",
  }
]; // <-- This closes the ALL_CATEGORIES array!

// --- Category Sets (always grouped together) ---
export const CATEGORY_SETS = [
  [
    ALL_CATEGORIES.find(cat => cat.category === "Meg's Favourite Snacks"),
    ALL_CATEGORIES.find(cat => cat.category === "Famous Megs"),
    ALL_CATEGORIES.find(cat => cat.category === "Things Meg Might Text You"),
    ALL_CATEGORIES.find(cat => cat.category === "Little Miss Characters Meg Identifies With"),
  ],
  [
    ALL_CATEGORIES.find(cat => cat.category === "When people might tell Meg to slow down"),
    ALL_CATEGORIES.find(cat => cat.category === "Meg's Halloween Costumes"),
    ALL_CATEGORIES.find(cat => cat.category === "Canoe Camp Core"),
    ALL_CATEGORIES.find(cat => cat.category === "Words that Contain m-e-g"),
  ],
  [
    ALL_CATEGORIES.find(cat => cat.category === "Ingredients in Meg's Pesto Pasta"),
    ALL_CATEGORIES.find(cat => cat.category === "Hammersmith FC Accolades"),
    ALL_CATEGORIES.find(cat => cat.category === "Meg's Love Languages"),
    ALL_CATEGORIES.find(cat => cat.category === "Types of Gravy"),
  ],
  [
    ALL_CATEGORIES.find(cat => cat.category === "Meg Pub Core"),
    ALL_CATEGORIES.find(cat => cat.category === "Things Typically Found in Megs Bag"),
    ALL_CATEGORIES.find(cat => cat.category === "Meg's Dislikes"),
    ALL_CATEGORIES.find(cat => cat.category === "Words Used in Meg's Spotify Day List"),
  ],
  [
    ALL_CATEGORIES.find(cat => cat.category === "Things The Scare Meg"),
    ALL_CATEGORIES.find(cat => cat.category === "Things Meg's Very Knowledgeable on"),
    ALL_CATEGORIES.find(cat => cat.category === "Homophones for Megs Friends"),
    ALL_CATEGORIES.find(cat => cat.category === "MEGa __"),
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

export function getCurrentGame() {
  const currentIndex = parseInt(localStorage.getItem("currentSetIndex") || "0", 10);
  if (currentIndex >= CATEGORY_SETS.length) {
    return null;
  }
  return CATEGORY_SETS[currentIndex];
}

export function resetUsedCategories() {
  localStorage.setItem("currentSetIndex", "0");
}

// --- PuzzleDataContext ---

export const PuzzleDataContext = React.createContext();

export function PuzzleDataProvider({ children }) {
  const [gameData, setGameData] = React.useState(() => getCurrentGame());

  const loadNextGame = () => {
    const currentIndex = parseInt(localStorage.getItem("currentSetIndex") || "0", 10);
    const nextIndex = currentIndex + 1;
    if (nextIndex >= CATEGORY_SETS.length) {
      localStorage.setItem("currentSetIndex", CATEGORY_SETS.length);
      setGameData(null);
    } else {
      localStorage.setItem("currentSetIndex", nextIndex.toString());
      setGameData(CATEGORY_SETS[nextIndex]);
    }
  };

  return (
    <PuzzleDataContext.Provider value={{ gameData, setGameData, loadNextGame }}>
      {children}
      <img
        src="https://i.postimg.cc/02nDpNdY/Screenshot-2025-07-28-at-15-12-28.png"
        alt="Bottom Center Icon"
        className="fixed bottom-20 left-1/2 transform -translate-x-1/2 w-7 h-7 sm:w-9 sm:h-9 z-50 pointer-events-none"
      />
    </PuzzleDataContext.Provider>
  );
}

