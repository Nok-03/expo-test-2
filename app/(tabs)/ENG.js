import { Text, View, StyleSheet } from 'react-native';

export default function Page() {
  return (
    <View style={styles.container}>
      {/* 這裡改為：首頁 / 藝廊 / 紀錄 / AI助手 / 設定 */}
      <Text style={styles.text}>這是 小英 頁面</Text> 
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
  text: { fontSize: 20, color: '#333' }
});