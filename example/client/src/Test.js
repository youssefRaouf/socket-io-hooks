import React, { useEffect, useState } from 'react';
import { useWebSocket, useWebSocketEmitter, useWebSocketSubscriber } from './hooks';


const Test = () => {
    const { emit } = useWebSocketEmitter()
    const { data: message } = useWebSocketSubscriber("dan")
    return <>
        <button onClick={() => emit("youssef", "hhhhhh")}>Click</button>
        <span>{message}</span>
    </>
}

export default Test;