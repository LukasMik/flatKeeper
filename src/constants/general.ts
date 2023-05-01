import {IFlatSort, IFlatWithScore, SortBy, SortDirection} from "../types.ts";

export const LOCALIPV4: string = '192.168.100.7'

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
        sortFn: (flatsWithScore, direction = SortDirection.ASC) => {
            const sorted = flatsWithScore
                .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
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