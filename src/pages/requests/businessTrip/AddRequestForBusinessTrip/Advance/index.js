import { Box, Button, Card, Typography } from "@mui/material";
import { t } from "i18next";
import React from "react";
import { useNavigate } from "react-router-dom";
import Controls from "../../../../../components/controls";
import CURRENCIES from "../../../../../DB/currencies";
import METHODS_OF_RECEIVING_ADVANCE from "../../../../../DB/methodOfReceivingAdvance";

export default function Advance(props) {
  const { tripData, onChange } = props;
  const navigate = useNavigate();

  return (
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
        <Button
          sx={{ margin: 2 }}
          variant="contained"
          color="success"
          onClick={() => {
            navigate("/request");
          }}
        >
          {t("save")}
        </Button>
        <Button
          sx={{ margin: 2 }}
          variant="contained"
          onClick={() => {
            navigate(-1);
          }}
        >
          {t("back")}
        </Button>
      </Box>
    </Card>
  );
}
