import axios from "axios";
import {IFlat} from "../types.ts";

export const useFlatByIdAPI = (id: string): Promise<IFlat | null> => {
    return axios.get<IFlat>(`http://localhost:3000/flats/${id}`)
        .then(res => {
            return res.data
        })
        .catch(error => {
            console.log(error.message);
            return null
        })
}