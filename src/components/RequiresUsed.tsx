import {IRequire, Severity} from "../types.ts";
import {ALLREQUIRES} from "../constants/requires.ts";
import {requireColor} from "../services/requireColor.ts";

interface IProps {
    severity: Severity
}

export const RequiresUsed = ({severity}: IProps) => {
    return (
        <>
            <div className="">
                {ALLREQUIRES.map((r: IRequire) => r.severity === severity &&
                    <div
                        className={`text-3xl mb-4 flex flex-col items-center text-red-800 hover:scale-125 transition-all transform cursor-pointer ${requireColor(severity)}`}
                        key={r.id}>
                        <r.icon title={r.name}/>
                    </div>)}
            </div></>
    )
}