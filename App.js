import React from "react";
import { View } from "react-native";
import { Text, ThemeProvider } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Main from "./screens/Main";

// export default function App() {
//   return (
//     <SafeAreaProvider>
//       <ThemeProvider>
//         <Main />
//       </ThemeProvider>
//     </SafeAreaProvider>
//   );
// }

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <Main />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
