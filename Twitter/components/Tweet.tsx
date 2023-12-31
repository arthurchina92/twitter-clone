import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import tweets from "../assets/data/tweets";
import { TweetType } from "../types";
import { Entypo, EvilIcons } from "@expo/vector-icons";
import IconButton from "./IconButton";
import { Link } from "expo-router";

type TweetProps = {
  tweet: TweetType;
};

const Tweet = ({ tweet }: TweetProps) => {
  return (
    <>
      <View style={styles.container}>
        <Link href={`/user/${tweet.id}`} asChild>
          <Pressable>
            <Image src={tweet.user.image} style={styles.userImage} />
          </Pressable>
        </Link>
        <Link href={`/tweet/${tweet.id}`} asChild>
          <Pressable style={styles.mainContainer}>
            <View style={styles.userContainer}>
              <Text style={styles.name}>{tweet.user.name}</Text>
              <Text style={styles.username}>{tweet.user.username}</Text>
              <Text style={styles.username}> 2h</Text>
              <Entypo
                name="dots-three-horizontal"
                size={16}
                color="grey"
                style={{ marginLeft: "auto" }}
              />
            </View>
            <Text style={styles.content}>{tweet.content}</Text>
            {tweet.image && <Image src={tweet.image} style={styles.image} />}
            <View style={styles.footer}>
              <IconButton icon="comment" text={tweet.numberOfComments} />
              <IconButton icon="retweet" text={tweet.numberOfRetweets} />
              <IconButton icon="heart" text={tweet.numberOfLikes} />
              <IconButton icon="chart" text={tweet.impressions || 0} />
              <IconButton icon="share-apple" />
            </View>
          </Pressable>
        </Link>
      </View>
    </>
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
  userContainer: {
    flexDirection: "row",
  },
  username: {
    fontWeight: "300",
    marginLeft: 10,
  },
  name: {
    fontWeight: "bold",
  },
  content: {
    lineHeight: 20,
    marginTop: 5,
  },
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
    marginVertical: 10,
    borderRadius: 15,
  },
  footer: {
    flexDirection: "row",
    marginVertical: 5,
    justifyContent: "space-between",
  },
});

export default Tweet;
