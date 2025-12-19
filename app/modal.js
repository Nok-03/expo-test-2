import { Modal, View, Text, Button } from 'react-native';
import { useState } from 'react';

export default function MyModal() {
  const [visible, setVisible] = useState(false); // 控制顯示或隱藏

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="點我打開秘密" onPress={() => setVisible(true)} />

      <Modal
        animationType="slide" // 彈出來的方式：slide(滑動), fade(淡入), none
        transparent={true}    // 背景是否透明
        visible={visible}     // 是否顯示
      >
        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
            <Text>這就是 Modal！成功部署的感覺真棒！</Text>
            <Button title="關閉" onPress={() => setVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}