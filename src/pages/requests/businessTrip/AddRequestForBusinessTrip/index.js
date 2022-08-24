import React from "react";
import moment from "moment";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import {
  getDataFromAPIAC,
  setPersonDataToInitialAC,
} from "../../../../redux/main/mainActions";
import Loading from "../../../../components/loading";
import { Box, Button, Card, Typography } from "@mui/material";
import TitleWithText from "../../../../components/titleWithText";
import Controls from "../../../../components/controls";
import TRIP_GOAL from "../../../../DB/businessTripGoal";
import PEOPLE from "../../../../DB/people";
import TripRoute from "./tripRoute";
import TRANSPORT from "../../../../DB/transport";
import CURRENCIES from "../../../../DB/currencies";
import METHODS_OF_RECEIVING_ADVANCE from "../../../../DB/methodOfReceivingAdvance";

function AddRequestForBusinessTrip(props) {
  const { getDataFromAPIAC, setPersonDataToInitialAC, role, basics, loading } =
    props;
  const { fullName, Position, branch, PersonalN } = basics;

  const [tripData, setTripData] = React.useState({
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
  });
  const navigate = useNavigate();
  const { t } = useTranslation();
  React.useEffect(() => {
    setTripData({
      ...tripData,
      startRoute: branch,
      endRoute: branch,
    });
  }, [basics.branch]);

  const onChange = (e) => {
    if (e.target) {
      const { name, value, checked } = e.target;
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
    };
  }, []);
  if (loading) return <Loading width={"100%"} height={"calc(100vh - 112px)"} />;
  return (
    <Box p={1}>
      <Typography mb={2} fontWeight={"bolder"} variant="h6">
        {t("businessTrip")}
      </Typography>
      <TitleWithText
        title={t("completionDate")}
        text={`${moment(Date.now()).format("DD/MM/YYYY")}`}
      />
      <TitleWithText title={t("fullName")} text={fullName} />
      <TitleWithText title={t("position")} text={Position} />
      <TitleWithText title={t("office")} text={branch} />
      <TitleWithText title={t("personalN")} text={PersonalN} />
      <Controls.Select
        label={t("tripGoal")}
        name="tripGoal"
        width={"450px"}
        value={tripData.tripGoal}
        onChange={onChange}
        options={TRIP_GOAL}
      />
      <Typography sx={{ color: "red", m: 1 }}>
        საზღვარგარეთ მივლინების შემთხვევაში, გთხოვთ სრულად მიუთითით ის მარშრუტი
        რაც ფრენის დეტალებშია მოცემული
      </Typography>
      <TripRoute
        tripData={tripData}
        setTripData={setTripData}
        onChange={onChange}
      />

      <Card elevation={3} sx={{ p: 3, m: 2 }}>
        <Box display={"flex"} width={"70%"} justifyContent={"space-between"}>
          <Controls.DatePicker
            label={t("startDate")}
            value={tripData.startDate}
            withHours={tripData.peekHours}
            name={"startDate"}
            onChange={onChange}
          />
          <Controls.CheckBox
            margin={2}
            label={t("peekHours")}
            name={"peekHours"}
            value={tripData.peekHours}
            onChange={onChangeCheckBox}
          />
        </Box>
        <Box display={"flex"} width={"70%"} justifyContent={"space-between"}>
          <Controls.DatePicker
            label={t("endDate")}
            value={tripData.endData}
            name={"endData"}
            withHours={tripData.peekHours}
            onChange={onChange}
          />
          <Controls.Select
            label={t("substitutePerson")}
            name="substitutePerson"
            value={tripData.substitutePerson}
            onChange={onChange}
            options={PEOPLE}
          />
        </Box>
        <Box display={"flex"} width={"70%"} justifyContent={"space-between"}>
          <Controls.Select
            label={t("transport")}
            name="transport"
            value={tripData.transport}
            onChange={onChange}
            options={TRANSPORT}
          />
          <Controls.Select
            label={t("head")}
            name="head"
            value={tripData.head}
            onChange={onChange}
            options={PEOPLE}
          />
        </Box>
        <Box>
          <Controls.TextArea
            label={t("comment")}
            name="comment"
            value={tripData.comment}
            onChange={onChange}
          />
        </Box>
      </Card>
      <Card elevation={3} sx={{ p: 3, m: 2 }}>
        <Box
          sx={{
            bgcolor: "#55FF33",
            p: 1,
            borderRadius: "1rem",
            width: "280px",
          }}
        >
          <Typography variant="h6"> {t("Advance")}</Typography>
        </Box>
        <Box
          sx={{
            bgcolor: "#55FF33",
            mt: 2,
            p: 1,
            borderRadius: "1rem",
            width: "280px",
          }}
        >
          <Typography variant="h6" sx={{ fontSize: "1rem" }}>
            {t("moneyTypes")}
          </Typography>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"} mt={2}>
          <Box>
            <Typography
              sx={{ background: "#C6FFBB", borderRadius: "1rem", p: 1 }}
            >
              {t("AdvanceDaily")}
            </Typography>
            <Box display={"flex"}>
              <Controls.Input
                name="AdvanceDaily"
                value={tripData.AdvanceDaily}
                type={"number"}
                width={"176px"}
                onChange={onChange}
              />
              <Controls.Select
                name="AdvanceDailyCurrency"
                value={tripData.AdvanceDailyCurrency}
                width={"176px"}
                onChange={onChange}
                options={CURRENCIES}
              />
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{ background: "#C6FFBB", borderRadius: "1rem", p: 1 }}
            >
              {t("AdvanceDaily")}
            </Typography>
            <Box display={"flex"}>
              <Controls.Input
                name="AdvanceHotel"
                value={tripData.AdvanceHotel}
                type={"number"}
                width={"176px"}
                onChange={onChange}
              />
              <Controls.Select
                name="AdvanceHotelCurrency"
                value={tripData.AdvanceHotelCurrency}
                width={"176px"}
                onChange={onChange}
                options={CURRENCIES}
              />
            </Box>
          </Box>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"} mt={2}>
          <Box>
            <Typography
              sx={{ background: "#C6FFBB", borderRadius: "1rem", p: 1 }}
            >
              {t("AdvanceDaily")}
            </Typography>
            <Box display={"flex"}>
              <Controls.Input
                name="AdvanceTransport"
                value={tripData.AdvanceTransport}
                type={"number"}
                width={"176px"}
                onChange={onChange}
              />
              <Controls.Select
                name="AdvanceTransportCurrency"
                value={tripData.AdvanceTransportCurrency}
                width={"176px"}
                onChange={onChange}
                options={CURRENCIES}
              />
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{ background: "#C6FFBB", borderRadius: "1rem", p: 1 }}
            >
              {t("AdvanceDaily")}
            </Typography>
            <Box display={"flex"}>
              <Controls.Input
                name="AdvanceOther"
                value={tripData.AdvanceOther}
                type={"number"}
                width={"176px"}
                onChange={onChange}
              />
              <Controls.Select
                name="AdvanceOtherCurrency"
                value={tripData.AdvanceOtherCurrency}
                width={"176px"}
                onChange={onChange}
                options={CURRENCIES}
              />
            </Box>
          </Box>
        </Box>
        <Controls.TextArea
          label={t("comment")}
          name="AdvanceComment"
          value={tripData.AdvanceComment}
          onChange={onChange}
        />
        <Controls.Select
          label={t("methodOfReceivingAdvance")}
          name="methodOfReceivingAdvance"
          value={tripData.methodOfReceivingAdvance}
          width={"260px"}
          onChange={onChange}
          options={METHODS_OF_RECEIVING_ADVANCE}
        />
        <Box>
          <Button sx={{ margin: 2 }} variant="contained" color="success" onClick={()=>{navigate("/request")}}>
            {t("save")}
          </Button>
          <Button sx={{ margin: 2 }} variant="contained" onClick={()=>{navigate(-1)}}>
            {t("back")}
          </Button>
        </Box>
      </Card>
    </Box>
  );
}

const mapStateToProps = (state) => {
  return {
    role: state.auth.role,
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
