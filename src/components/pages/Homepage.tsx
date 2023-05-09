import {NavLink} from "react-router-dom";

export const Homepage = () => {
    return (
        <div className='mx-4 md:mx-12 lg:mx-64'>
            <h1 className="text-center pb-6">Welcome on Flat Keeper!</h1>
            <h3 className='text-center pb-8'>Are you moving and looking for a new place to live? <br/> Using this
                application you can store all of your favourites apartments on one place.</h3>
            <p className='pb-4'><b>The App allows you to:</b></p>
            <ul>
                <li className='py-2'>Add a new flat by hit the '+' button on the right bottom of your screen</li>
                <li className='py-2'>Click on the specific flat in the list to open <b>flat overview page</b> with more
                    information
                </li>
                <li className='py-2'>Edit your flat by hit the 'pen' button in the flat overview</li>
                <li className='py-2'>Add or remove features of the flat by click on the 'ring' elements</li>
                <li className='py-2'>Sort all your flats by your preferences</li>
                <li className='py-2'>Set flats as favourites or delete them. Deleted apartments are stored
                    in <b>History</b> page
                </li>
            </ul>
            <button className="mx-auto w-fit block mt-8 border border-black rounded-sm px-4 py-2 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all "><NavLink to="/flats-overview/active-flats">Show my flats!</NavLink></button>
        </div>
    )
}