'use client'

import Modal from "@/app/components/Modal";
import Image from "next/image";

type ImageModalProps = {
    isOpen?: boolean;
    onClose: () => void;
    src?: string | null
}

const ImageModal = ({src, isOpen, onClose} : ImageModalProps) => {
    if(!src){
        return null
    }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
        <div className="w-80 h-80">
            <Image 
                alt="Image"
                src={src}
                className="object-cover"
                fill
            />
        </div>    
    </Modal>
  )
}

export default ImageModal