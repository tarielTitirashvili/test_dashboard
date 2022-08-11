import React from "react";
import {
  getPassedPersonDataThunk,
  setUserDataDetailAC,
} from "../../redux/actions/mainActions";
import { connect } from "react-redux";
import { Grid } from "@mui/material";
import PersonMainInfo from "../../components/mainPageElements/personMainInfo";
import IDInfo from "../../components/mainPageElements/IDinfo";
import Addressees from "../../components/mainPageElements/addressees";
import CompanyNumber from "../../components/mainPageElements/companyNumber";

function Main(props) {
  const {
    setUserDataDetailAC,
    getPassedPersonDataThunk,
    role,
    basic,
    identity,
    actualAddress,
    legalAddress,
    corporatePhones,
    companyNumber,
  } = props;
  React.useEffect(() => {
    getPassedPersonDataThunk();
  }, []);

  const onChange = (e, objName) => {
    if (role === "ADMIN") {
      if (e.target) {
        const { name, value } = e.target;
        setUserDataDetailAC(value, name, objName);
      } else {
        const { name, value } = e;
        setUserDataDetailAC(value, name, objName);
      }
    } else {
      return;
    }
  };
  return (
    <Grid container justifyContent="center">
      <Grid item xs={11}>
        <PersonMainInfo basic={basic} onChange={onChange} />
      </Grid>
      <Grid mt={3} item xs={11}>
        <IDInfo onChange={onChange} identity={identity} />
      </Grid>
      <Grid mt={3} item xs={11}>
        <Addressees
          title={"აქტუალური მისამართი"}
          onChange={onChange}
          fullAddress={actualAddress}
          objName={"actualAddress"}
        />
      </Grid>
      <Grid mt={3} item xs={11}>
        <Addressees
          title={"იურიდიული მისამართი"}
          onChange={onChange}
          fullAddress={legalAddress}
          objName={"legalAddress"}
        />
      </Grid>
      <Grid mt={3} item xs={11}>
        <CompanyNumber
          title={"კორპორატიული #"}
          smallTitle={"თანამშრომლის კორპორატიული ნომერი"}
          companyNumber={companyNumber}
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
    actualAddress: state.main.actualAddress,
    legalAddress: state.main.legalAddress,
    corporatePhones: state.main.CORPORATE_PHONES,
    companyNumber: state.main.companyNumber,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPassedPersonDataThunk() {
      dispatch(getPassedPersonDataThunk());
    },
    setUserDataDetailAC(value, name, objName) {
      dispatch(setUserDataDetailAC(value, name, objName));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
