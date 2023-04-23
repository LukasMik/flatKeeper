import {requirementsColor} from "../services/requirementsColor.ts";
import {IFlat, IRequirement, RequirementAction, Severity} from "../types.ts";
import {useFlatContext} from "../contexts/flatContext.tsx";
import {editRequirementsAPI} from "../apiServices/editRequirementsAPI.tsx";

interface IProps {
    requirement: IRequirement
    isUsed?: boolean
    requirementAction: RequirementAction
    onSuccess: () => void
}

export const RequirementItem = ({requirement, isUsed, onSuccess, requirementAction}: IProps) => {
    const flat: IFlat = useFlatContext()
    const handleOnClick = async (flat: IFlat, requirement: IRequirement) => {
        await editRequirementsAPI(flat, requirement, onSuccess, requirementAction);
    };

    const disabled = isUsed? 'text-opacity-30 pointer-events-none' : ''

    return (
        <div
            className={`text-3xl mb-4 flex flex-col items-center hover:scale-125 transition-all transform cursor-pointer ${disabled} ${requirementsColor(requirement.severity as Severity)}`}
            key={requirement.id}>
            <requirement.icon title={requirement.name}
                              onClick={() => handleOnClick(flat, requirement)}/>
        </div>
    )
}