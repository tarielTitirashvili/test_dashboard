import React from "react";
import { connect } from "react-redux";
import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  getPassedPersonDataThunk,
  setUserDataDetailAC,
  setPersonDataToInitialAC,
} from "../../redux/actions/mainActions";
import PersonMainInfo from "./personMainInfo";
import IDInfo from "./IDinfo";
import Addressees from "./addressees";
import CompanyNumber from "./companyNumber";
import CorporatePhones from "./corporatePhones";

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
    setPersonDataToInitialAC,
  } = props;
  const { t } = useTranslation();
  React.useEffect(() => {
    getPassedPersonDataThunk();
    return () => {
      setPersonDataToInitialAC();
    };
  }, []);

  const onChange = (e, objName) => {
    if (role === "ADMIN") {
      const { name, value } = e.target;
      setUserDataDetailAC(value, name, objName);
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
          title={t("activeAddress")}
          onChange={onChange}
          fullAddress={actualAddress}
          objName={"actualAddress"}
        />
      </Grid>
      <Grid mt={3} item xs={11}>
        <Addressees
          title={t("legalAddress")}
          onChange={onChange}
          fullAddress={legalAddress}
          objName={"legalAddress"}
        />
      </Grid>
      <Grid mt={3} item xs={11}>
        <CompanyNumber
          role={role}
          title={t("corpNumber")}
          smallTitle={t("employeeCorpNumber")}
          companyNumber={companyNumber}
          onChange={onChange}
        />
      </Grid>
      <Grid mt={3} item xs={11}>
        <CorporatePhones
          role={role}
          corporatePhonesData={corporatePhones}
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
    corporatePhones: state.main.corporatePhones,
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
    setPersonDataToInitialAC() {
      dispatch(setPersonDataToInitialAC());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
