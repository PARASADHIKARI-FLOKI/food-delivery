import React, { useState } from "react";
import login from "../assets/login.png";
import img2 from "../assets/img2.jpg";
import { motion } from "framer-motion";
import axios from 'axios'
import { toast } from "react-toastify";

const Login = ({setToken}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const response=await axios.post('http://localhost:5002/api/user/admin',{email,password})
      if(response.data.success){
         toast.success("Login successful!")
       setToken(response.data.token)
      }else{
        toast.error(response.data.message)
      }
      
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  };

  return (
    <div
      className="absolute top-0 left-0 h-full w-full z-50 bg-cover bg-center"
      style={{ backgroundImage: `url(${img2})` }}
    >
      {/* Soft white overlay */}
      <motion.div
        className="absolute inset-0 bg-white/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Main content */}
      <div className="relative flex h-full w-full overflow-hidden">
        {/* Floating animated background circles */}
        <motion.div
          className="absolute top-10 left-10 w-28 h-28 bg-white/30 rounded-full blur-2xl"
          animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-36 h-36 bg-white/20 rounded-full blur-2xl"
          animate={{ y: [0, 30, 0], x: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        {/* Left Image */}
        <motion.div
          className="w-1/2 hidden sm:block"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={login}
            alt="Visual"
            className="object-cover h-full w-full"
          />
        </motion.div>

        {/* Right Form */}
        <motion.div
          className="flex items-center justify-center w-full sm:w-1/2 z-10"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.form
            className="flex flex-col items-center w-[90%] sm:max-w-md m-auto gap-y-5 text-gray-800 bg-white/35 p-6 rounded-xl shadow-xl backdrop-blur-md"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            onSubmit={onSubmitHandler}
          >
            <h3 className="text-[36px] font-bold mb-2">Admin Panel</h3>

            <div className="w-full">
              <label htmlFor="email" className="text-[15px] font-medium">
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                id="email"
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 mt-1 bg-white/40 rounded ring-1 ring-slate-900/10 focus:outline-none focus:ring-2 focus:ring-[#404040]"
              />
            </div>

            <div className="w-full">
              <label htmlFor="password" className="text-[15px] font-medium">
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                id="password"
                type="password"
                placeholder="•••••••"
                className="w-full px-3 py-2 mt-1 bg-white/40 rounded ring-1 ring-slate-900/10 focus:outline-none focus:ring-2 focus:ring-[#404040]"
              />
            </div>

            <motion.button
              type="submit"
              className="w-full mt-5 px-7 !py-[10px] text-[15px] font-[500] bg-[#404040] text-white rounded hover:bg-[#222] transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
            >
              Login
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;