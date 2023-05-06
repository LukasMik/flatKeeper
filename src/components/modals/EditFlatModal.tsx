import * as Dialog from '@radix-ui/react-dialog';
import {AiOutlinePlus, BsPencilFill, RxCross2} from "react-icons/all";
import {EditFlatForm} from "../forms/EditFlatForm.tsx";
import {useEffect, useState} from "react";

interface IStatus {
    status: 'new' | 'edit'
    onOpenChange: () => void
    isFormPrepared: boolean
}

export const EditFlatModal = ({status, onOpenChange, isFormPrepared}: IStatus) => {
    const [formSuccess, setFormSuccess] = useState<boolean>(false)
    useEffect(() => {
        isFormPrepared ? setFormSuccess(false) : null
    }, [isFormPrepared]);

    const dialogContent = () => {
        if (formSuccess && status === 'new') {
            return <p className="text-3xl text-center py-24">Flat has been successfully added!</p>
        } else if (formSuccess && status === 'edit') {
            return <p className="text-3xl text-center py-24">Flat has been successfully edited!</p>
        } else {
            return <EditFlatForm handleSuccess={() => setFormSuccess(true)}/>
        }
    }

    return (
        <Dialog.Root onOpenChange={onOpenChange}>
            <Dialog.Trigger asChild>
                <button
                    className="h-16 w-16 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-70 rounded-2xl tranform hover:scale-110 transition-all">
                    {status === 'new' ? <AiOutlinePlus className='text-gray-100 text-4xl'/> :
                        <BsPencilFill className='text-gray-100 text-2xl'/>}
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0"/>
                <Dialog.Content
                    className="mt-24 md:mt-0 p-8 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[900px] overflow-y-auto translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-20">
                    <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium mb-8">
                        {status === 'new' ? 'Add new flat' : 'Edit flat'}
                    </Dialog.Title>
                    <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
                    </Dialog.Description>
                    {dialogContent()}
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