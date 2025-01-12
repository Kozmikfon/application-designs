import {title} from 'process';
import {Text, View, SafeAreaView, Image, StyleSheet} from 'react-native';


export default StyleSheet.create({
  background: {backgroundColor: '#B01938', flex: 1},
  titleTextBar: {
    alignItems: 'flex-start',
  },
  titleBar: {margin: 20},
  titleText: {
    color: '#D54C1E',
    fontSize: 25,
    fontWeight: 'bold',
  },

  buttonText: {color: 'white', fontWeight: 'bold', fontSize: 18},
  createBar: {margin: 20},
  createText: {color: 'black', fontWeight: 'bold'},
  orTextBar: {margin: 20},
  orText: {color: '#D54C1E', fontWeight: 'bold'},
  buttonBar: {flexDirection: 'row'},
  buttonImage: {
    width: 50,
    height: 40,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 3,
  },

  container: {},
  image: {
    width: 300, // Resmin genişliği
    height: 300, // Resmin yüksekliği
    resizeMode: 'contain', // Resmin sığdırma tarzı
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom:140,
    
  },
  welcome: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    
  },

  first: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  dumble: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    margin: 'center',
    justifyContent: '',
    alignItems: 'center',
    fontWeight: 'bold',
    flexDirection: 'row',
    
  },
  icon: {
    width: 100,
    height: 100,
    tintColor: 'white',
  },

  buttonsign: {
    width: '85%',
    backgroundColor: '#B01938',
    padding: 20,
    borderRadius: 35,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    margin:35,
  },
  buttonUp: {
    width: '85%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 35,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
  
    
  },

  buttonTextsign: {color: 'white', fontWeight: 'bold', fontSize: 25},

  buttonTextup: {color: 'black', fontWeight: 'bold', fontSize: 25},

  lastTitle :{
    fontSize: 18,
    color: 'white',
    marginTop:120,
    
  },
  buttonBar: {flexDirection: 'row',},
 
  buttonImage: {
    width: 50,
    height: 40,   
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin : 11 ,
    

  },
  iconbutton:{
    borderWidth:20,
    width: 30,
    height: 30,
    tintColor: 'white',
    
  
  },

  point:{
    fontSize : 40,
    fontWeight: 'bold',
    color: 'white',
    
  },


});

