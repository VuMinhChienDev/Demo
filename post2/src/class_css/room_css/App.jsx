import { useRef } from 'react'
import Video from './video'


function App() {
  const videoRef = useRef()
  
  const handlePlay = () => {
    videoRef.current.play()
  }
  const handlePause = () => {
    videoRef.current.pause()
  }

  

  return (

      <div>
         <Video ref={videoRef}/>
         <button onClick={handlePlay}>play</button>
         <button onClick={handlePause}>Pause</button>
      </div>
   
  )
}

export default App
