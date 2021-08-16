import React from 'react';
import { useWebSocketEmitter, useWebSocketSubscriber } from '@hooksplace/socketio';


const Test = () => {
    const { emit } = useWebSocketEmitter()
    const { data: message } = useWebSocketSubscriber("dan")
    return <>
        <button onClick={() => emit("youssef", "hhhhhh")}>Click</button>
        <span>{message}</span>
    </>
}

export default Test;