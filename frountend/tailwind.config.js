/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./pages/Start.jsx",
    "./pages/home.jsx",
    "./pages/UserSignup.jsx",
    "./pages/UserLogin.jsx",
    "./pages/UserLogout.jsx",
    "./pages/UserProtectWrapper.jsx",
    "./pages/CaptainSignup.jsx",
    "./pages/CaptainLogin.jsx",
    "./pages/CaptainLogout.jsx",
    "./pages/CaptainHome.jsx",
    "./pages/CaptainProtectWrapper.jsx",
    "./pages/CaptainRiding.jsx",
    // next componenet starts here 
    "./components/CaptainDetails.jsx",
    "./components/CaptainRide.jsx",
    "./components/CaptainRidePopUp.jsx",
    "./components/FinishRide.jsx",
    "./components/LiveTracking.jsx",
    "./components/LocationSearchPanel.jsx",
    "./components/LookingForDriver.jsx",
    "./components/RidePopUp.jsx",
    "./components/VehiclePanel.jsx",
    "./components/WaitingForDriver.jsx",
    // componenet ends here 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
