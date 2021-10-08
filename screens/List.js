import React, { memo } from "react";
import { useNavigation } from "@react-navigation/core";
import { View, FlatList } from "react-native";
import { SearchBar, Text, ListItem } from "react-native-elements";
import { tabs } from "../data";

const Item = ({ item }) => {
  const navigation = useNavigation();

  const navigateToTab = () => {
    navigation.navigate("TabScreen", {
      key: item.key,
      title: item.title,
    });
  };

  return (
    <ListItem bottomDivider onPress={navigateToTab}>
      <ListItem.Content>
        <ListItem.Title>{item.title}</ListItem.Title>
        <ListItem.Subtitle>{item.author || "Unknown"}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );
};

const renderItem = ({ item, index }) => {
  return <Item item={item} />;
};

const keyExtractor = (item) => item.key;

const ListScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <SearchBar />
      <FlatList
        data={tabs}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default ListScreen;
