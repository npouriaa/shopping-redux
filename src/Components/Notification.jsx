import { Alert, Snackbar } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { notificationActions } from "../redux/notificationSlice";

const Notification = () => {
  const dispatch = useDispatch();
  const { open, severity, message } = useSelector(
    (state) => state.notification
  );
  return (
    <Snackbar
      autoHideDuration={5000}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      color="success"
      open={open}
    >
      <Alert
        onClose={() => dispatch(notificationActions.setOpen(false))}
        severity={severity}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
