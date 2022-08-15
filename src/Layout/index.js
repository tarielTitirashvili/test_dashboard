import * as React from "react";
import {
  Divider,
  CssBaseline,
  List,
  Toolbar,
  Box,
  Button,
  IconButton,
  MenuItem,
  Typography,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { Navigate, Route, Routes } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Cookies from "js-cookie";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { routes } from "../routes";
import Logo from "../utils/images/Logo.png";
import {
  CustomizedAppBar,
  CustomizedMenuList,
  CustomizedDrawer,
  CustomizedDrawerHeader,
} from "./appBarUi";
import NavElements from "./navElem";
import Loading from "../components/loading";
import ENGLISH_TEXTS_FOR_APP from "../languages/en";
import GEORGIAN_TEXTS_FOR_APP from "../languages/ge";
import ALL_LANGUAGES from "../languages";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    resources: {
      en: { translation: ENGLISH_TEXTS_FOR_APP },
      ge: { translation: GEORGIAN_TEXTS_FOR_APP },
    },
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "subdomain"],
      caches: ["cookie"],
    },
  });

export default function MainLayout() {
  const currentLanguageCode = Cookies.get("i18next") || "ge";
  const [open, setOpen] = React.useState(false);
  const [langOpen, setLangOpen] = React.useState(false);
  const { t } = useTranslation();

  const sortRef = React.useRef(null);
  const clickOutside = (e) => {
    if (sortRef.current !== null) {
      if (!e.composedPath().includes(sortRef.current)) {
        setLangOpen(false);
      }
    }
  };
  React.useEffect(() => {
    document.addEventListener("click", clickOutside);
    return () => {
      document.removeEventListener("click", clickOutside);
    };
  }, []);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const onLanClick = (e, lan) => {
    e.stopPropagation();
    setLangOpen(false);
    i18n.changeLanguage(lan);
  };

  return (
    <React.Suspense fallback={<Loading />}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <CustomizedAppBar color="secondary" position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 2,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1, marginRight: "30px" }}>
              <img style={{ height: "50px" }} src={Logo} alt="logo" />
            </Box>
            <Box>
              <IconButton
                ref={sortRef}
                onClick={() => setLangOpen((prev) => !prev)}
                sx={{ mr: 2, position: "relative" }}
              >
                <LanguageIcon color="action" />
                {langOpen && (
                  <CustomizedMenuList variant="selectedMenu">
                    <Typography variant="h6" color={"WindowText"}>
                      {t("language")}
                    </Typography>
                    {ALL_LANGUAGES.map(({ code, name, countryCode }) => {
                      return (
                        <MenuItem
                          selected={code === currentLanguageCode}
                          key={countryCode}
                          onClick={(e) => onLanClick(e, code)}
                        >
                          <span
                            className={`flag-icon flag-icon-${countryCode}`}
                          ></span>
                          <Typography sx={{ ml: 1 }} variant="p">
                            {name}
                          </Typography>
                        </MenuItem>
                      );
                    })}
                  </CustomizedMenuList>
                )}
              </IconButton>

              <Button variant="outlined" color="error">
                გასვლა
              </Button>
            </Box>
          </Toolbar>
        </CustomizedAppBar>
        <CustomizedDrawer variant="permanent" open={open}>
          <CustomizedDrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </CustomizedDrawerHeader>
          <Divider />
          <List>
            <NavElements routes={routes} />
          </List>
          <Divider />
        </CustomizedDrawer>
        <Box id="content" component="main" sx={{ flexGrow: 1, p: 3 }}>
          <CustomizedDrawerHeader />
          <Routes>
            {routes.map((route) => {
              const result = [];
              if (route.children) {
                result.push(
                  ...route.children.map((child) => (
                    <Route
                      key={child.path}
                      path={`${route.path}${child.path}`}
                      element={child.component}
                    />
                  ))
                );
              }
              if (route.secretChildren) {
                result.push(
                  ...route.secretChildren.map((child) => (
                    <Route
                      key={child.path}
                      path={`${route.path}${child.path}`}
                      element={child.component}
                    />
                  ))
                );
              }
              result.push(
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.component}
                />
              );
              return result;
            })}
            <Route path="*" element={<Navigate replace to="/error404" />} />
          </Routes>
        </Box>
      </Box>
    </React.Suspense>
  );
}
