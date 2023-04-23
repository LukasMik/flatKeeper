import axios from "axios";
import {IFlat, IFlatFeature, FlatFeatureAction} from "../types.ts";
import React from "react";

export const editFlatFeaturesAPI = async (
    flat: IFlat,
    flatFeature: IFlatFeature,
    onSuccess: () => void,
    handleFlatFeature: FlatFeatureAction
) => {
    const updatedData = () => {
        const flatFeatures = flat.features.filter(r => r.id !== flatFeature.id)
        if (handleFlatFeature === FlatFeatureAction.Remove && flat) {
            return {...flat, features: [...flatFeatures]};
        } else if (handleFlatFeature === FlatFeatureAction.Add && flat) {
            return {...flat, features: [...flatFeatures, flatFeature]};
        }
    }

    try {
        await axios.put(`http://localhost:3000/flats/${flat.id}`, updatedData());
        onSuccess();
    } catch (error) {
        console.error(error);
    }
};