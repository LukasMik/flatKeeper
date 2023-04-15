import * as Dialog from '@radix-ui/react-dialog';
import {BsPencilFill, RxCross2} from "react-icons/all";

export const EditFlatModal = () => {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button
                    className="h-16 w-16 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-70 rounded-2xl tranform hover:scale-110 transition-all">
                    <BsPencilFill className='text-gray-100 text-2xl'/>
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
                <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                    <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
                        Edit Flat
                    </Dialog.Title>
                    <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
                        Test desc
                    </Dialog.Description>
                    <p>Test Content</p>
                    <Dialog.Close asChild>
                        <button
                            className="absolute top-4 right-4 border border-2 rounded-full p-1 group bg-black bg-opacity-10 hover:bg-opacity-20 transition-all "
                            aria-label="Close"
                        >
                            <RxCross2  className='group-hover:scale-110 transform transition-all'/>
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}