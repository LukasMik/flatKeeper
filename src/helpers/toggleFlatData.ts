import {IFlat, ToggleFlatStatus} from "../types.ts";
import {editFlatAPI} from "../apiServices/editFlatAPI.tsx";

export const toggleFlatData = (status: string, flat: IFlat, onSuccess: () => void) => {
    if (status === ToggleFlatStatus.Favourite && flat) {
        flat.isFavorite = !flat.isFavorite
    } else if ( status === ToggleFlatStatus.Delete && flat) {
        flat.isVisible = !flat.isVisible
    }
    return editFlatAPI(flat, onSuccess)
}