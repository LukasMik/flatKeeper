import {ALLREQUIREMENTS} from "../constants/requirements.ts";
import {IRequirement, RequirementAction, Severity} from "../types.ts";
import {useFlatContext} from "../contexts/flatContext.tsx";
import {RequirementItem} from "./RequirementItem.tsx";

interface IProps {
    severity: Severity
    onSuccess: () => void,
}

export const RequirementsAvailable = ({severity, onSuccess}: IProps) => {
    const flat = useFlatContext()
    if (flat) {
        return (
            <>
                <p className="text-2xl mb-4">{severity.charAt(0).toUpperCase() + severity.slice(1)}</p>
                <div className="flex gap-4 mb-4">
                    {ALLREQUIREMENTS.map((r: IRequirement) => {
                        const isUsed = flat.requirements.some(req => req.id === r.id)
                        if (r.severity === severity) {
                            return <RequirementItem key={r.id} requirement={r} isUsed={isUsed} onSuccess={onSuccess}
                                                    requirementAction={RequirementAction.Add}/>
                        }
                    })}
                </div>
            </>
        )
    } else {
        return null
    }
}