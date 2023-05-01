import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {IFlat} from "../../types.ts";
import {getFlatByIdAPI} from "../../apiServices/getFlatByIdAPI.tsx";
import {
    AiFillHeart,
    AiOutlineHeart, BsTrash3, BsTrash3Fill, TbDiamond
} from "react-icons/all";
import {EditFlatModal} from "../modals/EditFlatModal.tsx";
import {EditFlatFeaturesModal} from "../modals/EditFlatFeaturesModal.tsx";
import {FlatContextProvider} from "../../contexts/flatContext.tsx";
import {toggleFlatData} from "../../helpers/toggleFlatData.ts";
import {FlatDescription} from "../FlatDescription.tsx";

export const FlatDetailPage = () => {
    const {id} = useParams()
    const [flat, setFlat] = useState<IFlat | null>(null)
    const [reload, setReload] = useState<boolean>(false)
    const [isEditFormPrepared, setIsEditFormPrepared] = useState<boolean>(false)

    useEffect(() => {
        id ? getFlatByIdAPI(id).then(flat => setFlat(flat)) : null
    }, [id, reload, isEditFormPrepared])

    if (!flat)
        return null

    if (id)
        return (
            <div className='w-full md:w-4/5 xl:w-3/5 mx-auto'>
                <div className='h-96 md:h-hFlatDetail relative relative mx-4'>
                    <img src={flat.photo} alt="flat-image"
                         className='w-full h-full object-cover rounded-3xl'/>
                    <div className='absolute top-6 right-6 flex gap-4 md:block' title='Edit flat'>
                        <button
                            onClick={() => toggleFlatData('favourite', flat, () => setReload(!reload))}
                            className='block text-6xl hover:scale-110 transform transition-all mb-6'>
                            {flat.isFavorite ?
                                <AiFillHeart className='drop-shadow-lg text-red-600' title='Set as no favourite'/> :
                                <AiOutlineHeart className='drop-shadow-lg text-red-600' title='Set as favourite'/>
                            }
                        </button>
                        <button
                            onClick={() => toggleFlatData('delete', flat, () => setReload(!reload))}
                            className='block text-6xl hover:scale-110 transform transition-all mb-6'>
                            {flat.isVisible ?
                                <BsTrash3 className='drop-shadow-lg text-gray-600' title='Delete'/> :
                                <BsTrash3Fill className='drop-shadow-lg text-gray-600' title='Restore'/>
                            }
                        </button>
                    </div>
                    <div className='text-gray-100 text-5xl absolute bottom-6 left-6'>
                        <div className='gap-4 flex items-center'>
                            <TbDiamond className='drop-shadow-lg'/>
                            <p className='text-3xl font-bold drop-shadow-lg'>{flat.prettyScore} / 10</p>
                        </div>
                    </div>
                    <div title='Edit flat' onClick={() => setIsEditFormPrepared(true)}
                         className='absolute bottom-6 right-6'>
                        <FlatContextProvider flat={flat}>
                            <EditFlatModal status='edit' onOpenChange={() => setIsEditFormPrepared(false)}
                                           isFormPrepared={isEditFormPrepared}/>
                        </FlatContextProvider>
                    </div>
                    <div title='Add feature' className='absolute bottom-24 md:bottom-6 w-full flex justify-center'>
                        <FlatContextProvider flat={flat}>
                            <EditFlatFeaturesModal onOpenChange={() => setReload(!reload)}/>
                        </FlatContextProvider>
                    </div>
                </div>
                <FlatDescription flat={flat}/>
            </div>
        )
    else {
        return null
    }
}