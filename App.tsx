import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AppBar from './components/AppBar/AppBar';
import Register from './components/Auth/Auth';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AppBar title="Mangurian home!" />
      <Register />
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
});
