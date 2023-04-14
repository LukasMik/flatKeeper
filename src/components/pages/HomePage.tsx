import {useEffect, useState} from "react";
import {IFlat} from "../../constants.ts";
import {useFlatAPI} from "../../hooks/useFlatsAPI.tsx";
import {FlatItem} from "../FlatItem.tsx";

export const HomePage = () => {
    const [flats, setFlats] = useState<IFlat[]>([])

    useEffect(() => {
        useFlatAPI().then(flats => setFlats(flats))
    }, [])

    return (
        <>
            <h3 className='mb-12 text-center'>Favourites:</h3>
            <div className='flex items-cenetr justify-center gap-20'>
                {flats.length > 0 && flats.filter(flat => flat.isFavorite)
                    .map(flat => <FlatItem key={flat.id} flat={flat}/>)}
            </div>
            <h3 className='my-12 text-center'>Others:</h3>
            <div className='flex items-cenetr justify-center gap-20'>
                {flats.length > 0 && flats.filter(flat => !flat.isFavorite)
                    .map(flat => <FlatItem key={flat.id} flat={flat}/>)}
            </div>
        </>
    )
}