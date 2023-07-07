import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { TweetType } from "../types";
import { Link } from "expo-router";

type TweetProps = {
  tweet: TweetType;
};

const UserImage = ({ tweet }: TweetProps) => {
  return (
    <View>
      <Image src={tweet.user.image} style={styles.userImage} />
      <Text style={styles.username}>{tweet.user.username}</Text>
      <Text style={styles.name}>{tweet.user.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  userImage: {
    height: 300,
    width: 300,
    alignSelf: "center",
    marginVertical: 10,
  },
  name: {
    alignSelf: "center",
  },
  username: {
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default UserImage;
