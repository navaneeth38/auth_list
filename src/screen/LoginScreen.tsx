import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface LoginScreenProps {}

const LoginScreen = (props: LoginScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {}
});
