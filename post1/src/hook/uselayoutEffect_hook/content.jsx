/*
1.cập nhật lại state 
2.cập nhật dom
3.render lại ui
4.gọi cleanup nếu deps thay đổi
5. gọi useEffect callback
*/
import { useEffect, useState } from 'react';


function Content() {
    const [count, setCount] = useState(0)
   
    // useEffect bị chớp
   useLayoutEffect(() => {
        if (count > 3)
            setCount(0)
    }, [count])

    const handleRun = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleRun}>Run</button>
        </div>
    )
}
export default Content;