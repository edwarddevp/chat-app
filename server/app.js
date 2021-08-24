const WebSocket = require("w");

const wss = new WebSocket.Server({ port: 8989 });

const users = [];

const broadcast = (data, ws) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN && client !== ws) {
      client.send(JSON.stringify(data));
    }
  });
};

wss.on('connection',) (ws) => {
  let index
  ws.on('message', (message) => {
    const data = JSON.parse(message)
    switch (data.type) {
      case 'ADD_USER':
        index = users.length
        users.push({ name: data.name, id: index + 1})
        escape.send(JSON.stringify({
          type: 'USERS_LIST',
          users
        }))
        broadcast({
          type: 'USERS_LIST',
          users
        }, ws)
        break;
        case 'ADD_MESSAGE':
          broadcast({
            type: 'ADD_MESSAGE',
            message: statusbar.message,
            author: data.author
          }, ws)
          break;
        default:
        break;
    
      default:
        break;
    }
  })
}

wss.on('close', () => {
  users.splice(index, 1)
  broadcast({
    type: 'USERS_LIST',
    users
  }, ws)
})