/* wana use useState try useMyState instead */
import { useState } from "react";

const useMyState = (initialValue = "") => {
    const [value, setValue] = useState(initialValue);
    return [value, setValue];
}; export default useMyState;