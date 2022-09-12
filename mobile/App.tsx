import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface ButtonProps{
  title: string;
}

function Button(props: ButtonProps){
  return(
    <TouchableOpacity>
      <Text>
      {props.title}
      </Text>
    </TouchableOpacity>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Button title="Botão 1"/>
      <Button title="Botão 2"/>
      <Button title="Botão 3"/>
      <Button title="Botão 4"/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
