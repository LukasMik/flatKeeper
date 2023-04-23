import axios from "axios";
import {IFlat, IRequire, RequireAction} from "../types.ts";
import React from "react";

export const useUpdateRequire = async (
    flat: IFlat,
    require: IRequire,
    onSuccess: () => void,
    handleRequire: RequireAction
) => {
    const updatedData = () => {
        const requires = flat.requires.filter(r => r.id !== require.id)
        if (handleRequire === RequireAction.Remove && flat) {
            return {...flat, requires: [...requires]};
        } else if (handleRequire === RequireAction.Add && flat) {
            return {...flat, requires: [...requires, require]};
        }
    }

    try {
        await axios.put(`http://localhost:3000/flats/${flat.id}`, updatedData());
        onSuccess();
    } catch (error) {
        console.error(error);
    }
};