import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Controls from "../../../../components/controls";
import modalStyle from "../../../../assets/modalStyle";
import moment from "moment";
import { t } from "i18next";

export default function AddRequestForCompanyCar() {
  const initialState = {
    drivingLicenseId: "",
    date: `${moment(Date.now()).format("YYYY-MM-DDThh:mm:ss")}`,
    numberOfCard: "",
    file: {},
    contractStatus: false,
  };
  const [open, setOpen] = React.useState(false);
  const [drivingReqInfo, setDrivingReqInfo] = React.useState(initialState);
  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onInputChange = (e) => {
    if (e.target) {
      const { name, value } = e.target;
      setDrivingReqInfo({ ...drivingReqInfo, [`${name}`]: value });
    } else {
      const { name, value } = e;
      setDrivingReqInfo({
        ...drivingReqInfo,
        [`${name}`]: moment(value, "DD/MM/YYYY").format("YYYY-MM-DDThh:mm:ss"),
      });
    }
  };

  const onChange = (e) => {
    setDrivingReqInfo({ ...drivingReqInfo, contractStatus: e.target.checked });
  };

  const onFileSelect = (e) => {
    setDrivingReqInfo({
      ...drivingReqInfo,
      file: e.target.files[0],
    });
  };

  React.useEffect(() => {
    return () => setDrivingReqInfo(initialState);
  }, []);

  return (
    <Box>
      <Controls.Input
        label={t("drivingLicenseId")}
        value={drivingReqInfo.drivingLicenseId}
        name={"drivingLicenseId"}
        onChange={onInputChange}
        margin={1}
      />
      <Controls.DatePicker
        label={t("IssuanceDateOfDriversLicense")}
        value={drivingReqInfo.date}
        name={"date"}
        onChange={onInputChange}
        margin={1}
      />
      <Controls.Input
        label={t("numberOfCard")}
        value={drivingReqInfo.numberOfCard}
        name={"numberOfCard"}
        type={"number"}
        onChange={onInputChange}
        margin={1}
      />
      <Box>
        <Button variant="contained" component="label">
          {t("upload")}
          <input
            hidden
            onChange={onFileSelect}
            accept="image/*"
            multiple
            type="file"
          />
        </Button>
        <Box>
          <Button onClick={handleOpen}>{t("readAgreement")}</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={modalStyle}>
              <Box sx={{ display: "flex", justifyContent: "right" }}>
                <IconButton onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </Box>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                ქვემოთ მოყვანილი შეთანხმება იდება თქვენსა და ს.ს. “პროკრედიტ
                ბანკს” შორის, საქართველოს შრომის კოდექსის კანონების 44 და 45
                მუხლების საფუძველზე, რომლის თანახმად განისაზღვრება თქვენს მიერ
                ს.ს. “პროკრედიტ ბანკის” სამსახურეობრივი ავტომობილის მოვლისა და
                გამოყენების წესი შეთახნმება
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                თანამშრომლის მოვალეობები: თანამშრომელს სრული მატერიალური
                პასუხისმგებლობა ეკისრება ბანკის საკუთრებაში არსებულ
                სამსახურეობრივ ავტომანქანებზე; თანამშრომელი პასუხს აგებს მასზე
                მინდობილი ბანკის ძირითადი საშუალებების შენახვა, სათანადო
                ექსპლუატაციასა და მოვლაზე; თანამშრომელი ვალდებულია დროულად
                აცნობოს ბანკის ადმინისტრაციის ქვეგანყოფილებას მასზე მინდობილი
                სამსახურეობრივი ავტომანქანის გაფუჭება/დაზიანების საშიშროების
                შესახებ; თანამშრომელმა უნდა აანაზღაუროს მასზე მინდობილი
                სამსახურეობრივი ავტომანქანის დაზიანების მატერიალური ზარალი,
                რომელიც წარმოიშვა თანამშრომლის ბრალით (მოქმედებით ან
                უმოქმედებით). ბანკის ადმინისტრაციის ქვეგანყოფილების მოვალეობები:
                ადმინისტრაციამ უნდა უზრუნველყოს სამსახურეობრივი ავტომანქანის
                ადეკვატური შენახვისა და ექსპლუატაციის სათანადო პირობების შექმნა.
                ბანკი სამსახურეობრივ ავტომანქანაზე მატერიალურ პასუხისმგებლობას
                აკისრებს თანამშრომელს წინამდებარე შეთანხმების საფუძველზე.
                ხელშეკრულების მოქმედების ვადა: წინამდებარე ხელშეკრულების
                მოქმედების ვადა განისაზღრება თანამშრომლის მიერ მასზე მინდობილი
                სამსახურეობრივი ავტომანქანის გამოყენების სრული პერიოდით.
                შენანხმება ძალაში შედის აღნიშნული შეთანხმების ელექტრონულად
                დადასტურებისათანავე.
              </Typography>
            </Box>
          </Modal>
        </Box>
        <Controls.CheckBox
          label={t("contractWarning")}
          value={drivingReqInfo.contractStatus}
          onChange={onChange}
        />
      </Box>
      <Box width={"60%"} display={"flex"} justifyContent={"space-between"}>
        <Button variant="contained" onClick={() => navigate("/request")}>
          {t("save")}
        </Button>
        <Button variant="contained" onClick={() => navigate(-1)}>
          {t("back")}
        </Button>
      </Box>
    </Box>
  );
}
