import { IconButton } from "@mui/material";
import moment from "moment";
import React from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Controls from "../../../../../components/controls";
import RELATIVES from "../../../../../DB/relatives";
import SERVICE_GROUP from "../../../../../DB/serviceGroup";
import FlexContainer from "../../../../../styledComponents/FlexContainer";
import { useTranslation } from "react-i18next";

export default function RegisterNewNumber() {
  const [values, setValues] = React.useState({
    selectedRelative: RELATIVES[0].value,
    number: "",
    fullName: "",
    personalN: "",
    bringMeNumber: false,
    serviceGroup: "",
    file: "",
  });
  const {t} = useTranslation()

  const onRowChange = (e) => {
    if (e.target) {
      const { name, value } = e.target;
      setValues({ ...values, [`${name}`]: value });
    } else {
      const { name, value } = e;
      setValues({
        ...values,
        [`${name}`]: moment(value, "DD/MM/YYYY").format("YYYY-MM-DDThh:mm:ss"),
      });
    }
  };
  const onCheckClick = () => {
    setValues((prev) => {
      return {
        ...prev,
        bringMeNumber: !prev.bringMeNumber,
      };
    });
  };
  const onFileSelect = (e) => {
    setValues({
      ...values,
      file: e.target.files[0],
    });
  };

  return (
    <>
      <Controls.Select
        label={t("numberOwner")}
        name={"selectedRelative"}
        value={values.selectedRelative}
        onChange={onRowChange}
        options={RELATIVES}
      />
      <FlexContainer justify={"left"}>
        <Controls.Input
          label={t("number")}
          name={"number"}
          value={values.number}
          onChange={onRowChange}
          type={"number"}
        />
        <Controls.CheckBox
          label={t("PleaseBringMeTheNumber")}
          margin={1}
          name={"bringMeNumber"}
          value={values.bringMeNumber}
          onChange={onCheckClick}
          type={"bringMeNumber"}
        />
      </FlexContainer>
      {values.selectedRelative !== RELATIVES[0].value && (
        <>
          <Controls.Input
            label={t("fullName")}
            name={"fullName"}
            value={values.fullName}
            onChange={onRowChange}
          />
          <Controls.Input
            label={t("personalN")}
            name={"personalN"}
            value={values.personalN}
            onChange={onRowChange}
          />
        </>
      )}
      <Controls.Select
        label={t("serviceGroup")}
        name={"serviceGroup"}
        width={300}
        value={values.serviceGroup}
        onChange={onRowChange}
        options={SERVICE_GROUP}
      />
      <IconButton variant="contained" component="label">
        <CloudUploadIcon sx={{ m: 1 }} />
        {t("upload")}
        <input
          hidden
          onChange={onFileSelect}
          accept="image/*"
          multiple
          type="file"
        />
      </IconButton>
    </>
  );
}
