export const initialInput = (ls: string) => ls.split(":")[1].split(",");

export const intialInputArray = (ls: string) => initialInput(ls).map((arr) => arr.replace(/[\[,\]]/g, "").split(","));
