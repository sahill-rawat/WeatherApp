import {
  Button,
  Heading,
  HStack,
  InputGroup,
  InputRightElement,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Header = () => {
  const [inputValue, setInputValue] = useState("Delhi");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const update = () => {
    // Access the input value here and perform desired actions
    dispatch({
      type: "changeCity",
      payload: inputValue,
    });

    setInputValue("");
    document.getElementById("myInput").value = "";
  };

  return (
    <>
      <HStack
        pos={"fixed"}
        zIndex="100"
        w={"full"}
        h="10vh"
        minH={"60px"}
        bg="whiteAlpha.900"
        justifyContent={"space-between"}
        alignContent="space-between"
      >
        <Heading ml={"2vw"} color={"blackAlpha.900"}>
          {" "}
          WeatherApp{" "}
        </Heading>

        <InputGroup
          mr={"2vw"}
          borderRadius={"25px"}
          width="250px"
          bgColor={"RGB(33, 111, 170)"}
          size="lg"
        >
          <Input
            onChange={handleInputChange}
            id="myInput"
            pr="4.5rem"
            placeholder="Enter City..."
          />
          <InputRightElement width="4rem">
            <Button
              variant={"ghost"}
              mr="2"
              color={"blackAlpha.900"}
              bgColor={"whiteAlpha.800"}
              size="sm"
              onClick={update}
            >
              Search
            </Button>
          </InputRightElement>
        </InputGroup>
      </HStack>
    </>
  );
};

export default Header;
