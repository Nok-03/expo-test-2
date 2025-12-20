import { Modal, View, Text, StyleSheet, Pressable } from 'react-native';

export default function MyModal({ visible, onClose, title, content }) {
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.modalBox}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.content}>{content}</Text>
          <Pressable style={styles.btn} onPress={onClose}>
            <Text style={styles.btnText}>我知道了</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' },
  modalBox: { backgroundColor: 'white', padding: 25, borderRadius: 20, width: '80%' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  content: { fontSize: 16, color: '#444', marginBottom: 20 },
  btn: { backgroundColor: '#e47ff1ffff', padding: 10, borderRadius: 10, alignItems: 'center' },
  btnText: { color: 'white', fontWeight: 'bold' }
  
});