import { ThemeProvider } from "@material-ui/styles";
import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Fallback from "./components/Shared/Fallback";
import theme from "./utils/index";
//components
const Home = lazy(() => import("./pages/Landing/Home"));
const OurGoal = lazy(() => import("./pages/Landing/OurGoal"));
const GetInvolved = lazy(() => import("./pages/Landing/GetInvolved"));
const ContactUs = lazy(() => import("./pages/Landing/ContactUs"));
const Signin = lazy(() => import("./pages/Signinup/Signin"));
const Signup = lazy(() => import("./pages/Signinup/Signup"));
const ForgotPassword = lazy(() => import("./pages/Signinup/ForgotPassword"));

// const Inventory = lazy(() => import("./pages/Inventory/Inventory"));
// const MakeDonation = lazy(() => import("./pages/Inventory/MakeDonation"));

// const CallForDonation = lazy(() =>
//   import("./pages/CallForDonation/CallForDonation")
// );

// const MyDonations = lazy(() => import("./pages/Account/Donations"));
// const Profile = lazy(() => import("./pages/Account/Profile"));
// const Edit = lazy(() => import("./pages/Account/Edit"));

const Donations = lazy(() => import("./pages/Admin/Donations"));
const CallForDonations = lazy(() => import("./pages/Admin/CallForDonations"));
const StockInventory = lazy(() => import("./pages/Admin/StockInventory"));
const Records = lazy(() => import("./pages/Admin/Records"));
const Users = lazy(() => import("./pages/Admin/Users"));
function App() {
  return (
    <Suspense fallback={<Fallback />}>
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
          {/* <Route path="/inventory" component={Inventory} />
          <Route path="/makeadonation" component={MakeDonation} /> */}
          {/* Callfordonations */}
          {/* <Route path="/callfordonation" component={CallForDonation} /> */}
          <Route path="/admin/donations" component={Donations} />
          <Route path="/admin/callfordonations" component={CallForDonations} />
          <Route path="/admin/inventory" component={StockInventory} />
          <Route path="/admin/records" component={Records} />
          <Route path="/admin/users" component={Users} />
          {/* Account */}
          {/* <Route path="/account/mydonations" component={MyDonations} />
          <Route path="/account/myprofile" component={Profile} />
          <Route path="/account/editprofile" component={Edit} /> */}
          <Route path="">
            <p>404</p>
          </Route>
        </Switch>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
