import React from "react";
import { Formik } from "formik";

import { Button, Container, Text } from "../../../components";
import { Box } from "../../../components/Theme";
import { CheckBox, Input, SocialLogin } from "../components";

const emailValidator = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
const passwordValidator = (password: string) => {
  return password.length >= 6;
};

function Login(): JSX.Element | null {
  const footer = (
    <>
      <SocialLogin />
      <Box alignItems="center">
        <Button variant="transparent" onPress={() => alert("SIGN UP")}>
          <Box flexDirection="row" justifyContent="center">
            <Text variant="button" color="white">
              Don't have an account?
            </Text>
            <Text marginLeft="s" variant="button" color="primary">
              Sign up here
            </Text>
          </Box>
        </Button>
      </Box>
    </>
  );

  return (
    <Container {...{ footer }}>
      <Box padding="xl">
        <Text variant="title" textAlign="center">
          Welcome back
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Use your credentials below to login to your account.
        </Text>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={values => console.log(values)}>
          {({ handleChange, handleBlur, handleSubmit }) => (
            <>
              <Box marginBottom="m">
                <Input
                  icon="mail"
                  placeholder="Enter your mail"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                />
              </Box>
              <Input
                icon="lock"
                placeholder="Enter your password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
              />
              <Box
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center">
                <CheckBox label="Remember me" />
                <Button variant="transparent" onPress={() => true}>
                  <Text color="primary">Forgot Password</Text>
                </Button>
              </Box>
              <Box alignItems="center" marginTop="m">
                <Button
                  variant="primary"
                  label="Log in to your account"
                  onPress={handleSubmit}
                />
              </Box>
            </>
          )}
        </Formik>
      </Box>
    </Container>
  );
}

export default Login;
