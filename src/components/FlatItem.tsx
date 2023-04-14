import {IFlat} from "../types.ts";
import {NavLink} from "react-router-dom";
import '../styles/flatItem.scss'
import {
    AiOutlineLayout, BsPiggyBank, FiMapPin,
    IoResize,
    MdOutlineEventAvailable, RiLuggageDepositLine,
    SiMetrodeparis, TbDiamond
} from "react-icons/all";


interface IProps {
    flat: IFlat
}

export const FlatItem = ({flat}: IProps) => {

    return (
        <div className="w-wFlatItem">
            <NavLink to={`/flat-detail/${flat.id}`}>
                <div
                    className="h-hFlatItem relative overflow-hidden m-1 transform hover:scale-105 transition-all rounded-xl hover:rounded-2xl group">
                    <img
                        src={flat.photo}
                        className="w-full h-full object-cover bg-gray-300"
                        alt="Country Photo"
                    />
                    <div className="description">
                        <div className='flex flex-col gap-4 group-hover:gap-2 justify-around'>
                            <p className="text-2xl font-bold line-clamp-1 group-hover:line-clamp-4 text-center group-hover:text-3xl group-hover:mb-2 duration-300">
                                {flat.name}
                            </p>
                            <ul className="flex justify-between px-12 line-clamp-1 items-center">
                                <li className='flex justify-center items-center gap-2'>
                                    <AiOutlineLayout/>{flat.layout}
                                </li>
                                <li className='flex justify-center items-center gap-2'>
                                    <IoResize/>{flat.size} m&#178;
                                </li>
                                <li className='flex justify-center items-center gap-2'>
                                    <TbDiamond/>{flat.prettyScore} / 10
                                </li>
                            </ul>
                            <ul className='text-center'>
                                <li className='font-bold transform group-hover:scale-110 duration-300 group-hover:pt-2'>
                                    {flat.price.toLocaleString()} Kč
                                    <span className='text-sm'>{!flat.includeEnergies && ' + Electricity'}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="hidden-content">
                            <ul>
                                <li>
                                    <SiMetrodeparis/><span>Metro distance:</span><span>{flat.metroDistance} min walk</span>
                                </li>
                                <li>
                                    <FiMapPin/><span>District:</span><span>{flat.district}</span>
                                </li>
                                <li>
                                    <RiLuggageDepositLine/><span>Deposit:</span><span>{flat.deposit.toLocaleString()} Kč</span>
                                </li>
                                {flat.commission > 0 ?
                                    <li>
                                        <BsPiggyBank/><span>Commission:</span><span>{flat.commission.toLocaleString()} Kč</span>
                                    </li> : null
                                }
                                <li>
                                    <MdOutlineEventAvailable/><span>Available from:</span><span>{flat.available}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </NavLink>
            <a href={flat.link} target='_blank'
               className='text-center underline underline-offset-4 hover:font-bold transition-all text-center mx-auto block w-fit pt-4'>
                Link to advert
            </a>
        </div>
    )
}