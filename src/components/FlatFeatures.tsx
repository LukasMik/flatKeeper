import {IFlat, Severity} from "../types.ts";
import {FlatFeaturesAvailable} from "./FlatFeaturesAvailable.tsx";
import {FlatFeaturesUsed} from "./FlatFeaturesUsed.tsx";
import {useEffect, useState} from "react";
import {FlatContextProvider} from "../contexts/flatContext.tsx";
import {getFlatByIdAPI} from "../apiServices/getFlatByIdAPI.tsx";
import {useParams} from "react-router-dom";

export const FlatFeatures = () => {
    const {id} = useParams()
    const [flat, setFlat] = useState<IFlat | null>(null)
    const [reload, setReload] = useState<boolean>(false)

    useEffect(() => {
        id ? getFlatByIdAPI(id).then(flat => setFlat(flat)) : null
    }, [id, reload])

    if (!flat)
        return null


    return (
        <FlatContextProvider flat={flat}>
            <div className="flex items-stretch mt-8">
                <div className="w-2/3">
                    <FlatFeaturesAvailable severity={Severity.Required}
                                           onSuccess={() => setReload(!reload)}/>
                    <FlatFeaturesAvailable severity={Severity.Optional}
                                           onSuccess={() => setReload(!reload)}/>
                    <FlatFeaturesAvailable severity={Severity.Bonus}
                                           onSuccess={() => setReload(!reload)}/>
                </div>
                <div className="w-1/3">
                    <p className="text-2xl text-center mb-4">Used</p>
                    <div className="flex justify-around">
                        <FlatFeaturesUsed severity={Severity.Required}
                                          flatFeatures={flat.features}
                                          onSuccess={() => setReload(!reload)}/>
                        <FlatFeaturesUsed severity={Severity.Optional}
                                          flatFeatures={flat.features}
                                          onSuccess={() => setReload(!reload)}/>
                        <FlatFeaturesUsed severity={Severity.Bonus}
                                          flatFeatures={flat.features}
                                          onSuccess={() => setReload(!reload)}/>
                    </div>
                </div>
            </div>
        </FlatContextProvider>
    )
}