import {IFlatWithScore, SortBy} from "../types.ts";
import {SORT_FLATS_ITEMS} from "../constants/general.ts";

export const getSortedFlats = (flats: IFlatWithScore[], sortBy: SortBy) => {
    const item = SORT_FLATS_ITEMS.find(item => item.sortBy === sortBy)
    if (item) {
        return item.sortFn(flats)
    }
    return null
}