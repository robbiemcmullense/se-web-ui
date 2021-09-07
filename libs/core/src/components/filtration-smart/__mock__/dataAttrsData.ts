import { FiltrationSmartDataAttrsData } from '../types';

export const dataAttrsData: FiltrationSmartDataAttrsData = {
  section: {
    // root section (facet)
    'Categorie': {
      daFilterName: 'root section name',
      daFilterCategory: 'root section id',
      daFilterSubCategory: '',
    },
    // nested (tabular) section (ignored)
    'Char - 11732x5': {
      daFilterName: 'nested section name',
      daFilterCategory: 'root section id',
      daFilterSubCategory: 'nested section id',
    }
  },
  filter: {
    // root section (facet) refinement as a tab
    '1954113853': {
      daFilterName: 'root refinement as a tab name',
      daFilterCategory: 'root section (facet) id',
      daFilterSubCategory: '',
      autotestsId: 'whatever id'
    },
    // root section (facet) refinement as a checkbox
    '4281465360+1759420142': {
      daFilterName: 'root refinement as checkbox name',
      daFilterCategory: 'root section (facet) id',
      daFilterSubCategory: '',
      autotestsId: 'whatever id'
    },
    // nested section refinement
    '4281465360+2143705393': {
      daFilterName: 'nested refinement name',
      daFilterCategory: 'nested refinement root section (facet) id',
      daFilterSubCategory: 'nested refinement section id',
      autotestsId: 'whatever id 2'
    },
  },
};
