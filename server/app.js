const WebSocket = require("ws");
const { nanoid } = require("nanoid");

const wss = new WebSocket.Server({ port: 8989 });

let users = [];

const broadcast = (data, ws) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN && client !== ws) {
      client.send(JSON.stringify(data));
    }
  });
};

wss.on("connection", (ws) => {
  let index;
  let userId;
  ws.on("message", (message) => {
    const data = JSON.parse(message);
    switch (data.type) {
      case "ADD_USER":
        index = users.length;
        userId = nanoid(10);
        users.push({ name: data.name, id: userId });
        ws.send(
          JSON.stringify({
            type: "USER_LIST",
            users,
          })
        );
        broadcast(
          {
            type: "USER_LIST",
            users,
          },
          ws
        );
        break;
      case "ADD_MESSAGE":
        broadcast(
          {
            type: "ADD_MESSAGE",
            message: data.message,
            author: data.author,
          },
          ws
        );
        break;
      default:
        break;
    }
  });
  ws.on("close", () => {
    users = users.filter((user) => user?.id !== userId);
    console.log("disconnected");
    broadcast(
      {
        type: "USER_LIST",
        users,
      },
      ws
    );
  });
});
