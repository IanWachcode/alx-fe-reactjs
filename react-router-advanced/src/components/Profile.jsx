import { Link, Outlet } from "react-router-dom";

function Profile() {
  return (
    <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Profile Page</h1>
        <nav className="mb-4">
            <link to="details" className="mr-4 text-blue-500 hover:underline">Details</link>
            <link to="settings" className="text-blue-500 hover:underline">Settings</link>
        </nav>
        <div className="bg-white p-4 rounded shadow">
            <Outlet />
        </div>
    </div>
  );
}

export default Profile;