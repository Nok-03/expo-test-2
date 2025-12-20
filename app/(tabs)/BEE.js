import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TechPage() {
  const skills = [
    { icon: 'logo-react', name: 'React Native', desc: 'App 框架與組件開發' },
    { icon: 'git-branch', name: 'Git / GitHub', desc: '版本管理與推送流程' },
    { icon: 'cloud-upload', name: 'Vercel', desc: '自動化雲端部署' },
    { icon: 'code-working', name: 'Expo Router', desc: '檔案路徑式導航' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>技術裝備清單 🛠️</Text>
        <Text style={styles.subtitle}>記錄這段旅程中學會的工具</Text>
      </View>

      {skills.map((skill, index) => (
        <View key={index} style={styles.skillCard}>
          <Ionicons name={skill.icon} size={30} color="#007AFF" />
          <View style={styles.textContainer}>
            <Text style={styles.skillName}>{skill.name}</Text>
            <Text style={styles.skillDesc}>{skill.desc}</Text>
          </View>
        </View>
      ))}

      <View style={styles.footer}>
        <Text style={styles.footerText}>持續解鎖新技能中...</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f2f5' },
  header: { padding: 30, backgroundColor: '#fff', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#1a1a1a' },
  subtitle: { fontSize: 14, color: '#666', marginTop: 5 },
  skillCard: { 
    flexDirection: 'row', 
    backgroundColor: '#fff', 
    marginHorizontal: 20, 
    marginTop: 15, 
    padding: 20, 
    borderRadius: 15, 
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2 
  },
  textContainer: { marginLeft: 15 },
  skillName: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  skillDesc: { fontSize: 14, color: '#888', marginTop: 2 },
  footer: { padding: 40, alignItems: 'center' },
  footerText: { color: '#bbb', fontStyle: 'italic' }
});