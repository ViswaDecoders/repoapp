import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Linking,
} from "react-native";
import Card from "../components/Cards";
import "../App.css";
import Screen from "../components/Screen";
import ListItemSeperatorComponent from "../components/list/ListItemSeperator";
import colors from "../config/colors";
import Pagination from "../components/Pagination";
import Headings from "../components/Heading";

let newCards;

function ListingScreen(props) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  // console.log(data.items);

  let cardsLen;
  //Note: to use splice/length need to be specified in try catch or any type of validation to work
  try {
    cardsLen = data.items.length;
    // console.log(data.items.splice(1, 5));
  } catch (error) {}

  useEffect(() => {
    fetch(
      "https://api.github.com/search/repositories?q=language:Javascript&sort=stars&order=desc"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  //Getting posts
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  let currentCards;
  console.log(newCards);
  if (newCards) currentCards = newCards;
  else {
    try {
      currentCards = data.items.slice(indexOfFirstCard, indexOfLastCard);
    } catch (error) {
      // console.log(error);
    }
  }

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Screen style={styles.screen}>
        {isLoading ? (
          <View style={styles.container}>
            <ActivityIndicator />
            <Text style={styles.text}>Loading...</Text>
          </View>
        ) : (
          <>
            <Headings>REPOS</Headings>
            <div className="TextInput">
              <input
                type="text"
                placeholder="Search based on name..."
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                  newCards = data.items.filter((val) => {
                    if (searchTerm == "") return val;
                    else if (
                      val.name.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                      return val;
                  });
                }}
              />
            </div>
            <div className="TextInput">
              <input
                type="text"
                placeholder="Search based on language..."
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                  newCards = data.items.filter((val) => {
                    if (searchTerm == "") return val;
                    else if (
                      val.language
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    )
                      return val;
                  });
                }}
              />
            </div>
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <FlatList
                data={currentCards}
                keyExtractor={(datum) => datum.id.toString()}
                renderItem={({ item }) => (
                  <Card
                    name={item.name}
                    desc={item.description}
                    owner={item.owner.login}
                    stars={item.stargazers_count}
                    forks={item.forks_count}
                    lang={item.language}
                    onPress={() => Linking.openURL(item.html_url)}
                  />
                )}
                ItemSeparatorComponent={ListItemSeperatorComponent}
              />
              <View style={{ alignSelf: "center", padding: 10 }}>
                Page Size: {cardsPerPage}
              </View>
              <Pagination
                cardsPerPage={cardsPerPage}
                totalCards={cardsLen}
                paginate={paginate}
              />
            </View>
          </>
        )}
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.lightgrey,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "dodgerblue",
    fontSize: 30,
  },
});

export default ListingScreen;
