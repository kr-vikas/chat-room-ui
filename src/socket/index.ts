import { useState, useEffect, useCallback } from 'react';
import { io, Socket } from 'socket.io-client';
import _ from "lodash";

const useSocket = (props?: {host: string}) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [hostCount, setHostCount] = useState<number>(0);
  const [room, setRoom] = useState<string>('');

  useEffect(() => {
    if (props?.host && !socket?.id) {
      const newSocket = io(props.host);
      setSocket(newSocket);

      return () => {
        newSocket.disconnect();
        setSocket(null);
      };
    }
  }, [props?.host, socket?.id]);

  const useSocketDisconnect = useCallback(() => {
    if (socket?.id) {
      socket.disconnect();
    }
  }, [socket?.id]);

  useEffect(() => {
    // Listen for the 'connect' event
    if (socket?.id) {
      socket.on('connect', () => {
        console.log(`Socket connected: ${socket.id}`);
      });
    }
  }, [socket?.id]);

  useEffect(() => {
    // Listen for the 'roomHostCount' event to update the host count in the UI
    if (socket?.id) {
      socket.on('roomHostCount', (room: string, count: number) => {
        if (room === room) setHostCount(count);
      });
    }

    // Unsubscribe from the 'roomHostCount' event
    return () => {
      if (socket?.id) {
        socket.off('roomHostCount');
      }
    };
  }, [socket?.id, room]);

  const useCreateRoom = (roomName: string) => {
    console.log('useCreateRoom', roomName, socket?.id);
    if (!_.isEmpty(socket?.id) && !_.isEmpty(roomName)) {
      console.log('useCreateRoom', roomName, socket);
      socket?.emit('createRoom', roomName);
      setRoom(roomName);
    }
  };


  const useJoinRoom = useCallback((roomName: string) => {
    if (socket?.id && !_.isEmpty(roomName)) {
      socket.emit('joinRoom', roomName);
      setRoom(roomName);
    }
  }, [socket?.id]);

  return { socket, hostCount, room, setRoom, useSocketDisconnect, useCreateRoom, useJoinRoom };
};

export default useSocket;
