# Web Socket Zoom Clone Coding

## Nico Fastapi

- https://nomadcoders.co/noom/lectures/3075
- Nomad Coders
  <br/>

### Requirements

- Nodejs, Express, app.get(), Pug, template, (req, res)
  <br/>

### Server Setup

- `npm init -y`
- `npm install nodemon -D`
- `nodemon.json` and `babel.config.json`
- `npm install @babel/core @babel/cli @babel/node @babel/preset-env -D`
- `npm install express`
- `npm install pug`
- then in server.js, write codes to construct a server
  <br/>

### FrontEnd Setup

- Making static files to deliver..

- `src/public/app.js`
- in server.js
  - `app.set('view engine', 'pug');
- `src/public/views/home.pug`
- in app.js,
  - `app.set('views', __dirname + '/public/views');`
  - `app.use('/public', express.static(__dirname + '/public'));`
  - `app.get('/', (req, res) => res.render("home"));`
- we set views and render them using express, and do all other stuff using web socket!
- in home.pug,
  - `script(src="/public/js/app.js")`
- let's use MVP CSS to make all the default tags look better!
  <br/>

### Recap

- server.js on backend and app.js on frontend in our case
  <br/>

## Chat with WebSocket

### Introduction

### HTTP vs. WebSockets

- both are protocols
- HTTP: servers are built on this. stateless. backend forgets about who the user is after responding to a request
- Web Socket (ws) // Secure Web Socket (wss)
- Wss : (1) Websocket request (2) websocket accept ~> just like a handshake, then the connection is established.
  - then connection is bi-directional. stateful.
  - until websocket connection is closed
- browsers have webSocket APIs
- websocket is again just a protocol
  - not dependent on single language
  - or just frontend - backend
    <br/>

### WebSockets in JS

- start building a websocket server using NodeJs!!

- ws:a Node.js WebSocket library
- ws is a simple to use, blazing fast, & thoroughly tested WebSocket client+ server implementation
- `npm i ws`
- we will add ws functionality to express http server, rather than making two separate servers, each for http and ws
- so let's change how the express server is started
- we'll use http package built-in to all node.js

```javascript
import http from "http";
import WebSocket from "ws";

const app = express();
// ...
const server = http.createServer(app); //creating a http server using express
const wss = new WebSocket.Server({ server }); // wss + http - doing it b/c we want them in the same port!
server.listen(3000, listenHandle);
```

<br/>

### WebSocket Events

- now we will make the first connection - backend and frontend
- Browsers alreay have implementation for WebSocket connection!! Whoa!!!
  - so we dont need to do more on frontend
- `var aWebSocket = new WebSocket(url [, protocols]); // Mozilla

- backend
  - using ws is more like using event listeners
- socket is **someone** who's connected!
  - so we need to save it somewhere

```javascript
function handleConnection(socket) {
  console.log(socket);
}
wss.on("connection", handleConnection);
```

- nothing happens now, as nobody is connected via wss
- in app.js (frontend),
  - `const socket = new WebSocket("ws://localhost:3000");`
  - connecting frontend and backend !
- instead of specifying "localhost:3000"
- we want to make browsers detect it!
  - `ws://${window.location.host}`
- again, ws is the connection
- b/w browser and server!
  - in `server.js` socket is the browser connected
  - in `app.js` socket is the server connected!!
    <br/>

### WebSocket Messages

- in `server.js`,

```javascript
wss.on("connection", (socket) => {
  // console.log(socket)
  socket.send("hello!");
});
// message sent!
```

- now in frontend (`app.js`)
- receive the message ("event!!")

```javascript
socket.addEventListener("open", () => {
    console.log("Connected to Server ✔")
})

socket.addEventListener("message", (message)=>{
    console.log("Just got this message: ",message.data);
});

socket.addEventListener("close", () => {
    console.log("Disconnected from Server ✔")
}
```

- now send messages from frontend to backend
- in `app.js`,

```javascript
setTimeout(() => {
  socket.send("hello from the browser!");
}, 10000);
```

- in `server.js`,

```javascript
socket.on("mesage", (message) => {
  console.log(message);
});
```

<br/>

### Chat Completed

- make a form on the frontend side
- in both frontend and backend sides, socket.send(message)..
- make a fake database for connection among multiple users!

```javascript
const sockets = []; //fake database

wss.on("connection", (socket) => {
  sockets.push(socket);
  // ...
}
```

<br/>

### Nickname part 1

- let's show messages we get on the app!
- by adding li to ul
- adding nicknames
  - make a form for nicknames
- should set different types for "nickname"msgs and "message" msgs
- so from now on, we will send JSON insteadof text to distinguish which is which
  - but we can only send text! so we gotta use
  - JSON.stringify and JSON.parse
    <br/>

### Nickname part 2

- socket is like an object where we can set key - value pairs!

```javascript
socket.on("message", (message) => {
  const parsedMessage = JSON.parse(message);
  switch (parsedMessage.type) {
    case "new_message":
      sockets.forEach((aSocket) =>
        aSocket.send(`${socket.nickname}: ${parsedMessage.payload}`)
      );
      break;
    case "nickname":
      socket["nickname"] = parsedMessage.payload; // socket is an object
      break;
  }
});
```

<br/>

## SocketIO

### SocketIO vs. WebSockets

- let's now use a framework
- that makes everything so much easier!
- Socket.IO: "enables real-time, bidirectional and event-based communication. It works on every platform, browser or device, focusing equally on reliability and speed "

- SocketIO is not an implementation of web socket

  - it is more resilient than web socket
    - even if some device does not support web socket, socket io still works
  - it is a framework that sometimes use web socket to provide its functionalities
    - if web socket does not work, socket io will find another way to keep providing its fns + if connection is closed unexpectedly socketio will try to reconnect

- https://socket.io
- How it works: the Bidirectional channel between the Socket.IO server (Node.js) and the Socket.IO client (browser, Nodejs, or another programming language)
- ofc SocketIO is heavier than WebSocket but it's not too big and is worth it
- syntax is also very similar to that of web socket
  <br/>

### Installing SocketIO

- `npm i socket.io`
- Recap ... using Web Socket:
  - Created a http server
  - added websocket to it
- it will be similar for the case with socketIO
- just by installing socket io, we have access to the url `localhost:3000/socket.io/socket.io/js`
  - and now we need this in our frontend!
  - cuz when we were just using web socket, we could use the browser-built-in WebSocket
  - but SocketIO is more than that and is not built-in
  - so we need to fetch SocketIO Info
  - and 'install' it on browser too
  - by linking script
- let's start by creating a room!
- in `home.pug`,
  - `script(src="/socket.io/socket.io.js")
- socketIO is very similar to WebSocket! in terms of syntax

- backend..
  - `io.on("connection", socket => console.log(socket))`
  - ready to use socketIO on backend
- frontend..
  - now you can use a function called "io", which is a function that auto connects to back-end socket
  - `const socket = io();`
  - io function auto detects the server that is using socket.io
- you get Socket (vs. WebSocket) : which has more functionalities! ex. sockets auto lists all the frontends which are using the socketio server
  <br/>

## SocketIO is Amazing!

- Concept of "Rooms"

  - when a user connects,he will see a form to make a room or join a room
  - so let's make a form first

- frontend
- `app.js`

  ```javascript
  function handleRoomSubmit(event) {
    event.preventDefault();
    const input = form.querySelector("input");
    socket.emit("enter_room", { payload: input.value }, () => {
      console.log("in front-end, specify a function to be run from server!!");
    }); // more than just a message. can even emit an event
  }

  form.addEventListener("submit", handleRoomSubmit);
  ```

- backend
- `server.js`

  ```javascript
  const io = SocketIO(httpServer);
  io.on("connection", (socket) => {
    socket.on("enter_room", (msg, done) => {
      console.log(msg);
      setTimeout(() => {
        done();
      }, 10000);
    });
  }); //ready to receive connection on backend
  ```

- two improvements already with SocketIO!
  1. can handle any kind of event (more than just basic JS events)
  2. can transfer JS Objects not just text over socket
  3. can specify a function to launch in backend from frontend, while that function will run in frontend eventually
     <br/>

### Recap

### Rooms

- socket io provides room features

```javascript
// in server.js
socket.on("enter_room", (roomName, done) => {
  console.log(socket.rooms); //the first item is your socket.id as there's always a private room
  socket.join(roomName);
  console.log(socket.rooms);
});
```

- socket.join, socket.leave, socket.to
- once you join a room, send message to all in that room
  <br/>

### Room Msg

- sample codes

```javascript
io.on("connection", (socket) => {
  // to one room
  socket.to("others").emit("an event", { some: "data" });

  // to multiple rooms
  socket.to("room1").to("room2").emit("hello");

  // or with an array
  socket.to(["room1", "room2"]).emit("hello");

  // a private message to another socket
  socket.to(/* another socket id */).emit("hey");
});
```

- added messages to the whole room!
  <br/>

### Room Notifications

- sample code !

```javascript
io.on("connection", (socket) => {
  socket.on("disconnecting", (reason) => {
    console.log(socket.rooms); // Set { ...}
  });
});
```

- event "disconnecting" ~> when the client is going to be disconnected but hasn't left room
  <br/>

### Nicknames

- adding key - value pair to socket
  <br/>

### Room Count part One

- **Adapter** is a server-side component which is responsible for broadcasting events to all or a subset of clients
- synchronizes the real-time application among multiple servers
  - sample - `console.log(io.sockets.adapter)`
  - in "rooms" and "sid" fields, we can see which rooms are open and which sockets are on \* if room.id === sid, private room
    <br/>

### Room Count part Two

- let's notify everyone when a new room is created!

```javascript
// backend
socket.to(roomName).emit("welcome", socket.nickname);
io.sockets.emit("room_change", publicRooms());
```

- frontend : paint the rooms
  <br/>

### User Count

- for each room, set.size!
- there are SO MANY MORE to SOCKET.IO!!
  - ex. socketjoin ~> make a user join a specific room
  - ex. socket.to(#id) ~> allow private msgs

<br/>

### Admin UI

- Socket.IO UI!
  - you can see all your sockets,rooms, etc
- `npm i @socket.io/admin-ui`
- then import 'instrument'

- in our server,

  ```javascript
  import { instrument } from "@socket.io/admin-ui";
  import { Server } from "socket.io";

  const io = new Server(httpServer, {
    cors: {
      origin: ["https://admin.socket.io"],
      credentials: true,
    },
  });

  instrument(io, {
    auth: false,
  });
  ```

- now you can access your admin panel from https://admin.socket.io

<br/>

## Video Call

### User Video

- now video chat part!
- you can delete everything related to the chat part
  - in server.js, pug, app.js
- now we will use socket io to help us building
- we first need to get the video from the user
- some settings req'd:
  - get the video from the user and show it
  - make some buttons - mic mute, camera on/off, front/back camera
- get the video first

  - home.pug

  ```javascript
    main
      video#myFace(autoplay,playsinline,width="400",height="400
  ```

- stream = video+sound

<br/>

#### Call Controls

- cool thing about the stream : we have access to "tracks - video, audio, subtitles"
- ex. app.js

```javascript
myStream.getAudioTracks();
myStream.getVideoTracks();
```

- retrieve all the camera info
  - getUserMedia();
  - enumerateDevices();
  - in app.js, `function getCameras()`

* lets make sth with which the user can select the cameras
* home.pug
  <br/>

#### Camera Switch

- Now let's make program detect the camera switch
- app.js

```javascript
function handleCameraChange() {
  console.log(cameraSelect.value);
}
cameraSelect.addEventListener("input", handleCameraChange);
```

- now we have camera id
- this id is important because it is what can make the video restart forcefully

- getMedia() ~> copy&modify a bit

```javascript
async function getMedia2(deviceId) {
  try {
    myStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    myFace.srcObject = myStream;
    await getCameras();
  } catch (e) {
    console.log(e);
  }
}
```

- to see which camera is currently in use,
  ` myStream.getVideoTracks()`
  <br/>

#### Introduction to WebRTC !!

- Web Real-Time Communication
- peer-to-peer

  - my media goes directly goes to another user
  - doesnt pass a server => thus being very fast
  - we still need a server for "signaling"
  - browser connects to another browser

- what is NOT peer-to-peer then?

  - websocket
  - user sends a message to server, then the server sends the message to another user

- signaling
  - my browser sends the server my location in the internet, settings, configuration, firewall/router information, etc
  - the server sends these information to another browser
    <br/>

#### WebRTC Roomz

- in home.pug, `div#call`, `div#welcome`
- app.js
  - all required codes
  - however, no getMedia() function because it is what starts everything
  - make div#welcome and div#call mutually exclusive
- front end is ready
  - now lets submit the data to backend
  - `socket.emit("join_room",input.value);`
- now back to server - src/server.js

  - welcome part
  - and we gotta do something when someone joins our room
  - Socket Codes

- Peer A <-> Signaling Server <-> Peer B
  <br/>

#### Offers

- browsers gotta be connected before sharing media
- app.js

```javascript
async function startMedia() {
  welcome.hidden = true;
  call.hidden = false;
  await getMedia();
}
```

- is where both browsers run and thus where connection should begin

  - make "makeConnection" function
  - `let myPeerConnection` so that it's accessible always
  - put audio and video trks to conn

- make an "offer"

```javascript
// Socket Code
socket.on("welcome", async () => {
  const offer = await myPeerConnection.createOffer();

  console.log(offer);
});
```

- offer : exmple like

```javscript
RTCSessionDescription {type: 'offer', sdp: 'v=0\r\no=- 1841970980217389894 2 IN IP4 127.0.0.1\r\ns…3699 label:532ad46d-caef-493b-93da-72c9a0c328dc\r\n ' }
```

- it is creating an invitation for others to join

```javascript
socket.on("welcome", async () => {
  console.log("Somebody joined");
  const offer = await myPeerConnection.createOffer();
  myPeerConnection.setLocalDescription(offer);
  socket.emit("offer", offer, roomName); // sending the offer to  roomName (via the server)
});
socket.on("offer", (offer) => console.log(offer));
```

<br/>

#### Answers

- app.js

```javascript
socket.on("offer", (offer) => {
  myPeerConnection.setRemoteDescription(offer);
});
```

- emits errors because everything happens real quick and myPeerConnection is not configured yet

- therefore, let startMedia happen before we join the room
- now that we made an offer and sent it let's make an answer
  - create an answer and set it as a local description
    <br/>

#### Ice Candidates

- when we are done with offer and answer, both of our peer-to-peer connections would fire an event called 'ice candidate'
- Internet Connectivity Establishment
- "An ICE candidate describes the protocols and routing needed for WebRTC to be able to communicate with remote devices

- when we make a peer connection, we want to immediately listen to that specific event
- ` myPeerConnection.addEventListener("icecandidate", handleIce)`

```javascript
function handleIce(data) {
  console.log("got ice candidate");
  console.log(data);
}
```

- to see when the ice candidates are created and how they are showing
- you can see that multiple icecandidates are created and shown on each browser

  - they need to be sent to each other!

- src/server.js!

```javascript
socket.on("ice", (ice, roomName) => {
  socket.to(roomName).emit("ice", ice);
});
```

- src/app.js

```javascript
function handleIce(data) {
  socket.emit("ice", data.candidate, roomName);
}
```

- once completed with ice candidate exchange, let's work on addStream
  - `myPeerConnection.addEventListener("addstream", handleAddStream)`

* now that we have access to peer's stream too,
* let's show the peer's stream!
