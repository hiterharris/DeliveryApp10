import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';
import { styles } from './SignUpStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const user =     { email: email, password: password }

  const submitButton = () => {
    console.log(user)
    navigation.navigate("Home")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
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
      
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.signUpText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
