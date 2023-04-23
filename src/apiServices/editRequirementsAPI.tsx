import axios from "axios";
import {IFlat, IRequirement, RequirementAction} from "../types.ts";
import React from "react";

export const editRequirementsAPI = async (
    flat: IFlat,
    requirement: IRequirement,
    onSuccess: () => void,
    handleRequirement: RequirementAction
) => {
    const updatedData = () => {
        const requirements = flat.requirements.filter(r => r.id !== requirement.id)
        if (handleRequirement === RequirementAction.Remove && flat) {
            return {...flat, requirements: [...requirements]};
        } else if (handleRequirement === RequirementAction.Add && flat) {
            return {...flat, requirements: [...requirements, requirement]};
        }
    }

    try {
        await axios.put(`http://localhost:3000/flats/${flat.id}`, updatedData());
        onSuccess();
    } catch (error) {
        console.error(error);
    }
};