import { View, Text, FlatList } from "react-native";
import React from "react";
import tweets from "../assets/data/tweets";
import UserImage from "./UserImage";

const UserImageList = () => {
  return (
    <FlatList
      data={tweets}
      renderItem={({ item }) => <UserImage tweet={item} />}
    />
  );
};

export default UserImageList;
