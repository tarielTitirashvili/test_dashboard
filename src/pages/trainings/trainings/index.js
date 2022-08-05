import React from "react";
import { getTrainingsThunk } from "../../../redux/actions/trainingsActions/index";
import { connect } from "react-redux";

function Trainings(props) {
  const { getTrainingsThunk, trainings } = props;
  React.useEffect(() => {
    getTrainingsThunk();
  }, []);

  return <div>Trainings</div>;
}

const mapStateToProps = (state) => {
  return {
    trainings: state.trainings.trainings,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTrainingsThunk() {
      dispatch(getTrainingsThunk());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Trainings);
