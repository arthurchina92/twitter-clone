import { View, Text, StyleSheet, Image } from "react-native";
import tweets from "../assets/data/tweets";
const tweet = tweets[0];

const Tweet = ({ tweetItem }) => {
  return (
    <View style={styles.container}>
      <Image src={tweetItem.user.image} style={styles.userImage} />
      <View style={styles.mainContainer}>
        <Text style={styles.name}>{tweetItem.user.name}</Text>
        <Text style={styles.content}>{tweetItem.content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "lightgrey",
    backgroundColor: "white",
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  mainContainer: {
    marginLeft: 10,
    flex: 1,
  },
  name: {
    fontWeight: "bold",
  },
  content: {
    lineHeight: 20,
    marginTop: 5,
  },
});

export default Tweet;
