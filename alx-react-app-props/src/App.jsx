import { useState } from "react";
import "./App.css";

import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import ProfilePage from "./ProfilePage";

import { UserProvider } from "./UserContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserProvider>
      <>
        <WelcomeMessage />
        <Header />
        <MainContent />
        <UserProfile />
        <Footer />

        <h1>Vite + React</h1>

        <div className="card">
          <button onClick={() => setCount(count + 1)}>
            count is {count}
          </button>
        </div>

        <ProfilePage />
      </>
    </UserProvider>
  );
}

export default App;
