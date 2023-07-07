import { Text } from "../../components/Themed";
import tweets from "../../assets/data/tweets";
import UserImage from "../../components/UserImage";
import { useSearchParams } from "expo-router";

export default function UserScreen() {
  const { id } = useSearchParams();

  const tweet = tweets.find((t) => t.id === id);

  if (!tweet) {
    return <Text>Tweet {id} not found </Text>;
  }

  return <UserImage tweet={tweet} />;
}
