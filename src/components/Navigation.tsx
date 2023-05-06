import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";

export const Navigation = () => {
    const [scrollClasses, setScrollClasses] = useState('')

    const scrollBreakPoint: number = 20
    const scrollDownClasses: string = 'bg-opacity-50 h-16 text-gray-100'
    const scrollUpClasses: string = 'h-20'

    useEffect(() => {
        window.scrollY > scrollBreakPoint ? setScrollClasses(scrollDownClasses) : setScrollClasses(scrollUpClasses)
        window.addEventListener("scroll", () => {
            return window.scrollY > scrollBreakPoint ? setScrollClasses(scrollDownClasses) : setScrollClasses(scrollUpClasses)
        });
    }, []);

    return (
        <ul className={`flex items-center justify-end w-full px-12 gap-12 py-4 fixed z-50 transition-all bg-black bg-opacity-0 filter ${scrollClasses}`}>
            <li className='hover:font-bold transition-all'><NavLink to="/">My flats</NavLink></li>
            <li className='hover:font-bold transition-all'><NavLink to="/history">History</NavLink></li>
        </ul>
    )
}