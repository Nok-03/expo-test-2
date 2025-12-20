// app/(tabs)/index.js
import React, { useState } from 'react';
import { Modal, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* 標題區 */}
        <View style={styles.header}>
          <Text style={styles.emoji}>🐧</Text>
          <Text style={styles.title}>首頁</Text>
          <Text style={styles.subtitle}>軟體學習</Text>
        </View>

        {/* 這裡要把原本的「查看原始碼」換成這個 Modal 按鈕 */}
        <TouchableOpacity 
          style={styles.modalBtn} 
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.modalBtnText}>按我</Text>
        </TouchableOpacity>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>📍 達成成果</Text>
          <Text style={styles.bullet}>• Expo 專案        npx create-expo-app@latest txst-02</Text>
          <Text style={styles.bullet}>• 啟動預覽         npx expo start</Text>
          <Text style={styles.bullet}>_____________________________________________________________________</Text>
          <Text style={styles.bullet}>•首次連結 GitHub</Text>
          <Text style={styles.bullet}>•推送到 GitHub   git add . git commit -m git push origin main</Text>
          <Text style={styles.bullet}>_____________________________________________________________________</Text>
          <Text style={styles.bullet}>•Vercel 自動化</Text>
          <Text style={styles.bullet}>_____________________________________________________________________</Text>
          <Text style={styles.bullet}>⭐完成⭐</Text>
          
        </View>
      </ScrollView>

      {/* Modal 元件 */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Modal 視窗！他會飛起來！</Text>
            <Text style={styles.modalSubText}>
              屋呼{"\n"}
              起飛
            </Text>
            <Pressable style={styles.closeBtn} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeBtnText}>關閉起飛</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f2f5' },
  header: { padding: 40, alignItems: 'center', backgroundColor: '#fff' },
  emoji: { fontSize: 50 },
  title: { fontSize: 24, fontWeight: 'bold', marginTop: 10 },
  subtitle: { color: '#666' },
  card: { backgroundColor: '#fff', margin: 20, padding: 20, borderRadius: 15 },
  cardTitle: { fontSize: 18, fontWeight: 'bold', color: '#323242ff', marginBottom: 10 },
  bullet: { fontSize: 16, marginBottom: 5 },
  // 按鈕樣式
  modalBtn: { backgroundColor: '#8886aaff', margin: 20, padding: 15, borderRadius: 10, alignItems: 'center' },
  modalBtnText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  // Modal 樣式
  centeredView: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
  modalView: { backgroundColor: 'white', padding: 30, borderRadius: 20, width: '80%', alignItems: 'center' },
  modalText: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  modalSubText: { textAlign: 'center', color: '#444', marginBottom: 20 },
  closeBtn: { backgroundColor: '#a871dbff', padding: 10, borderRadius: 10, width: 100, alignItems: 'center' },
  closeBtnText: { color: 'white', fontWeight: 'bold' }
});