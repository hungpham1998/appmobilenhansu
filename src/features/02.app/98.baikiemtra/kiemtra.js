// import React, {Component} from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
//   FlatList,
// } from 'react-native';
// const data ={
//   PIZZA: {
//     intedient: {
//       flour: 35,
//       egg: 25,
//       milk: 25,
//       cheese: 15
//     },
//     Fluffy: {
//       intedient: {
//         flour: 25,
//         egg: 20,
//         milk: 30,
//         cheese: 25
//       }
//     },
//     hamburger: {
//       intedient: {
//         flour: 30,
//         egg: 20,
//         milk: 25,
//         cheese: 25
//       }
//     },
//     panacake: {
//        intedient:{
//          flour: 25,
//          egg: 20,
//          milk: 20,
//          cheese: 35
//        }
//     }

//   }
// }
// const color={
//   '#aadd80',
//   '#abdc80',

// };

// function Column({height, name, color}){
//   const style={height: `${height}%`, backgroundColor: color}

//   return (
//     <View>
//         <View style={[styles.column, style]}></View>
//         <View>
//           <Text style={styles.columnTitle}> {name}</Text>
//         </View>
//     </View>
//   )
// };
// function Chart (data){
//   const max = Math.max(...this.state.data);
//   this.state.data.map((item, i)=>{
//     return <Column  name={} color={color[i]} />

//   })
// }

// export default class kiemtra extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loading: false,
//       data : data,

//   }
// }

//   render() {
//     return (
//       // <View style={{flex: 1, marginTop: 20}}>
//       <View
//         style={{
//           flex: 1,
//         }}>
//         <View style={styles.viewbutton}>
//           <TouchableOpacity style={styles.button}>
//             <View style={styles.buttonview}>
//               <Text style={{fontSize: 15, textAlign: 'center'}}>PIZZA</Text>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.button}>
//             <View style={styles.buttonview}>
//               <Text style={{fontSize: 15, textAlign: 'center'}}>SET</Text>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.button}>
//             <View style={styles.buttonview}>
//               <Text style={{fontSize: 15, textAlign: 'center'}}>SET</Text>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.button}>
//             <View style={styles.buttonview}>
//               <Text style={{fontSize: 15, textAlign: 'center'}}>SET</Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//         <View style={{padding: 20, flex: 70}}>
//           <Text> hello </Text>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   viewbutton: {
//     padding: 20,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     alignContent: 'stretch',
//     flex: 20,
//   },
//   button: {
//     //  backgroundColor: 'green',
//     width: '50%',
//     padding: 10,
//   },
//   buttonview: {
//     backgroundColor: '#aa4040',
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   column:{

//   },
//   columnTitle: {

//   }
// });
