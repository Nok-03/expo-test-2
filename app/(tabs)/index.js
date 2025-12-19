import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, Pressable } from 'react-native';

export default function DevJourney() {
  // 1. 建立控制 Modal 開關的狀態
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.emoji}>🚀</Text>
          <Text style={styles.title}>我的開發旅程</Text>
          <Text style={styles.subtitle}>從 404 到成功部署</Text>
        </View>

        {/* 2. 觸發 Modal 的按鈕 */}
        <TouchableOpacity 
          style={styles.card} 
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.cardTitle}>📍 查看開發秘辛</Text>
          <Text style={styles.cardText}>點擊了解我如何克服那些煩人的報錯...</Text>
        </TouchableOpacity>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>🛠️ 技術棧</Text>
          <Text style={styles.bullet}>• React Native (Expo)</Text>
          <Text style={styles.bullet}>• Vercel Deployment</Text>
          <Text style={styles.bullet}>• Git Version Control</Text>
        </View>
      </ScrollView>

      {/* 3. Modal 本體 */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <Text style={styles.modalHeader}>幕後花絮 🎬</Text>
            
            <ScrollView style={styles.modalScroll}>
              <Text style={styles.storyText}>
                一開始，我連網頁預覽都忘了怎麼開。後來好不容易寫好五個分頁，結果 Git 一直報錯說找不到我的資料夾。{"\n\n"}
                最崩潰的是 Vercel 出現 404 的時候，我以為一切都毀了。幸好最後發現只是「分支」推錯了地方！{"\n\n"}
                現在，我終於可以大聲說：我會雲端部署了！
              </Text>
            </ScrollView>

            <Pressable
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>收起回憶</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f2f5' },
  scrollContent: { paddingBottom: 20 },
  header: { padding: 40, alignItems: 'center', backgroundColor: '#ffffff', marginBottom: 20 },
  emoji: { fontSize: 50 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#1a1a1a' },
  subtitle: { fontSize: 16, color: '#666' },
  card: { backgroundColor: '#fff', marginHorizontal: 20, marginBottom: 15, padding: 20, borderRadius: 15, elevation: 3 },
  cardTitle: { fontSize: 18, fontWeight: 'bold', color: '#007AFF', marginBottom: 5 },
  cardText: { color: '#444' },
  bullet: { fontSize: 16, color: '#666', marginTop: 5 },
  
  // Modal 專屬樣式
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 半透明黑色背景
    justifyContent: 'flex-end', // 讓內容從底部彈出
  },
  modalView: {
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 30,
    height: '60%', // 佔據螢幕 60% 高度
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeader: { fontSize: 22, fontWeight: 'bold', marginBottom: 15 },
  modalScroll: { width: '100%' },
  storyText: { fontSize: 16, color: '#444', lineHeight: 24 },
  closeButton: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
    padding: 12,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  closeButtonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});