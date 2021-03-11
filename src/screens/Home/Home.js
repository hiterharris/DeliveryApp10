import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const Home = () => {
  return (
      <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
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

export default Home;
