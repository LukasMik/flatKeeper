import axios from 'axios';
import {IFlat} from "../types.ts";

export const editFlatAPI = async (flat: IFlat, onSuccess?: () => void) => {
    try {
        await axios.put(`https://flatkeeper-api.onrender.com/${flat.id}`, flat);
        onSuccess ? onSuccess() : null
    } catch (error) {
        console.error(error); // Handle error
    }
};