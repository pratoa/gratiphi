import React, { useState } from "react";
import { Auth } from "aws-amplify";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  Pressable,
  useColorScheme,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import AppTextInput from "../../components/common/AppTextInput";
import AppButton from "../../components/common/AppButton";
import colors from "../../config/colors";
import Screen from "../../components/common/Screen";

const SCREEN_WIDTH = Dimensions.get("window").width;
export default function SignUp({ navigation }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showDatepicker, setShowDatepicker] = useToggle();
  const logo = "../../../assets/logo/gratiphi-blue-small2.png";
  const colorScheme = useColorScheme();

  async function signUp() {
    setError("");
    try {
      //verify all fields have been provided
      //fix responsiveness issues

      if (!name) {
        setError("First name is empty, please enter your first name!");
        throw error;
      }

      if (!lastName) {
        setError("Last name is empty, please enter your last name!");
        throw error;
      }

      if (!dateOfBirth) {
        setError("Birth date is empty, please enter your birth date!");
        throw error;
      }

      if (!email) {
        setError("Email is empty, please enter your email!");
        throw error;
      }

      if (!validateEmail(email)) {
        setError("Email is not in en email format, please check your email");
        throw error;
      }

      if (!password) {
        setError("Password is empty, please enter your password!");
        throw error;
      }

      if (!confirmPassword) {
        setError("Password confirmation is empty, please enter your password!");
        throw error;
      }

      if (password !== confirmPassword) {
        setError("Passwords don't match!");
        throw error;
      }
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
          "custom:first_name": name,
          "custom:last_name": lastName,
          "custom:birth_date": dateOfBirth,
        },
      });
      console.log(user);
      console.log("Sign-up Confirmed");
      navigation.navigate("ConfirmationSignUp", {
        email: email,
        password: password,
      });
    } catch (err) {
      console.log("Error signing up...", err);
    }
  }

  const hideDatePicker = () => {
    setShowDatepicker(false);
  };

  const handleConfirm = (date) => {
    setDateOfBirth(moment(date).format("YYYY-MM-DD"));
    hideDatePicker();
  };

  function useToggle(initialValue = false) {
    const [value, setValue] = React.useState(initialValue);
    const toggle = React.useCallback(() => {
      setValue((v) => !v);
    }, []);
    return [value, toggle];
  }

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  return (
    <Screen style={styles.container}>
      <KeyboardAwareScrollView>
        <Image source={require(logo)} style={styles.logo} />
        <View style={styles.nameContainer}>
          <View style={styles.nameWrapper}>
            <AppTextInput
              value={name}
              onChangeText={(text) => {
                setName(text);
              }}
              leftIcon="account"
              placeholder="First name"
              autoCapitalize="words"
              keyboardType="default"
              textContentType="name"
            />
          </View>
          <View style={styles.lastNameWrapper}>
            <AppTextInput
              value={lastName}
              onChangeText={(text) => {
                setLastName(text);
              }}
              leftIcon="account"
              placeholder="Last name"
              autoCapitalize="words"
              keyboardType="default"
              textContentType="name"
            />
          </View>
        </View>
        <Pressable onPress={setShowDatepicker}>
          <AppTextInput
            value={dateOfBirth ? dateOfBirth : ""}
            placeholder="Birth date"
            leftIcon="cake"
            editable={false}
          />
        </Pressable>
        <DateTimePickerModal
          isDarkModeEnabled={colorScheme === "dark"}
          isVisible={showDatepicker}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          maximumDate={moment().subtract(18, "years").toDate()}
        />
        <AppTextInput
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setUsername(text);
          }}
          leftIcon="account"
          placeholder="Email address"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <AppTextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          leftIcon="lock"
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          textContentType="password"
        />
        <AppTextInput
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          leftIcon="lock"
          placeholder="Confirm password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          textContentType="password"
        />
        <View style={styles.signUpContainer}>
          <AppButton title="Sign Up" onPress={signUp} />
          {error !== "" && (
            <Text title={error} style={styles.errorText}>
              {error}
            </Text>
          )}
        </View>
        <View style={styles.footerButtonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
            <Text style={styles.alreadyHaveAccount}>
              Already have an account?
              <Text style={styles.forgotPasswordButtonText}> Sign In</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  logo: {
    width: 250,
    resizeMode: "contain",
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "center",
  },
  formContainer: {},
  nameContainer: {
    flexDirection: "row",
    width: "100%",
  },
  nameWrapper: {
    flex: 1,
    paddingRight: 5,
  },
  lastNameWrapper: {
    flex: 1,
    paddingLeft: 5,
  },
  signUpContainer: {
    alignItems: "center",
  },
  footerButtonContainer: {
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  alreadyHaveAccount: {
    color: colors.darkGrey,
    fontSize: 0.034 * SCREEN_WIDTH,
    fontWeight: "600",
  },
  forgotPasswordButtonText: {
    color: colors.primary,
    fontSize: 0.034 * SCREEN_WIDTH,
    fontWeight: "600",
  },
  errorText: {
    color: colors.danger,
    alignSelf: "center",
  },
});
