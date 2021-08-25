import React from "react";
import { Box, Grid } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const users = useSelector((state) => state.users);

  return (
    <Grid
      background="brand.sidebar"
      as="aside"
      p={4}
      fontSize="2xl"
      gap={4}
      // borderRightWidth="1px"
      alignContent="start"
    >
      {users.map((user) => (
        <Box key={user.id}>{user.name}</Box>
      ))}
    </Grid>
  );
};

export default Sidebar;
