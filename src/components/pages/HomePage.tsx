import {useEffect, useState} from "react";
import {IFlat} from "../../types.ts";
import {useAllFlatsAPI} from "../../hooks/useAllFlatsAPI.tsx";
import {FlatItem} from "../FlatItem.tsx";
import {EditFlatModal} from "../modals/EditFlatModal.tsx";
import {editFlat} from "../../services/editFlat.ts";
import {useLocation} from "react-router-dom";

export const HomePage = () => {
    const [flats, setFlats] = useState<IFlat[]>([])
    const [reload, setReload] = useState<boolean>(false)

    useEffect(() => {
        useAllFlatsAPI().then(flats => setFlats(flats))
    }, [reload])

    if(useLocation().pathname === '/history') {
        return (
            <>
                <h3 className='mb-12 text-center'>History:</h3>
                <div className='flex items-cenetr justify-center flex-wrap gap-20'>
                    {flats.length > 0 && flats.filter(flat => !flat.isVisible)
                        .map(flat => <FlatItem key={flat.id} flat={flat} handleEdit={(status, flat) => editFlat(status, flat, () => setReload(!reload))}/>)}
                </div>
            </>
        )
    } else {
        return (
            <>
                <h3 className='mb-12 text-center'>Favourites:</h3>
                <div className='flex items-cenetr justify-center flex-wrap gap-20'>
                    {flats.length > 0 && flats.filter(flat => flat.isFavorite && flat.isVisible)
                        .map(flat => {
                            return <FlatItem key={flat.id} flat={flat}
                                             handleEdit={(status, flat) => editFlat(status, flat, () => setReload(!reload))}/>})}
                </div>
                <h3 className='my-12 text-center'>Others:</h3>
                <div className='flex items-cenetr justify-center flex-wrap gap-20'>
                    {flats.length > 0 && flats.filter(flat => !flat.isFavorite && flat.isVisible)
                        .map(flat => {
                            return <FlatItem key={flat.id} flat={flat}
                                             handleEdit={(status, flat) => editFlat(status, flat, () => setReload(!reload))}/>})}
                </div>
                <div className="fixed bottom-6 right-6">
                    <div title='Add new flat'>
                        <EditFlatModal status='new' doReload={() => setReload(!reload)}/>
                    </div>
                </div>
            </>
        )
    }
}