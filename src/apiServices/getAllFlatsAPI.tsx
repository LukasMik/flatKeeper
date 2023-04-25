import axios from "axios";
import {IFlat} from "../types.ts";
import {LOCALIPV4} from "../constants/general.ts";

export const getAllFlatsAPI = (): Promise<IFlat[] | never[]> => {
    return axios.get<IFlat[]>(`http://${LOCALIPV4}:3000/flats`)
        .then(res => {
            return res.data
        })
        .catch(error => {
            console.log(error.message);
            return []
        })
}