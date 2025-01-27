import React, { useRef, useState } from "react";
import {
  Alert,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { verticalScale } from "@/utils/styling";
import { colors, spacingX, spacingY } from "@/constants/theme";
import ScreenWrapper from "@/components/ScreenWrapper";
import BackButton from "@/components/BackButton";
import Typo from "@/components/Typo";
import Button from "@/components/Button";
import * as Icons from "phosphor-react-native";
import Input from "@/components/input";
import { useRouter } from "expo-router";

const Register = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    if (!nameRef.current || !emailRef.current || !passwordRef.current) {
      Alert.alert("SignIn", "Please fill in all fields");
      return;
    }
    console.log("name", nameRef.current);
    console.log("email", emailRef.current);
    console.log("password", passwordRef.current);
    console.log("Good to go");
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <BackButton iconSize={23} />

        <View style={{ gap: 5, marginTop: spacingY._20 }}>
          <Typo size={30} fontWeight="800">
            Let's,
          </Typo>
          <Typo size={30} fontWeight="800">
            Get Started.
          </Typo>
        </View>

        <View style={styles.form}>
          <Typo size={15} color={colors.textLight}>
            Create an account to continue
          </Typo>

          <Input
            placeholder="Enter your name"
            onChangeText={(value) => (nameRef.current = value)}
            icon={
              <Icons.User
                size={verticalScale(20)}
                color={colors.neutral300}
                weight="fill"
              />
            }
          />

          <Input
            placeholder="Enter your email"
            onChangeText={(value) => (emailRef.current = value)}
            icon={
              <Icons.At
                size={verticalScale(20)}
                color={colors.neutral300}
                weight="fill"
              />
            }
          />

          <Input
            placeholder="Enter your password"
            onChangeText={(value) => (passwordRef.current = value)}
            secureTextEntry={true}
            icon={
              <Icons.Lock
                size={verticalScale(20)}
                color={colors.neutral300}
                weight="fill"
              />
            }
          />

          <Button
            loading={isLoading}
            onPress={handleSubmit}
            style={styles.loginButton}
          >
            <Typo fontWeight="700" color={colors.black} size={21}>
              Sign Up
            </Typo>
          </Button>
        </View>

        <View style={styles.footer}>
          <Typo size={14}>Already have an account?</Typo>
          <Pressable onPress={() => router.navigate("/(auth)/login")}>
            <Typo size={16} fontWeight={"600"} color={colors.primary}>
              Log In
            </Typo>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: spacingY._30,
    paddingHorizontal: spacingX._20,
  },
  form: {
    gap: spacingY._20,
  },
  loginButton: {
    marginTop: 20,
    backgroundColor: colors.primary,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});

export default Register;
