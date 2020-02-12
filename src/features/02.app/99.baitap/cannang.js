// import React, {Component} from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   Button,
//   TouchableOpacity,
// } from 'react-native';
// import TimeFormatter from 'minutes-seconds-milliseconds';
// export default class cannang extends Component {
//   constructor() {
//     super();
//     this.state = {
//       weight: '',
//       height: '',
//       bmi: '0.00',
//     };
//   }
//   _onPress = () => {
//     let bmi = this.state.bmi;
//     let wei = Number(this.state.weight);
//     let hei = Number(this.state.height);
//     bmi = (wei + hei) / 2;
//     this.setState({bmi});
//   };
//   render() {
//     return (
//       <View style={styles.outer}>
//         <View style={styles.center}>
//           <View style={styles.textbox}>
//             <Text style={{fontSize: 25, color: '#909398', marginBottom: 5}}>
//               Weight (KG)
//             </Text>
//             <TextInput
//               keyboardType="numeric"
//               onChangeText={weight => this.setState({weight})}
//               style={{
//                 width: 300,
//                 height: 50,
//                 backgroundColor: '#cbcccf',
//                 marginBottom: 20,
//               }}></TextInput>
//             <Text style={{fontSize: 25, color: '#909398', marginBottom: 5}}>
//               Height (CM)
//             </Text>
//             <TextInput
//               keyboardType="numeric"
//               onChangeText={height => this.setState({height})}
//               style={{
//                 width: 300,
//                 height: 50,
//                 backgroundColor: '#cbcccf',
//               }}></TextInput>
//           </View>
//           <View style={styles.button}>
//             <Text
//               style={{
//                 textAlign: 'center',
//                 fontSize: 25,
//                 color: '#909398',
//                 marginBottom: 50,
//               }}>
//               BMI: {this.state.bmi}
//             </Text>
//             <TouchableOpacity
//               style={styles.compute}
//               onPress={this._onPress.bind()}>
//               <Text style={styles.bttext}>Compute</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//         <View style={styles.end}>
//           <Text style={{marginTop: 80, fontSize: 40, color: '#909398'}}>
//             Draft on Paper
//           </Text>
//         </View>
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   outer: {
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 2,
//   },
//   center: {
//     marginTop: 80,
//     width: 300,
//     height: 500,
//   },
//   end: {
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   textbox: {
//     flex: 1,
//   },
//   button: {
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     flex: 1,
//   },
//   compute: {
//     backgroundColor: '#DDDDDD',
//     padding: 10,
//   },
//   bttext: {
//     fontSize: 20,
//     color: '#909398',
//   },
// });
