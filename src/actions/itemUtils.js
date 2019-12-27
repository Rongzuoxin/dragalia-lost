import content, { defaultEquipments, ITEM_KEYS } from 'data';
import { getField, getLimit, includes } from '../utils';

export const modifyNewItem = (itemKey, item) => {
  if (item == null) return null;
  const rarity = itemKey === 'adventurer' ? '5' : item.rarity;
  const level = getLimit(itemKey, rarity, 4);

  let updates = {
    level,
    augHp: '',
    augStr: '',
  };

  switch (itemKey) {
    case 'adventurer': {
      const { breakLimit } = item;
      updates = {
        ...updates,
        curRarity: rarity,
        level: breakLimit === 5 ? 100 : level,
        mana: breakLimit === 5 ? '70' : '50',
        ex: '4',
      };
      break;
    }
    case 'dragon': {
      updates.bond = '30';
      updates.unbind = '4';
      break;
    }
    default:
      updates.unbind = '4';
      break;
  }

  return { ...item, ...updates };
};

const equip = (itemKey, adventurer) => {
  if (adventurer == null) return null;
  let field = itemKey;
  const { weapon, element } = adventurer;

  let key1 = weapon;
  let key2 = element;

  if (itemKey === 'dragon') {
    key1 = 'dragon';
  } else if (itemKey === 'wyrmprint1' || itemKey === 'wyrmprint2') {
    key2 = itemKey;
    field = 'wyrmprint';
  }

  const id = defaultEquipments[key1][key2];

  let item = null;
  if (includes(content, field)) {
    item = content[field][id];
  }

  return modifyNewItem(itemKey, item);
};

export const buildItems = (items, adventurer) => {
  const { element } = adventurer;
  const { weapon, dragon } = items;
  const ret = { adventurer };

  if (
    !weapon ||
    weapon.element !== element ||
    weapon.weapon !== adventurer.weapon
  ) {
    ret.weapon = equip('weapon', adventurer);
  }

  // wyrmprint
  const wyrmprint1 = equip('wyrmprint1', adventurer);
  if (!items.wyrmprint1 || items.wyrmprint1.Id !== wyrmprint1.Id) {
    ret.wyrmprint1 = wyrmprint1;
  }

  const wyrmprint2 = equip('wyrmprint2', adventurer);
  if (!items.wyrmprint2 || items.wyrmprint2.Id !== wyrmprint2.Id) {
    ret.wyrmprint2 = wyrmprint2;
  }

  // dragon
  if (!dragon || dragon.element !== element) {
    ret.dragon = equip('dragon', adventurer);
  }

  return ret;
};

export const randomBuild = () => {
  const keys = Object.keys(content.adventurer);
  const index = Math.floor(keys.length * Math.random());
  return content.adventurer[keys[index]];
};

export const loadItems = build => {
  const ret = {};

  ITEM_KEYS.forEach(key => {
    const item = build[key];
    if (item) {
      const { Id } = item;
      const field = getField(key);
      const itemInfo = content[field][Id];
      if (itemInfo) {
        ret[key] = { ...itemInfo, ...item };
      }
    } else {
      ret[key] = null;
    }
  });

  return ret;
};
