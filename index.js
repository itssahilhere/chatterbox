import express from 'express';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';
import { messageModel } from './message.schema.js';
const app = express();
app.use(cors());
export const server=http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {
    console.log("Connection made.");

    socket.on("join", async (data) => {
        // emiting the previous message
        socket.username = data.username;
        messageModel.find({}).sort({ timestamp: 1 }).limit(50).then(messages => {
            socket.emit('previousMessages', messages);
        }).catch(err => {
            console.error("Error fetching previous messages:", err);
        });
        // emit user joined name to all members
        // console.log(data.username);
        socket.broadcast.emit('join_message', {username:data.username});
    });
    // listen for new messages
    socket.on("new_message", async (data) => {
        const newMessage = new messageModel({ username: data.username, text: data.message });
        await newMessage.save();
        // emit new message to all members except sender    
        socket.broadcast.emit('new_message', {
            username: data.username,
            text: data.message
        });
    });
    //listen for typing
    socket.on("typing", (data) => {
        if (data.typing === true) {
          socket.broadcast.emit("display", { username: data.username });
        } else {
          socket.broadcast.emit("stop_typing", { username: data.username });
        }
      });
      // diconnection user
      socket.on("user_disconnecting", (data) => {
        console.log(`${data.username} is disconnecting.`);
        // Notify other clients that the user is leaving
        socket.broadcast.emit("user_disconnected", { username: data.username });
      });
      
      
    socket.on("disconnect", () => {
        console.log("Connection disconnected.");
    });
});