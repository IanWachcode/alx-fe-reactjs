import { Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Post from "./components/Post";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Dynamic route example */}
        <Route path="/post/:postId" element={<Post />} />

        {/* Protected profile route */}
        <Route path="/profile" element={<ProtectedRoute />}>
          <Route index element={<Profile />} />
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>
      </Routes>
  );
}

export default App;