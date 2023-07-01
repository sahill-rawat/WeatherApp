import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import { Flex, Heading, VStack } from "@chakra-ui/react";
import bgsrc from "../assets/bg.jpg";
import ErrorComponent from "./ErrorComponent.jsx";
import { cities } from "./cities";
import { useSelector } from "react-redux";
// import Loader from "./Loader";

const Home = () => {
  //   const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("Delhi");
  const [weather, getWeather] = useState([]);
  const userInput = useSelector((state) => state.custom);
  console.log(userInput.city);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `${server}?q=${city}&appid=44fc23821b04f8c524cea122a843d8d9`
        );
        getWeather(data);
        // setLoading(false);
      } catch (error) {
        // setLoading(false);
        if (error)
          return <ErrorComponent message="Error while fetching the details." />;
      }
    };

    fetchData();
    cities.some((x) => x.name.toLowerCase() === userInput.city.toLowerCase())
      ? setCity(userInput.city)
      : alert("City not found");
  }, [userInput, city]);

  return (
    <>
      <Flex
        justify={"center"}
        h="90vh"
        w="full"
        bgImage={bgsrc}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        height="100vh"
        opacity={0.6}
        zIndex="-100"
      >
        <Card
          name={weather === undefined ? "" : weather.name}
          temp={
            weather === undefined
              ? ""
              : weather.main === undefined
              ? ""
              : weather.main.temp === undefined
              ? ""
              : weather.main.temp
          }
          weather={
            weather === undefined
              ? ""
              : weather.weather === undefined
              ? ""
              : weather.weather[0].description === undefined
              ? ""
              : weather.weather[0].description
          }
        />
      </Flex>
    </>
  );
};

const Card = ({ name, temp, weather }) => (
  <VStack
    mt="30vh"
    justify={"center"}
    height={"40vh"}
    width="35vh"
    bg="whiteAlpha.900"
    borderRadius="25px"
    shadow={"outline"}
    justifyContent="flex-start"
    pt="10vh"
  >
    <Heading
      textTransform={"uppercase"}
      fontSize={"35px"}
      color={"blackAlpha.900"}
      as="h1"
    >
      {" "}
      {name}{" "}
    </Heading>
    <Heading mt="-1vh" fontSize={"20px"} color={"blackAlpha.900"} as="h1">
      {" "}
      {Math.round((temp - 273) * 10) / 10}°C{" "}
    </Heading>
    <Heading
      mt="2vh"
      fontSize={"30px"}
      textAlign={"center"}
      textTransform={"uppercase"}
      color={"blackAlpha.900"}
      as="h1"
    >
      {" "}
      {weather}{" "}
    </Heading>
  </VStack>
);

export default Home;
