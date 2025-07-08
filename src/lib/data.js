import { getRandomGame } from "../lib/data";

const ALL_CATEGORIES = [
  {
    category: "Meg Pub Core",
    words: ["Neck Oil", "Last Call", "Night Bus", "Portable Charger"],
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
    words: ["Doof Doof Rave", "Princess", "Brat", "Granola"],
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
    category: "How Meg Might Text You",
    words: ["Hi Angel!", "ILY!", "🤠❤️", "7 days later..."],
    difficulty: 3,
    imageSrc: "https://i.postimg.cc/gj0s7kNx/Screenshot-2025-07-06-at-11-37-27.png",
  },
  {
    category: "TBC",
    words: ["TBC", "TBC", "TBC", "TBC"],
    difficulty: 4,
    imageSrc: "https://i.ibb.co/pP1xn0Z/Connections.png",
  },
 
];

// Utility to get a random item from an array
function getRandomItem(arr) {
  if (!arr.length) throw new Error("No categories for this difficulty");
  return arr[Math.floor(Math.random() * arr.length)];
}

// Export a function that returns a random game
export function getRandomGame() {
  const byDifficulty = [1, 2, 3, 4].map((difficulty) =>
    ALL_CATEGORIES.filter((cat) => cat.difficulty === difficulty)
  );
  console.log(byDifficulty); // See if any are empty
  return byDifficulty.map((group) => getRandomItem(group));
}

