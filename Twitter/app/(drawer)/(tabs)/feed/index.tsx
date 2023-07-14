import { StyleSheet, Image, FlatList, Pressable } from "react-native";

import { Text, View } from "../../../../components/Themed";
import tweets from "../../../../assets/data/tweets";
import { Entypo } from "@expo/vector-icons";
import { Link } from "expo-router";
import Tweet from "../../../../components/Tweet";

export default function TabOneScreen() {
  return (
    <>
      <View style={styles.page}>
        <FlatList
          data={tweets}
          renderItem={({ item }) => <Tweet tweet={item} />}
        />
        <Link href="/new-tweet" asChild style={styles.floatingButton}>
          <Entypo name="plus" size={24} color={"white"} />
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1,
  },
  floatingButton: {
    backgroundColor: "#1c9BF0",
    height: 50,
    width: 50,
    lineHeight: 50,
    borderRadius: 25,
    textAlign: "center",
    position: "absolute",
    right: 15,
    bottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,

    elevation: 5,
    overflow: "hidden",
  },
});
