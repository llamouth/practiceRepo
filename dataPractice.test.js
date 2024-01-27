const users = require("./10.5users");
const dataPractice = require("./dataPractice");

describe("whoIsTheOldest", () => {
  test('properly returns oldest user', () => {
      const expected = "Markedia hinds";
      expect(dataPractice.whoIsTheOldest(users)).toEqual(expected);
  });
});

describe("whoWearsGlasses", () => {
  test('properly returns users who wear glasses', () => {
    const expected = [
      'nadia matos', 'alexandra perez',
      'Justin Overton', 'markedia hinds',
      'Tasmyn Craig', 'rizel enad',
      'Nicole Marin', 'Moinul Khan',
      "Brendan O'Brien", 'Manoel Teixeira',
      'E-Vadnie Lewis', 'David Cruz',
      'Chris Sanchez', 'Darrion Crowder'
    ];
      expect(dataPractice.whoWearsGlasses(users)).toEqual(expected);
  });
});

describe("findTheUserWhoIsTheTallest", () => {
  test('properly returns the tallest user', () => {
      const expected = "Manoel Teixeira";
      expect(dataPractice.findTheUserWhoIsTheTallest(users)).toEqual(expected);
  });
});

describe("findTheUserWhoIsTheShortest", () => {
  test('properly returns the shortest user', () => {
      const expected = "Warren anderson";
      expect(dataPractice.findTheUserWhoIsTheShortest(users)).toEqual(expected);
  });
});

describe("gettingUsersOver30", () => {
  test('properly returns users over 30', () => {
    const expected = [
      'nadia matos', 'Justin Overton',
      'markedia hinds', 'Vianel De La Cruz',
      'Tasmyn Craig', 'Ayotunde Akinkunmi',
      'rizel enad', "Brendan O'Brien",
      'Manoel Teixeira', 'Jean Moncayo',
      'E-Vadnie Lewis', 'David Cruz',
      'Chris Sanchez', 'Camilo Paez',
      'Aaron Constant'
    ];
      expect(dataPractice.gettingUsersOver30(users)).toEqual(expected);
  });
});

describe("howManyLastNameBginsWithObject", () => {
  test('properly counts users by last name initial', () => {
      const expected = {
          N: 1, M: 3, P: 2, O: 2,
          H: 1, L: 3, D: 1, C: 4,
          A: 3, E: 1, K: 1, T: 1,
          S: 2, B: 1
      };
      expect(dataPractice.howManyLastNameBginsWithObject(users)).toEqual(expected);
  });
});

describe("getUserFullName", () => {
  test('returns an array of capitalized full names', () => {
      const expected = [
          'Aaron Constant', 'Alexandra Perez',
          'Ayotunde Akinkunmi', "Brendan O'Brien",
          'Camilo Paez', 'Chris Sanchez',
          'Darrion Crowder', 'David Cruz',
          'Diamond Brown', 'E-Vadnie Lewis',
          'Jacob Lebowitz', 'Jean Moncayo',
          'Josh Nelson', 'Justin Overton',
          'Kenny Second', 'Larry Lamouth',
          'Manoel Teixeira', 'Markedia Hinds',
          'Moinul Khan', 'Nadia Matos',
          'Nicole Marin', 'Rizel Enad',
          'Sadya Andrickson', 'Tasmyn Craig',
          'Vianel De La Cruz', 'Warren Anderson'
      ];
      expect(dataPractice.getUserFullName(users)).toEqual(expected);
    });
  });
describe("getUserFullName", () => {
  test('returns the target if found in the user data', () => {
    expect(dataPractice.getUserFullName(users, "Larry Lamouth")).toEqual("Larry Lamouth");
    expect(dataPractice.getUserFullName(users, "Josh Nelson")).toEqual("Josh Nelson");
  });
})  
describe("getUserFullName", () => {
  test('returns "User not found" if the target is not found', () => {
  expect(dataPractice.getUserFullName(users, "Tony ezekiel")).toEqual("User not found");
});
})
