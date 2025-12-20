import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // 關鍵：這行會把頂部那一列 (tabs)/index 藏起來
        tabBarStyle: { 
          backgroundColor: '#ffffff',
          height: 60, // 你可以調整高度讓它看起來更精緻
        },
      }}
    >
      

      <Tabs.Screen 
        name="home/index" // 對應 app/(tabs)/home/index.js
        options={{ title: '首頁', tabBarIcon: ({ color }) => <Ionicons name="home" size={28} color={color} /> }} 
      />
      <Tabs.Screen 
        name="gallery/index" 
        options={{ title: '藝廊', tabBarIcon: ({ color }) => <Ionicons name="images" size={28} color={color} /> }} 
      />
      <Tabs.Screen 
        name="ENG/index" 
        options={{ title: '小英', tabBarIcon: ({ color }) => <Ionicons name="images" size={28} color={color} /> }} 
      />
      <Tabs.Screen 
        name="BEE/index" 
        options={{ title: '嗡嗡', tabBarIcon: ({ color }) => <Ionicons name="images" size={28} color={color} /> }} 
      />
      <Tabs.Screen 
        name="SAFA/index" 
        options={{ title: '沙發', tabBarIcon: ({ color }) => <Ionicons name="images" size={28} color={color} /> }} 
      />
      {/* 依此類推 ... */}
    </Tabs>
  );
}