import { Button, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { useRouter } from 'expo-router';

export default function TabTwoScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two, Screen Two, Hello</Text>
      <Button
        title="Go to /(tabs)/(tabTwo)/tabTwoScreenTwo"
        onPress={() => router.push("/tabTwoScreenTwo")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgrey'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
