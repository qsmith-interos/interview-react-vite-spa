import { FC } from "react";
import { Outlet} from "react-router-dom";

const Layout: FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;
