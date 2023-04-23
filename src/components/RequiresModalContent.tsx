import {IFlat, Severity} from "../types.ts";
import {RequiresAvailable} from "./RequiresAvailable.tsx";
import {RequiresUsed} from "./RequiresUsed.tsx";
import {useEffect, useState} from "react";
import {FlatContextProvider} from "../contexts/flatContext.tsx";
import {useFlatByIdAPI} from "../hooks/useFlatByIdAPI.tsx";
import {useParams} from "react-router-dom";

export const RequiresModalContent = () => {
    const {id} = useParams()
    const [flat, setFlat] = useState<IFlat | null>(null)
    const [reload, setReload] = useState<boolean>(false)

    useEffect(() => {
        id ? useFlatByIdAPI(id).then(flat => setFlat(flat)) : null
    }, [id, reload])

    if (!flat)
        return null


    return (
        <FlatContextProvider flat={flat}>
            <div className="flex items-stretch mt-8">
                <div className="w-2/3">
                    <RequiresAvailable severity={Severity.Required}
                                       onSuccess={() => setReload(!reload)}/>
                    <RequiresAvailable severity={Severity.Optional}
                                       onSuccess={() => setReload(!reload)}/>
                    <RequiresAvailable severity={Severity.Bonus}
                                       onSuccess={() => setReload(!reload)}/>
                </div>
                <div className="w-1/3">
                    <p className="text-2xl text-center mb-4">Used</p>
                    <div className="flex justify-around">
                        <RequiresUsed severity={Severity.Required}
                                      requires={flat.requires}
                                      onSuccess={() => setReload(!reload)}/>
                        <RequiresUsed severity={Severity.Optional}
                                      requires={flat.requires}
                                      onSuccess={() => setReload(!reload)}/>
                        <RequiresUsed severity={Severity.Bonus}
                                      requires={flat.requires}
                                      onSuccess={() => setReload(!reload)}/>
                    </div>
                </div>
            </div>
        </FlatContextProvider>
    )
}