
import './App.css';
import { createTheme, Divider, MantineProvider, Slider } from '@mantine/core';
import '@mantine/core/styles.css';
// import '@mantine/core/styles.css';
// // ‼️ import notifications styles after core package styles
import '@mantine/notifications/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/dates/styles.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import FindJobs from './pages/FIndJobs';
import FindTalentPage from './pages/FIndTalentPage';
import CompanyPage from './pages/CompanyPage';
import PostedJobPage from './pages/PostedJobPage';
import JobHistoryPage from './pages/JobHistoryPage';
import JobDescPage from './pages/JobDescPage';
import ApplyJobPage from './pages/ApplyJobPage';
import PostJobPage from './pages/PostJobPage';
import SignUpPage from './pages/SignUpPage';
import ProfilePage from './pages/ProfilePage';
import TalentProfilePage from './pages/TalentProfilePage';
import HomePage from './pages/HomePage';
import Footer from './Components/Footer/Footer';
import { Notifications } from '@mantine/notifications';
import { Provider } from 'react-redux';
import Store from './Store';
import { getItem } from './Services/LocalStorageService';
import AppRoutes from './pages/AppRoutes';

// import HomePage from './pages/HomePage';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import FindJobs from './pages/FIndJobs';
// import Header from './Header/Header';
// import Footer from './Footer/Footer';
// import FindTalentPage from './pages/FIndTalentPage';
// import TalentProfilePage from './pages/TalentProfilePage';
// import PostJobPage from './pages/PostJobPage';
// import JobDescPage from './pages/JobDescPage';
// import ApplyJobPage from './pages/ApplyJobPage';
// import CompanyPage from './pages/CompanyPage';
// import PostedJobPage from './pages/PostedJobPage';
// import JobHistoryPage from './pages/JobHistoryPage';
// import SignUpPage from './pages/SignUpPage';
// import ProfilePage from './pages/ProfilePage';

function App() {
  const theme = createTheme({
    colors:{
      'brightSun': ['#fffbeb','#fff3c6','#ffe588','#ffd149','#ffbd20','#f99b07','#dd7302','#b75006','#943c0c','#7a330d', '#461902',],
      'mineShaft': ['#f6f6f6','#e7e7e7','#d1d1d1','#b0b0b0','#888888','#6d6d6d','#5d5d5d','#4f4f4f','#454545','#3d3d3d', '#2d2d2d',],
    },
    fontFamily:"poppins, sans-serif",
    focusRing:"never",
    primaryColor:'brightSun',
    primaryShade:6,
  })
  return (
    <Provider store={Store}>
    <MantineProvider defaultColorScheme='dark' theme={theme}>
      <Notifications position='top-center' zIndex={1000}/>
      <AppRoutes/> 
    </MantineProvider>
    </Provider>
  );
}

export default App;
