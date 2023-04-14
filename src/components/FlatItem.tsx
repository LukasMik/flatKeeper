import {IFlat} from "../constants.ts";
import {NavLink} from "react-router-dom";

interface IProps {
    flat: IFlat
}

export const FlatItem = ({flat}: IProps) => {

    return (
        <div className="w-96">
            <NavLink to={`/flat-detail/${flat.id}`}>
                <div
                    className="relative overflow-hidden m-1 transform hover:scale-105 transition-all rounded-xl hover:rounded-2xl group">
                    <img
                        src={flat.photo}
                        className="w-full h-96 object-cover bg-gray-300"
                        alt="Country Photo"
                    />
                    <div
                        className="absolute bottom-0 left-0 right-0 p-4 text-white bg-black bg-opacity-50 h-32 group-hover:h-full card-content transition-all duration-200 flex flex-col justify-around">
                        <p className="text-2xl font-bold line-clamp-1 group-hover:line-clamp-4 text-center">
                            {flat.name}
                        </p>
                        <p className="text-xl line-clamp-1 flex justify-around items-center">
                            <span>{flat.layout}</span><span>{flat.size} m&#178;</span><span>{flat.prettyScore} b.</span>
                        </p>
                    </div>
                </div>
            </NavLink>
            <a href={flat.link} target='_blank'
               className='text-center underline underline-offset-4 hover:font-bold transition-all text-center mx-auto block w-fit pt-4'>
                Odkaz na inzerát
            </a>
        </div>
    )
}