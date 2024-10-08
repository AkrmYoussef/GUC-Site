import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import HomeAdmin from "./pages/HomeAdmin";
import HomeInstructor from "./pages/Homeinstructor";
import Announcement from "./pages/Announcment";
import Fund from "./pages/Fund";
import Conference from "./pages/Conference";
import FileLink from "./pages/FileLink";
import Evaluation from "./pages/Evaluation";
import ComplaintInstructor from "./pages/ComplaintInstructor";
import Login from "./pages/Login";
import EnterEmailReset from "./components/EnterEmailReset";
import ResetPassword from "./components/ResetPassword";
import ChangePassword from "./pages/ChangePassword";
import ComplaintAdmin from "./pages/ComplaintAdmin";


const queryClient = new QueryClient();

const App = () => {
  const logged = sessionStorage.getItem("logged") === "true";
  console.log(logged);
  const role = sessionStorage.getItem("role");
  console.log(role);

  const isAdmin = role === "ADMIN";
  const isInstructor = role === "INSTRUCTOR";

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              logged ? <Navigate to="/home" /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/login"
            element={logged ? <Navigate to="/home" /> : <Login />}
          />
          <Route
            path="/home"
            element={
              logged ? (
                isAdmin ? (
                  <HomeAdmin />
                ) : (
                  <HomeInstructor />
                )
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/announcements"
            element={logged ? <Announcement /> : <Navigate to="/login" />}
          />
          <Route
            path="/funds"
            element={logged ? <Fund /> : <Navigate to="/login" />}
          />
          <Route
            path="/conferences"
            element={logged ? <Conference /> : <Navigate to="/login" />}
          />
          <Route
            path="/filelinks"
            element={logged ? <FileLink /> : <Navigate to="/login" />}
          />
          <Route
            path="/evaluations"
            element={logged ? <Evaluation /> : <Navigate to="/login" />}
          />
          <Route
            path="/complaintsInstructor"
            element={logged && isInstructor ? <ComplaintInstructor /> : <Navigate to="/login" />}
          />
          <Route
            path="/complaintsAdmin"
            element={logged &&  isAdmin ? <ComplaintAdmin /> : <Navigate to="/login" />}
          />
          <Route path="/EnterEmailReset" element={<EnterEmailReset />} />
          <Route path="/ResetPassword/:email" element={<ResetPassword />} />
          <Route
            path="/changePassword"
            element={logged ? <ChangePassword /> : <Navigate to="/login" />}
          />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
