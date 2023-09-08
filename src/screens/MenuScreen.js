import React, { useState } from "react";
import { ScrollView, View, TouchableOpacity, StyleSheet } from "react-native";
import { Card, ListItem, Button, Icon, Badge } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import SafeAreaView from 'react-native-safe-area-view';

// Indices are used as IDs for simplicity, consider using a unique identifier in your actual implementation.
const menuItemsData = [
  { id: 1, name: "Pizza", price: 10, image: "https://your-image-link.jpg", type: 'food' },
  { id: 2, name: "Burger", price: 5, image: "https://your-image-link.jpg", type: 'food' },
  { id: 3, name: "16\" PIZZA", price: 19.95, image: "https://your-image-link.jpg", type: 'food' },
  { id: 4, name: "ONION RINGS", price: 8.45, image: "https://your-image-link.jpg", type: 'food' },
  { id: 5, name: "CRAB DIP w/ CHIPS or NAAN", price: 10.95, image: "https://your-image-link.jpg", type: 'food' },
  { id: 6, name: "SPINACH ARTICHOKE DIP w/ CHIPS or NAAN", price: 8.45, image: "https://your-image-link.jpg", type: 'food' },
  { id: 7, name: "Feet In the Sand Sour - Fruited Gose", price: 8, type: 'drink', abv: '4', 
    description: 'Lime Gose brewed with sea salt, coriander and limes. Refreshing, tart with a clean dry finish.' },
  { id: 8, name: "Overdue 1894 Pale Ale - American", price: 8, type: 'drink', abv: '5.6', 
    description: 'An American pale ale that is soft, hazy, and juicy. Soft on the palate from a heavy addition of oats with a pleasant biscuit malt base.' },
];

const MenuScreen = () => {
  const [cart, setCart] = useState([]);
  const navigation = useNavigation();

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const getItemCount = () => {
    return cart.length;
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
        <ScrollView style={styles.container}>
        {menuItemsData.map((item, i) => (
            <Card key={item.id}>
            <Card.Image source={{ uri: item.image }} />
            <ListItem>
                <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
                {item.type === 'drink' && (<>
                    <ListItem.Subtitle>ABV: {item.abv}%</ListItem.Subtitle>
                    <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
                </>)}
                {item.type === 'food' && <ListItem.Subtitle>${item.price}</ListItem.Subtitle>}
                </ListItem.Content>
                <Button title="Add to Cart" onPress={() => addToCart(item)} />
            </ListItem>
            </Card>
        ))}
        </ScrollView>
        <View style={styles.bottomBar}>
          <TouchableOpacity 
             style={styles.cartContainer} 
             onPress={() => navigation.navigate('Cart', { cart })}>
            <Icon
              name="shopping-cart"
              type="font-awesome"
              color="#fff" 
              size={30}
              iconStyle={{ marginRight: 10 }}
            />
            <Badge value={getItemCount()} status="error" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#517fa4',
    paddingVertical: 10,
  },
  cartContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MenuScreen;