import { View, StyleSheet, Text } from "react-native";

export default function BoxModalEx({ bg }) {
  return (
    <View>
      <View style={{backgroundColor: 'green', paddingVertical: 10}}>
        <Text style={{color: 'white'}}>Style Inheritance</Text>
      </View>
      <View style={[style.box, style.shadow, style.androidShadow]} />
    </View>
  );
}

const style = StyleSheet.create({
  box: {
    backgroundColor: "lightblue",
    width: 250,
    height: 100,
    margin: 5,
    // padding vertical
    // padding horizontal
    // margin vertical
    // marzin horizontal
  },
  // no common style for iOS and andoird
  shadow: {
    // boxshadowColor: 'black',
    shadowColor: "red",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },
  androidShadow: {
    elevation: 5,
  },
});
