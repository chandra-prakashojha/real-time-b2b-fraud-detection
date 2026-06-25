import { io } from "socket.io-client";

const socket = io(
  "https://organic-zebra-pj59jv66r4gqf9wjp-5000.app.github.dev",
  {
    transports: ["websocket", "polling"],
  }
);

export default socket;