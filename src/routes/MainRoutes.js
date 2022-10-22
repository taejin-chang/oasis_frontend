import Layout from "../components/layout/containers/Layout";
import MyPage from "../components/myPage/containers/MyPage";
import UserManagement from "../components/userConfiguration/containers/UserManagement";
import ChangePassword from "../components/changePassword/containers/ChangePassword";
import AdminConfig from "../components/environmentConfig/containers/AdminConfig";
import UserConfig from "../components/environmentConfig/containers/UserConfig";
import OperationConfiguration from "../components/operationConfiguration/containers/OperationConfiguration";
import LogIn from "../components/login/containers/LogIn";
import FindPw from "../components/login/containers/FindPw";
import FindId from "../components/login/containers/FindId";


const MainRoutes = {
  path: "/",
  element: <Layout />,
  children: [
    {
      path: "/",
      element: <MyPage />,
    },
    {
      path: "my-page",
      element: <MyPage />,
    },
    {
      path: "login",
      element: <LogIn />,
    },
    {
      path: "find-id",
      element: <FindId />,
    },
    {
      path: "find-pw",
      element: <FindPw />,
    },
    {
      path: "config/user-management",
      element: <UserManagement />,
    },
    {
      path: "change-password",
      element: <ChangePassword />,
    },
    {
      path: "config/environment/admin",
      element: <AdminConfig />,
    },
    {
      path: "config/environment/user",
      element: <UserConfig />,
    },
      {
          path: 'config/environment/operation',
          element: <OperationConfiguration />
      }
  ],
};

export default MainRoutes;
