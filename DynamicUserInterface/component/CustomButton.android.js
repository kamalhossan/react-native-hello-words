import { Pressable, Text } from "react-native";

const CustomButton = ({ onPress, title }) => {
  return (
    <Pressable
      style={{
        backgroundColor: "lightblue",
        alignItems: "center",
      }}
      onPress={onPress}
    >
      <Text>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;
