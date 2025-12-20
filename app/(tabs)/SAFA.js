import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function GalleryPage() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>本來要放砍格路的照片</Text>
      </View>

      <View style={styles.imageCard}>
        <Text style={styles.imageLabel}>ninja500：</Text>
        <Image 
          source={{ uri: 'https://motocity.tw/menu/Bike/kawasaki/2024/ninja500/1.jpg' }} 
          style={styles.image}
          resizeMode="contain" 
        />
      </View>

      <View style={styles.imageCard}>
        <Text style={styles.imageLabel}>猜猜我是誰：</Text>
        {/* 如果你還沒放圖片到 assets，這行會報錯，可以先註解掉 */}
        <Image source={require('../../images/R15.jpeg')} style={styles.image} />
        <Text style={styles.hint}>Kawasaki Ninja H2R</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f2f5' },
  header: { padding: 30, alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' },
  imageCard: { backgroundColor: '#fff', margin: 15, padding: 15, borderRadius: 15 },
  imageLabel: { fontSize: 16, marginBottom: 10, fontWeight: '600' },
  image: { 
    width: '100%', 
    height: 200, 
    borderRadius: 10,
    backgroundColor: '#eee' // 圖片載入前的底色
  },
  hint: { color: '#999', marginTop: 5, fontSize: 12 }
});