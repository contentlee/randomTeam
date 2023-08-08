export const initialInput = (ls: string) => ls.split(":")[1].split(",");

export const intialInputArray = (ls: string) =>
  ls
    .split(":")[1]
    .split("],[")
    // eslint-disable-next-line
    .map((arr) => [...arr.replace(/[\[\]]/g, "").split(",")]);

export const checkDuplication = (arr: string[]): [boolean, string[]] => {
  const tempSet = new Set([...arr]);
  return [tempSet.size === arr.length, [...tempSet]];
};
