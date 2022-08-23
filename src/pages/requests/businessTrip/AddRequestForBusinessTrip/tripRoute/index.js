import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import Controls from "../../../../../components/controls";
import places from "../../../../../DB/place";
import HOTELS from "../../../../../DB/hotels";
import PLACES from "../../../../../DB/place";

export default function TripRoute(props) {
  const { tripData, setTripData, onChange } = props;
  const setAcademy = () => {
    setTripData((prev) => {
      return {
        ...prev,
        academy: !prev.academy,
      };
    });
  };
  const setHotel = () => {
    setTripData((prev) => {
      return {
        ...prev,
        hotel: !prev.hotel,
      };
    });
  };
  const onChangePlace = (e, id) => {
    setTripData({
      ...tripData,
      tripRoute: tripData.tripRoute.map((route) => {
        if (e.target.name === "hotel" && route.place === "") {
          return route
        }
        if (id === route.id) {
          return {
            ...route,
            [`${e.target.name}`]: e.target.value,
          };
        } else {
          return route;
        }
      }),
    });
  };
  const onAdd = () => {
    setTripData({
      ...tripData,
      tripRoute: [
        ...tripData.tripRoute,
        {
          id: tripData.tripRoute[tripData.tripRoute.length-1].id + 1,
          place: "",
          hotel: "",
        },
      ],
    });
  };
  console.log(tripData.tripRoute)
  const onDelete = () => {
    if(tripData.tripRoute.length<=1){
        return
    }
    const data = tripData.tripRoute;
    data.pop();
    setTripData({
      ...tripData,
      tripRoute: [...data],
    });
  };
  const { t } = useTranslation();
  return (
    <Box sx={{ width: "60%" }}>
      <Typography variant="h6">{t("PermanentResidence")}</Typography>
      <Box display={"flex"} width={"100%"}>
        <Controls.Select
          margin={1}
          name="startRoute"
          value={tripData.startRoute}
          onChange={onChange}
          options={PLACES}
        />
        <Controls.CheckBox
          label={t("academy")}
          value={tripData.academy}
          onChange={setAcademy}
        />
        <Controls.CheckBox
          label={t("hotelFlat")}
          value={tripData.hotel}
          onChange={setHotel}
        />
      </Box>
      {tripData.tripRoute.map((route) => {
        return (
          <Box key={route.id} display={"flex"}>
            <Controls.Select
              name={"place"}
              onChange={onChangePlace}
              value={route.place}
              margin={1}
              options={PLACES}
              id={route.id}
            />
            <Controls.Select
              name={"hotel"}
              onChange={onChangePlace}
              value={route.hotel}
              margin={1}
              disabled={!tripData.hotel}
              options={HOTELS}
              id={route.id}
            />
          </Box>
        );
      })}
      <Button
        sx={{ margin: 2 }}
        onClick={onAdd}
        variant="contained"
        color="success"
      >
        Add
      </Button>
      <Button
        sx={{ margin: 2 }}
        onClick={onDelete}
        variant="contained"
        color="error"
      >
        delete
      </Button>
      <Controls.Select
        margin={1}
        name="endRoute"
        value={tripData.endRoute}
        onChange={onChange}
        options={places}
      />
    </Box>
  );
}
