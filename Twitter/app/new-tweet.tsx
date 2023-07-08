import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React from "react";
import tweets from "../assets/data/tweets";
import { Link } from "expo-router";

const tweet = tweets[0];

const NewTweet = () => {
  const onTweetPress = () => {
    Alert.alert("Posting tweet...");
  };
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Link href="../">
          <Text style={styles.buttonText}>Cancel</Text>
        </Link>
        <Pressable style={styles.button} onPress={onTweetPress}>
          <Text style={styles.buttonText}> Tweet</Text>
        </Pressable>
      </View>
      <View style={styles.inputContainer}>
        <Image src={tweet.user.image} style={styles.image} />
        <TextInput
          placeholder="What's happening?"
          multiline
          numberOfLines={5}
          style={{ flex: 1 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 18,
    backgroundColor: "#ffff",
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#1c9BF0",
    padding: 1,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  buttonText: {
    fontWeight: "400",
    marginVertical: 10,
    fontSize: 16,
  },
  image: {
    width: 80,
    aspectRatio: 1,
    borderRadius: 50,
    marginRight: 10,
  },
});
export default NewTweet;
