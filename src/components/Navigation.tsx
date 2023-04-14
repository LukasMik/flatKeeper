import {NavLink} from "react-router-dom";

export const Navigation = () => {
    return(
        <ul className='flex items-center justify-end w-full px-12 gap-12 py-4 fixed'>
            <li className='hover:font-bold transition-all'><NavLink to="/">Home</NavLink></li>
            <li className='hover:font-bold transition-all'><NavLink to="/list">List</NavLink></li>
            <li className='hover:font-bold transition-all'><NavLink to="/history">History</NavLink></li>
        </ul>
    )
}