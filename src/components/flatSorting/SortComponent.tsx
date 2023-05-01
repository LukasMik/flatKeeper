import {ToggleSortFlats} from "./ToggleSortFlats.tsx";
import {SortBy} from "../../types.ts";

interface IProps {
    handleSort: (sort: SortBy) => void
}

export const SortComponent = ({handleSort}: IProps) => {
    return (
        <div className='md:flex items-center gap-4 justify-end'>
            <p className="text-center text-md text-center md:text-left mb-4 md:mb-0">Sort by:</p>
            <div className="flex justify-center">
                <ToggleSortFlats setCurrentSort={handleSort}/>
            </div>
        </div>
    )
}