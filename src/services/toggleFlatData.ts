import {IFlat} from "../types.ts";
import {editFlatAPI} from "../apiServices/editFlatAPI.tsx";

export const toggleFlatData = (status: string, flat: IFlat, onSuccess?: () => void) => {
    if (status === 'favourite' && flat) {
        flat.isFavorite = !flat.isFavorite
    } else if ( status === 'delete' && flat) {
        flat.isVisible = !flat.isVisible
    }
    return editFlatAPI(flat, onSuccess)
}