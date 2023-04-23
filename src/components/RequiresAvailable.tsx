import {ALLREQUIRES} from "../constants/requires.ts";
import {IRequire, RequireAction, Severity} from "../types.ts";
import {useFlatContext} from "../contexts/flatContext.tsx";
import {RequireItem} from "./RequireItem.tsx";

interface IProps {
    severity: Severity
    onSuccess: () => void,
}

export const RequiresAvailable = ({severity, onSuccess}: IProps) => {
    const flat = useFlatContext()
    if (flat) {
        return (
            <>
                <p className="text-2xl mb-4">{severity.charAt(0).toUpperCase() + severity.slice(1)}</p>
                <div className="flex gap-4 mb-4">
                    {ALLREQUIRES.map((r: IRequire) => {
                        const isUsed = flat.requires.some(req => req.id === r.id)
                        if (r.severity === severity) {
                            return <RequireItem key={r.id} require={r} isUsed={isUsed} onSuccess={onSuccess}
                                                requireAction={RequireAction.Add}/>
                        }
                    })}
                </div>
            </>
        )
    }
}