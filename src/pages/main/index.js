import React from "react";
import {
  getPassedPersonDataThunk,
  setUserBasicDetailAC,
} from "../../redux/actions/mainActions";
import { connect } from "react-redux";
import { Grid } from "@mui/material";
import Controls from "../../components/mainControls";
import { countries } from "../../DB/country";
import moment from "moment";

function Main(props) {
  const { getPassedPersonDataThunk, role, basic, identity } = props;
  React.useEffect(() => {
    getPassedPersonDataThunk();
  }, []);
  const onChange = (e) => {
    if (role === "ADMIN") {
      const { name, value } = e.target;
      props.setUserBasicDetailAC(value, name);
    } else {
      return;
    }
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
  const born = moment(dateOfBirth, "DD/MM/YYYY").format("YYYY-MM-DDThh:mm:ss");
  return (
    <Grid container>
      <Grid item xs={6}>
        <Controls.Input
          label="სრული სახელი"
          name="fullName"
          value={fullName}
          onChange={onChange}
        />
        <Controls.Input
          fullWidth
          label="სტატუსი"
          name="status"
          value={status}
          onChange={onChange}
        />
        <Controls.Select
          label="მოქალაქეობა"
          name="Citizenship"
          value={Citizenship}
          onChange={onChange}
          options={countries}
        />
        <Controls.DatePicker
          label="მოქალაქეობა"
          name="dateOfBirth"
          value={born}
          onChange={onChange}
        />
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
