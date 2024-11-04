import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Banner from "./Home/Banner";
import HomeSign from "./Home/HomeSign";
import CoursesGrid from "./Home/CoursesGrid";
// import { AuthContext } from "./AuthProvider";

const Home = () => {
  // const authInfo = useContext(AuthContext);
  // console.log(authInfo);

  return (
    <div>
      <Banner></Banner>
      <CoursesGrid></CoursesGrid>
      <HomeSign></HomeSign>
    </div>
  );
};

export default Home;
