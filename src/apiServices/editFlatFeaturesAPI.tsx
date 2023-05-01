import axios from "axios";
import {IFlat, IFlatFeature, FlatFeatureAction} from "../types.ts";
import React from "react";
import {LOCAL_IPV4} from "../constants/general.ts";

export const editFlatFeaturesAPI = async (
    flat: IFlat,
    flatFeature: IFlatFeature,
    onSuccess: () => void,
    handleFlatFeature: FlatFeatureAction
) => {
    const updatedData = () => {
        const flatFeatures = flat.features.filter(r => r.id !== flatFeature.id)
        if (handleFlatFeature === FlatFeatureAction.Remove && flat) {
            return {...flat, features: [...flatFeatures], lastEditedAt: new Date()};
        } else if (handleFlatFeature === FlatFeatureAction.Add && flat) {
            return {...flat, features: [...flatFeatures, flatFeature], lastEditedAt: new Date()};
        }
    }

    try {
        await axios.put(`http://${LOCAL_IPV4}:3000/flats/${flat.id}`, updatedData());
        onSuccess();
    } catch (error) {
        console.error(error);
    }
};