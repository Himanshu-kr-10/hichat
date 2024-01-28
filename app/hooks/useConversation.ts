import { useMemo } from "react";
import { useParams } from "next/navigation";

const useConversation = () => {
    const params = useParams();
    const conversationId = useMemo(() => {
        if(!params?.conversationId){
            return '';
        }

        return params.conversationId as string
    }, [params?.conversationId]);

    const isOpen = useMemo(() => !!conversationId, [conversationId]) //here the double exclamation turns the string into boolean

    return useMemo(() => ({
        isOpen,
        conversationId
    }), [isOpen, conversationId])
}

export default useConversation