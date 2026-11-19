import {useRef, useEffect} from "react";

export default function useAutoFocus(initialValue = null){
    const inputRef = useRef(initialValue);

    useEffect(()=> {
        inputRef.current.focus();
    },[]);
    return inputRef;
}