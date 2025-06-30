// src/store.js

import { atom } from "jotai";

const pictures = ["kabu", "kp", "kp", "kp", "kabu"];

// --- Atoms (State Global) ---
export const pageAtom = atom(0);
export const pressAtom = atom(false);

export const pages = [
  {
    front: "cover-front",
    back: pictures[0],
  },
];

for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: "cover-back",
});
