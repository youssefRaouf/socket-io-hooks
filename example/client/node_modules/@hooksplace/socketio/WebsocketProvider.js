import React, { useEffect } from 'react';
import { useWebSocket } from './hooks';


const WebsocketProvider = ({ children, url, transports = ['websocket'], token }) => {
  const { openConnection, closeConnection } = useWebSocket();
  useEffect(() => {
    openConnection(url, transports, token);
    return () => {
      closeConnection();
    };
  }, []);

  return <>{children}</>;
};

export default WebsocketProvider;
