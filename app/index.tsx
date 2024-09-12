import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <Text style={{ color: "white", padding: 16 }}>
        Edit app/index.tsx to edit this screen. (Do you see the status bar?)
      </Text>
    </View>
  );
}
