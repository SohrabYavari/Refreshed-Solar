import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import InfoIcon from '@mui/icons-material/Info';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import CallIcon from '@mui/icons-material/Call';

export const NAVBARLINKS = [
  {
    id: 1,
    navName: "Home",
    navPathName: "/Refreshed-Solar/",
    navIcon: SolarPowerIcon,
  },
  {
    id: 2,
    navName: "About",
    navPathName: "/Refreshed-Solar/About",
    navIcon: InfoIcon,
  },
  {
    id: 3,
    navName: "For Houses",
    navPathName: "/Refreshed-Solar/ForHouses",
    navIcon: HomeIcon,
  },
  {
    id: 4,
    navName: "For Businesses",
    navPathName: "/Refreshed-Solar/ForBusinesses",
    navIcon: BusinessIcon,
  },
  {
    id: 5,
    navName: "Contact",
    navPathName: "/Refreshed-Solar/Contact",
    navIcon: CallIcon,
  },
];
