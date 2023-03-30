import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../infrastructure/theme/colors";
import { Text, View } from "react-native";
import HomeScreen from "../screens/home/HomeScreen";
import LoginScreen from "../screens/login/Login";
import QuranScreen from "../screens/quran/QuranScreen";
import PrayerScreen from "../screens/prayer/PrayerScreen";
import styled from "styled-components";

const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <HomeContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarLabel(props) {},
          tabBarStyle: {
            elvation: 4,
            background: "red",
            borderRadius: 15,
            height: 50,
            position: "relative",
          },
          header(props) {},
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }: { focused: boolean }) =>
              focused ? (
                <Ionicons
                  name="home-sharp"
                  size={30}
                  color={colors.brand.primary}
                />
              ) : (
                <Ionicons
                  name="home-sharp"
                  size={25}
                  color={colors.brand.dark}
                />
              ),
          }}
        />

        <Tab.Screen
          name="QuranScreen"
          options={{
            tabBarIcon: ({ focused }: { focused: boolean }) =>
              focused ? (
                <>
                  <Ionicons
                    name="book-sharp"
                    size={30}
                    color={colors.brand.primary}
                  />
                </>
              ) : (
                <Ionicons
                  name="book-sharp"
                  size={25}
                  color={colors.brand.dark}
                />
              ),
          }}
          component={QuranScreen}
        />

        <Tab.Screen
          name="PrayerScreen"
          options={{
            tabBarIcon: ({ focused }: { focused: boolean }) =>
              focused ? (
                <Ionicons
                  name="alarm-sharp"
                  size={30}
                  color={colors.brand.primary}
                />
              ) : (
                <Ionicons
                  name="alarm-sharp"
                  size={25}
                  color={colors.brand.dark}
                />
              ),
          }}
          component={PrayerScreen}
        />
      </Tab.Navigator>
    </HomeContainer>
  );
};

const HomeContainer = styled.View`
  padding: ${(props) => props.theme.space[3]} ${(props) => props.theme.space[3]};
  flex: 1;
`;

export default HomeStack;
