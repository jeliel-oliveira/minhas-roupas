import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollections = createSelector([selectShop], shop=>shop.collections)

export const selectCollection = collectionUrlParam =>  createSelector(
    [selectShopCollections],
    (collections) => {
        return collections[collectionUrlParam]
    }
)
export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    (collections) => {
        return Object.keys(collections).map((key)=> collections[key])
    }
);