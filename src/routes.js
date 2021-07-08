/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
//import UserProfile from "views/UserProfile/UserProfile.js";
//import TableList from "views/TableList/TableList.js";



import Menu from "./views/Mantenimiento/Menu"
import Salir from "./Salir"




const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },

  {
    path: "/Menumant",
    name: "Mantenimiento",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: Menu,
    layout: "/admin"
  },

  {
    path: "/salir",
    name: "Salir",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: Salir,
    layout: "/salir"
  }


];

export default dashboardRoutes;


/*{
    path: "/categoriafile",
    name: "Categorias Principal",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: Categoriafile,
    layout: "/admin"
  },
  {
    path: "/tipofile",
    name: "Tipos Principal",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: Tipofile,
    layout: "/admin"
  },



  {
    path: "/typography",
    name: "Typography",
    rtlName: "طباعة",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    rtlName: "الرموز",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    rtlName: "خرائط",
    icon: LocationOn,
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin"
  },
  {
    path: "/rtl-page",
    name: "RTL Support",
    rtlName: "پشتیبانی از راست به چپ",
    icon: Language,
    component: RTLPage,
    layout: "/rtl"
  },
  {
    path: "/upgrade-to-pro",
    name: "Upgrade To PRO",
    rtlName: "التطور للاحترافية",
    icon: Unarchive,
    component: UpgradeToPro,
    layout: "/admin"
  }



    {
    path: "/venta",
    name: "Venta",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component:Venta,
    layout: "/admin"
  },
  */
