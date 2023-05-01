import {ColorStatus, Severity} from "../types.ts";

export const flatFeaturesColor = (severity: Severity, status: ColorStatus) => {
    if (severity === Severity.Required && status === ColorStatus.TextClass) {
        return 'text-green-700'
    } else if (severity === Severity.Required && status === ColorStatus.BgClass) {
        return 'bg-green-700'
    } else if (severity === Severity.Required && status === ColorStatus.Hex) {
        return '#15803d'
    } else if (severity === Severity.NiceToHave && status === ColorStatus.TextClass) {
        return 'text-yellow-600'
    } else if (severity === Severity.NiceToHave && status === ColorStatus.BgClass) {
        return 'bg-yellow-600'
    } else if (severity === Severity.NiceToHave && status === ColorStatus.Hex) {
        return '#ca8a04'
    } else if (severity === Severity.Disadvantage && status === ColorStatus.TextClass) {
        return 'text-red-500'
    }  else if (severity === Severity.Disadvantage && status === ColorStatus.BgClass) {
        return 'bg-red-500'
    } else if (severity === Severity.Disadvantage && status === ColorStatus.Hex) {
        return '#ef4444'
    }
}