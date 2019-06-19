import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";

import { addItem } from '../../store/actions/simpleAction'
import LocalIcon from  '../../assets/local'


class LocalNews extends React.Component {
    render() {
        return (
            <View style={styles.MainContainer}>
                <Text style={styles.pageName}>>{'LocalNews'}</Text>
                <Button title={'press me'} onPress={()=>this.props.navigation.navigate("AccountTab")}/>
                <Button title={'open drawer'} onPress={()=>this.props.navigation.openDrawer()}/>
                <Text>{ JSON.stringify(this.props.items) }</Text>
                <Button title={"Press me To run simpleAction"} onPress={()=>this.props.addItem( String( Math.floor(Math.random()*1000) ) )} />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        items: state.auth,
    }
  };

const mapDispatchToProps = dispatch => {
    return {
        addItem: item => dispatch(addItem(item)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocalNews);
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
    
export const LocalNewsNavigationOption = {
    title: "خبر",
    tabBarIcon: props=> <LocalIcon color={props.tintColor}/>,
}
    