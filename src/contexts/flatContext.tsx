import {createContext, ReactNode, useContext} from "react";
import {IFlat} from "../types.ts";

interface IProps {
    children: ReactNode
    flat: IFlat
}

export const FlatContext = createContext<IFlat>({} as IFlat)

export const FlatContextProvider = ({children, flat}: IProps) => {
    return <FlatContext.Provider value={flat}>{children}</FlatContext.Provider>
}

export const useFlatContext = () => useContext(FlatContext)