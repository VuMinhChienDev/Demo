import { forwardRef, useRef, useImperativeHandle } from 'react';
import video1 from './videos/video1.mp4';

function Video(props, ref) {
    const videoRef = useRef(); 

    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play(); 
        },
        pause() {
            videoRef.current.pause(); 
        }
    }));

    return (
        <video 
            ref={videoRef} 
            width="320" 
            height="240" 
            controls
        >
            <source src={video1} type="video/mp4" />
        </video>
    );
}

export default forwardRef(Video); 
