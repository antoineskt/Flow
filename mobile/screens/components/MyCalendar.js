// import * as React from "react";
// import * as RN from "react-native";

// export default class MyCalendar extends React.Component {
//   render() {
//     state = {
//       activeDate: new Date(),
//     };

//     var year = this.state.activeDate.getFullYear();
//     var month = this.state.activeDate.getMonth();

//     var firstDay = new Date(year, month, 1).getDay();

//     var maxDays = this.nDays[month];
//     if (month == 1) {
//       // February
//       if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//         maxDays += 1;
//       }
//     }

//     setMonth = month => {  
//       let monthNo = this.months.indexOf(month);// get month number  
//       let dateObject = Object.assign({}, this.state.dateObject);  
//       dateObject = moment(dateObject).set("month", monthNo); // change month value  
//       this.setState({  
//       dateObject: dateObject // add to state  
//       });  
//       }; 

//     months = [
//       "Janvier",
//       "Février",
//       "Mars",
//       "Avril",
//       "Mai",
//       "Juin",
//       "Juillet",
//       "Août",
//       "Septembre",
//       "Octobre",
//       "Novembre",
//       "Décembre",
//     ];

//     weekDays = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];

//     nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];



//     return (
//       <RN.View>
//         <RN.Text
//           style={{
//             fontWeight: "bold",
//             fontSize: 18,
//             textAlign: "center",
//           }}
//         >
//           {this.months[this.state.activeDate.getMonth()]}
//           {this.state.activeDate.getFullYear()}
//         </RN.Text>
//       </RN.View>
//     );
//   }
// }
