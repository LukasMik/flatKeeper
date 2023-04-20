import {Severity} from "../types.ts";

export const requireColor = (severity: Severity) => {
        if (severity === Severity.Required) {
            return 'text-red-500'
        } else if (severity === Severity.Optional) {
            return 'text-green-700'
        } else if (severity === Severity.Bonus) {
            return 'text-yellow-600'
        }
    }