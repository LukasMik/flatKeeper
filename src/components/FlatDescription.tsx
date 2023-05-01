import {
    AiOutlineLayout,
    BiLink,
    BsMailbox,
    BsSendCheck,
    FiMapPin, IoResize,
    MdOutlineEventAvailable,
    RiPinDistanceLine,
    SiMetrodeparis,
    TbSofa
} from "react-icons/all";
import {IFlat} from "../types.ts";

interface IProps {
    flat: IFlat
}

export const FlatDescription = ({flat}: IProps) => {
    return (
        <>
            <div className="flex flex-col md:flex-row gap-4 justify-between p-4">
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
                <div className='md:text-right'>
                    {flat.includeEnergies ?
                        <p className="text-3xl font-bold mb-4">{Number(flat.price).toLocaleString()} Kč</p> :
                        <p className="text-3xl font-bold mb-4">{Number(flat.price).toLocaleString()} Kč <span
                            className='text-lg'>+ energy</span></p>
                    }
                    {flat.deposit ?
                        <p className="text-2xl">
                                <span
                                    className="mr-2 text-xl"> Deposit: </span>{Number(flat.deposit).toLocaleString()} Kč
                        </p> : null}
                    {flat.commission ?
                        <p className="text-2xl">
                                <span
                                    className="mr-2 text-xl"> Commission: </span> {Number(flat.commission).toLocaleString()} Kč
                        </p> : null}
                </div>
            </div>
            <div className='p-6 lg:flex items-center justify-between'>
                <ul>
                    <li className='flex items-center gap-2 text-xl mb-5'>
                        <SiMetrodeparis className='text-2xl'/>
                        <span>Metro distance:</span>
                        <span
                            className='font-bold'>{flat.metroDistance ? `${flat.metroDistance} min walk` : 'No data'}</span>
                    </li>
                    <li className='flex items-center gap-2 text-xl mb-5'>
                        <RiPinDistanceLine className='text-2xl'/>
                        <span>GF job distance :</span>
                        <span
                            className='font-bold'>{flat.gfJobDistance ? `${flat.gfJobDistance} min MHD` : 'No data'}</span>
                    </li>
                    <li className='flex items-center gap-2 text-xl mb-5'>
                        <RiPinDistanceLine className='text-2xl'/>
                        <span>BF job distance:</span>
                        <span
                            className='font-bold'>{flat.bfJobDistance ? `${flat.bfJobDistance} min MHD` : 'No data'}</span>
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
                        <span className='font-bold'>{flat.availableFrom}</span>
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
                        <a href={flat.link} target='_blank'
                           className='hover:font-bold transition-all underline underline-offset-4'>
                            Link to advert
                        </a>
                    </li>
                </ul>
            </div>
            {flat.note && <p className='text-xl ml-6'><strong>Note: </strong><br/>{flat.note}</p>}
        </>
    )
}