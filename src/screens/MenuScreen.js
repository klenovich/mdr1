
/* const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const navigateToCart = () => {
    navigation.navigate('Cart');
  };


  https://www.pittsburghmagazine.com/content/uploads/2020/11/MEEDER.jpg

 */

  import React, { useState } from 'react';
  import { ScrollView, View, Image, Text, Button, StyleSheet } from 'react-native';
  
  

  
  const MenuScreen = () => {
    const [cart, setCart] = useState([]);
    const [menuItems, setMenuItems] = useState([
      { id: '1', name: 'Pizza', image: 'https://your-pizza-image-url.xyz', price: 10 },
      { id: '2', name: 'Pasta', image: 'https://your-pasta-image-url.xyz', price: 12 },
      // more items...
    ]);
  
    const addToCart = (item) => {
      setCart([...cart, item]);
    };
  
    const getItemCount = () => {
      return cart.reduce((total, currentItem) => total + 1, 0);
    };
  
    return (
      <View style={styles.container}>
        <ScrollView style={styles.menuContainer}>
          {menuItems.map((item) => (
            <View key={item.id} style={styles.itemContainer}>
              <Image source={{uri: item.image}} style={styles.itemImage} />
              <View style={styles.infoContainer}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>${item.price}</Text>
                <Button title="Add to Cart" onPress={() => addToCart(item)} />
              </View>
            </View>
          ))}
        </ScrollView>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Items in Cart: {getItemCount()}</Text>
          <Button title="View Cart" onPress={() => navigation.navigate('Cart')} /> 
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
    },
    menuContainer: {
      paddingHorizontal: 16,
    },
    itemContainer: {
      flexDirection: 'row',
      marginBottom: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#EEE',
      paddingBottom: 16,
    },
    itemImage: {
      width: 100,
      height: 100,
      marginRight: 16,
    },
    infoContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    itemName: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    itemPrice: {
      color: '#888',
      marginBottom: 8,
    },
    footer: {
      height: 60,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#EEE',
    },
    footerText: {
      fontSize: 18,
    },
  });
  
  export default MenuScreen;