// import {memo} from 'react'

// function Content({count}) {
  
    
//     return (
//         <div>
//             <h1>Hello các em gái xinh {count}</h1>
//         </div>
//     )
// }
// export default memo(Content)



import {memo} from 'react'

function Content({onIncrease}) {
  
  
    return (
        <>
        <h2>hello các em gái xinh</h2>
        <button onClick={onIncrease}>click me!</button>
        </>
    )
}
export default memo(Content)