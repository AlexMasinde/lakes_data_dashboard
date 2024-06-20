import { loginValidators } from "@/utils/validators";
import Link from "next/link";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";
import { useAuthContext } from "@/contexts/authContext";

interface AuthErrors {
  email?: string;
  password?: string;
}

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [authErrors, setAuthErrors] = useState<AuthErrors>({});

  const { dispatch } = useAuthContext();

  function handleLoginSubmit(event: React.FormEvent) {
    event.preventDefault();
    const { valid, errors } = loginValidators(password, email);

    if (!valid) {
      setAuthErrors({
        email: errors.email,
        password: errors.password,
      });
      return;
    }

    dispatch({
      type: "SET_USER",
      payload: {
        name: password,
        email: email,
      },
    });
  }

  function handleEmail(event: React.ChangeEvent<HTMLInputElement>) {
    const newEmail = event.target.value;
    if (authErrors.email) {
      setAuthErrors({
        ...authErrors,
        email: "",
      });
    }
    setEmail(newEmail);
  }

  function handlePassword(event: React.ChangeEvent<HTMLInputElement>) {
    const newPassword = event.target.value;
    if (authErrors.password) {
      setAuthErrors({
        ...authErrors,
        password: "",
      });
    }
    setPassword(newPassword);
  }

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <form onSubmit={handleLoginSubmit}>
            <Stack spacing={4}>
              <FormControl
                id="email"
                isInvalid={authErrors.email ? true : false}
              >
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={email} onChange={handleEmail} />
                {authErrors.email && (
                  <FormErrorMessage>{authErrors.email}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl
                id="password"
                isInvalid={authErrors.password ? true : false}
              >
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={handlePassword}
                />
                {authErrors.password && (
                  <FormErrorMessage>{authErrors.password}</FormErrorMessage>
                )}
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"flex-end"}
                >
                  <Link href="/register" color={"blue.400"}>
                    Already registered?
                  </Link>
                </Stack>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  type="submit"
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
