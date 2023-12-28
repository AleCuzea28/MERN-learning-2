import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { BigSideBar, SmallSideBar, Navbar } from "../components";
import { createContext, useState, useContext } from "react";

const DashboardContext = createContext();

const DashboardLayout = () => {
  //temp
  const user = { name: "Ale" };
  const [showSideBar, setShowSideBar] = useState(false);
  const [isDarkTheme, setDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    console.log("Toggle dark theme");
  };

  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  const logoutUser = async () => {
    console.log("Logout user");
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSideBar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSideBar,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSideBar />
          <BigSideBar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
