import { useState } from "react";
import {
  Button,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Switch,
} from "@mui/material";

const AdminDrawer = () => {
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const handleWithdrawFunds = () => {};

  const handleRedistributeFunds = () => {};

  const content = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem key={1} disablePadding>
          <ListItemButton onClick={() => handleWithdrawFunds()}>
            <ListItemText primary={"Withdraw funds"} />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem key={2} disablePadding>
          <ListItemButton onClick={handleRedistributeFunds}>
            <ListItemText primary={"Redistribute funds"} />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem key={3}>
          <ListItemText primary={"Toggle state"} />
          <Switch edge="end" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <Button sx={{ ml: 2 }} onClick={toggleDrawer(true)}>
        Admin panel
      </Button>
      <Drawer
        anchor="right"
        open={state}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: "#010135",
            border: "1px solid #909bbc",
            borderRadius: "10px",
            height: "165px",
            m: 1,
          },
        }}
      >
        {content()}
      </Drawer>
    </>
  );
};

export default AdminDrawer;
