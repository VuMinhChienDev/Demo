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