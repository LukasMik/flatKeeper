import {IFlatSort, IFlatWithScore, SortBy, SortDirection} from "../types.ts";

const sortByDirection = (flats: IFlatWithScore[], direction: SortDirection): IFlatWithScore[] => {
    if (direction === SortDirection.DESC) {
        return flats.reverse()
    }
    return flats
}
export const SORT_FLATS_ITEMS: IFlatSort[] = [
    {
        id: 1,
        sortBy: SortBy.CreatedAt,
        name: 'Last added',
        sortFn: (flatsWithScore, direction = SortDirection.DESC) => {
            const sorted = flatsWithScore
                .sort((a, b) => {
                    const dateA: Date = new Date(a.createdAt);
                    const dateB: Date = new Date(b.createdAt);
                    if (dateA.getDate() === dateB.getDate()) {
                        return dateA.getTime() - dateB.getTime();
                    } else {
                        return dateB.getDate() - dateA.getDate();
                    }
                })
            return sortByDirection(sorted, direction)
        }
    }, {
        id: 2,
        sortBy: SortBy.Price,
        name: 'Price',
        sortFn: (flatsWithScore, direction = SortDirection.DESC) => {
            const sorted = flatsWithScore
                .sort((a, b) => b.price - a.price)
            return sortByDirection(sorted, direction)
        }
    }, {
        id: 3,
        sortBy: SortBy.PrettyPoints,
        name: 'Prettiest',
        sortFn: (flatsWithScore, direction = SortDirection.ASC) => {
            const sorted = flatsWithScore
                .sort((a, b) => b.prettyScore - a.prettyScore)
            return sortByDirection(sorted, direction)
        }
    }, {
        id: 4,
        sortBy: SortBy.BestSuited,
        name: 'Best suited',
        sortFn: (flatsWithScore, direction = SortDirection.ASC) => {
            const sorted = flatsWithScore
                .sort((a, b) => b.bestSuitedScore - a.bestSuitedScore)
            return sortByDirection(sorted, direction)
        }
    },
]