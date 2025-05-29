import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import List from "./pages/List";
import Add from "./pages/Add";
import Orders from "./pages/Orders";

const App = () => {
  return (
    <main>
      <ToastContainer />
      <div className="bg-[#ebf9dc] text-[#404040] min-h-screen">
        <div className="mx-auto max-w-[1440px] flex flex-col sm:flex-row">
          <Sidebar />
          <div className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<Add />} />
              <Route path="/list" element={<List />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
