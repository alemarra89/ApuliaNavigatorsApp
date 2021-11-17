import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './src/pages/HomeScreen';
import NotificationDetailScreen from './src/pages/NotificationDetailScreen';
import NotificationsScreen, { Item } from './src/pages/NotificationsScreen';
import PaginaScreen from './src/pages/PaginaScreen';
import Tab1Screen from './src/pages/Tab1Screen';
import Tab2Screen from './src/pages/Tab2Screen';
import Tab3Screen from './src/pages/Tab3Screen';

export type DrawerType = {
  Home: undefined
  NotificationsStack: undefined
  Pagina: {
    param?: string
  }
  Tabs: undefined
};
const Drawer = createDrawerNavigator<DrawerType>();

export type StackType = {
  Notifications: undefined
  NotificationDetail: {
    item: Item
  }
}
const Stack = createNativeStackNavigator<StackType>();

export type TabType = {
  PaginaTab1: undefined
  PaginaTab2: undefined
  PaginaTab3: undefined
}
const Tab = createBottomTabNavigator<TabType>();
const TabsNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="PaginaTab3" screenOptions={{
      headerShown: false
    }}>
      <Tab.Screen name="PaginaTab1" component={Tab1Screen} />
      <Tab.Screen name="PaginaTab2" component={Tab2Screen} />
      <Tab.Screen name="PaginaTab3" component={Tab3Screen} />
    </Tab.Navigator>
  )
}

const NotificationStack = () => {
  return (
    <Stack.Navigator initialRouteName="Notifications" screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="NotificationDetail" component={NotificationDetailScreen} />
    </Stack.Navigator>
  )
}

const App = () => {

  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{
        unmountOnBlur: true
      }}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="NotificationsStack" component={NotificationStack} />
        <Drawer.Screen name="Pagina" component={PaginaScreen} />
        <Drawer.Screen name="Tabs" component={TabsNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
