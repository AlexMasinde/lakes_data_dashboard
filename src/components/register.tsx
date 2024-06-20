import { signUpValidators } from "@/utils/validators";
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

import Link from "next/link";

import { useState } from "react";

interface AuthErrors {
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export default function Register() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [authErrors, setAuthErrors] = useState<AuthErrors>({});

  function handleSignUpSubmit(event: React.FormEvent) {
    event.preventDefault();
    const { valid, errors } = signUpValidators(
      password,
      email,
      confirmPassword
    );

    if (!valid) {
      setAuthErrors(errors);
      return;
    }

    // Handle successful signup
    console.log("Signup successful");
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

  function handleConfirmPassword(event: React.ChangeEvent<HTMLInputElement>) {
    const newConfirmPassword = event.target.value;
    if (authErrors.confirmPassword) {
      setAuthErrors({
        ...authErrors,
        confirmPassword: "",
      });
    }
    setConfirmPassword(newConfirmPassword);
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
          <Heading fontSize={"4xl"}>Create a new account</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <form onSubmit={handleSignUpSubmit}>
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
              <FormControl
                id="confirmPassword"
                isInvalid={authErrors.confirmPassword ? true : false}
              >
                <FormLabel>Confirm Password</FormLabel>
                <Input
                  type="password"
                  value={confirmPassword}
                  onChange={handleConfirmPassword}
                />
                {authErrors.confirmPassword && (
                  <FormErrorMessage>
                    {authErrors.confirmPassword}
                  </FormErrorMessage>
                )}
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"flex-end"}
                >
                  <Link href="/login" color={"blue.400"}>
                    Already have an account?
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
                  Sign up
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
