import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Accordion, AccordionDetails, ListItem, ListItemButton, ListItemText } from '@mui/material';
import Box from '@mui/material/Box';
import { routes } from '../../routes';
import { NavLink } from 'react-router-dom';
import { CustomizedAccordionSummary } from '../../ui/navElem';

export default function NavElements() {
  const [expanded, setExpanded] = React.useState();

  const handleChange = (panel) => {
    setExpanded(panel);
  };
  return (
    <>
      {routes.map((route) => {
        if (route.title === 'Error404') {
          return '';
        }
        if (route.children) {
          return (
            <Box key={route.path}>
              <Accordion
                expanded={expanded === `${route.path}`}
                onMouseOver={() => handleChange(`${route.path}`)}
                onMouseOut={() => {
                  handleChange('');
                }}>
                <CustomizedAccordionSummary aria-controls={`${route.path}`} id="panel1d-header">
                  <Typography>{route.title}</Typography>
                </CustomizedAccordionSummary>
                <AccordionDetails>
                  {route.children.map((child) => {
                    return (
                      <NavLink key={child.path} to={`${route.path}${child.path}`}>
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
              <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    px: 2.5,
                  }}>
                  {route.title}
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
