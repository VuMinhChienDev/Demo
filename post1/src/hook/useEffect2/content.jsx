//bài 1 click hiển thị số lần click

// import { useEffect, useState } from 'react';


// function Content() {
//     const [count, setCount] = useState(1)
//    useEffect(() => {
//     console.log( `Mounted or Re-render${count}`)

//     return () => {
//         console.log(`Cleanup lần ${count}`)
//     }

//    }, [count])

    

//     return (
//         <div>
//            <h1>{count}</h1>
//            <button onClick={() => setCount(count + 1 )}>
//             click me!
//             </button>
//         </div>
//     )
       
// }

// export default Content;

import { useEffect, useState } from 'react';


function Content () {
    const [avatar, setAvatar ] = useState()
useEffect(() => {
    //cleanup
    return () => {
       avatar && URL.revokeObjectURL(avatar.preview)
    }

},[avatar])

    const handlePreviewAvatar =(e) => {
        const file = e.target.files[0];

        file.preview = URL.createObjectURL(file)

        setAvatar(file)
    }
  return (
    <div>
        <input type="file"
        onChange={handlePreviewAvatar}
        />
        {avatar && (
            <img src={avatar.preview} alt="" width="80%" />
        )}
    </div>
  )
}
export default Content;