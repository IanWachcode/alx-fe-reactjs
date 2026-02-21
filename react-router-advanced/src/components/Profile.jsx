import { Outlet, Link } from "react-router-dom";

function Profile() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <nav className="mb-4 space-x-4">
        <Link to="details" className="text-blue-600 hover:underline">Details</Link>
        <Link to="settings" className="text-blue-600 hover:underline">Settings</Link>
      </nav>

      {/* Nested components render here */}
      <Outlet />
    </div>
  );
}

export default Profile;