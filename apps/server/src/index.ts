import express from "express";
import http from "http";
import {Server} from "socket.io";
import cors from "cors";

const app= express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
    }
});

io.on("connection", (socket)=>{
    console.log("User Connected", socket.id);
    socket.on("join_room", (data)=>{
        socket.join(data.roomId);

        console.log(`${data.username} joined ${data.roomId}`);

        io.to(data.roomId).emit("room_joined", {
            message: `${data.username} joined the room.`
        });
    });

    socket.on("disconnect", ()=>{
        console.log("User Disconnect: ",socket.id );
    });
});

server.listen(3001,()=>{
    console.log("Server is running on port 3001.")
});