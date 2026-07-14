import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import AuthLayout from "./layouts/AuthLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import GuestRoute from "./components/GuestRoute";
import DetailArticle from "./pages/DetailArticle/DetailArticle";
import DashboardLayout from "./layouts/DashboardLayout";
import Profile from "./pages/Profile/Profile";
import { SearchProvider } from "./context/SearchContext";

export default function App() {
  return (
<SearchProvider>
  <BrowserRouter>
      <Routes>

        <Route path="/" element={<Landing />} />

        <Route element={<AuthLayout />}>
          <Route
            path="/login"
            element={
              <GuestRoute>
                <Login />
              </GuestRoute>
            }
          />

          <Route
            path="/register"
            element={
              <GuestRoute>
                <Register />
              </GuestRoute>
            }
          />
        </Route>
        <Route
            element={
                <ProtectedRoute>
                    <DashboardLayout />
                </ProtectedRoute>
            }
        >

            <Route
                path="/dashboard"
                element={<Dashboard />}
            />

            <Route
                path="/article/:documentId"
                element={<DetailArticle />}
            />
            <Route
                path="/profile"
                element={<Profile />}
            />

        </Route>
      </Routes>
    </BrowserRouter>
  </SearchProvider>
);
}