import {useEffect, useState} from "react";
import {IFlat, SortBy} from "../../types.ts";
import {getAllFlatsAPI} from "../../apiServices/getAllFlatsAPI.tsx";
import {EditFlatModal} from "../modals/EditFlatModal.tsx";
import {useLocation} from "react-router-dom";
import {SortedFlats} from "../flatSorting/SortedFlats.tsx";
import {SortComponent} from "../flatSorting/SortComponent.tsx";

export const HomePage = () => {
    const [flats, setFlats] = useState<IFlat[]>([])
    const [reload, setReload] = useState<boolean>(false)
    const [isFormPrepared, setIsFormPrepared] = useState<boolean>(false)
    const [currentSort, setCurrentSort] = useState<SortBy>(SortBy.BestSuited)

    useEffect(() => {
        getAllFlatsAPI().then(flats => setFlats(flats))
    }, [reload, isFormPrepared])

    if (useLocation().pathname === '/history') {
        return (
            <>
                <div className="mx-12">
                    <SortComponent handleSort={(sort: SortBy) => setCurrentSort(sort)}/>
                    <p className='my-12 text-2xl font-bold text-center'>History:</p>
                    <SortedFlats flats={flats} sortBy={currentSort} reload={() => setReload(!reload)} isHistory={true}/>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="mx-12">
                    <SortComponent handleSort={(sort: SortBy) => setCurrentSort(sort)}/>
                    <p className='my-12 text-2xl font-bold text-center'>Favourites:</p>
                    <SortedFlats flats={flats} sortBy={currentSort} reload={() => setReload(!reload)}
                                 isFavourites={true}/>
                    <p className='my-12 text-2xl font-bold text-center'>Others:</p>
                    <SortedFlats flats={flats} sortBy={currentSort} reload={() => setReload(!reload)}/>
                    <div className="fixed bottom-6 right-6">
                        <div title='Add new flat' onClick={() => setIsFormPrepared(true)}>
                            <EditFlatModal status='new' onOpenChange={() => setIsFormPrepared(false)}
                                           isFormPrepared={isFormPrepared}/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}