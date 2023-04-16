import {useState} from "react";
import {IFlat} from "../../types.ts";
import {useFlatAPI} from "../../hooks/useFlatsAPI.tsx";
import {FlatItem} from "../FlatItem.tsx";
import {EditFlatModal} from "../modals/EditFlatModal.tsx";

export const HomePage = () => {
    const [flats, setFlats] = useState<IFlat[]>([])

    useFlatAPI().then(flats => setFlats(flats))

    return (
        <>
            <h3 className='mb-12 text-center'>Favourites:</h3>
            <div className='flex items-cenetr justify-center flex-wrap gap-20'>
                {flats.length > 0 && flats.filter(flat => flat.isFavorite && flat.isVisible)
                    .map(flat => <FlatItem key={flat.id} flat={flat}/>)}
            </div>
            <h3 className='my-12 text-center'>Others:</h3>
            <div className='flex items-cenetr justify-center flex-wrap gap-20'>
                {flats.length > 0 && flats.filter(flat => !flat.isFavorite && flat.isVisible)
                    .map(flat => <FlatItem key={flat.id} flat={flat}/>)}
            </div>
            <div className="fixed bottom-6 right-6">
                <div title='Add new flat'>
                    <EditFlatModal status='new'/>
                </div>
            </div>
        </>
    )
}