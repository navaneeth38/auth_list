import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface SignUpScreenProps {}

const SignUpScreen = (props: SignUpScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>SignUpScreen</Text>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {}
});
