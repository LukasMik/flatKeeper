import axios from 'axios';
import {IFlat} from "../types.ts";

export const useEditFlatAPI = async (flat: IFlat, onSuccess?: () => void) => {
    try {
        await axios.put(`http://localhost:3000/flats/${flat.id}`, flat);
        onSuccess ? onSuccess() : null
    } catch (error) {
        console.error(error); // Handle error
    }
};