import { View, Text, TextInput, StyleSheet, StatusBar, Switch } from "react-native";
import { useState } from "react";

export default function FormsFields() {
  const [name, setName] = useState("");
  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <View style={styles.container}>
      <Text>React Native Forms</Text>
      <TextInput
        style={styles.input}
        value={name} onChangeText={setName}
        placeholder="email@gmail.com"
        autoCorrect={false}
        autosplit={false}
        autoCapitalize="none"
        // secureTextEntry={false}
        // keyboardType="numaric"

      />
      <TextInput placeholder="Multiline" multiline style={styles.multiline} />
      <Text>My Name is {name}</Text>

      <View style={styles.switchContainer}>
        <Text style={styles.swtichText}>Switch of React Native</Text>
        <Switch
            value={isDarkMode}
            onValueChange={(value) => setDarkMode(value)}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor="#f4f3f4"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    paddingEnd: 10,
    paddingStart: 10
  },
  multiline: {
    minHeight: 80,
    borderWidth: 2,
    padding: 10
  },
  input: {
    height: 40,
    marginBottom: 10,
    padding: 10,
    borderWidth: 2,
  },
  switchContainer : {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  swtichText: {

  }
});
