import axios from "axios";
import {IFlat} from "../types.ts";

export const useFlatAPI = (): Promise<IFlat[]> => {
    return axios.get<IFlat[]>('http://localhost:3000/flats')
        .then(res => {
            return res.data
        })
        .catch(error => {
            console.log(error.message);
            return []
        })
}