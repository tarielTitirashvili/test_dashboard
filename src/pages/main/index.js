import React from "react";
import {
  getPassedPersonDataThunk,
  setUserBasicDetailAC,
} from "../../redux/actions/personActions";
import { connect } from "react-redux";
import { Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";

function Main(props) {
  const { getPassedPersonDataThunk, role, basic, identity } = props;
  React.useEffect(() => {
    getPassedPersonDataThunk();
  }, []);
  const onChange = (e) => {
    const { name, value } = e.target;
    console.log(value, name);
    props.setUserBasicDetailAC(value, name);
  };
  const {
    Citizenship,
    OjCondition,
    PersonalN,
    Position,
    branch,
    corpMail,
    dateOfBirth,
    fullName,
    homes,
    insideN,
    mobile,
    personalMail,
    placeOfBirth,
    status,
  } = basic;
  console.log(basic, role);
  return (
    <Grid container>
      <Grid item xs={6}>
        <Box>
          <TextField
            variant="outlined"
            label="სრული სახელი"
            name="fullName"
            value={fullName}
            onChange={onChange}
          />
        </Box>
        <Box mt={1}>
          <TextField
            variant="outlined"
            label="სტატუსი"
            name="status"
            value={status}
            onChange={onChange}
          />
        </Box>
      </Grid>
    </Grid>
  );
}
const mapStateToProps = (state) => {
  return {
    role: state.auth.role,
    basic: state.person.basic,
    identity: state.person.identity,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
