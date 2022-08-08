import React from "react";
import { connect } from "react-redux";
import { getPassedTrainingsThunk } from "../../../redux/actions/passedTrainingsActions";

function PassedTrainings(props) {
  const { getPassedTrainingsThunk, passedTrainings } = props;
  React.useEffect(() => {
    getPassedTrainingsThunk();
  }, []);
  return <div>testing</div>;
}

const mapStateToProps = (state) => {
  return {
    passedTrainings: state.passedTrainings.passedTrainings,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPassedTrainingsThunk() {
      dispatch(getPassedTrainingsThunk());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PassedTrainings);
