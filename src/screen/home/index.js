import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

class Home extends React.Component {
    render() {
        return (
            <View style={styles.MainContainer}>
                <Text style={styles.pageName}>{'Home'}</Text>
                <Button title={'Login'} onPress={()=>this.props.navigation.navigate('Login')} />
                <Button title={'Signup'} onPress={()=>this.props.navigation.navigate('Signup')} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    pageName: {
        fontSize: 40,
        margin: 10,
    }
  });

export default Home;