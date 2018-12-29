import React,{Component} from 'react';
import { Text, View ,Alert,Button,Image } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import signalr from 'react-native-signalr';

class Greeting extends Component {
  render() {
    let pic = {
      uri: 'http://atropat.biz/'+this.props.name
    };
    return (
      <View style={{alignItems: 'center'}}>
        {/* <Text>Hello {this.props.name}!</Text> */}
        <Image source={pic} style={{width: 50, height: 50}}/>
      </View>
    );
  }
}
class HomeScreen extends React.Component {

  render() {
    // return (
      
    //   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //     <Text>Home!</Text>
    //   </View>

      
    // );

    const {navigate} = this.props.navigation;
   
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
           <Text>Home!</Text>
           <Button
        title="Go to Jane's profile"
        onPress={() => navigate('Settings', {name: 'Jane'})}
        />
        
        <Greeting name="telegram.png"></Greeting>
        <Greeting name="whatsapp.png"></Greeting>
         </View>
 
        );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    Home: { screen: HomeScreen },
    Settings: { screen: SettingsScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
  }
);

export default createAppContainer(TabNavigator);