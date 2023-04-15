import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {IFlat} from "../../types.ts";
import {useFlatByIdAPI} from "../../hooks/useFlatByIdAPI.tsx";
import {
    AiFillHeart,
    AiOutlineHeart,
    AiOutlineLayout, BiLink, BsMailbox, BsSendCheck, FiMapPin,
    IoResize, MdOutlineEventAvailable, RiPinDistanceLine,
    SiMetrodeparis,
    TbDiamond, TbSofa
} from "react-icons/all";
import {EditFlatModal} from "../modals/EditFlatModal.tsx";
import {EditFeaturesModal} from "../modals/EditFeaturesModal.tsx";

export const FlatDetailPage = () => {
    const {id} = useParams()
    const [flat, setFlat] = useState<IFlat | null>(null)

    useEffect(() => {
        id ? useFlatByIdAPI(id).then(flat => setFlat(flat)) : null
    }, [id])

    if (!flat)
        return null

    return (
        <div className='w-3/5 mx-auto'>
            <div className='h-hFlatDetail relative relative'>
                <img src={flat.photo} alt="flat-image"
                     className='w-full h-full object-cover rounded-3xl'/>
                <div className='absolute top-6 right-6' title='Edit flat'>
                    <button
                        className='flex items-center gap-4 text-gray-100 text-6xl hover:scale-110 transform transition-all mb-6'>
                        {flat.isFavorite ?
                            <AiFillHeart className='drop-shadow-lg text-red-600' title='Set as no favourite'/> :
                            <AiOutlineHeart className='drop-shadow-lg text-red-600' title='Set as favourite'/>
                        }
                    </button>
                    <EditFlatModal/>
                </div>
                <div className='absolute bottom-6 left-6 flex items-center gap-4 text-gray-100 text-5xl'>
                    <TbDiamond className='drop-shadow-lg'/>
                    <p className='text-3xl font-bold drop-shadow-lg'>{flat.prettyScore} / 10</p>
                </div>
                <div className="absolute bottom-6 right-6" title='Edit features'>
                    <EditFeaturesModal/>
                </div>
            </div>
            <div className="flex justify-between p-6">
                <div>
                    <p className="text-3xl font-bold mb-4">{flat.name}</p>
                    <div className="flex item-center gap-4">
                        <span className='flex justify-center items-center gap-2 text-2xl'>
                            <AiOutlineLayout/>{flat.layout}
                        </span>
                        <span className='flex justify-center items-center gap-2 text-2xl'>
                            <IoResize/>{flat.size} m&#178;
                        </span>
                    </div>
                </div>
                <div className='text-right'>
                    <p className="text-3xl font-bold mb-4">{flat.price.toLocaleString()} Kč</p>
                    <p className="text-2xl">
                        <span className="mr-2 text-xl"> Deposit: </span>
                        {flat.deposit.toLocaleString()} Kč
                    </p>
                    {flat.commission ? <p className="text-2xl"><span
                        className="mr-2 text-xl"> Commission: </span> {flat.commission.toLocaleString()} Kč</p> : null}
                </div>
            </div>
            <div className='p-6 flex items-center justify-between'>
                <ul>
                    <li className='flex items-center gap-2 text-xl mb-5'>
                        <SiMetrodeparis className='text-2xl'/>
                        <span>Metro distance:</span>
                        <span className='font-bold'>{flat.metroDistance} min walk</span>
                    </li>
                    <li className='flex items-center gap-2 text-xl mb-5'>
                        <RiPinDistanceLine className='text-2xl'/>
                        <span>Infinit:</span>
                        <span className='font-bold'>{flat.distanceToInfinit} min MHD</span>
                    </li>
                    <li className='flex items-center gap-2 text-xl mb-5'>
                        <RiPinDistanceLine className='text-2xl'/>
                        <span>Smartlook:</span>
                        <span className='font-bold'>{flat.distanceToSmartlook} min MHD</span>
                    </li>
                </ul>
                <ul>
                    <li className='flex items-center gap-2 text-xl mb-5'>
                        <FiMapPin className='text-2xl'/><span>District:</span><span
                        className='font-bold'>{flat.district}</span>
                    </li>
                    <li className='flex items-center gap-2 text-xl mb-5'>
                        <TbSofa className='text-2xl'/>
                        <span>Equipped:</span>
                        <span className='font-bold'>{flat.equipped ? 'Yes' : 'No'}</span>
                    </li>
                    <li className='flex items-center gap-2 text-xl mb-5'>
                        <MdOutlineEventAvailable className='text-2xl'/>
                        <span>Available from:</span>
                        <span className='font-bold'>{flat.available}</span>
                    </li>
                </ul>
                <ul>
                    <li className='flex items-center gap-2 text-xl mb-5'>
                        <BsSendCheck className='text-2xl'/>
                        <span>Email sent:</span>
                        <span className='font-bold'>{flat.sentMessage ? 'Yes' : 'No'}</span>
                    </li>
                    <li className='flex items-center gap-2 text-xl mb-5'>
                        <BsMailbox className='text-2xl'/>
                        <span>Got answer:</span>
                        <span className='font-bold'>{flat.hasAnswer ? 'Yes' : 'No'}</span>
                    </li>
                    <li className='flex items-center gap-2 text-xl mb-5'>
                        <BiLink className='text-2xl'/>
                        <a href={flat.link} target='_blank' className='hover:font-bold transition-all underline underline-offset-4'>
                            Link to advert
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}