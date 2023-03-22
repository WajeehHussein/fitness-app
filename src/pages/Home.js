import { Box } from "@mui/system";
import React from "react";
import Exercises from "../components/Exercises";
import HeroBanner from "../components/HeroBanner";
import SearchExcercises from "../components/SearchExcercises";

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExcercises />
      <Exercises />
    </Box>
  );
};

export default Home;
