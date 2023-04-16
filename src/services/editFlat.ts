import {IFlat} from "../types.ts";
import {useEditFlatAPI} from "../hooks/useEditFlatAPI.tsx";

export const editFlat = (status: string, flat: IFlat, onSuccess?: () => void) => {
    if (status === 'favourite' && flat) {
        flat.isFavorite = !flat.isFavorite
    } else if ( status === 'delete' && flat) {
        flat.isVisible = !flat.isVisible
    }
    return useEditFlatAPI(flat, onSuccess)
}