// An Implementation of the Durstnfeld Shuffle algorithm

type Shuffle<T> = {
  data: T[];
};

export function shuffleArray<T>(array: Shuffle<T>): T[] {
  const items = array.data;
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
}
