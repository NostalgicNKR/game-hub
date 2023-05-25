import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  const errorMessage = isRouteErrorResponse(error)
    ? "Page does not exist"
    : "Something Went Wrong";

  return (
    <>
      <NavBar />
      <Box padding="30px">
        <Heading>Oops</Heading>
        <Text>{errorMessage}</Text>
      </Box>
    </>
  );
};

export default ErrorPage;
