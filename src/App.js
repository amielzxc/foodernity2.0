import { ThemeProvider } from "@material-ui/styles";
import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import bcryptjs from "bcryptjs";
import Loading from "./components/Shared/Loading";
import theme from "./utils/index";

//components
const Home = lazy(() => import("./pages/Landing/Home"));
const OurGoal = lazy(() => import("./pages/Landing/OurGoal"));
const GetInvolved = lazy(() => import("./pages/Landing/GetInvolved"));
const ContactUs = lazy(() => import("./pages/Landing/ContactUs"));
const Signin = lazy(() => import("./pages/Signinup/Signin"));
const Donations = lazy(() => import("./pages/Admin/Donations"));
const CallForDonations = lazy(() => import("./pages/Admin/CallForDonations"));
const StockInventory = lazy(() => import("./pages/Admin/StockInventory"));
const Records = lazy(() => import("./pages/Admin/Records"));
const Users = lazy(() => import("./pages/Admin/Users"));

function App() {
  const isAuthenticated = bcryptjs.compareSync(
    "MHTPadmin2021@gmail.com",
    localStorage.getItem("vh") || ""
  );

  console.log(isAuthenticated);

  return (
    <Suspense fallback={<Loading />}>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/ourgoal" component={OurGoal} />
          <Route path="/getinvolved" component={GetInvolved} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/signin" component={Signin} />

          <Route path="/admin/donations" component={Donations} />
          <Route path="/admin/callfordonations" component={CallForDonations} />
          <Route path="/admin/inventory" component={StockInventory} />
          <Route path="/admin/records" component={Records} />
          <Route path="/admin/users" component={Users} />
          <Route path="">
            <p>404</p>
          </Route>
        </Switch>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
