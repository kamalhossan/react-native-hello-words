import { View, Text, TextInput, StyleSheet, StatusBar, Switch, Button, Alert, Image, KeyboardAvoidingView, Platform } from "react-native";
import { useState } from "react";

export default function NativeForms() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(false);

  return (
    // to manage avoiding view
    <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={Platform.OS === "ios" ? 100: 0}>
      <View style={styles.form}>
            <Image source={require("../assets/adaptive-icon.png")} style={styles.image} />
            <Text style={styles.lable}>Username</Text>
            <TextInput placeholder="Enter Your Username" value={username} onChangeText={setUsername} style={styles.input}/>
            <Text style={styles.lable}>Password</Text>
            <TextInput placeholder="Enter Your Password" secureTextEntry={true} value={password} onChangeText={setPassword}  style={styles.input}/>
            <Button title="Login" onPress={() => Alert.alert('Login Success')}/>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    justifyContent: 'center',
    backgroundColor: "#f5f5f5",
    padding: 15
  },
  form: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 4,
    elevation: 6,
  },
  lable : {
    fontSize: 16,
    marginBottom: 5 ,
    fontWeight: "bold"
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5
  },
  image : {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginBottom: 15
  }
});
