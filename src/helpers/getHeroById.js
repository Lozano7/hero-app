import { heroes } from '../data/heroes';

const getHeroById = (heroId = '') => {
  return heroes.find((hero) => hero.id === heroId);
};

export default getHeroById;
