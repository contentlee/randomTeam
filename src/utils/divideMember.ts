const initialMemberList = (ls: string[][]) => ls.reduce((acc: string[], cur: string[]) => [...acc, ...cur], []);

const initialResultList = (ls: string[][], members: string[], count: number): string[][] => {
  if (ls.length === 0) return Array.from({ length: count });

  const list = ls.map((values) => values.filter((value) => members.includes(value)));

  if (list.length < count) {
    const buffer: string[][] = Array.from({ length: count - list.length });
    return [...list, ...buffer];
  }

  return list;
};

export const divideMember = (members: string[], count: number, alc: string[][] = []) => {
  const list = initialMemberList(alc);
  const results = initialResultList(alc, members, count);

  const remainder = members.length % count;
  const personnel = Math.floor(members.length / count);
  let flag = 0;

  members.forEach((member) => {
    if (!list.includes(member)) {
      let random = Math.floor(Math.random() * count);

      while (
        results[random] &&
        (results[random].length > personnel || (flag >= remainder && results[random].length === personnel))
      ) {
        random = Math.floor(Math.random() * count);
      }
      if (!results[random]) {
        results[random] = [member];
      } else if (results[random].length === personnel) {
        results[random].push(member);
        flag++;
      } else {
        results[random].push(member);
      }
    }
  });
  return results;
};
