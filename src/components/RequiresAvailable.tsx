import {ALLREQUIRES} from "../constants/requires.ts";
import {IRequire, Severity} from "../types.ts";
import {requireColor} from "../services/requireColor.ts";

interface IProps {
    severity: Severity
}

export const RequiresAvailable = ({severity}: IProps) => {
    return (
        <>
            <p className="text-2xl mb-4">{severity.charAt(0).toUpperCase() + severity.slice(1)}</p>
            <div className="flex gap-4 mb-4">
                {ALLREQUIRES.map((r: IRequire) => r.severity === severity &&
                    <div
                        className={`text-3xl mb-4 flex flex-col items-center hover:scale-125 transition-all transform cursor-pointer ${requireColor(severity)}`}
                        key={r.id}>
                        <r.icon title={r.name}/>
                    </div>)}
            </div>
        </>
    )
}