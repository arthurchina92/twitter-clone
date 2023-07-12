import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  Alert,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import tweets from "../assets/data/tweets";
import { Link } from "expo-router";
import { template } from "@babel/core";
import { useRouter } from "expo-router";

const tweet = tweets[0];

const NewTweet = () => {
  const [text, setText] = useState("");
  const router = useRouter();

  const onTweetPress = () => {
    Alert.alert("Posting tweet:", text);
    setText(""), router.back();
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
            value={text}
            onChangeText={(newValue) => setText(newValue)}
            placeholder="What's happening?"
            multiline
            numberOfLines={5}
            style={{ flex: 1 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginTop: 25,
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
