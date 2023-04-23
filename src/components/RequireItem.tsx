import {requireColor} from "../services/requireColor.ts";
import {IFlat, IRequire, RequireAction, Severity} from "../types.ts";
import {useFlatContext} from "../contexts/flatContext.tsx";
import {useUpdateRequire} from "../hooks/useUpdateRequire.tsx";

interface IProps {
    require: IRequire
    isUsed?: boolean
    requireAction: RequireAction
    onSuccess: () => void
}

export const RequireItem = ({require, isUsed, onSuccess, requireAction}: IProps) => {
    const flat: IFlat = useFlatContext()
    const handleOnClick = async (flat: IFlat, require: IRequire) => {
        await useUpdateRequire(flat, require, onSuccess, requireAction);
    };

    const disabled = isUsed? 'text-opacity-30 pointer-events-none' : ''

    return (
        <div
            className={`text-3xl mb-4 flex flex-col items-center hover:scale-125 transition-all transform cursor-pointer ${disabled} ${requireColor(require.severity as Severity)}`}
            key={require.id}>
            <require.icon title={require.name}
            onClick={() => handleOnClick(flat, require)}/>
        </div>
    )
}