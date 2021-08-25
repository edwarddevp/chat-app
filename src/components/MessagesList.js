import React from "react";
import { useSelector } from "react-redux";
import Message from "./Message";
import { Grid } from "@chakra-ui/react";

const MessagesList = () => {
  const messages = useSelector((state) => state.messages);

  return (
    <Grid
      overflowY="auto"
      h="calc(100vh - 64px - 42px - 1rem)"
      py={4}
      ml={6}
      mr={2}
      gap={2}
      alignContent="start"
      className="scrollbar"
    >
      {messages.map((message) => (
        <Message key={message.id} {...message} />
      ))}
    </Grid>
  );
};

export default MessagesList;
