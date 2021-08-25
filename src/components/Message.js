import React from "react";
import PropTypes from "prop-types";
import { chakra, Text } from "@chakra-ui/react";

const Message = ({ message, author }) => (
  <Text fontSize="xl">
    <chakra.span fontWeight="bold">{author}:</chakra.span> {message}
  </Text>
);

Message.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Message;
