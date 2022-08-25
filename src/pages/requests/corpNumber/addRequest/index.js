import React from "react";
import { connect } from "react-redux";
import PersonInfo from "../../businessTrip/AddRequestForBusinessTrip/personInfo";

function CorpNumberRequest(props) {
  const [] = React.useState();
  const { basics, loading } = props;
  console.log(basics)
  return (
    <>
      <PersonInfo basics={basics} />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    role: state.auth.role,
    loading: state.loading.loading,
    basics: state.main.basic,
  };
};

export default connect(mapStateToProps)(CorpNumberRequest);
