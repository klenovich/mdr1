import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const CartScreen = ({ route }) => {
    const { cart } = route.params;
    const [checkoutMessage, setCheckoutMessage] = useState('');
    const navigation = useNavigation();

    // Function to calculate total price
    const getTotalPrice = () => {
        let total = 0;
        cart.map((item) => total += item.price);
        return total;
    };

    // Checkout function
    const checkout = () => {
        setCheckoutMessage('Thank you for your purchase!');
        setTimeout(() => navigation.navigate('MenuScreen'), 3000);
    };

    if (checkoutMessage) {
        return (
          <View style={styles.centeredView}>
            <Text style={styles.checkoutMessageStyle}>{checkoutMessage}</Text>
          </View>
        );
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                {cart.map((item, index) => (
                    <Card containerStyle={styles.cardStyle} key={index}>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Divider/>
                        <Text style={styles.itemPrice}>${item.price}</Text>
                    </Card>
                ))}
            </ScrollView>
            <View style={styles.bottomBar}>
                <Text style={styles.totalPriceStyle}>Total: ${getTotalPrice()}</Text>
                {/* Checkout button */}
                <Button 
                    title="Checkout" 
                    onPress={checkout} 
                    buttonStyle={styles.buttonStyle}
                    titleStyle={styles.buttonTitleStyle}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
        backgroundColor: '#1e1e1e',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1e1e1e",
    },
    checkoutMessageStyle: {
        color: '#ffffff'
    },
    cardStyle: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 20,
    },
    itemPrice: {
        textAlign: 'right',
        marginBottom: 10,
        marginTop: -10,
    },
    bottomBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0
    },
    totalPriceStyle: {
        fontSize: 16,
        color: '#000',
        alignSelf: 'center'
    },
    buttonStyle: {
        backgroundColor: 'purple',
        padding: 10,
        borderRadius: 10
    },
    buttonTitleStyle: {
        color: '#ffffff'
    }
});

export default CartScreen;