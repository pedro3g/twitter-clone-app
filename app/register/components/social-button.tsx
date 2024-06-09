import theme from "@/lib/theme";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

export function SocialButton(props: Props) {
  return (
    <TouchableOpacity activeOpacity={0.4} style={styles.container}>
      <Image source={props.icon} style={styles.image} />
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 22,
  },
  image: {
    width: 18,
    height: 18,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    width: 170,
  },
});

type Props = {
  text: string;
  icon: ImageSourcePropType;
};
