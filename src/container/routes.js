import React from "react";
import Loadable from "react-loadable";
import { DefaultLayout } from "./DefaultLayout";
import Spinner from "../components/Spinner";
import { Colors } from "../styles/themes";

const styleProps = {
  color: Colors.blueSecondary,
  height: 50,
  width: 50,
  className: "spinner-background-opt"
};

const Dashboard = Loadable({
  loader: () => import("../Views/Dashboard/DashboardContainer"),
  loading: () => <Spinner {...styleProps} />
});

const IndividualTaxpayers = Loadable({
  loader: () => import("../Views/IndividualTaxPayers/IndividualTaxPayers"),
  loading: () => <Spinner {...styleProps} />
});

const NonIndividualTaxPayers = Loadable({
  loader: () => import("../Views/NonIndividualTaxPayers/NonIndividualTaxPayers"),
  loading: () => <Spinner {...styleProps} />
});
const UserManagement = Loadable({
  loader: () => import("../Views/UserManagement/UserManagement"),
  loading: () => <Spinner {...styleProps} />
});
const NonIndividualTaxPayerProfile = Loadable({
  loader: () => import("../Views/NonIndividualTaxPayers/Profile"),
  loading: () => <Spinner {...styleProps} />
});

const routes = [
  { path: "/", exact: true, name: "Home", component: DefaultLayout },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/individual-taxpayer", name: "IndividualTaxpayers", component: IndividualTaxpayers },
  { path: "/nonindividual-taxpayers", name: "NonIndividualTaxpayers", component: NonIndividualTaxPayers },
  { path: "/user-management", name: "UserManagement", component: UserManagement },
  { path: "/nonindividual-taxpayer-profile", name: "NonIndividualTaxPayerProfile", component: NonIndividualTaxPayerProfile },
];
export default routes;
