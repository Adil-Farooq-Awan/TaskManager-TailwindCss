/*useMyRef
is specific to Todo
it checks for editingId and id (which is todo.id) 
if matched then calls .focus()
*/
import { useRef, useEffect } from "react";

export default function useMyRef(initialValue = null, editingId, id ){
    const inputRef = useRef(initialValue);

    useEffect(()=>{
    if(editingId === id){
      inputRef.current.focus();
    }
  },[editingId, id]);

    return inputRef;
}