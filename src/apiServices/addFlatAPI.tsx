import axios from 'axios';
import {IFlat} from "../types.ts";
import {LOCAL_IPV4} from "../constants/general.ts";

export const addFlatAPI = async (flat: IFlat, onSuccess: () => void) => {
    try {
        await axios.post(`http://${LOCAL_IPV4}:3000/flats`, flat);
        onSuccess()
    } catch (error) {
        console.error(error); // Handle error
    }
};