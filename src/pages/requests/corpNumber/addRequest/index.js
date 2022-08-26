import React from "react";
import { connect } from "react-redux";
import PersonBasicInfo from "../../../../components/personBasicInfo";
import Loading from "../../../../components/loading";
import { getDataFromAPIAC } from "../../../../redux/main/mainActions";
import Controls from "../../../../components/controls";
import NUMBER_REQUESTS from "../../../../DB/numberRequest";
import RegisterNewNumber from "./registerNewNumber";
import { useTranslation } from "react-i18next";

function CorpNumberRequest(props) {
  const [request, setRequest] = React.useState("");
  const { basics, loading, getDataFromAPIAC } = props;
  React.useEffect(() => {
    getDataFromAPIAC();
  }, []);
  const {t} = useTranslation()

  if (loading) return <Loading  />;
  return (
    <>
      <PersonBasicInfo basics={basics} />
      <Controls.Select
        label={t("request")}
        value={request}
        width={320}
        onChange={(e) => setRequest(e.target.value)}
        options={NUMBER_REQUESTS}
      />
      <RegisterNewNumber />
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
const mapDispatchToProps = (dispatch) => {
  return {
    getDataFromAPIAC() {
      dispatch(getDataFromAPIAC());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CorpNumberRequest);
