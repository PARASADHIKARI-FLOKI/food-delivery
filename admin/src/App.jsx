import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import List from "./pages/List";
import Add from "./pages/Add";
import Orders from "./pages/Orders";
import { useEffect, useState } from "react";
import Login from "./components/Login";

const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);
  return (
    <main>
      <ToastContainer />
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <div className="bg-[#ebf9dc] text-[#404040] min-h-screen w-full flex flex-col sm:flex-row">
          {/* Sidebar */}
          <Sidebar setToken={setToken} />

          {/* Main content */}
          <div className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<Add token={token} />} />
              <Route path="/list" element={<List token={token} />} />
              <Route path="/orders" element={<Orders token={token} />} />
            </Routes>
          </div>
        </div>
      )}
    </main>
  );
};

export default App;
