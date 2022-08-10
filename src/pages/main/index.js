import React from "react";
import {
  getPassedPersonDataThunk,
  setUserBasicDetailAC,
  setUserIdentityDetailAC,
} from "../../redux/actions/mainActions";
import { connect } from "react-redux";
import { Grid } from "@mui/material";
import PersonMainInfo from "../../components/mainPageElements/personMainInfo";
import IDInfo from "../../components/mainPageElements/IDinfo";

function Main(props) {
  const {
    setUserIdentityDetailAC,
    setUserBasicDetailAC,
    getPassedPersonDataThunk,
    role,
    basic,
    identity,
  } = props;
  React.useEffect(() => {
    getPassedPersonDataThunk();
  }, []);
  const onChange = (e) => {
    if (role === "ADMIN") {
      if (e.target) {
        const { name, value } = e.target;
        setUserBasicDetailAC(value, name);
      } else {
        const { name, value } = e;
        setUserBasicDetailAC(value, name);
      }
    } else {
      return;
    }
  };
  const onChangeIdentity = (e) => {
    if (role === "ADMIN") {
      if (e.target) {
        const { name, value } = e.target;
        setUserIdentityDetailAC(value, name);
      } else {
        const { name, value } = e;
        setUserIdentityDetailAC(value, name);
      }
    } else {
      return;
    }
  };
  console.log(identity);
  return (
    <Grid container justifyContent="center">
      <Grid item xs={11}>
        <PersonMainInfo basic={basic} onChange={onChange} />
      </Grid>
      <Grid item xs={11}>
        <IDInfo onChange={onChangeIdentity} identity={identity} />
      </Grid>
    </Grid>
  );
}
const mapStateToProps = (state) => {
  return {
    role: state.auth.role,
    basic: state.main.basic,
    identity: state.main.identity,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPassedPersonDataThunk() {
      dispatch(getPassedPersonDataThunk());
    },
    setUserBasicDetailAC(value, name) {
      dispatch(setUserBasicDetailAC(value, name));
    },
    setUserIdentityDetailAC(value, name) {
      dispatch(setUserIdentityDetailAC(value, name));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
