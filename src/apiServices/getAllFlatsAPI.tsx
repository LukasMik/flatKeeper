import axios from "axios";
import {IFlat} from "../types.ts";
import {LOCAL_IPV4} from "../constants/general.ts";

export const getAllFlatsAPI = (): Promise<IFlat[] | never[]> => {
    return axios.get<IFlat[]>(`http://${LOCAL_IPV4}:3000/flats`)
        .then(res => {
            return res.data
        })
        .catch(error => {
            console.log(error.message);
            return []
        })
}