export const divideMember = (members: string[], count: number, alc: string[][] = []) => {
  const list =
    alc.length !== 0
      ? alc.reduce((acc, cur) => {
          return [...acc, ...cur];
        }, [])
      : [];

  let results: string[][] =
    alc.length !== 0
      ? alc.map((values) => {
          return values.filter((value) => {
            return members.includes(value);
          });
        })
      : Array.from({ length: count });

  if (results.length < count) {
    const buffer: string[][] = Array.from({ length: count - results.length });
    results = [...results, ...buffer];
  }

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
