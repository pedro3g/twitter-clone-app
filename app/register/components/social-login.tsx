import { StyleSheet, View } from "react-native";
import { SocialButton } from "./social-button";

export default function SocialLogin() {
  return (
    <View style={styles.container}>
      <SocialButton
        text="Continue with Google"
        icon={require("@/assets/images/google.png")}
      />
      <SocialButton
        text="Continue with Apple"
        icon={require("@/assets/images/apple.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
});
