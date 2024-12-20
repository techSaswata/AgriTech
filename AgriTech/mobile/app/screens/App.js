import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BuyerScreen from './screens/BuyerScreen';
import SellerScreen from './screens/SellerScreen';
import ChatScreen from './screens/ChatScreen';
import DashboardScreen from './screens/DashboardScreen';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Buyer" component={BuyerScreen} />
                <Tab.Screen name="Seller" component={SellerScreen} />
                <Tab.Screen name="Chat" component={ChatScreen} />
                <Tab.Screen name="Dashboard" component={DashboardScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}