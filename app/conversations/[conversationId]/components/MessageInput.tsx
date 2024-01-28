"use client"

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"

type MessageInputProps = {
    id: string,
    placeholder?: string,
    type?: string,
    required?: boolean,
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors
}

const MessageInput = ({
    placeholder,
    type,
    required,
    register,
    errors,
    id
} : MessageInputProps) => {
  return (
    <div className="relative w-full">
        <input 
            id={id} 
            autoComplete={id} 
            placeholder={placeholder} 
            type={type} 
            {...register(id, { required })} 
            className="
             text-black
             font-light
             py-2
             px-4
             bg-neutral-100
             w-full
             rounded-full
             focus:outline-none
            "
        />
    </div>
  )
}

export default MessageInput