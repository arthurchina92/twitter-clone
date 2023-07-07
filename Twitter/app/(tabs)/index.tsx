import { StyleSheet, Image, FlatList } from "react-native";

import tweets from "../../assets/data/tweets";
import { Text, View } from "../../components/Themed";
import Tweet from "../../components/Tweet";
import UserImage from "../../components/UserImage";

export default function TabOneScreen() {
  return (
    <>
      <View style={styles.page}>
        <FlatList
          data={tweets}
          renderItem={({ item }) => <Tweet tweet={item} />}
        />
        {/* <FlatList
          data={tweets}
          renderItem={({ item }) => <UserImage tweet={item} />}
        /> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1,
  },
});
