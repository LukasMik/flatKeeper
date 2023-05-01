import {FlatItem} from "../FlatItem.tsx";
import {toggleFlatData} from "../../helpers/toggleFlatData.ts";
import {IFlat, IFlatWithScore, Severity, SortBy} from "../../types.ts";
import {getSortedFlats} from "../../helpers/getSortedFlats.ts";

interface IProps {
    flats: IFlat[]
    sortBy: SortBy
    isHistory?: boolean
    isFavourites?: boolean
    reload: () => void
}

const filterFunction = (flat: IFlatWithScore, isHistory: boolean | undefined, isFavourites: boolean | undefined) => {
    return isHistory ? !flat.isVisible : flat.isVisible && isFavourites ? flat.isVisible && flat.isFavorite : flat.isVisible && !flat.isFavorite
}

export const SortedFlats = ({flats, sortBy, isHistory, isFavourites, reload}: IProps) => {

    const flatsWithScore: IFlatWithScore[] = flats.map(flat => {
        const scoreByRequiredFeature = flat.features.filter(f => f.severity === Severity.Required).length * 2
        const scoreByNiceToHaveFeature = flat.features.filter(f => f.severity === Severity.Required).length
        const scoreByDisadvantageFeature = flat.features.filter(f => f.severity === Severity.Disadvantage).length * -1
        const scoreByPrettyPoints = flat.prettyScore * 0.7
        const score = scoreByRequiredFeature + scoreByNiceToHaveFeature + scoreByPrettyPoints + scoreByDisadvantageFeature
        return {...flat, bestSuitedScore: score > 0 ? score : 0}
    })

    const sortedFlats = getSortedFlats(flatsWithScore, sortBy)?.filter(flat => filterFunction(flat, isHistory, isFavourites))

    return (
        <>
            <div className='flex items-cenetr justify-center flex-wrap gap-12'>
            {sortedFlats?.map(flat => (
                <FlatItem key={flat.id} flat={flat}
                          handleEdit={(status, flat) => toggleFlatData(status, flat, reload)}/>
            ))}
            </div>
        </>
    )
}