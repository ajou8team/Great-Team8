import React from 'react';
import { StyleSheet, Text, View ,Image, ActivityIndicator} from 'react-native';
import { Constants } from 'expo';

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

   if(celsius.toFixed(1) <20){

       return (
         <View style={styles.weatherinfo}>
           <Text style = {styles.loadingText}>온도: {celsius.toFixed(1)}</Text>
           <Text style = {styles.loadingText}>춥다</Text>
           <ActivityIndicator />
         </View>
       );

   }



    return (
      <View style={styles.container}>
        <Text>온도: {celsius.toFixed(1)}</Text>
      </View>
    );




    }
  }

  function view_weather(rea){

 var data = res.getElementsByTagName("weather")[0];
 var now = data.getElementsByTagName("forecast_information")[0];
  var now1  = now.getElementsByTagName("condition")[0].getArrtibute("data");

  }





const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: Constants.statusBarHeight,

    },
    loadingText: {
    fontSize : 50

    },
    weatherinfo: {
    flex: 1,
    backgroundColor: "#FDF6AA",
    justifyContent: "flex-end",
    paddingLeft: 25
    }
  });