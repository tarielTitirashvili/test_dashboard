import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import {
  getDataFromAPIAC,
  setPersonDataToInitialAC,
} from "../../../../redux/main/mainActions";
import Loading from "../../../../components/loading";
import { Box } from "@mui/material";
import TRIP_GOAL from "../../../../DB/businessTripGoal";
import TripRoute from "./tripRoute";
import StartEndDate from "./startEndDate";
import Advance from "./Advance";
import PersonInfo from "./personInfo";



function AddRequestForBusinessTrip(props) {
  const { getDataFromAPIAC, setPersonDataToInitialAC, basics, loading } =
    props;
  const { branch } = basics;
  const initialData = {
    tripGoal: TRIP_GOAL[0].value,
    startRoute: branch,
    academy: false,
    hotel: false,
    tripRoute: [
      {
        id: 0,
        place: "",
        hotel: "",
      },
    ],
    endRoute: branch,
    substitutePerson: "",
    startDate: `${moment(Date.now()).format("YYYY-MM-DDThh:mm:ss")}`,
    endData: `${moment(Date.now()).format("YYYY-MM-DDThh:mm:ss")}`,
    peekHours: false,
    transport: "",
    head: "",
    comment: "",
    AdvanceDaily: 0,
    AdvanceDailyCurrency: "",
    AdvanceHotel: 0,
    AdvanceHotelCurrency: "",
    AdvanceTransport: 0,
    AdvanceTransportCurrency: "",
    AdvanceOther: 0,
    AdvanceOtherCurrency: "",
    AdvanceComment: "",
    methodOfReceivingAdvance: "",
  }
  const [tripData, setTripData] = React.useState(initialData);

  React.useEffect(() => {
    setTripData({
      ...tripData,
      startRoute: branch,
      endRoute: branch,
    });
  }, [basics.branch]);

  const onChange = (e) => {
    if (e.target) {
      const { name, value } = e.target;
      setTripData({
        ...tripData,
        [`${name}`]: value,
      });
    } else {
      const { name, value } = e;
      setTripData({
        ...tripData,
        [`${name}`]: moment(value, "DD/MM/YYYY hh:mm").format(
          "YYYY-MM-DDThh:mm:ss"
        ),
      });
    }
  };
  const onChangeCheckBox = (e) => {
    const { name, value, checked } = e.target;
    setTripData({
      ...tripData,
      [`${name}`]: checked === undefined ? value : checked,
    });
  };

  React.useEffect(() => {
    getDataFromAPIAC();
    return () => {
      setPersonDataToInitialAC();
      setTripData(initialData)
    };
  }, []);
  if (loading) return <Loading width={"100%"} height={"calc(100vh - 112px)"} />;
  return (
    <Box p={1}>
      <PersonInfo basics={basics} tripData={tripData} onChange={onChange} />
      <TripRoute
        tripData={tripData}
        setTripData={setTripData}
        onChange={onChange}
      />
      <StartEndDate
        tripData={tripData}
        onChange={onChange}
        onChangeCheckBox={onChangeCheckBox}
      />
      <Advance tripData={tripData} onChange={onChange} />
    </Box>
  );
}

const mapStateToProps = (state) => {
  return {
    basics: state.main.basic,
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
