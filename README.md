# Chatterbox

Chatterbox is a real-time chat application built with Socket.IO, Node.js, and MongoDB. It allows users to join a chatroom, send messages, and see real-time updates for typing indicators and user connection/disconnection events. The application also stores previous messages and displays them to new users upon joining.

## Features

- **Real-Time Messaging:** Users can send and receive messages instantly.
- **User Notifications:** Notifications for new users joining and leaving the chat.
- **Typing Indicator:** Displays when a user is typing.
- **Message History:** Retrieves and displays the last 50 messages from MongoDB.
- **Responsive UI:** Optimized for both desktop and mobile devices.
- **Notification Sound:** Plays a sound for new messages and user actions.

## Technologies Used

### Frontend
- **HTML, CSS, JavaScript**: For creating the user interface.
- **Socket.IO (Client)**: For real-time communication with the server.

### Backend
- **Node.js & Express**: For server-side logic.
- **Socket.IO (Server)**: For managing real-time communication.
- **MongoDB**: For storing chat messages.

### Tools
- **npm**: For managing dependencies.
- **Socket.IO**: For WebSocket-based communication.
- **Mongoose**: For interacting with the MongoDB database.

## Prerequisites

- **Node.js** (v14 or later)
- **npm** (v6 or later)
- **MongoDB** (running locally or a connection string for a cloud database)

## Installation

### Clone the Repository
```bash
git clone https://github.com/your-username/chatterbox.git
cd chatterbox
```

### Install Dependencies
```bash
npm install
```

### Setup MongoDB
Ensure MongoDB is running on your local machine or set up a cloud database. Update the MongoDB connection string in `message.schema.js`:
```javascript
const mongoose = require('mongoose');
mongoose.connect('your-mongodb-connection-string', { useNewUrlParser: true, useUnifiedTopology: true });
```

### Run the Server
```bash
npm start
```
The server will start on `http://localhost:3000`.

### Open the Application
Open `index.html` in your browser to access the chat interface.

## Usage

1. Open the application in a browser.
2. Enter your name when prompted.
3. Start chatting! Messages and user notifications will appear in real-time.

## Folder Structure
```
chatterbox/
│   ├── index.html       # Main client-side HTML file
│   ├── style.css        # Styling for the chat interface
│   └── script.js        # Client-side JavaScript
│   ├── server.js        # Main Node.js server file
│   ├── message.schema.js# MongoDB message schema
├── package.json         # Node.js dependencies and scripts
└── README.md            # Project documentation
```

## Event Listeners

### Client-Side Events
- `new_message`: Sends a new message to the server.
- `typing`: Notifies the server when a user is typing.
- `user_disconnecting`: Alerts the server that a user is disconnecting.

### Server-Side Events
- `join`: Handles user connection and sends the chat history.
- `new_message`: Broadcasts new messages to all connected users.
- `typing`: Broadcasts typing notifications to other users.
- `user_disconnected`: Notifies users when someone leaves the chat.

## Enhancements

- Add support for private chats.
- Integrate authentication for secure user sessions.
- Improve UI with more modern libraries (e.g., React, Tailwind CSS).
- Deploy on a cloud platform (e.g., Heroku, Vercel).

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
Feel free to contribute by submitting issues or pull requests on the [GitHub repository](https://github.com/your-username/chatterbox).
