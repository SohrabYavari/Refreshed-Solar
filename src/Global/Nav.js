import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import InfoIcon from '@mui/icons-material/Info';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import CallIcon from '@mui/icons-material/Call';

export const NAVBARLINKS = [
  {
    id: 1,
    navName: "Home",
    navPathName: "RefreshedSolar",
    navIcon: SolarPowerIcon,
  },
  {
    id: 2,
    navName: "About",
    navPathName: "About",
    navIcon: InfoIcon,
  },
  {
    id: 3,
    navName: "For Houses",
    navPathName: "ForHouses",
    navIcon: HomeIcon,
  },
  {
    id: 4,
    navName: "For Businesses",
    navPathName: "ForBusinesses",
    navIcon: BusinessIcon,
  },
  {
    id: 5,
    navName: "Contact",
    navPathName: "Contact",
    navIcon: CallIcon,
  },
];
