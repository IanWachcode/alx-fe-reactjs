import { createContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const user = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
  };

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
