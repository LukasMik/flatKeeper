import axios from 'axios';
import {IFlat} from "../types.ts";
import {LOCAL_IPV4} from "../constants/general.ts";

export const editFlatAPI = async (flat: IFlat, onSuccess?: () => void) => {
    try {
        await axios.put(`http://${LOCAL_IPV4}:3000/flats/${flat.id}`, flat);
        onSuccess ? onSuccess() : null
    } catch (error) {
        console.error(error); // Handle error
    }
};