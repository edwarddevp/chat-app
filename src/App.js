// import logo from "./logo.svg";
import { Grid } from "@chakra-ui/react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import MessagesList from "./components/MessagesList";
import AddMessage from "./components/AddMessage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Grid templateColumns="1fr 4fr" color="white" w="100vw" h="100vh">
      <Sidebar />
      <Grid templateRows="42px 1fr auto" bg="brand.messageList">
        <Navbar />
        <MessagesList />
        <AddMessage />
      </Grid>
    </Grid>
  );
}

export default App;
