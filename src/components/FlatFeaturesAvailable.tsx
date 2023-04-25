import {ALLFLATFEATURES} from "../constants/flatFeatures.ts";
import {IFlatFeature, FlatFeatureAction, Severity} from "../types.ts";
import {useFlatContext} from "../contexts/flatContext.tsx";
import {FlatFeatureItem} from "./FlatFeatureItem.tsx";

interface IProps {
    severity: Severity
    onSuccess: () => void,
}

export const FlatFeaturesAvailable = ({severity, onSuccess}: IProps) => {
    const flat = useFlatContext()
    if (flat) {
        return (
            <>
                <p className="text-2xl mb-4">{severity.charAt(0).toUpperCase() + severity.slice(1)}</p>
                <div className="flex gap-4 mb-4 flex-wrap">
                    {ALLFLATFEATURES.map((r: IFlatFeature) => {
                        const isUsed = flat.features.some(req => req.id === r.id)
                        if (r.severity === severity) {
                            return <FlatFeatureItem key={r.id} flatFeature={r} isUsed={isUsed} onSuccess={onSuccess}
                                                    flatFeatureAction={FlatFeatureAction.Add}/>
                        }
                    })}
                </div>
            </>
        )
    } else {
        return null
    }
}