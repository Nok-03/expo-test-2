import { Stack } from 'expo-router';

// 這裡只能有一個 export default
export default function RootLayout() {
  return (
    // headerShown: false 會藏住最上面那個寫著 (tabs) 的藍色字條
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}