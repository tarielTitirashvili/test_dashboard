import React from "react";
import {
  getDataFromAPIAC,
  setPersonDataToInitialAC,
} from "../../../../redux/main/mainActions";
import { connect } from "react-redux";
import Loading from "../../../../components/loading";

function AddRequestForBusinessTrip(props) {
  const {
    getDataFromAPIAC,
    setPersonDataToInitialAC,
    role,
    drivingLicenses,
    loading,
  } = props;
  React.useEffect(() => {
    getDataFromAPIAC();
    return () => {
      setPersonDataToInitialAC();
    };
  }, []);
  if(loading)return <Loading width={"100%"} height={"calc(100vh - 112px)"} />
  return <div>AddRequestForBusinessTrip</div>;
}

const mapStateToProps = (state) => {
  return {
    role: state.auth.role,
    drivingLicenses: state.requests.businessTrip.BusinessTrips,
    loading: state.loading.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getDataFromAPIAC() {
      dispatch(getDataFromAPIAC());
    },
    setPersonDataToInitialAC() {
      dispatch(setPersonDataToInitialAC());
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddRequestForBusinessTrip);
