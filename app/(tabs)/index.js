import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function DevJourney() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.emoji}>🚀</Text>
        <Text style={styles.title}>我的第一個雲端 App</Text>
        <Text style={styles.subtitle}>從 404 到成功部署的實錄</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>📍 達成里程碑</Text>
        <Text style={styles.bullet}>• 成功建立 Expo 路由結構</Text>
        <Text style={styles.bullet}>• 克服 Git 權限與分支衝突</Text>
        <Text style={styles.bullet}>• 透過 Vercel 實現全球自動更新</Text>
      </View>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => Linking.openURL('https://github.com/Nok-03/txst-02')}
      >
        <Text style={styles.buttonText}>查看我的原始碼</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f2f5' },
  header: { padding: 40, alignItems: 'center', backgroundColor: '#ffffff', marginBottom: 20 },
  emoji: { fontSize: 50 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#1a1a1a', marginTop: 10 },
  subtitle: { fontSize: 16, color: '#666', marginTop: 5 },
  card: { backgroundColor: '#fff', margin: 20, padding: 20, borderRadius: 15, elevation: 3 },
  cardTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 15, color: '#007AFF' },
  bullet: { fontSize: 16, color: '#444', marginBottom: 10, lineHeight: 24 },
  button: { backgroundColor: '#007AFF', margin: 20, padding: 15, borderRadius: 10, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' }
});