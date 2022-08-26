import * as React from "react";
import {
  Typography,
  Accordion,
  AccordionDetails,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { routes } from "../../routes";
import { CustomizedAccordionSummary } from "./navElemUi";
import { t } from "i18next";

export default function NavElements() {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => {
    setExpanded(panel);
  };
  return (
    <>
      {routes.map((route) => {
        if (route.title === "Error404") {
          return "";
        }
        if (route.children) {
          return (
            <Box key={route.path}>
              <Accordion
                expanded={expanded === `${route.path}`}
                onMouseOver={() => handleChange(`${route.path}`)}
                onMouseOut={() => {
                  handleChange("");
                }}
              >
                <CustomizedAccordionSummary
                  aria-controls={`${route.path}`}
                  id="panel1d-header"
                >
                  <Typography
                    variant="h3"
                    fontSize={"1rem"}
                    sx={{ fontWeight: "normal" }}
                  >
                    {t(`${route.title}`)}
                  </Typography>
                </CustomizedAccordionSummary>
                <AccordionDetails>
                  {route.children.map((child) => {
                    return (
                      <NavLink
                        key={child.path}
                        to={`${route.path}${child.path}`}
                      >
                        <ListItem component="div" disablePadding>
                          <ListItemButton>
                            <ListItemText primary={t(`${child.title}`)} />
                          </ListItemButton>
                        </ListItem>
                      </NavLink>
                    );
                  })}
                </AccordionDetails>
              </Accordion>
            </Box>
          );
        } else {
          return (
            <NavLink key={route.path} to={route.path}>
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    px: 2.5,
                  }}
                >
                  {t(`${route.title}`)}
                  <ListItemText />
                </ListItemButton>
              </ListItem>
            </NavLink>
          );
        }
      })}
    </>
  );
}
