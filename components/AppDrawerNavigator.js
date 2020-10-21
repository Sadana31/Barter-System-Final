import * as React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';
import {Image} from 'react-native'; 
import SettingsScreen from '../screens/SettingsScreen';
import MyBarters from '../screens/MyBarters';
import NotificationScreen from '../screens/NotificationScreen';

export const AppDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: AppTabNavigator,
        },
    MyBarters: {
        screen: MyBarters,
        },
    Notifications:{
        screen: NotificationScreen
    },
    Settings: {
        screen: SettingsScreen,
        },
},
{
    contentComponent: CustomSideBarMenu
},
{
    initialRouteName: "Home ",
}
)