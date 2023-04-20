import {Severity} from "../types.ts";
import {RequiresAvailable} from "./RequiresAvailable.tsx";
import {RequiresUsed} from "./RequiresUsed.tsx";

export const RequiresModalContent = () => {
    return (
        <div className="flex items-stretch mt-8">
            <div className="w-2/3">
                <RequiresAvailable severity={Severity.Required}/>
                <RequiresAvailable severity={Severity.Optional}/>
                <RequiresAvailable severity={Severity.Bonus}/>
            </div>
            <div className="w-1/3">
                <p className="text-2xl text-center mb-4">Used</p>
                <div className="flex justify-around">
                    <RequiresUsed severity={Severity.Required}/>
                    <RequiresUsed severity={Severity.Optional}/>
                    <RequiresUsed severity={Severity.Bonus}/>
                </div>
            </div>
        </div>

    )
}