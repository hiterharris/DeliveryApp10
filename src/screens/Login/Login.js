import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';
import { styles } from './LoginStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useToken } from '../../store/state'

const Login = ({ navigation }) => {
  const [token, setToken] = useToken()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitButton = () => {
    const user = { email: email, password: password }
    setToken('token')
    console.log(user)
  } 

  useEffect(() => {
    if (token) navigation.navigate("Home")
  }, [token])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
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
      
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
