import {
  addDays,
  differenceInDays,
  formatISO,
  parseISO,
  startOfDay,
  startOfToday,
  startOfYesterday,
} from "date-fns";

import queryString from "query-string";
import { CATEGORY_SETS } from "../lib/data"; // Use ordered sets

export const getToday = () => startOfToday();
export const getYesterday = () => startOfYesterday();

// October 2023 Game Epoch
// https://stackoverflow.com/questions/2552483/why-does-the-month-argument-range-from-0-to-11-in-javascripts-date-constructor
export const firstGameDate = new Date(2023, 9, 23);
export const periodInDays = 7;

export const getLastGameDate = (today) => {
  const t = startOfDay(today);
  let daysSinceLastGame = differenceInDays(t, firstGameDate) % periodInDays;
  return addDays(t, -daysSinceLastGame);
};

export const getNextGameDate = (today) => {
  return addDays(getLastGameDate(today), periodInDays);
};

export const isValidGameDate = (date) => {
  if (date < firstGameDate || date > getToday()) {
    return false;
  }

  return differenceInDays(firstGameDate, date) % periodInDays === 0;
};

export const getIndex = (gameDate) => {
  let start = firstGameDate;
  let index = -1;
  do {
    index++;
    start = addDays(start, periodInDays);
  } while (start <= gameDate);
  return index;
};

export const getPuzzleOfDay = (index, gameDate) => {
  const birthdayISO = "2025-07-06";
  const dateString = formatISO(gameDate, { representation: "date" });
  if (dateString === birthdayISO) {
    // Find the puzzle array where the first category is "Birthday"
    return CATEGORY_SETS.find(
      (puzzle) => puzzle[0]?.category === "Meg Pub Core"
    );
  }
  // Default logic: play sets in order
  if (Array.isArray(CATEGORY_SETS) && CATEGORY_SETS.length > 0) {
    if (index >= CATEGORY_SETS.length) {
      return null; // No more puzzles, show "come back next year"
    }
    return CATEGORY_SETS[index];
  }
  return null;
};

export const getSolution = (gameDate) => {
  const nextGameDate = getNextGameDate(gameDate);
  const index = getIndex(gameDate);
  const puzzleOfTheDay = getPuzzleOfDay(index, gameDate);
  return {
    puzzleAnswers: puzzleOfTheDay,
    puzzleGameDate: gameDate,
    puzzleIndex: index,
    dateOfNextPuzzle: nextGameDate.valueOf(),
  };
};

export const getGameDate = () => {
  return new Date("2025-07-06"); // Always use this date
};

export const setGameDate = (d) => {
  try {
    if (d < getToday()) {
      window.location.href = "/?d=" + formatISO(d, { representation: "date" });
      return;
    }
  } catch (e) {
    console.log(e);
  }
  window.location.href = "/";
};

export const getIsLatestGame = () => {
  const parsed = queryString.parse(window.location.search);
  return parsed === null || !("d" in parsed);
};

export const { puzzleAnswers, puzzleGameDate, puzzleIndex, dateOfNextPuzzle } =
  getSolution(getGameDate());
