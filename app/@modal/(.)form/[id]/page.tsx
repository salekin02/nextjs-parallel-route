"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Modal from "./modal"
import { SheetDemo } from "./sheet"


const Form = ({ params, ...props }) => {
    const [open, setOpen] = useState(true)
    const route = useRouter()
    console.log('Form', params);
    useEffect(() => {
        if (!open) route.back()
    }, [open])
    return (
        <>
            {params?.id == 1 ?
                <Modal open={open} onOpenChange={setOpen} />
                :
                <SheetDemo open={open} onOpenChange={setOpen} />}
        </>
    )
}

export default Form