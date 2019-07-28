import React from 'react';
import { StyleSheet, Text, View ,Image, ActivityIndicator} from 'react-native';
import { Constants } from 'expo';
import {Ionicons} from "@expo/vector-icons";

export default class WeatherDetailScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          title: `Weather Info: ${navigation.getParam('city', 'Unknown')}`,
        };
  };

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    const city = navigation.getParam('city', null);
    const appid = "4f446d8b882808ef8c36087d9bcbe591";
    //const city = 'Daejeon';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`)
      .then(response => response.json())
      .then(info => {
        this.setState({
          ...info,
          isLoading: false,
        });
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <Text>데이터를 불러오는 중입니다.</Text>
        </View>
      )
    }

    let celsius = this.state.main.temp - 273.15;
    let condition = this.state.weather[0].main;
    let Humidity = this.state.main.humidity;

   if(condition == 'Clouds'){
       return (
         <View style={styles.ifclouds}>
         <Text style = {styles.conditionText}>{condition}</Text>
           <View style ={styles.iconText}>
           <Ionicons color = "white" size={180} name = "ios-cloud"/>
           </View>
         <Text style = {styles.tempText}>Temperature: {celsius.toFixed(1)}</Text>
         <Text style = {styles. humidityText}>Humidity:{Humidity}</Text>
         </View>
       );
   }
   else if(condition == 'Mist'){
        return (
          <View style={styles.ifmist}>
          <Text style = {styles.conditionText}>{condition}</Text>
           <View style ={styles.iconText}>
           <Ionicons color = "white" size={180} name = "ios-cloud-outline"/>
           </View>
          <Text style = {styles.tempText}>Temperature: {celsius.toFixed(1)}</Text>
          <Text style = {styles. humidityText}>Humidity:{Humidity}</Text>
          </View>
          );
      }
   else if(condition == 'Rain'){
        return (
           <View style={styles.ifrain}>
           <Text style = {styles.conditionText}>{condition}</Text>
             <View style ={styles.iconText}>
             <Ionicons color = "white" size={180} name = "ios-rainy"/>
             </View>
           <Text style = {styles.tempText}>Temperature: {celsius.toFixed(1)}</Text>
           <Text style = {styles. humidityText}>Humidity:{Humidity}</Text>
           </View>
             );
         }
   else if(condition == 'Clear'){
        return (
          <View style={styles.ifclear}>
          <Text style = {styles.conditionText}>{condition}</Text>
           <View style ={styles.iconText}>
           <Ionicons color = "white" size={180} name = "ios-sunny"/>
           </View>
           <Text style = {styles.tempText}>Temperature: {celsius.toFixed(1)}</Text>
           <Text style = {styles. humidityText}>Humidity:{Humidity}</Text>
          </View>
              );
          }
   else if(condition == 'Snow'){
        return (
          <View style={styles.ifsnow}>
          <Text style = {styles.conditionText}>{condition}</Text>
            <View style ={styles.iconText}>
            <Ionicons color = "white" size={180} name = "ios-snow"/>
            </View>
          <Text style = {styles.tempText}>Temperature: {celsius.toFixed(1)}</Text>
          <Text style = {styles. humidityText}>Humidity:{Humidity}</Text>
          </View>
                );
            }
   else if(condition == 'Drizzle'){
        return (
          <View style={styles.ifdrizzle}>
          <Text style = {styles.conditionText}>{condition}</Text>
           <View style ={styles.iconText}>
           <Ionicons color = "white" size={180} name = "ios-cloud-download"/>
           </View>
          <Text style = {styles.tempText}>Temperature: {celsius.toFixed(1)}</Text>
          <Text style = {styles. humidityText}>Humidity:{Humidity}</Text>
          </View>
               );
           }

   else if(condition == 'Thunderstorm'){
        return (
          <View style={styles.ifthunderstrom}>
          <Text style = {styles.conditionText}>{condition}</Text>
            <View style ={styles.iconText}>
            <Ionicons color = "white" size={180} name = "ios-thunderstrom"/>
            </View>
           <Text style = {styles.tempText}>Temperature: {celsius.toFixed(1)}</Text>
           <Text style = {styles. humidityText}>Humidity:{Humidity}</Text>
          </View>
               );
           }
    else{
        return (
          <View style={styles.ifothers}>
          <Text style = {styles.conditionText}>{condition}</Text>
            <View style ={styles.iconText}>
            <Ionicons color = "white" size={180} name = "ios-reorder"/>
            </View>
           <Text style = {styles.tempText}>Temperature: {celsius.toFixed(1)}</Text>
           <Text style = {styles. humidityText}>Humidity:{Humidity}</Text>
           </View>
                 );
             }
    }
  }


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: Constants.statusBarHeight,
    },
    ifrain: {
      flex: 1,
      backgroundColor: '#00C6FB',

    },
    ifclouds: {
      flex: 1,
      backgroundColor: '#D3D3D3',

    },
    ifmist: {
      flex: 1,
      backgroundColor: '#E0FFFF',
      justifyContent: "flex-end",
    },
    ifwind: {
      flex: 1,
      backgroundColor: '#90EE90',
      justifyContent: "flex-end",
    },
    ifclear: {
      flex: 1,
      backgroundColor: '#FFFF00',
      justifyContent: "flex-end",
    },
    ifsnow: {
      flex: 1,
      backgroundColor: '#FFFAFA',
      justifyContent: "flex-end",
    },
    ifdrizzle: {
      flex: 1,
      backgroundColor: '#F5FFFA',
      justifyContent: "flex-end",
    },
    ifthunderstrom: {
      flex: 1,
      backgroundColor: '#4682B4',
      justifyContent: "flex-end",
    },
    ifothers: {
      flex: 1,
      backgroundColor: '#D8BFD8',
      justifyContent: "flex-end",
    },
    tempText: {
    fontSize : 30,
    marginBottom: 50,
    justifyContent: "flex-start",
    paddingLeft: 90

    },
    conditionText: {
    fontSize : 50,
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 140

    },
    humidityText: {
    marginBottom: 100,
    fontSize : 30,
    justifyContent: "flex-end",
    paddingLeft: 130
    },
    iconText: {
    marginBottom: 100,
    flex: 1,
    alignItems: "center"
    },
    weatherinfo: {
    flex: 1,
    backgroundColor: "#FDF6AA",
    justifyContent: "flex-end",
    paddingLeft: 0
    }
  });