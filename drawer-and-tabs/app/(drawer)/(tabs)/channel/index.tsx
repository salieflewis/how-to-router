import { Button, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { useRouter, Link, useNavigation, usePathname } from 'expo-router';
import { useEffect } from 'react';

export default function ChannelScreen() {
  const router = useRouter();


  const navigation = useNavigation();

  const pathname = usePathname();

  console.log('Is mounting channel screen')


useEffect(() => {
  console.log(
    JSON.stringify(navigation.getState(), null, 2)
  );
}, [pathname]);

  return (
    <View style={styles.container}>
      <Link href="/profile/">
        <Text>Go to Profile</Text>
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
