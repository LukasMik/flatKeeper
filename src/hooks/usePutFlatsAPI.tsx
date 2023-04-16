import axios from 'axios';
import {IFlat} from "../types.ts";

export const usePutFlatAPI = async (flat: IFlat, onSuccess: () => void) => {
    console.log(flat)
    try {
        await axios.put(`http://localhost:3000/flats/${flat.id}`, flat);
        onSuccess()
    } catch (error) {
        console.error(error); // Handle error
    }
};