import {IRequirement, RequirementAction, Severity} from "../types.ts";
import {ALLREQUIREMENTS} from "../constants/requirements.ts";
import {RequirementItem} from "./RequirementItem.tsx";

interface IProps {
    severity: Severity
    requirements?: IRequirement[]
    onSuccess: () => void
}

export const RequirementsUsed = ({severity, requirements, onSuccess}: IProps) => {
    const requireItems = requirements ? ALLREQUIREMENTS.filter(i => requirements.map(r => r.id).includes(i.id)) : null

    return (
        <>
            <div className="">
                {requireItems?.map((r: IRequirement) => r.severity === severity &&
                    <RequirementItem key={r.id} requirement={r} requirementAction={RequirementAction.Remove} onSuccess={onSuccess} />)}
            </div>
        </>
    )
}