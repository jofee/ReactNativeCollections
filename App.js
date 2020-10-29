/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import I18n from './src/i18n/i18n';
import AuthContext from './src/common/auth-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import WelcomeScreen from './src/components/welcome';
import LoginScreen from './src/components/login';
import HomeScreen from './src/components/home';
import SettingsScreen from './src/components/settings';
import MultiLanguageScreen from './src/components/settings/multi-language';
import DemoIntervalScreen from './src/components/functions/demo-interval';

const SignStack = createStackNavigator();

function SignStackScreen() {
  return (
    <SignStack.Navigator>
      <SignStack.Screen
        name="SignIn"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
    </SignStack.Navigator>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="DemoInterval" component={DemoIntervalScreen} />
    </HomeStack.Navigator>
  );
}
//页面过度动画
const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: false,
        }}
      />
      <SettingsStack.Screen
        name="MultiLanguage"
        component={MultiLanguageScreen}
        options={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function BottomTabScreen() {
  return (
    <Tab.Navigator
      backBehavior="initialRoute"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home-outline' : 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings-outline' : 'settings-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'green',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={({route}) => ({
          tabBarLabel: I18n.t('nav.home'),
          tabBarVisible: !route.state || route.state.index === 0,
        })}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStackScreen}
        options={({route}) => ({
          tabBarLabel: I18n.t('nav.settings'),
          tabBarVisible: !route.state || route.state.index === 0,
          tabBarBadge: 3,
        })}
      />
    </Tab.Navigator>
  );
}
const Stack = createStackNavigator();

const App = () => {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;
      let language;

      try {
        userToken = await AsyncStorage.getItem('userToken');
        language = await AsyncStorage.getItem('language');
      } catch (e) {
        // Restoring token failed
      }
      if (language) {
        I18n.locale = language;
      }
      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({type: 'RESTORE_TOKEN', token: userToken});
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token
        await AsyncStorage.setItem('userToken', 'dummy-auth-token');
        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
      signOut: async () => {
        await AsyncStorage.removeItem('userToken');
        dispatch({type: 'SIGN_OUT'});
      },
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
    }),
    [],
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          {state.isLoading ? (
            <Stack.Screen
              name="Welcome"
              component={WelcomeScreen}
              options={{
                headerShown: false,
              }}
            />
          ) : (
            <>
              {state.userToken == null ? (
                <Stack.Screen
                  name="Sign"
                  component={SignStackScreen}
                  options={{
                    headerShown: false,
                  }}
                />
              ) : (
                <Stack.Screen
                  name="BottomTab"
                  component={BottomTabScreen}
                  options={{
                    headerShown: false,
                  }}
                />
              )}
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
