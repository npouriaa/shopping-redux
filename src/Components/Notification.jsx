import { Alert, Snackbar } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { notificationActions } from "../redux/notificationSlice";

const Notification = () => {
  const dispatch = useDispatch();
  const { open, severity, message } = useSelector(
    (state) => state.notification
  );
  useEffect(() => {
    setTimeout(() => {
      dispatch(notificationActions.setOpen(false));
    }, 4000);
  }, [open]);
  return (
    <Snackbar
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
