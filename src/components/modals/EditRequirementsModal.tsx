import * as Dialog from '@radix-ui/react-dialog';
import {AiOutlinePlus, RxCross2} from "react-icons/all";
import {Requirements} from "../Requirements.tsx";

export const EditRequirementsModal = () => {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button
                    className="h-16 w-16 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-70 rounded-2xl tranform hover:scale-110 transition-all">
                    <AiOutlinePlus className='text-gray-100 text-4xl'/>
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0"/>
                <Dialog.Content
                    className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[900px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                    <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
                        Edit requirements
                    </Dialog.Title>
                    <Requirements/>
                    <Dialog.Close asChild>
                        <button
                            className="absolute top-4 right-4 border border-2 rounded-full p-1 group bg-black bg-opacity-10 hover:bg-opacity-20 transition-all "
                            aria-label="Close"
                        >
                            <RxCross2 className='group-hover:scale-110 transform transition-all'/>
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}