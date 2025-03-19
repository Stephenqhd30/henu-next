import { MenuDataItem } from "@ant-design/pro-layout";
import { HomeOutlined } from "@ant-design/icons";

const menus: MenuDataItem[] = [
  {
    path: "/",
  },
  {
    name: "用户页",
    path: "/user",
    hideInMenu: true,
    children: [
      {
        path: "/user",
        redirect: "/user/login",
      },
      {
        path: "/user/login",
        name: "用户登录页",
        component: "./user/login",
      },
      {
        path: "/user/register",
        name: "用户注册页",
        component: "./user/register",
      },
    ],
  },
  {
    name: "异常页",
    path: "/exception",
    hideInMenu: true,
    children: [
      {
        path: "/exception",
        redirect: "/exception/403",
      },
      {
        name: "403",
        path: "/exception/403",
        component: "./exception/403",
      },
      {
        name: "404",
        path: "/exception/404",
        component: "./exception/404",
      },
      {
        name: "500",
        path: "/exception/500",
        component: "./exception/500",
      },
    ],
  },
  { path: "*", layout: false, component: "./exception/404" },
];

export default menus;
