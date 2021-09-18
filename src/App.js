import { ThemeProvider } from "@material-ui/styles";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import theme from "./utils/index";
//components
const Home = lazy(() => import("./pages/Landing/Home"));
const OurGoal = lazy(() => import("./pages/Landing/OurGoal"));
const GetInvolved = lazy(() => import("./pages/Landing/GetInvolved"));
const ContactUs = lazy(() => import("./pages/Landing/ContactUs"));
const Signin = lazy(() => import("./pages/Signinup/Signin"));
const Signup = lazy(() => import("./pages/Signinup/Signup"));
const ForgotPassword = lazy(() => import("./pages/Signinup/ForgotPassword"));

const Inventory = lazy(() => import("./pages/Inventory/Inventory"));
const MakeDonation = lazy(() => import("./pages/Inventory/MakeDonation"));

const CallForDonation = lazy(() =>
  import("./pages/CallForDonation/CallForDonation")
);

const Donations = lazy(() => import("./pages/Admin/Donations"));
const CallForDonations = lazy(() => import("./pages/Admin/CallForDonations"));
const StockInventory = lazy(() => import("./pages/Admin/StockInventory"));
function App() {
  return (
    <Router>
      <Suspense fallback={<div />}>
        <ThemeProvider theme={theme}>
          <Switch>
            {/* Landing */}
            <Route path="/" exact component={Home} />
            <Route path="/ourgoal" component={OurGoal} />
            <Route path="/getinvolved" component={GetInvolved} />
            <Route path="/contactus" component={ContactUs} />

            {/* Signinup */}
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/forgotpassword" component={ForgotPassword} />

            {/* Inventory */}
            <Route path="/inventory" component={Inventory} />
            <Route path="/makeadonation" component={MakeDonation} />
            {/* Callfordonations */}
            <Route path="/callfordonation" component={CallForDonation} />
            <Route path="/admin/donations" component={Donations} />
            <Route
              path="/admin/callfordonations"
              component={CallForDonations}
            />
            <Route path="/admin/inventory" component={StockInventory} />
            <Route path="">
              <p>404</p>
            </Route>
          </Switch>
        </ThemeProvider>
      </Suspense>
    </Router>
  );
}

export default App;
