import {ALLREQUIRES} from "../../constants/requires.ts";

export const ListPage = () => {
    return (
        <>
            <div className="flex justify-around">
                <div className="flex flex-col items-center">
                    <p className="text-4xl mb-12">Required</p>
                    {ALLREQUIRES.map(r => r.severity === 'required' && <div className='text-3xl mb-4 flex flex-col items-center' key={r.id}><p>{r.name}</p><r.icon /></div>)}
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-4xl mb-12">Optional</p>
                    {ALLREQUIRES.map(r => r.severity === 'optional' && <div className='text-3xl mb-4 flex flex-col items-center' key={r.id}><p>{r.name}</p><r.icon /></div>)}
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-4xl mb-12">Bonus</p>
                    {ALLREQUIRES.map(r => r.severity === 'bonus' && <div className='text-3xl mb-4 flex flex-col items-center' key={r.id}><p>{r.name}</p><r.icon /></div>)}
                </div>
            </div>
        </>
    )
}