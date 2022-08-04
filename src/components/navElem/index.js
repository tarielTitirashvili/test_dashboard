import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import Box from "@mui/material/Box";
import { routes } from "../../routes";
import { NavLink } from "react-router-dom";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function NavElements(props) {
  const [expanded, setExpanded] = React.useState();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div>
      {routes.map((route) => {
        if (route.title === "Error404") {
          return;
        }
        if (route.children) {
          return (
            <Box key={route.path}>
              <Accordion
                expanded={expanded === `${route.path}`}
                onChange={handleChange(`${route.path}`)}
              >
                <AccordionSummary
                  aria-controls={`${route.path}`}
                  id="panel1d-header"
                >
                  <Typography>{route.title}</Typography>
                </AccordionSummary>

                <AccordionDetails>
                  {route.children.map((child) => {
                    return (
                      <NavLink
                        key={child.path}
                        to={`${route.path}${child.path}`}
                      >
                        <ListItem component="div" disablePadding>
                          <ListItemButton>
                            <ListItemText primary={`${child.title}`} />
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
                  {route.title}
                  <ListItemText />
                </ListItemButton>
              </ListItem>
            </NavLink>
          );
        }
      })}
    </div>
  );
}
