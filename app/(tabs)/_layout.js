import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true, // 你想要的標題列在這邊開啟！
        headerTintColor: '#007AFF',
        tabBarStyle: { height: 60 },
      }}
    >
      {/* 注意：每個 name 只能出現一次！ */}
      <Tabs.Screen 
        name="index" 
        options={{ title: '首頁', tabBarIcon: ({ color }) => <Ionicons name="home" size={26} color={color} /> }} 
      />
      <Tabs.Screen 
        name="BEE/index" 
        options={{ title: '嗡嗡', tabBarIcon: ({ color }) => <Ionicons name="bug" size={26} color={color} /> }} 
      />
      <Tabs.Screen 
        name="ENG/index" 
        options={{ title: '小英', tabBarIcon: ({ color }) => <Ionicons name="school" size={26} color={color} /> }} 
      />
      <Tabs.Screen 
        name="gallery/index" 
        options={{ title: '藝廊', tabBarIcon: ({ color }) => <Ionicons name="images" size={26} color={color} /> }} 
      />
      <Tabs.Screen 
        name="SAFA/index" 
        options={{ title: '沙發', tabBarIcon: ({ color }) => <Ionicons name="bed" size={26} color={color} /> }} 
      />
    </Tabs>
  );
}