import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AppBar from './components/AppBar/AppBar';
import Register from './components/Auth/Auth';
import { useState } from 'react';

export default function App() {
  const [authTitle, setAuthTitle] = useState<string>("Register");

  return (
    <SafeAreaView style={styles.container}>
      <AppBar title="Mangurian home!" />
      <Text style={styles.authTitle }>{ authTitle }</Text>
      <Register setAuthTitle={setAuthTitle} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
  },
  authTitle: {
    fontSize: 30,
    color: '#fff',
  },
});
