import {IRequire, RequireAction, Severity} from "../types.ts";
import {ALLREQUIRES} from "../constants/requires.ts";
import {RequireItem} from "./RequireItem.tsx";

interface IProps {
    severity: Severity
    requires?: IRequire[]
    onSuccess: () => void
}

export const RequiresUsed = ({severity, requires, onSuccess}: IProps) => {
    const requireItems = requires ? ALLREQUIRES.filter(i => requires.map(r => r.id).includes(i.id)) : null

    return (
        <>
            <div className="">
                {requireItems?.map((r: IRequire) => r.severity === severity &&
                    <RequireItem key={r.id} require={r} requireAction={RequireAction.Remove} onSuccess={onSuccess} />)}
            </div>
        </>
    )
}