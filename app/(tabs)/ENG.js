import React, { useState } from 'react'; // 1. 記得引入 useState
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
// 2. 修正路徑：假設你在 app/(tabs)/ENG/，往上兩層才是 components
import MyModal from '../../components/myModal'; 

export default function Page() {
  // 3. 狀態必須放在 return 之前
  const [show, setShow] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>這是 小英 頁面</Text>
      
      {/* 4. 加入一個漂亮的按鈕來開啟 Modal */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => setShow(true)}
      >
        <Text style={styles.buttonText}>查看小英的悄悄話</Text>
      </TouchableOpacity>

      {/* 使用你的共用元件 */}
      <MyModal 
        visible={show} 
        onClose={() => setShow(false)} 
        title="小英的紀錄" 
        content="這裡可以寫下關於這個頁面的專屬故事喔！" 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#f5f5f5' 
  },
  text: { fontSize: 20, color: '#333', marginBottom: 20 },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
  },
  buttonText: { color: '#white', fontWeight: 'bold', fontSize: 16 }
});