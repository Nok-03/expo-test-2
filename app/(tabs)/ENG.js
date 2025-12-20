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
        
        title="聽說" 
        content="有人鬧鐘沒關" 
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
  text: { fontSize: 20, color: '#2f0f86ff', marginBottom: 20 },
  button: {
    backgroundColor: '#007AFF', // 這是背景顏色
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF',          // 1. 這裡就是改文字顏色的地方（白色）
    fontSize: 16,               // 2. 也可以順便改大小
    fontWeight: 'bold',         // 3. 讓文字變粗更好看
    textAlign: 'center',        // 4. 確保文字在按鈕內居中
  }
  
});