import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";
import SocialLogin from "./components/social-login";
import theme from "@/lib/theme";

export default function RegisterPage() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.title}>
        See what's happening in the world right now.
      </Text>
      <View>
        <View>
          <SocialLogin />
          <View style={styles.orContainer}>
            <View style={styles.line} />
            <Text>or</Text>
            <View style={styles.line} />
          </View>
          <Link href="/test">
            <TouchableOpacity
              activeOpacity={0.4}
              style={styles.createAccountButton}
            >
              <Text style={styles.createAccountButtonText}>Create account</Text>
            </TouchableOpacity>
          </Link>
        </View>
        <View style={styles.textArea}>
          <Text style={styles.text}>
            By signin up, you agree to our{" "}
            <Text style={styles.link}>Terms</Text>,
            <Text style={styles.link}>Privacy Policy</Text>, and{" "}
            <Text style={styles.link}>Cookie Use</Text>.
          </Text>
          <Text style={styles.text}>
            Have an account already? <Text style={styles.link}>Log in</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 28,
    flex: 1,
    justifyContent: "space-between",
  },
  image: {
    margin: "auto",
    marginTop: 10,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
  },
  orContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 20,
    marginBottom: 5,
  },
  line: {
    backgroundColor: theme.colors.border,
    height: 1,
    flex: 1,
  },
  createAccountButton: {
    display: "flex",
    alignItems: "center",
    paddingVertical: 14,
    backgroundColor: theme.colors.primaryBg,
    borderRadius: 22,
  },
  createAccountButtonText: {
    color: theme.colors.primaryText,
    fontSize: 16,
    fontWeight: "bold",
  },
  textArea: {
    display: "flex",
    flexDirection: "column",
    gap: 40,
    paddingVertical: 20,
  },
  text: {
    fontSize: 16,
    color: theme.colors.textGray,
  },
  link: {
    color: theme.colors.link,
  },
});
