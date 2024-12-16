import { FC } from "react";
import OrganizationList from "../components/OrganizationList";
import OrganizationForm from "../components/OrganizationForm";

const Home: FC = () => {

  return (
    <>
      <div id="detail">
        <h1>Interos Organizations</h1>
        <OrganizationList />
      </div>
      <div id="sidebar">
        <h1>Organization Details</h1>
        <OrganizationForm />
      </div>
    </>
  );
};

export default Home;
