import {useEffect, useState} from "react";
import {IFlat} from "../../types.ts";
import {getAllFlatsAPI} from "../../apiServices/getAllFlatsAPI.tsx";
import {FlatItem} from "../FlatItem.tsx";
import {EditFlatModal} from "../modals/EditFlatModal.tsx";
import {toggleFlatData} from "../../services/toggleFlatData.ts";
import {useLocation} from "react-router-dom";

export const HomePage = () => {
    const [flats, setFlats] = useState<IFlat[]>([])
    const [reload, setReload] = useState<boolean>(false)
    const [isFormPrepared, setIsFormPrepared] = useState<boolean>(false)

    useEffect(() => {
        getAllFlatsAPI().then(flats => setFlats(flats))
    }, [reload, isFormPrepared])

    if (useLocation().pathname === '/history') {
        return (
            <>
                <h3 className='mb-12 ml-12'>History:</h3>
                <div className='flex items-cenetr justify-center flex-wrap gap-20'>
                    {flats.length > 0 && flats.filter(flat => !flat.isVisible)
                        .sort((a, b) => new Date(b.addAt).getDate() - new Date(a.addAt).getDate())
                        .sort((a, b) => new Date(b.addAt).getTime() - new Date(a.addAt).getTime())
                        .map(flat => <FlatItem key={flat.id} flat={flat}
                                               handleEdit={(status, flat) => toggleFlatData(status, flat, () => setReload(!reload))}/>)}
                </div>
            </>
        )
    } else {
        return (
            <>
                <h3 className='mb-12 ml-12'>Favourites:</h3>
                <div className='flex items-cenetr justify-center flex-wrap gap-20'>
                    {flats.length > 0 && flats.filter(flat => flat.isFavorite && flat.isVisible)
                        .sort((a, b) => new Date(b.addAt).getDate() - new Date(a.addAt).getDate())
                        .sort((a, b) => new Date(b.addAt).getTime() - new Date(a.addAt).getTime())
                        .map(flat => {
                            return <FlatItem key={flat.id} flat={flat}
                                             handleEdit={(status, flat) => toggleFlatData(status, flat, () => setReload(!reload))}/>
                        })}
                </div>
                <h3 className='my-12 ml-12'>Others:</h3>
                <div className='flex items-cenetr justify-center flex-wrap gap-20'>
                    {flats.length > 0 && flats.filter(flat => !flat.isFavorite && flat.isVisible)
                        .sort((a, b) => new Date(b.addAt).getDate() - new Date(a.addAt).getDate())
                        .sort((a, b) => new Date(b.addAt).getTime() - new Date(a.addAt).getTime())
                        .map(flat => {
                            return <FlatItem key={flat.id} flat={flat}
                                             handleEdit={(status, flat) => toggleFlatData(status, flat, () => setReload(!reload))}/>
                        })}
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