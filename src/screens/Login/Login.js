import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const Login = () => {

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        marginTop: 50,
    },
})

export default Login;
