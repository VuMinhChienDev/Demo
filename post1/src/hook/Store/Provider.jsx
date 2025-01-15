

// import React, { useReducer } from "react";
// import reducer, { initState } from "./reducer";
// import Context from "./Context";

// function Provider({ children }) {
//     const [state, dispatch] = useReducer(reducer, initState);

//     return (
//         <Context.Provider value={[state, dispatch]}>
//             {children}
//         </Context.Provider>
//     );
// }

// export default Provider;

import React, { useReducer } from "react";
import Context from "./Context";
import reducer, { initState } from "./reducer";

function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    );
}

export default Provider;