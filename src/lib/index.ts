interface Team {
  [index: string | number]: string[];
}

export const divideMember = (members: string[], count: number, team: { [index: number | string]: string[] } = {}) => {
  const remainder = members.length % count;
  const personnel = Math.floor(members.length / count);

  let flag = 0;

  members.forEach((member) => {
    let random = Math.floor(Math.random() * count);
    if (!team[random]) {
      team[random] = [member];
    } else if (team[random].length < personnel) {
      team[random].push(member);
    } else {
      while (team[random].length >= personnel) {
        random = Math.floor(Math.random() * count);
        if (!team[random]) break;
        if (team[random].length <= personnel && flag !== remainder) break;
      }

      if (!team[random]) {
        team[random] = [member];
      } else {
        team[random].push(member);
        if (team[random].length > personnel) flag++;
      }
    }
  });

  const result = [];
  for (let key in team) {
    result.push(team[key]);
  }

  return result;
};
