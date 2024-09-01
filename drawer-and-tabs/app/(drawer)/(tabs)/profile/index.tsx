import { Button, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { useRouter, useNavigation, Link } from 'expo-router';
import { useEffect } from 'react';

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two, Screen Two, Hello</Text>
      <Link href="/channel/">
        <Text>Go to Channel</Text>
      </Link>
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
