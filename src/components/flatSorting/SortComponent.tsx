import {ToggleSortFlats} from "./ToggleSortFlats.tsx";
import {SortBy} from "../../types.ts";

interface IProps {
    handleSort: (sort: SortBy) => void
}

export const SortComponent = ({handleSort}: IProps) => {
    return (
        <div className='flex items-center gap-4 justify-end'>
            <p className="text-center text-md">Sort by:</p>
            <div className="flex justify-center">
                <ToggleSortFlats setCurrentSort={handleSort}/>
            </div>
        </div>
    )
}