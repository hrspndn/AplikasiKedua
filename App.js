import React from 'react';
import {View,Text,Image,ScrollView} from 'react-native';
// import scrollview

 const App = () =>{
  return(
    // menggunakan scroll
    <ScrollView>
      <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'red' }}>
      <View style={{alignItems: 'center', width: '100%', height: 200, backgroundColor: 'red'}}>
        <Text style={{ marginVertical: 10, fontSize: 20, color: 'white'}}> HAI ?</Text>
        {/* ini memanggil image secara local yang berada di folder assets */}
        <Image style={{ width: 200, height: 100, backgroundColor: 'red'}} source={require('./assets/1.jpg')}/>
      </View>
      <View style={{alignItems: 'center', width: '100%', height: 200, backgroundColor: 'yellow'}}>
        <Text style={{ marginVertical: 10, fontSize: 20, color: 'red'}}>APA KABAR DISANA ?</Text>
        <Image style={{ width: 200, height: 100, backgroundColor: 'red'}} source={require('./assets/2.jpg')}/>
      </View>
      <View style={{alignItems: 'center', width: '100%', height: 200, backgroundColor: 'green'}}>
        <Text style={{ marginVertical: 10, fontSize: 20, color: 'white'}}>AKU RINDU</Text>
        <Image style={{ width: 200, height: 100, backgroundColor: 'red'}} source={require('./assets/3.jpg')}/>
      </View>
      <View style={{alignItems: 'center', width: '100%', height: 200, backgroundColor: 'blue'}}>
        <Text style={{ marginVertical: 10, fontSize: 20, color: 'white'}}>KAMU </Text>
        {/* ini memanggil image secara global yang ada di internent */}
        <Image style={{ width: 200, height: 100, backgroundColor: 'red'}} source={require( './assets/6.jpg')}/>
      </View>
      <View style={{alignItems: 'center', width: '100%', height: 200, backgroundColor: 'purple'}}>
        <Text style={{ marginVertical: 10, fontSize: 20, color: 'white'}}>BAIK BAIK DISANA</Text>
        <Image style={{ width: 200, height: 100, backgroundColor: 'red'}} source={require('./assets/4.jpg')}/>
      </View>
      <View style={{alignItems: 'center', width: '100%', height: 200, backgroundColor: 'white'}}>
        <Text style={{ marginVertical: 10, fontSize: 20, color: 'black'}}>AKU SAYANG KAMU </Text>
        <Image style={{ width: 200, height: 100, backgroundColor: 'red'}} source={require('./assets/5.jpg')}/>
      </View>
    </View>
    </ScrollView>
  );
}

export default App;