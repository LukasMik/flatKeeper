import axios from "axios";
import {IFlat} from "../types.ts";

export const getFlatByIdAPI = async (id: string | number): Promise<IFlat | null> => {
    return await axios.get<IFlat>(`https://flatkeeper-api.onrender.com/flats/${id}`, {
        headers: {"Access-Control-Allow-Origin": "*",}
    })
        .then(res => {
            return res.data
        })
        .catch(error => {
            console.log(error.message);
            return null
        })
}