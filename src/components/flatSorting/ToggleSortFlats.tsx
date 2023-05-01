import * as ToggleGroup from '@radix-ui/react-toggle-group';
import {SortBy} from "../../types.ts";
import {SORT_FLATS_ITEMS} from "../../constants/general.ts";

interface IProps {
    setCurrentSort: (sort: SortBy) => void
}


const toggleGroupItemClasses =
    'w-fit px-4 py-2 text-md bg-black bg-opacity-0 data-[state=on]:bg-opacity-20 data-[state=on]:pointer-events-none transition-all duration-500 rounded-md hover:bg-opacity-10';

export const ToggleSortFlats = ({setCurrentSort}: IProps) => (
    <ToggleGroup.Root
        className="inline-flex bg-black bg-opacity-5 rounded-md shadow-blackA7 space-x-px"
        type="single"
        defaultValue={SortBy.BestSuited}
    >
        {
            SORT_FLATS_ITEMS.map(item => (
                <ToggleGroup.Item className={toggleGroupItemClasses} value={item.sortBy}
                                  onClick={() => setCurrentSort(item.sortBy)} key={item.id}>
                    {item.name}
                </ToggleGroup.Item>
            ))
        }
    </ToggleGroup.Root>
);