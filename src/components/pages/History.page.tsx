import {useEffect, useState} from "react";
import {IFlat} from "../../types.ts";
import {useFlatAPI} from "../../hooks/useFlatsAPI.tsx";
import {FlatItem} from "../FlatItem.tsx";

export const HistoryPage = () => {
    const [flats, setFlats] = useState<IFlat[]>([])

    useEffect(() => {
        useFlatAPI().then(flats => setFlats(flats))
    }, [])

    return (
        <>
            <h3 className='mb-12 text-center'>History:</h3>
            <div className='flex items-cenetr justify-center gap-20'>
                {flats.length > 0 && flats.filter(flat => !flat.isVisible)
                    .map(flat => <FlatItem key={flat.id} flat={flat}/>)}
            </div>
        </>
    )
}