import {IFlatFeature, FlatFeatureAction, Severity} from "../types.ts";
import {ALLFLATFEATURES} from "../constants/flatFeatures.ts";
import {FlatFeatureItem} from "./FlatFeatureItem.tsx";

interface IProps {
    severity: Severity
    flatFeatures?: IFlatFeature[]
    onSuccess: () => void
}

export const FlatFeaturesUsed = ({severity, flatFeatures, onSuccess}: IProps) => {
    const flatFeaturesItems = flatFeatures ? ALLFLATFEATURES.filter(i => flatFeatures.map(r => r.id).includes(i.id)) : null

    return (
        <>
            <div className="">
                {flatFeaturesItems?.map((r: IFlatFeature) => r.severity === severity &&
                    <FlatFeatureItem key={r.id} flatFeature={r} flatFeatureAction={FlatFeatureAction.Remove} onSuccess={onSuccess} />)}
            </div>
        </>
    )
}