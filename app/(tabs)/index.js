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
          <Text style={styles.emoji}>🚀</Text>
          <Text style={styles.title}>我的第一個雲端 App</Text>
          <Text style={styles.subtitle}>從 404 到成功部署的實錄</Text>
        </View>

        {/* 這裡要把原本的「查看原始碼」換成這個 Modal 按鈕 */}
        <TouchableOpacity 
          style={styles.modalBtn} 
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.modalBtnText}>📍 按我 </Text>
        </TouchableOpacity>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>📍 達成里程碑</Text>
          <Text style={styles.bullet}>• 成功建立 Expo 路由結構</Text>
          <Text style={styles.bullet}>• 克服 Git 分支衝突</Text>
          <Text style={styles.bullet}>• Vercel 自動部署成功</Text>
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
            <Text style={styles.modalText}>這就是 Modal 視窗！🎉</Text>
            <Text style={styles.modalSubText}>
              當初看到 404 的時候超難過，{"\n"}
              沒想到推送到 main 分支後就成功了！
            </Text>
            <Pressable style={styles.closeBtn} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeBtnText}>關閉故事</Text>
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
  cardTitle: { fontSize: 18, fontWeight: 'bold', color: '#8c00ffff', marginBottom: 10 },
  bullet: { fontSize: 16, marginBottom: 5 },
  // 按鈕樣式
  modalBtn: { backgroundColor: '#8400ffff', margin: 20, padding: 15, borderRadius: 10, alignItems: 'center' },
  modalBtnText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  // Modal 樣式
  centeredView: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
  modalView: { backgroundColor: 'white', padding: 30, borderRadius: 20, width: '80%', alignItems: 'center' },
  modalText: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  modalSubText: { textAlign: 'center', color: '#444', marginBottom: 20 },
  closeBtn: { backgroundColor: '#a871dbff', padding: 10, borderRadius: 10, width: 100, alignItems: 'center' },
  closeBtnText: { color: 'white', fontWeight: 'bold' }
});