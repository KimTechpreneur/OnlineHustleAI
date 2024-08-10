import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Update these import paths to match your file structure
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import Profile from './Components/Profile';
import CareerPath from './Components/CareerPath';
import BottomNavBar from './Components/BottomNavBar';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00102e', // Dark blue
    },
    secondary: {
      main: '#ffa500', // Orange
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/career-path" element={<CareerPath />} />
        </Routes>
        <BottomNavBar />
      </Router>
    </ThemeProvider>
  );
}

export default App;
