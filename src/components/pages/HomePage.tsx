import {useEffect, useState} from "react";
import {IFlat, SortBy} from "../../types.ts";
import {getAllFlatsAPI} from "../../apiServices/getAllFlatsAPI.tsx";
import {EditFlatModal} from "../modals/EditFlatModal.tsx";
import {useLocation} from "react-router-dom";
import {ToggleSortFlats} from "../ToggleSortFlats.tsx";
import {SortedFlats} from "../SortedFlats.tsx";

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
                <div className='flex items-center gap-4 justify-end mr-12'>
                    <p className="text-center text-xl mb-2">Sort by:</p>
                    <div className="flex justify-center">
                        <ToggleSortFlats setCurrentSort={(sort) => setCurrentSort(sort)}/>
                    </div>
                </div>
                <h3 className='mb-12 ml-12'>History:</h3>
                <div className='flex items-cenetr justify-center flex-wrap gap-20'>
                    <SortedFlats flats={flats} sortBy={currentSort} reload={() => setReload(!reload)} isHistory={true}/>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className='flex items-center gap-4 justify-end mr-12'>
                    <p className="text-center text-xl mb-2">Sort by:</p>
                    <div className="flex justify-center">
                        <ToggleSortFlats setCurrentSort={(sort) => setCurrentSort(sort)}/>
                    </div>
                </div>
                <h3 className='mb-12 ml-12'>Favourites:</h3>
                <div className='flex items-cenetr justify-center flex-wrap gap-20'>
                    <SortedFlats flats={flats} sortBy={currentSort} reload={() => setReload(!reload)}
                                 isFavourites={true}/>
                </div>
                <h3 className='my-12 ml-12'>Others:</h3>
                <div className='flex items-cenetr justify-center flex-wrap gap-20'>
                    <SortedFlats flats={flats} sortBy={currentSort} reload={() => setReload(!reload)}/>
                </div>
                <div className="fixed bottom-6 right-6">
                    <div title='Add new flat' onClick={() => setIsFormPrepared(true)}>
                        <EditFlatModal status='new' onOpenChange={() => setIsFormPrepared(false)}
                                       isFormPrepared={isFormPrepared}/>
                    </div>
                </div>
            </>
        )
    }
}