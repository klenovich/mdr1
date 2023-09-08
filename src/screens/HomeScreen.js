import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image 
        style={styles.image} 
        source={{ uri: 'https://static.wixstatic.com/media/d4a7c5_0a9de82824ce420fb6073b1175f1a577~mv2.jpg/v1/fill/w_640,h_400,al_c,lg_1,q_80,enc_auto/d4a7c5_0a9de82824ce420fb6073b1175f1a577~mv2.jpg' }} 
      />
      <Text style={styles.title}>Welcome to Meeder</Text>
      <Text style={styles.subtitle}>Experience the best dining guaranteed</Text>
      <Button 
        title="See Menu" 
        onPress={() => navigation.navigate('Menu')}
      />
      
      <Button 
        title="See Game" 
        onPress={() => navigation.navigate('GameScreen')}
      />

      <Button 
        title="RX" 
        onPress={() => navigation.navigate('Stx')}
      />

      <Button 
        title="Start" 
        onPress={() => navigation.navigate('Start')}
      />
      {/* Include other navigation buttons as necessary */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  },
});

export default HomeScreen;