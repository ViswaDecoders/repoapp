import React from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function Cards({ name, desc, owner, stars, forks, lang, onPress }) {
  return (
    <TouchableHighlight underlayColor={colors.lightgrey} onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.detailedContainer}>
          <AppText style={styles.title} numberOfLines={1}>
            <AppText>Repo name: </AppText>
            {name}
          </AppText>
          <AppText style={styles.subTitle} numberOfLines={2}>
            <AppText>Description: </AppText> {desc}
          </AppText>
          <AppText style={styles.subTitle} numberOfLines={1}>
            <AppText>Owner name: </AppText> {owner}
          </AppText>
          <AppText style={styles.subTitle} numberOfLines={1}>
            <AppText>Stars count: </AppText>
            {stars}
          </AppText>
          <AppText style={styles.subTitle} numberOfLines={1}>
            <AppText>Number of forks: </AppText>
            {forks}
          </AppText>
          <AppText style={styles.subTitle} numberOfLines={1}>
            <AppText>Language: </AppText>
            {lang}
          </AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    margin: 15,
  },
  detailedContainer: {
    padding: 20,
  },
  subTitle: {
    color: colors.secondary,
  },
  title: {
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
    backgroundColor: colors.lightblue,
    fontWeight: "bold",
    color: colors.darkpink,
  },
});

export default Cards;
