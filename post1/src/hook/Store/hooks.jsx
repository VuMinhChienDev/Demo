import Content from "./Context";
import { useContext } from "react";


export const useState = () => {
    const [state, dispatch] = useContext(Content)
    return[state, dispatch]
}