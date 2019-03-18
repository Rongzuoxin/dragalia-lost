const values = {
  altar: {
    "0": { HP: 0, STR: 0 },
    "1": { HP: 0.5, STR: 0.5 },
    "2": { HP: 1, STR: 0.5 },
    "3": { HP: 1, STR: 1 },
    "4": { HP: 1.5, STR: 1 },
    "5": { HP: 1.5, STR: 1.5 },
    "6": { HP: 2, STR: 1.5 },
    "7": { HP: 2, STR: 2 },
    "8": { HP: 2.5, STR: 2 },
    "9": { HP: 2.5, STR: 2.5 },
    "10": { HP: 3, STR: 2.5 },
    "11": { HP: 3, STR: 3 },
    "12": { HP: 3.5, STR: 3 },
    "13": { HP: 3.5, STR: 3.5 },
    "14": { HP: 4, STR: 3.5 },
    "15": { HP: 4, STR: 4 },
    "16": { HP: 4.5, STR: 4 },
    "17": { HP: 4.5, STR: 4.5 },
    "18": { HP: 5, STR: 4.5 },
    "19": { HP: 5, STR: 5 },
    "20": { HP: 5.5, STR: 5 },
    "21": { HP: 5.5, STR: 5.5 },
    "22": { HP: 6, STR: 5.5 },
    "23": { HP: 6, STR: 6 },
    "24": { HP: 6.5, STR: 6 },
    "25": { HP: 6.5, STR: 6.5 },
    "26": { HP: 7, STR: 6.5 },
    "27": { HP: 7, STR: 7 },
    "28": { HP: 7.5, STR: 7 },
    "29": { HP: 7.5, STR: 7.5 },
    "30": { HP: 8, STR: 7.5 },
  },
  dojo: {
    "0": { HP: 0, STR: 0 },
    "1": { HP: 3, STR: 3 },
    "2": { HP: 3.5, STR: 3 },
    "3": { HP: 3.5, STR: 3.5 },
    "4": { HP: 4, STR: 3.5 },
    "5": { HP: 4, STR: 4 },
    "6": { HP: 4.5, STR: 4 },
    "7": { HP: 4.5, STR: 4.5 },
    "8": { HP: 5, STR: 4.5 },
    "9": { HP: 5, STR: 5 },
    "10": { HP: 5.5, STR: 5 },
    "11": { HP: 5.5, STR: 5.5 },
    "12": { HP: 6, STR: 5.5 },
    "13": { HP: 6, STR: 6 },
    "14": { HP: 6.5, STR: 6 },
    "15": { HP: 6.5, STR: 6.5 },
    "16": { HP: 8, STR: 8 },
    "17": { HP: 8, STR: 8.5 },
    "18": { HP: 8.5, STR: 8.5 },
    "19": { HP: 8.5, STR: 9 },
    "20": { HP: 9, STR: 9 },
    "21": { HP: 9, STR: 9.5 },
    "22": { HP: 9.5, STR: 9.5 },
    "23": { HP: 9.5, STR: 10 },
    "24": { HP: 10, STR: 10 },
    "25": { HP: 10, STR: 10.5 },
    "26": { HP: 10.5, STR: 10.5 },
    "27": { HP: 10.5, STR: 11 },
    "28": { HP: 11, STR: 11 },
    "29": { HP: 11, STR: 11.5 },
    "30": { HP: 11.5, STR: 11.5 },
  },
  fafnir: {
    "0": { HP: 0, STR: 0 },
    "1": { HP: 3, STR: 3 },
    "2": { HP: 3.5, STR: 3 },
    "3": { HP: 3.5, STR: 3.5 },
    "4": { HP: 4, STR: 3.5 },
    "5": { HP: 4, STR: 4 },
    "6": { HP: 4.5, STR: 4 },
    "7": { HP: 4.5, STR: 4.5 },
    "8": { HP: 5, STR: 4.5 },
    "9": { HP: 5, STR: 5 },
    "10": { HP: 5.5, STR: 5 },
    "11": { HP: 5.5, STR: 5.5 },
    "12": { HP: 6, STR: 5.5 },
    "13": { HP: 6, STR: 6 },
    "14": { HP: 6.5, STR: 6 },
    "15": { HP: 6.5, STR: 6.5 },
    "16": { HP: 8, STR: 8 },
    "17": { HP: 8, STR: 8.5 },
    "18": { HP: 8.5, STR: 8.5 },
    "19": { HP: 8.5, STR: 9 },
    "20": { HP: 9, STR: 9 },
    "21": { HP: 9, STR: 9.5 },
    "22": { HP: 9.5, STR: 9.5 },
    "23": { HP: 9.5, STR: 10 },
    "24": { HP: 10, STR: 10 },
    "25": { HP: 10, STR: 10.5 },
    "26": { HP: 10.5, STR: 10.5 },
    "27": { HP: 10.5, STR: 11 },
    "28": { HP: 11, STR: 11 },
    "29": { HP: 11, STR: 11.5 },
    "30": { HP: 11.5, STR: 11.5 },
  },
  event: {
    "0": { HP: 0, STR: 0 },
    "1": { HP: 1, STR: 0 },
    "2": { HP: 1.5, STR: 0 },
    "3": { HP: 1.5, STR: 0.5 },
    "4": { HP: 2, STR: 0.5 },
    "5": { HP: 2, STR: 1 },
    "6": { HP: 2.5, STR: 1 },
    "7": { HP: 2.5, STR: 1.5 },
    "8": { HP: 3, STR: 1.5 },
    "9": { HP: 3, STR: 2 },
    "10": { HP: 3.5, STR: 2 },
    "11": { HP: 3.5, STR: 2.5 },
    "12": { HP: 4, STR: 2.5 },
    "13": { HP: 4, STR: 3 },
    "14": { HP: 4.5, STR: 3 },
    "15": { HP: 4.5, STR: 3.5 },
    "16": { HP: 5, STR: 3.5 },
    "17": { HP: 5, STR: 4 },
    "18": { HP: 5.5, STR: 4 },
    "19": { HP: 5.5, STR: 4.5 },
    "20": { HP: 6, STR: 4.5 },
    "21": { HP: 6, STR: 5 },
    "22": { HP: 6.5, STR: 5 },
    "23": { HP: 6.5, STR: 5.5 },
    "24": { HP: 7, STR: 5.5 },
    "25": { HP: 7, STR: 6 },
    "26": { HP: 7.5, STR: 6 },
    "27": { HP: 7.5, STR: 6.5 },
    "28": { HP: 8, STR: 6.5 },
    "29": { HP: 8, STR: 7 },
    "30": { HP: 8.5, STR: 7 },
  },
  slime: {
    "0": { HP: 0, STR: 0 },
    "1": { HP: 0.5, STR: 0.5 },
    "2": { HP: 1, STR: 0.5 },
    "3": { HP: 1, STR: 1 },
    "4": { HP: 1.5, STR: 1 },
    "5": { HP: 1.5, STR: 1.5 },
    "6": { HP: 2, STR: 1.5 },
    "7": { HP: 2, STR: 2 },
    "8": { HP: 2.5, STR: 2 },
    "9": { HP: 2.5, STR: 2.5 },
    "10": { HP: 3, STR: 2.5 },
    "11": { HP: 3, STR: 3 },
    "12": { HP: 3.5, STR: 3 },
    "13": { HP: 3.5, STR: 3.5 },
    "14": { HP: 4, STR: 3.5 },
    "15": { HP: 4, STR: 4 },
  },
};

const element = {
  Flame: {
    key: "Flame",
    list: ["0", "1", "2"],
    "0": { id: "100401", type: "altar", level: 30, image: "TW02_100401" },
    "1": { id: "100401", type: "altar", level: 30, image: "TW02_100401" },
    "2": { id: "101901", type: "slime", level: 15, image: "TW02_101901" },
  },
  Water: {
    key: "Water",
    list: ["0", "1", "2"],
    "0": { id: "100402", type: "altar", level: 30, image: "TW02_100402" },
    "1": { id: "100402", type: "altar", level: 30, image: "TW02_100402" },
    "2": { id: "101601", type: "event", level: 30, image: "TW02_101601" },
  },
  Wind: {
    key: "Wind",
    list: ["0", "1", "2"],
    "0": { id: "100403", type: "altar", level: 30, image: "TW02_100403" },
    "1": { id: "100403", type: "altar", level: 30, image: "TW02_100403" },
    "2": { id: "101101", type: "event", level: 30, image: "TW02_101101" },
  },
  Light: {
    key: "Light",
    list: ["0", "1", "2", "3"],
    "0": { id: "100404", type: "altar", level: 30, image: "TW02_100404" },
    "1": { id: "100404", type: "altar", level: 30, image: "TW02_100404" },
    "2": { id: "100901", type: "event", level: 30, image: "TW02_100901" },
    "3": { id: "101501", type: "event", level: 30, image: "TW02_101501" },
  },
  Shadow: {
    key: "Shadow",
    list: ["0", "1", "2"],
    "0": { id: "100405", type: "altar", level: 30, image: "TW02_100405" },
    "1": { id: "100405", type: "altar", level: 30, image: "TW02_100405" },
    "2": { id: "101701", type: "event", level: 30, image: "TW02_101701" },
  },
};

const weapon = {
  Sword: {
    key: "Sword",
    list: ["0", "1"],
    "0": { id: "100501", type: "dojo", level: 30, image: "TW02_100501" },
    "1": { id: "100501", type: "dojo", level: 30, image: "TW02_100501" },
  },
  Blade: {
    key: "Blade",
    list: ["0", "1"],
    "0": { id: "100502", type: "dojo", level: 30, image: "TW02_100502" },
    "1": { id: "100502", type: "dojo", level: 30, image: "TW02_100502" },
  },
  Dagger: {
    key: "Dagger",
    list: ["0", "1"],
    "0": { id: "100503", type: "dojo", level: 30, image: "TW02_100503" },
    "1": { id: "100503", type: "dojo", level: 30, image: "TW02_100503" },
  },
  Axe: {
    key: "Axe",
    list: ["0", "1"],
    "0": { id: "100504", type: "dojo", level: 30, image: "TW02_100504" },
    "1": { id: "100504", type: "dojo", level: 30, image: "TW02_100504" },
  },
  Lance: {
    key: "Lance",
    list: ["0", "1"],
    "0": { id: "100505", type: "dojo", level: 30, image: "TW02_100505" },
    "1": { id: "100505", type: "dojo", level: 30, image: "TW02_100505" },
  },
  Bow: {
    key: "Bow",
    list: ["0", "1"],
    "0": { id: "100506", type: "dojo", level: 30, image: "TW02_100506" },
    "1": { id: "100506", type: "dojo", level: 30, image: "TW02_100506" },
  },
  Wand: {
    key: "Wand",
    list: ["0", "1"],
    "0": { id: "100507", type: "dojo", level: 30, image: "TW02_100507" },
    "1": { id: "100507", type: "dojo", level: 30, image: "TW02_100507" },
  },
  Staff: {
    key: "Staff",
    list: ["0", "1"],
    "0": { id: "100508", type: "dojo", level: 30, image: "TW02_100508" },
    "1": { id: "100508", type: "dojo", level: 30, image: "TW02_100508" },
  },
};

const dragon = {
  Flame: {
    key: "Flame",
    list: ["0"],
    "0": { id: "101001", type: "fafnir", level: 30, image: "TW02_101001" },
  },
  Water: null,
  Wind: {
    key: "Wind",
    list: ["0"],
    "0": { id: "101003", type: "fafnir", level: 30, image: "TW02_101003" },
  },
  Light: null,
  Shadow: null,
};

export {
  values,
  element,
  weapon,
  dragon,
};

export default {
  element,
  weapon,
  dragon,
};