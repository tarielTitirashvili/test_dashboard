import "./App.css";
import React from "react";
import { routes } from "./routes/index";
import { Navigate, Route, Routes } from "react-router-dom";

export class App extends React.Component {
  render() {
    return (
      <div>
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
            result.push(
              <Route
                key={route.path}
                path={route.path}
                element={route.component}
              />
            );
            return result;
          })}
          <Route path="/" element={<Navigate replace to="/category" />} />
          <Route path="*" element={<Navigate replace to="/error404" />} />
        </Routes>
      </div>
    );
  }
}
export default App;
