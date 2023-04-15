import React from 'react';
import {useForm} from "react-hook-form";
import '../../styles/form.scss'

export const EditFlatForm = () => {
    const form = useForm();
    const {register} = form
    const onSubmit = (data: any) => console.log(data);
    const handleSubmit = () => console.log('submitted')

    return (
        <form className='text-mauve11'>
            <div className="flex items-center gap-8 mb-8">
                <div className=" w-1/2">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder='Set name of Flat' {...register('name')}
                           className="input-styles"/>
                </div>
                <div className=" w-1/2">
                    <label htmlFor="photo">Photo</label>
                    <input type="text" id="photo" placeholder='https://www.bezrealitky.cz/nemovitosti-byty-domy/689954-nabidka-pronajem-bytu-drahobejlova-hlavni-mesto-praha' {...register('photo')}
                           className="input-styles"/>
                </div>
            </div>

            <div className="flex items-center gap-8 mb-8">
                <div className=" w-1/3">
                    <label htmlFor="size">Size</label>
                    <input type="number" id="size" placeholder='m&#178;' {...register('size')}
                           className="input-styles"/>
                </div>
                <div className=" w-1/3">
                    <label htmlFor="prettyScore">Pretty Score</label>
                    <input type="number" id="prettyScore" placeholder='x / 10 points' {...register('prettyScore')} min="1" max="10"
                           className="input-styles"/>
                </div>
                <div className=" w-1/3">
                    <label htmlFor="district">District</label>
                    <input type="text" id="district" placeholder='Set a district' {...register('district')}
                           className="input-styles"/>
                </div>
            </div>

            <div className="flex items-center gap-8 mb-8">
                <div className="w-1/3">
                    <label htmlFor="price">Price</label>
                    <input type="number" id="price" placeholder='Kč' {...register('price')}
                           className="input-styles"/>
                </div>
                <div className="w-1/3">
                    <label htmlFor="deposit">Deposit</label>
                    <input type="number" id="deposit" placeholder='Kč' {...register('deposit')}
                           className="input-styles"/>
                </div>
                <div className="w-1/3">
                    <label htmlFor="commission">Commission</label>
                    <input type="number" id="commission" placeholder='Kč' {...register('commission')}
                           className="input-styles"/>
                </div>
            </div>

            <div className="flex items-center gap-8 mb-8">
                <div className=" w-1/3">
                    <label htmlFor="metroDistance">Metro Distance</label>
                    <input type="number" id="metroDistance" placeholder="Min walk" {...register('metroDistance')}
                           className="input-styles"/>
                </div>
                <div className=" w-1/3">
                    <label htmlFor="distanceToInfinit">Distance to Infinit</label>
                    <input type="number" id="distanceToInfinit" placeholder="min MHD" {...register('distanceToInfinit')}
                           className="input-styles"/>
                </div>
                <div className=" w-1/3">
                    <label htmlFor="distanceToSmartlook">Distance to Smartlook</label>
                    <input type="text" id="distanceToSmartlook" placeholder="min MHD" {...register('distanceToSmartlook')}
                           className="input-styles"/>
                </div>
            </div>

            <div className="flex items-center gap-8 mb-8">
                <div className="w-1/3">
                    <label htmlFor="available">Available from</label>
                    <select id="available" {...register('available')}
                            className="block mt-2 w-full px-4 py-3 border rounded-md focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 bg-transparent hover:bg-gray-100 transition-all">
                        <option value="June">June</option>
                        <option value="July">July</option>
                    </select>
                </div>
                <div className="w-1/3">
                    <label htmlFor="layout">Layout</label>
                    <select id="layout" {...register('layout')}
                            className="block mt-2 w-full px-4 py-3 border rounded-md focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 bg-transparent hover:bg-gray-100 transition-all">
                        <option value="2+kk">2+kk</option>
                        <option value="2+1">2+1</option>
                        <option value="3+kk">3+kk</option>
                        <option value="3+1">3+1</option>
                        <option value="atypical">Atypical</option>
                    </select>
                </div>
                <div className="w-1/3">
                    <label htmlFor="includeEnergies" className="text-xl block text-center">Include electricity</label>
                    <input type="checkbox" id="includeEnergies" {...register('includeEnergies')} className='block mx-auto mt-5 mb-3 h-5 w-5' />
                </div>
            </div>

            <div className="flex items-center gap-8">
                <div className="w-1/4">
                    <label htmlFor="isFavorite" className="text-xl block text-center">Set as favorite</label>
                    <input type="checkbox" id="isFavorite" {...register('isFavorite')} className='block mx-auto mt-5 mb-3 h-5 w-5' />
                </div>
                <div className="w-1/4">
                    <label htmlFor="equipped" className="text-xl block text-center">Equipped</label>
                    <input type="checkbox" id="equipped" {...register('equipped')} className='block mx-auto mt-5 mb-3 h-5 w-5' />
                </div>
                <div className="w-1/4">
                    <label htmlFor="sentMessage" className="text-xl block text-center">Sent Message?</label>
                    <input type="checkbox" id="sentMessage" {...register('sentMessage')} className='block mx-auto mt-5 mb-3 h-5 w-5' />
                </div>
                <div className="w-1/4">
                    <label htmlFor="hasAnswer" className="text-xl block text-center">Has Answer?</label>
                    <input type="checkbox" id="hasAnswer" {...register('hasAnswer')} className='block mx-auto mt-5 mb-3 h-5 w-5' />
                </div>
            </div>
            <button className='px-6 py-3 rounded-md bg-gray-300 mt-8 block mx-auto text-black hover:bg-gray-400 hover:scale-105 transition-all' >
                Confirm
            </button>

        </form>
    )
}