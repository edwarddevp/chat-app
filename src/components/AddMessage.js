import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "../actions";
import { Input, Grid } from "@chakra-ui/react";

const AddMessage = () => {
  const dispatch = useDispatch();
  const input = useRef(null);

  return (
    <Grid px={4} pb={6}>
      <Input
        // variant="filled"
        bg="brand.addMessage"
        borderColor="brand.addMessage"
        _hover={{
          borderColor: "brand.addMessage",
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter" && input.current.value) {
            dispatch(addMessage(input.current.value, "Me"));
            input.current.value = "";
          }
        }}
        type="text"
        ref={input}
      />
    </Grid>
  );
};

export default AddMessage;
