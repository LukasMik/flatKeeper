import {useEffect, useState} from "react";
import {IFlat} from "../../constants.ts";
import {useFlatAPI} from "../../hooks/useFlatsAPI.tsx";

export const HomePage = () => {
    const [flats, setFlats] = useState<IFlat[]>([])

    useEffect(() => {
        useFlatAPI().then(flats => setFlats(flats))
    }, [])

    return (
        <>
            {flats.length > 0 && flats.map(flat => <div key={flat.id}>{flat.name}</div>)}
        </>
    )
}