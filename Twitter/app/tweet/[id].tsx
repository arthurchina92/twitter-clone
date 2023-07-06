import { Text } from "../../components/Themed";
import tweets from "../../assets/data/tweets";
import Tweet from "../../components/Tweet";
import { useSearchParams } from "expo-router";

export default function TweetScreen() {
  const { id } = useSearchParams();

  const tweet = tweets.find((t) => t.id === id);
  if (!tweet) {
    return <Text>Tweet {id} not found </Text>;
  }

  return <Tweet tweet={tweet} />;
}
