import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';
import { styles } from './LoginStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useToken } from '../../store/state';
import axios from 'axios';

const Login = ({ navigation }) => {
  const [token, setToken] = useToken()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState({})

  useEffect(() => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    fetch('http://localhost:3001/auth/login', requestOptions)
        .then(response => response.json())
        .then(data => setToken(data.token))
        .then(navigation.navigate("Home"))
        .catch(error => console.log(error))
  }, [user]);

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
      <TouchableOpacity style={styles.submitButton} onPress={() => setUser({ username: email, password: password })}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
