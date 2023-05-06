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
  TextField,
} from "@mui/material";

import {
  toggleCauseState,
  withdrawFunds,
  redistributeFunds,
  updateAdmin,
} from "../../utils/utils";

const AdminDrawer = ({ causeState, setCauseState, address }) => {
  const [adminDrawerState, setState] = useState(false);
  const [withdrawValue, setWithdrawValue] = useState(0);
  const [adminAddress, setAdminAddress] = useState("0x00");

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const handleToggleState = async () => {
    await toggleCauseState(address);
    setCauseState(causeState == 1 ? 2 : 1);
  };

  const content = () => (
    <Box sx={{ width: 300 }} role="presentation">
      <List>
        <ListItem key={1}>
          <ListItemText
            primary={"Withdraw funds"}
            secondary="Amount must be greater than zero"
          />
        </ListItem>
        <ListItem key={2}>
          <Box
            sx={{
              display: "flex",
              gap: 2,
            }}
          >
            <TextField
              type="number"
              label="ETH"
              InputProps={{ inputProps: { min: 0 } }}
              variant="outlined"
              size="small"
              value={withdrawValue}
              sx={{
                width: 150,
                "input::-webkit-outer-spin-button, input::-webkit-inner-spin-button":
                  {
                    WebkitAppearance: "none",
                    margin: 0,
                  },
                "input[type=number]": {
                  MozAppearance: "textfield",
                },
              }}
              onChange={(e) => {
                var value = e.target.value;
                if (value < 0) value = 0;

                setWithdrawValue(value);
              }}
            />
            <Button
              disabled={!isNaN(withdrawValue) && withdrawValue == 0}
              onClick={() => withdrawFunds(address, withdrawValue)}
            >
              Withdraw
            </Button>
          </Box>
        </ListItem>
        <Divider />
        <ListItem key={3}>
          <ListItemText
            primary={"Update admin"}
            secondary="Must be valid Ethereum address"
          />
        </ListItem>
        <ListItem key={4}>
          <Box
            sx={{
              display: "flex",
              gap: 2,
            }}
          >
            <TextField
              label="Address"
              variant="outlined"
              size="small"
              sx={{ width: 175 }}
              value={adminAddress}
              onChange={(e) => setAdminAddress(e.target.value)}
            />
            <Button
              disabled={!(adminAddress.length == 42)}
              onClick={() => updateAdmin(address, adminAddress)}
            >
              Update
            </Button>
          </Box>
        </ListItem>
        <Divider />
        <ListItem key={5} disablePadding>
          <ListItemButton
            disabled={causeState == 1}
            onClick={
              causeState == 2
                ? () => redistributeFunds(address)
                : () => console.log("Cause is still active")
            }
          >
            <ListItemText
              primary={"Redistribute funds"}
              secondary="Cause must be inactive"
            />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem key={6}>
          <ListItemText
            primary={"Toggle state"}
            secondary={causeState == 1 ? "Active" : "Inactive"}
          />
          <Switch
            edge="end"
            onChange={() => handleToggleState()}
            checked={causeState == 1}
          />
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
        open={adminDrawerState}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: "#010135",
            border: "1px solid #909bbc",
            borderRadius: "10px",
            height: "420px",
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
