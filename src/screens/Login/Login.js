import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';
import { styles } from './LoginStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const user =     { email: email, password: password }

  const submitButton = () => {
    console.log(user)
    navigation.navigate("Home")
  }

  return (
    <View style={styles.container}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
 
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={() => submitButton()}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
    </View>
  );
};

export default Login;
