import React from "react";
import { connect } from "react-redux";
import { getTestsThunk } from "../../../redux/actions/testResultsActions";

function TestResults(props) {
  const { getTestsThunk, tests } = props;
  React.useEffect(() => {
    getTestsThunk();
  }, []);
  return <div>testResults</div>;
}

const mapStateToProps = (state) => {
  return {
    tests: state.testsResults.tests,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTestsThunk() {
      dispatch(getTestsThunk());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestResults);
