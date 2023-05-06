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
    const [isIntro, setIsIntro] = useState<boolean>(true)

    useEffect(() => {
        getAllFlatsAPI().then(flats => setFlats(flats))
    }, [reload, isFormPrepared])

    if (useLocation().pathname === '/history' && flats.length > 0 && !isIntro) {
        return (
            <>
                <div className="main-container">
                    <SortComponent handleSort={(sort: SortBy) => setCurrentSort(sort)}/>
                    <p className='my-12 text-2xl font-bold text-center'>History:</p>
                    <SortedFlats flats={flats} sortBy={currentSort} reload={() => setReload(!reload)} isHistory={true}/>
                </div>
            </>
        )
    } else if (useLocation().pathname === '/' && flats.length > 0 && !isIntro) {
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
    } else if (!isIntro) {
        return (
            <>
                <h1 className='text-center mt-12'>Loading...</h1>
                <p className='text-center mt-8'>Can take a few minutes</p>
            </>
        )
    } else {
        return (
            <div className='mx-4 md:mx-12 lg:mx-64'>
                <h1 className="text-center pb-6">Welcome on Flat Keeper!</h1>
                <h3 className='text-center pb-8'>Are you moving and looking for a new place to live? <br/> Using this application you can store all of your favourites apartments on one place.</h3>
                <p className='pb-4'><b>The App allows you to:</b></p>
                <ul>
                    <li className='py-2'>Add a new flat by hit the '+' button on the right bottom of your screen</li>
                    <li className='py-2'>Click on the specific flat in the list to open <b>flat overview page</b> with more information</li>
                    <li className='py-2'>Edit your flat by hit the 'pen' button in the flat overview</li>
                    <li className='py-2'>Add or remove features of the flat by click on the 'ring' elements</li>
                    <li className='py-2'>Sort all your flats by your preferences</li>
                    <li className='py-2'>Set flats as favourites or delete them. Deleted apartments are stored in <b>History</b> page</li>
                </ul>
                <button onClick={() => setIsIntro(false)} className={`mx-auto w-fit block mt-8 border border-black rounded-sm px-4 py-2 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all ${flats.length === 0 && 'opacity-70 pointer-events-none'}`}>{flats.length > 0 ? 'Show my flats!' : 'Loading...'}</button>
            </div>
        )
    }
}