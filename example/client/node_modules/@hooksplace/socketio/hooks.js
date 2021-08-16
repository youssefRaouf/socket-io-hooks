import { useEffect, useState } from 'react';
import io from 'socket.io-client';

let socket = null;
const useWebSocket = () => {

  const openConnection = async (url, transports, token) => {
    socket = io(`${url}`, {
      transports,
      auth: {
        token
      }
    });
  };

  const closeConnection = () => {
    socket.close();
  };

  return {
    openConnection,
    closeConnection
  };
};

const useWebSocketEmitter = () => {
  const emit = (eventName, data) => {
    socket.emit(eventName, data);
  };
  return { emit }
}

const useWebSocketSubscriber = (eventName) => {
  const [data, setData] = useState()
  useEffect(() => {
    setTimeout(() => {
      socket.on(eventName, (data) => {
        setData(data)
      });
    }, 100)

    return () => {
      socket.off(eventName);
    }

  }, [])
  return { data }
}

export { useWebSocket, useWebSocketSubscriber, useWebSocketEmitter };
