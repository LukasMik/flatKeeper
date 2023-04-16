import axios from 'axios';
import {IFlat} from "../types.ts";

export const useAddFlatAPI = async (flat: IFlat, onSuccess: () => void) => {
    try {
        await axios.post('http://localhost:3000/flats', flat);
        onSuccess()
    } catch (error) {
        console.error(error); // Handle error
    }
};