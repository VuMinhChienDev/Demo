import { useEffect, useState } from 'react';


function Content() {
    const [countdow, setCountdow] = useState(180)

useEffect(() => {
   const timeID = setInterval(() => {
        // setCountdow(countdow - 1)
        // console.log('countdow', countdow)
        setCountdow(prevState => prevState -1)
        console.log('countdow...')

  }, 1000)
  return () => {
    clearInterval(timeID)
  }
},[])
    

    return (
        <div>
            <h1>{countdow}</h1>
        </div>
    )
       
}

export default Content
