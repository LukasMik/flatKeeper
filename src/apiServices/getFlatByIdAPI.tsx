import axios from "axios";
import {IFlat} from "../types.ts";

export const getFlatByIdAPI = async (id: string | number): Promise<IFlat | null> => {
    return await axios.get<IFlat>(`https://flatkeeper-api.onrender.com/flats/${id}`)
        .then(res => {
            return res.data
        })
        .catch(error => {
            console.log(error.message);
            return null
        })
}