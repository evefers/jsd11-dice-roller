const thaiWords = [
  "ก",
  "ม้า",
  "การบ้าน",
  "ม",
  "ลิงงงงง",
  "ลิ",
  "ลา",
  "ลิง",
  "ลม",
  "กก",
  "มาก",
  "มากกกกกกก",
  "ก๊า",
  "กา",
  "ก๋า",
  "มา",
  "ก่า",
];

const words = ["aaa", "AAA", "ab", "a", "A", "a1", "a2", "a100"];

// Default sort
console.log("default sort: ", thaiWords.sort()); 
// ["A", "AAA", "a", "a1", "a100", "a2", "aaa", "ab"];

// Locale compare
const newSortedWords = thaiWords.sort((a,b) => a.localeCompare(b));
console.log("new sorted array: ", newSortedWords);
