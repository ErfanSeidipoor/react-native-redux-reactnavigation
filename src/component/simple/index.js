import React  from "react";
import { connect } from "react-redux";
import { Text, View, Button } from "react-native";
import { addItem } from '../../store/actions/simpleAction'

class Simple extends  React.Component {
    
    render() {
        return (
            <View >
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

export default connect(mapStateToProps, mapDispatchToProps)(Simple);
