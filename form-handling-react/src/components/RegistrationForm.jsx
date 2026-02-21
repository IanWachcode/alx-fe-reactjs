import { useState } from "react";
import { ValidationError } from "yup";

function RegistrationForm() {
  // Step 1: Create state for each input
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  // Step 2: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    const ValidationErrors = {};
    if (!username) ValidationErrors.username = "Username is required";
    if (!email) ValidationErrors.email = "Email is required";
    if (!password) ValidationErrors.password = "Password is required";

    // Step 3: Simple validation
    if (Object.keys(ValidationErrors).length > 0) {
      setErrors(ValidationErrors);
      return;
    }

    // Step 4: Log form data (mock submission)
    console.log({ username, email, password });

    // Step 5: Reset form
    setUsername("");
    setEmail("");
    setPassword("");
    setErrors({});
  };

 return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto mt-10">
      <div>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <p className="text-red-500">{errors.username}</p>}
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className="text-red-500">{errors.password}</p>}
      </div>

      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;