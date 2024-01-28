import { MdContentCopy } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";


const CopyButton = (copyString) => {

    const[copyState, setCopyState] = useState(false)
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(copyString);
            setCopyState(true);
            setTimeout(() => setCopyState(false), 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };


    return (

        <button onClick={handleCopy}
            className="flex items-center justify-between w-[80px] rounded-xl p-1 font-extralight"
        >  
            {!copyState 
                ? <>
                    <MdContentCopy/>
                    <p className="mx-auto">Copy</p>
                  </>
                : <>
                    <FaCheck/>  
                    <p>Copied!</p>
                  </>
            }
        </button>
    
    )
}

export default CopyButton