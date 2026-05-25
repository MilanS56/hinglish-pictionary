import { useEffect } from "react";
import { socket } from "./services/socket";

function App() {
  useEffect(() => {
    socket.emit("join_room", {
      roomId: "room-1",
      username: "Milan",
    });

    socket.on("room_joined", (data) => {
      console.log(data);
    });

    return () => {
      socket.off("room_joined");
    };
  }, []);

  return (
    <div>
      <h1>Hinglish Pictionary</h1>
    </div>
  );
}

export default App;