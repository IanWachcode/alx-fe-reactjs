import { Link } from "react-router-dom";

function Profile() {
  return (
    <div>
        <h1>Profile Page</h1>
        <Link to="details">Details</Link>
        <Link to="settings">Settings</Link>
    </div>
  );
}

export default Profile;