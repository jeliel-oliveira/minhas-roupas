import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollections = createSelector([selectShop], shop=>shop.collections)


export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    (collections) => {
        if(collections) return Object.keys(collections).map((key)=> collections[key]);
        else return []
    }
);
export const selectCollection = collectionUrlParam =>  createSelector(
    [selectShopCollections],
    (collections) => {
        return collections ? collections[collectionUrlParam] : null
    }
);
