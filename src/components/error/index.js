import { Alert, Snackbar, Stack } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { setErrorAC } from "../../redux/error/errorActions";

function Error(props) {
  const { error, setErrorAC } = props;
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    setErrorAC(null);
  };
  React.useEffect(() => {
    if (error) {
      handleClick();
    }
  }, [error]);
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      {error && (
        <>
          <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="error"
              sx={{ width: "100%" }}
            >
                {error}
            </Alert>
          </Snackbar>
        </>
      )}
    </Stack>
  );
}

const mapStateToProps = (state) => {
  return {
    error: state.error.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setErrorAC(error) {
      dispatch(setErrorAC(error));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Error);
