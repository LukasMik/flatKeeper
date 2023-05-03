import axios from 'axios';
import {IFlat} from "../types.ts";

export const addFlatAPI = async (flat: IFlat, onSuccess: () => void) => {
    try {
        await axios.post(`https://flatkeeper-api.onrender.com/flats`, flat);
        onSuccess()
    } catch (error) {
        console.error(error); // Handle error
    }
};