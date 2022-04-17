import React from "react";
import { Text } from "react-native";
import Pagination from "./components/Pagination";
import ListingScreen from "./screens/ListingScreen";

export default function App() {
  return <ListingScreen />;
}

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data: null,
//       isLoading: true,
//     };
//   }

//   componentDidMount() {
//     //GET
//     return fetch(
//       "https://api.github.com/search/repositories?q=language:Javascript&sort=stars&order=desc"
//     )
//       .then((res) => res.json())
//       .then((json) => {
//         this.setState({
//           data: json.items,
//           isLoading: false,
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//       });

//     //POST
//     // fetch(
//     //   "https://api.github.com/search/repositories?q=language:Javascript&sort=stars&order=desc",
//     //   {
//     //     method: "POST",
//     //     header: {
//     //       Accept: "application/json",
//     //       "Content-Type": "application/json",
//     //     },
//     //     body: JSON.stringify({
//     //       firstparam: "value",
//     //       secondparam: "value",
//     //     }),
//     //   }
//     // );
//   }
//   render() {
//     const { isLoading, data } = this.state;
//     if (isLoading) {
//       return (
//         <View style={styles.container}>
//           <ActivityIndicator />
//           <Text style={styles.text}> Pleses wait some time.... </Text>
//         </View>
//       );
//     } else {
//       let names = data.map((val) => {
//         return (
//           <View key={val.id}>
//             <Text>{val.name}</Text>
//           </View>
//         );
//       });
//       let desps = data.map((val) => {
//         return (
//           <View key={val.id}>
//             <Text>{val.description}</Text>
//           </View>
//         );
//       });
//       let owners = data.map((val) => {
//         return (
//           <View key={val.id}>
//             <Text>{val.owner.login}</Text>
//           </View>
//         );
//       });
//       let stars = data.map((val) => {
//         return (
//           <View key={val.id}>
//             <Text>{val.stargazers_count}</Text>
//           </View>
//         );
//       });
//       let forks = data.map((val) => {
//         return (
//           <View key={val.id}>
//             <Text>{val.forks_count}</Text>
//           </View>
//         );
//       });
//       let languages = data.map((val) => {
//         return (
//           <View key={val.id}>
//             <Text>{val.language}</Text>
//           </View>
//         );
//       });
//       let urls = data.map((val) => {
//         return (
//           <View key={val.id}>
//             <Text>{val.html_url}</Text>
//           </View>
//         );
//       });

//       return <View style={styles.container}>{urls}</View>;
//     }
//   }
// }

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   text: {
//     color: "dodgerblue",
//     fontSize: 30,
//   },
//   item: {
//     flex: 1,
//     margin: 4,
//     alignItems: "center",
//     justifyContent: "center",
//     borderBottomWidth: 1,
//     borderBottomColor: "#eee",
//   },
// });
