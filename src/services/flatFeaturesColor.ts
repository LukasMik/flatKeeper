import {Severity} from "../types.ts";

export const flatFeaturesColor = (severity: Severity) => {
    if (severity === Severity.Required) {
        return 'text-green-700'
    } else if (severity === Severity.NiceToHave) {
        return 'text-yellow-600'
    } else if (severity === Severity.Disadvantage) {
        return 'text-red-500'
    }
}