import {useForm} from "react-hook-form";
import '../../styles/form.scss'
import {IFlat} from "../../types.ts";
import {useFlatContext} from "../../contexts/flatContext.tsx";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;
import {addFlatAPI} from '../../apiServices/addFlatAPI.tsx'
import {editFlatAPI} from "../../apiServices/editFlatAPI.tsx";

interface IProps {
    handleSuccess: () => void
}

export const EditFlatForm = ({handleSuccess}: IProps) => {
    const flat: IFlat = useFlatContext()
    const form = useForm<IFlat>({
        defaultValues: {
            name: flat.name ?? null,
            link: flat.link ?? null,
            size: flat.size ?? null,
            layout: flat.layout ?? '2+kk',
            photo: flat.photo ?? null,
            prettyScore: flat.prettyScore ?? null,
            isFavorite: flat.isFavorite ?? false,
            metroDistance: flat.metroDistance ?? null,
            distanceToInfinit: flat.distanceToInfinit ?? null,
            distanceToSmartlook: flat.distanceToSmartlook ?? null,
            equipped: flat.equipped ?? false,
            district: flat.district ?? null,
            availableFrom: flat.availableFrom ?? 'June',
            sentMessage: flat.sentMessage ?? false,
            price: flat.price ?? null,
            deposit: flat.deposit ?? null,
            commission: flat.commission ?? null,
            includeEnergies: flat.includeEnergies ?? false,
            hasAnswer: flat.hasAnswer ?? false,
            note: flat.note ?? null,
        }
    });
    const {register, handleSubmit, formState} = form
    const {errors} = formState

    const now = new Date()

    const onSubmit = (data: IFlat) => {
        if (Object.keys(flat).length > 0) {
            data.id = flat.id
            data.isVisible = flat.isVisible
            data.features = flat.features
            data.createdAt = flat.createdAt
            data.lastEditedAt = now
            return editFlatAPI(data, handleSuccess)
        } else {
            data.isVisible = true
            return addFlatAPI({
                ...data,
                features: [],
                createdAt: now,
                lastEditedAt: now
            }, handleSuccess);
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='text-mauve11' noValidate>
                <div className="flex items-center gap-8 mb-8">
                    <div className=" w-1/3 relative">
                        <label htmlFor="name">Name*</label>
                        <input type="text" id="name" placeholder='Set name of Flat'
                               className="input-styles" {...register('name', {
                            required: 'Name is required!'
                        })}/>
                        <p className='text-red-500 mt-2 absolute -bottom-5 right-0 text-sm'>{errors.name?.message}</p>
                    </div>
                    <div className=" w-1/3 relative">
                        <label htmlFor="link">Link to advert*</label>
                        <input type="text" id="link"
                               placeholder='https://www.bezrealitky.cz/nemovitosti-byty-domy/689954-nabidka-pronajem-bytu-drahobejlova-hlavni-mesto-praha'
                               className="input-styles" {...register('link')}/>
                        <p className='text-red-500 mt-2 absolute -bottom-5 right-0 text-sm'>{errors.link?.message}</p>
                    </div>
                    <div className=" w-1/3 relative">
                        <label htmlFor="photo">Photo*</label>
                        <input type="text" id="photo"
                               placeholder='Right click + copy image address'
                               className="input-styles" {...register('photo')}/>
                        <p className='text-red-500 mt-2 absolute -bottom-5 right-0 text-sm'>{errors.photo?.message}</p>
                    </div>
                </div>

                <div className="flex items-center gap-8 mb-8">
                    <div className=" w-1/3 relative">
                        <label htmlFor="size">Size*</label>
                        <input type="number" id="size" placeholder='m&#178;'
                               className="input-styles" {...register('size', {
                            required: 'Size is required!'
                        })}/>
                        <p className='text-red-500 mt-2 absolute -bottom-5 right-0 text-sm'>{errors.size?.message}</p>
                    </div>
                    <div className=" w-1/3 relative">
                        <label htmlFor="prettyScore">Pretty points*</label>
                        <input type="number" id="prettyScore" placeholder='x / 10 points'
                               className="input-styles" {...register('prettyScore', {
                            required: 'Pretty points are required!'
                        })}/>
                        <p className='text-red-500 mt-2 absolute -bottom-5 right-0 text-sm'>{errors.prettyScore?.message}</p>
                    </div>
                    <div className=" w-1/3 relative">
                        <label htmlFor="district">District*</label>
                        <input type="text" id="district" placeholder='Set a district'
                               className="input-styles" {...register('district', {
                            required: 'District is required!'
                        })}/>
                        <p className='text-red-500 mt-2 absolute -bottom-5 right-0 text-sm'>{errors.district?.message}</p>
                    </div>
                </div>

                <div className="flex items-center gap-8 mb-8">
                    <div className="w-1/3 relative">
                        <label htmlFor="price">Price*</label>
                        <input type="number" id="price" placeholder='Kč'
                               className="input-styles" {...register('price', {
                            required: 'Price is required!'
                        })}/>
                        <p className='text-red-500 mt-2 absolute -bottom-5 right-0 text-sm'>{errors.price?.message}</p>
                    </div>
                    <div className="w-1/3">
                        <label htmlFor="deposit">Deposit</label>
                        <input type="number" id="deposit" placeholder='Kč'
                               className="input-styles" {...register('deposit')}/>
                    </div>
                    <div className="w-1/3">
                        <label htmlFor="commission">Commission</label>
                        <input type="number" id="commission" placeholder='Kč'
                               className="input-styles" {...register('commission')}/>
                    </div>
                </div>

                <div className="flex items-center gap-8 mb-8">
                    <div className=" w-1/3">
                        <label htmlFor="metroDistance">Metro Distance</label>
                        <input type="number" id="metroDistance" placeholder="Min walk"
                               className="input-styles" {...register('metroDistance')}/>
                    </div>
                    <div className=" w-1/3">
                        <label htmlFor="distanceToInfinit">Distance to Infinit</label>
                        <input type="number" id="distanceToInfinit"
                               placeholder="min MHD" className="input-styles" {...register('distanceToInfinit')}/>
                    </div>
                    <div className=" w-1/3">
                        <label htmlFor="distanceToSmartlook">Distance to Smartlook</label>
                        <input type="text" id="distanceToSmartlook"
                               placeholder="min MHD" className="input-styles" {...register('distanceToSmartlook')}/>
                    </div>
                </div>

                <div className="flex items-center gap-8 mb-8">
                    <div className="w-1/3 relative">
                        <label htmlFor="availableFrom">Available from*</label>
                        <select id="availableFrom" {...register('availableFrom')}
                                className="select-styles">
                            <option value="Now">Now</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                        </select>
                    </div>
                    <div className="w-1/3 relative">
                        <label htmlFor="layout">Layout*</label>
                        <select id="layout" {...register('layout')}
                                className="select-styles">
                            <option value="2+kk">2+kk</option>
                            <option value="2+1">2+1</option>
                            <option value="3+kk">3+kk</option>
                            <option value="3+1">3+1</option>
                            <option value="atypical">Atypical</option>
                        </select>
                    </div>
                    <div className="w-1/3">
                        <label htmlFor="includeEnergies" className="text-xl block">Include
                            energies</label>
                        <input type="checkbox" id="includeEnergies" {...register('includeEnergies')}
                               className='checkbox-styles'/>
                    </div>
                </div>

                <div className="flex items-center gap-8">
                    <div className="w-1/4">
                        <label htmlFor="isFavorite" className="text-xl block text-center">Set as favorite</label>
                        <input type="checkbox" id="isFavorite" {...register('isFavorite')}
                               className='checkbox-styles mx-auto'/>
                    </div>
                    <div className="w-1/4">
                        <label htmlFor="equipped" className="text-xl block text-center">Equipped</label>
                        <input type="checkbox" id="equipped" {...register('equipped')}
                               className='checkbox-styles mx-auto'/>
                    </div>
                    <div className="w-1/4">
                        <label htmlFor="sentMessage" className="text-xl block text-center">Sent Message?</label>
                        <input type="checkbox" id="sentMessage" {...register('sentMessage')}
                               className='checkbox-styles mx-auto'/>
                    </div>
                    <div className="w-1/4">
                        <label htmlFor="hasAnswer" className="text-xl block text-center">Has Answer?</label>
                        <input type="checkbox" id="hasAnswer" {...register('hasAnswer')}
                               className='checkbox-styles mx-auto'/>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="w-full">
                        <label htmlFor="note" className="text-xl block text-center">Note</label>
                        <textarea rows={4} id="note" {...register('note')}
                                  className='input-styles h-24'/>
                    </div>
                </div>
                <button
                    className='px-6 py-3 rounded-md bg-gray-300 mt-8 block mx-auto text-black hover:bg-gray-400 hover:scale-105 transition-all'>
                    Confirm
                </button>
            </form>
        </>
    )
}