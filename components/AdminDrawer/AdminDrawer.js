import { useState } from "react";
import { useRouter } from "next/router";
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
  deleteCause,
  retrieveContractInfo,
} from "../../utils/utils";

import FloatingAlert from "../../components/FloatingAlert/FloatingAlert";

const AdminDrawer = ({
  causeState,
  setCauseState,
  address,
  setCause,
  slug,
}) => {
  const router = useRouter();
  const [adminDrawerState, setAdminDrawerState] = useState(false);
  const [withdrawValue, setWithdrawValue] = useState(0);
  const [adminAddress, setAdminAddress] = useState("0x00");

  const [alertState, setAlertState] = useState({
    open: false,
    severity: "success",
    message: "",
    title: "",
  });

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setAdminDrawerState(open);

    if (!open) {
      setAlertState({
        open: false,
        severity: "success",
        title: "",
        message: "",
      });
    }
  };

  const handleToggleState = async () => {
    try {
      await toggleCauseState(address);

      setCauseState(causeState == 2 ? 1 : 2);

      const res = await retrieveContractInfo([slug]);
      setCause(res[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleWithdraw = async () => {
    if (!isNaN(withdrawValue) && withdrawValue == 0) {
      setAlertState({
        open: true,
        severity: "error",
        title: "Invalid amount",
        message: "Amount must be greater than zero",
      });
    } else if (withdrawValue > causeState.balance) {
      setAlertState({
        open: true,
        severity: "error",
        title: "Invalid amount",
        message: "Amount must be less than the current balance",
      });
    } else {
      try {
        await withdrawFunds(address, withdrawValue);

        const res = await retrieveContractInfo([slug]);
        setCause(res[0]);

        setAlertState({
          open: true,
          severity: "success",
          title: "Withdrawal complete!",
          message: "The withdrawal has been successfully completed.",
        });

        setWithdrawValue(0);
      } catch (error) {
        console.log(error);
        setAlertState({
          open: true,
          severity: "error",
          title: "Withdrawal failed",
          message: "The withdrawal has failed. Please try again later.",
        });
      }
    }
  };

  const handleUpdateAdmin = async () => {
    if (adminAddress.length == 42) {
      try {
        await updateAdmin(address, adminAddress);
        setAlertState({
          open: true,
          severity: "success",
          title: "Update complete!",
          message: "The update has been successfully completed.",
        });
        setAdminAddress("0x00");

        const res = await retrieveContractInfo([slug]);
        setCause(res[0]);
      } catch (error) {
        setAlertState({
          open: true,
          severity: "error",
          title: "Update failed",
          message: "The update has failed. Please try again later.",
        });
      }
    } else {
      setAlertState({
        open: true,
        severity: "error",
        title: "Invalid address",
        message: "Please enter a valid address",
      });
    }
  };

  const handleRedistribute = async () => {
    try {
      await redistributeFunds(address);

      const res = await retrieveContractInfo([slug]);
      setCause(res[0]);

      setAlertState({
        open: true,
        severity: "success",
        title: "Redistribution complete!",
        message: "The redistribution has been successfully completed.",
      });
    } catch (error) {
      console.log(error);
      setAlertState({
        open: true,
        severity: "error",
        title: "Redistribution failed",
        message: "The redistribution has failed. Please try again later.",
      });
    }
  };

  const handleDelete = async () => {
    try {
      await deleteCause(slug);

      setAlertState({
        open: true,
        severity: "success",
        title: "Deletion complete!",
        message: "The deletion has been successfully completed.",
      });

      router.push("/");
    } catch (error) {
      console.log(error);
      setAlertState({
        open: true,
        severity: "error",
        title: "Deletion failed",
        message: "The deletion has failed. Please try again later.",
      });
    }
  };

  const content = () => (
    <Box sx={{ width: 300 }} role="presentation">
      <FloatingAlert state={alertState} setState={setAlertState} />
      <List>
        <ListItem key={1}>
          <ListItemText
            primary={"Withdraw donations"}
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
            <Button onClick={() => handleWithdraw()}>Withdraw</Button>
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
            <Button onClick={() => handleUpdateAdmin()}>Update</Button>
          </Box>
        </ListItem>
        <Divider />
        <ListItem key={5} disablePadding>
          <ListItemButton
            disabled={causeState == 1}
            onClick={() => handleRedistribute()}
          >
            <ListItemText
              primary={"Redistribute donations"}
              secondary="Cause must be inactive"
            />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem key={6} disablePadding>
          <ListItemButton
            disabled={causeState == 1}
            onClick={() => handleDelete()}
          >
            <ListItemText
              primary={"Delete cause"}
              secondary="Cause must be inactive"
            />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem key={7}>
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
            height: "auto",
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
