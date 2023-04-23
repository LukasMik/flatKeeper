import axios from "axios";
import {IFlat} from "../types.ts";

export const useFlatByIdAPI = async (id: string | number): Promise<IFlat | null> => {
    return await axios.get<IFlat>(`http://localhost:3000/flats/${id.toString()}`)
        .then(res => {
            return res.data
        })
        .catch(error => {
            console.log(error.message);
            return null
        })
}