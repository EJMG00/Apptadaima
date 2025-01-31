import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";

//Vistas
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen"
import TeachersScreen from "./src/screens/TeachersScreen"
import MyCoursesScreen from "./src/screens/MyCoursesScreen"
import ManageCoursesScreen from "./src/screens/ManageCoursesScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen"
import FacebookPage from "./src/screens/News";

//Icons
import { AntDesign } from '@expo/vector-icons';
import CourseScreen from "./src/screens/CourseScreen";
import MaterialListScreen from "./src/screens/MaterialListScreen";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const userType = 2;

function MyDrawer() {
    return (
        <Drawer.Navigator initialRouteName="Mi perfil">
            <Drawer.Screen name="Mi perfil" component={ProfileScreen} options={{
                headerShown: false,
                drawerLabel: '',
                drawerLabelStyle: {
                    height: 0
                }
            }} />
            <Drawer.Screen name="Curso" component={CourseScreen} initialParams={{ id: 1 }} options={{
                drawerLabel: '',
                drawerLabelStyle: {
                    height: 0
                }
            }} />
            <Drawer.Screen name="ListaMateriales" component={MaterialListScreen} initialParams={{ id: 1 }} options={{
                drawerLabel: '',
                drawerLabelStyle: {
                    height: 0
                },
                title: 'Lista de Materiales'
            }} />

            <Drawer.Screen name="Welcome" component={WelcomeScreen} options={{
                drawerLabel: '',
                drawerLabelStyle: {
                    height: 0
                },
                title: ''
            }} />
            {userType === 1 && <Drawer.Screen name="Profesores" component={TeachersScreen} />}
            {userType === 2 && <Drawer.Screen name="Cursos" component={ManageCoursesScreen} />}
            {userType === 3 && <Drawer.Screen name="Mis cursos" component={MyCoursesScreen} />}
        </Drawer.Navigator>
    );
}


function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Inicio">
            <Tab.Screen name="Inicio" component={HomeScreen} options={{
                headerShown: false,
                tabBarIcon: () => (<AntDesign name="home" size={24} color="black" />)
            }} />

            <Tab.Screen name="Noticias" component={FacebookPage} options={{
                headerShown: false,
                tabBarIcon: () => (<AntDesign name="facebook-square" size={24} color="black" />)
            }} />

            <Tab.Screen name="Perfil" component={MyDrawer} options={{
                headerShown: false,
                tabBarIcon: () => (<AntDesign name="user" size={24} color="black" />)
            }} />
        </Tab.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}

