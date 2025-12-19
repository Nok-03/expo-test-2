import { Tabs } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export default function Layout() {
  return (
    // 使用 View 包裹 Tabs 並套用全局樣式
    <View style={styles.container}>
      <Tabs
        screenOptions={{
          // 這裡可以統一設定所有分頁的標題顏色
          headerStyle: { backgroundColor: '#ffffff' },
          headerTintColor: '#007AFF',
          tabBarStyle: { backgroundColor: '#ffffff' },
          // 移除頁面切換時的預設背景色
          contentStyle: { backgroundColor: 'transparent' }, 
        }}
      >
        <Tabs.Screen name="index" options={{ title: '首頁' }} />
        {/* ...其他分頁設定 */}
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5', // 這裡設定的顏色，會成為所有分頁的預設底色
  },
});