import {flatFeaturesColor} from "../../helpers/flatFeaturesColor.ts";
import {ColorStatus, FlatFeatureAction, IFlat, IFlatFeature, Severity} from "../../types.ts";
import {useFlatContext} from "../../contexts/flatContext.tsx";
import {editFlatFeaturesAPI} from "../../apiServices/editFlatFeaturesAPI.tsx";

interface IProps {
    flatFeature: IFlatFeature
    isUsed?: boolean
    flatFeatureAction: FlatFeatureAction
    onSuccess: () => void
}

export const FlatFeatureItem = ({flatFeature, isUsed, onSuccess, flatFeatureAction}: IProps) => {
    const flat: IFlat = useFlatContext()
    const handleOnClick = async (flat: IFlat, flatFeature: IFlatFeature) => {
        await editFlatFeaturesAPI(flat, flatFeature, onSuccess, flatFeatureAction);
    };

    const disabled = isUsed? 'text-opacity-30 pointer-events-none' : ''

    return (
        <div
            className={`text-3xl mb-4 flex flex-col items-center hover:scale-125 transition-all transform cursor-pointer ${disabled} ${flatFeaturesColor(flatFeature.severity as Severity, ColorStatus.TextClass)}`}
            key={flatFeature.id}>
            <flatFeature.icon title={flatFeature.name}
                              onClick={() => handleOnClick(flat, flatFeature)}/>
        </div>
    )
}