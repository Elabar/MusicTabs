import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/core";
import { View, ScrollView } from "react-native";
import { Text, ButtonGroup } from "react-native-elements";
import { tabs } from "../data";

const buttons = ["Zoom out", "Default", "Zoom in"];
const DEFAULT_SIZE = 16;
const TabScreen = () => {
  const route = useRoute();
  const piece = tabs.find((e) => e.key === route.params.key);
  const [fontSize, setFontSize] = useState(DEFAULT_SIZE);

  const onScale = (index) => {
    const factor = Math.floor(fontSize * 0.25);
    if (index === 0) {
      setFontSize((f) => f - factor);
    } else if (index === 1) {
      setFontSize(DEFAULT_SIZE);
    } else if (index === 2) {
      setFontSize((f) => f + factor);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ButtonGroup
          containerStyle={{ width: "100%" }}
          onPress={onScale}
          buttons={buttons}
        />
        <Text
          style={{
            fontWeight: "bold",
            fontSize: fontSize,
            textAlign: "center",
          }}
        >
          {piece?.tabs || "ASD"}
        </Text>
      </ScrollView>
    </View>
  );
};

export default TabScreen;
