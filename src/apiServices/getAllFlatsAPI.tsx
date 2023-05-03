import axios from "axios";
import {IFlat} from "../types.ts";

export const getAllFlatsAPI = (): Promise<IFlat[] | never[]> => {
    return axios.get<IFlat[]>(`https://flatkeeper-api.onrender.com/flats`)
        .then(res => {
            return res.data
        })
        .catch(error => {
            console.log(error.message);
            return []
        })
}