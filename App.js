// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TriangleScreen from './components/TriangleSrceen';
import SquareScreen from './components/SquareScreen';
import CircleScreen from './components/CircleScreen';

const Tab = createMaterialTopTabNavigator();


export default function App() {
  return (
<NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Háromszög" component={TriangleScreen} />
        <Tab.Screen name="Négyzet" component={SquareScreen} />
        <Tab.Screen name="Kör" component={CircleScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );


}





// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
