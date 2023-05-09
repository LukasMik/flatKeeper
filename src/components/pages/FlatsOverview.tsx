import {useEffect, useState} from "react";
import {IFlat, SortBy} from "../../types.ts";
import {getAllFlatsAPI} from "../../apiServices/getAllFlatsAPI.tsx";
import {EditFlatModal} from "../modals/EditFlatModal.tsx";
import {useLocation} from "react-router-dom";
import {SortedFlats} from "../flatSorting/SortedFlats.tsx";
import {SortComponent} from "../flatSorting/SortComponent.tsx";

export const FlatsOverview = () => {
    const [flats, setFlats] = useState<IFlat[]>([])
    const [reload, setReload] = useState<boolean>(false)
    const [isFormPrepared, setIsFormPrepared] = useState<boolean>(false)
    const [currentSort, setCurrentSort] = useState<SortBy>(SortBy.BestSuited)

    useEffect(() => {
        getAllFlatsAPI().then(flats => setFlats(flats))
    }, [reload, isFormPrepared])

    if (useLocation().pathname === '/flats-overview/history' && flats.length > 0) {
        return (
            <>
                <div className="main-container">
                    <SortComponent handleSort={(sort: SortBy) => setCurrentSort(sort)}/>
                    <p className='my-12 text-2xl font-bold text-center'>History:</p>
                    <SortedFlats flats={flats} sortBy={currentSort} reload={() => setReload(!reload)} isHistory={true}/>
                </div>
            </>
        )
    } else if (useLocation().pathname === '/flats-overview/active-flats' && flats.length > 0) {
        return (
            <>
                <div className="main-container">
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
    } else {
        return <h1 className="mt-12 text-center">Loading...</h1>
    }
}