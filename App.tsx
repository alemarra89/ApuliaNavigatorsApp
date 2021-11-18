import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Provider } from 'react-redux';
import FormScreen from './src/pages/form/FormScreen';
import HomeScreen from './src/pages/HomeScreen';
import NotificationDetailScreen from './src/pages/NotificationDetailScreen';
import NotificationsScreen, { Item } from './src/pages/NotificationsScreen';
import PaginaScreen from './src/pages/PaginaScreen';
import Tab1Screen from './src/pages/Tab1Screen';
import Tab2Screen from './src/pages/Tab2Screen';
import Tab3Screen from './src/pages/Tab3Screen';
import { store } from './src/redux';

declare var GLOBAL: any;

if (typeof GLOBAL !== 'undefined') {
  if (__DEV__) {
    // Route network requests through Chrome's native XMLHttpRequest
    GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;

    // Use native Blob for native XMLHttpRequest set above
    GLOBAL.Blob = GLOBAL.originalBlob || GLOBAL.Blob;

    // Use native FileReader to read native Blob set above
    GLOBAL.FileReader = GLOBAL.originalFileReader || GLOBAL.FileReader;
  }
}

export type DrawerType = {
  Home: undefined
  NotificationsStack: undefined
  Pagina: {
    param?: string
  }
  Tabs: undefined
  Form: undefined
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
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator screenOptions={{
          unmountOnBlur: true
        }}>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="NotificationsStack" component={NotificationStack} />
          <Drawer.Screen name="Pagina" component={PaginaScreen} />
          <Drawer.Screen name="Tabs" component={TabsNavigator} />
          <Drawer.Screen name="Form" component={FormScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
