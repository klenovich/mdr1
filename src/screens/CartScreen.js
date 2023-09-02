import React from 'react';
import { ScrollView, View, Text, Button, StyleSheet } from 'react-native';

const CartScreen = ({cart, removeFromCart}) => {
  const calculateTotal = () => {
    return cart.reduce((sum, currentItem) => sum + currentItem.price, 0);
  };

  return (
    <ScrollView style={styles.container}>
      {cart.map((item, index) => (
        <View key={item.id} style={styles.itemContainer}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>${item.price}</Text>
          <Button title="Remove" onPress={() => removeFromCart(index)} />
        </View>
      ))}
      <View style={styles.totalContainer}>
        <Text style={styles.totalTitle}>Total:</Text>
        <Text style={styles.totalPrice}>${calculateTotal()}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    paddingVertical: 16,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemPrice: {
    color: '#888',
  },
  totalContainer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalPrice: {
    color: '#888',
  },
});

export default CartScreen;