import React, {Component} from 'react'
import EditProfile from './editprofile.js'


import {AppRegistry, StyleSheet, View, Text, TextInput, Switch, Button, Alert} from 'react-native'

export default class Profile extends Component{
  constructor(){
    super();
    this.state={
      editProfile: false,
      newFName:"",
      newLName:"",
      newUName:"",
      newEmail:"",
      newPhone:""

    }
  }

deleteProfile=()=>{
  Alert.alert("profile.deleted")
}
EditProfile=()=>{
  this.setState({editProfile: true})
}

render(){

    if(!this.state.editProfile){
      return(
      <View>

      <Text style={{color:'purple'}}>
      My Profile
      </Text>


      <View style={{backgroundColor:'purple'}}>
      <Text style={{color:'orange'}}>First Name: {this.props.firstName}
      </Text>

      <Text style={{color:'orange'}}>Last Name: {this.props.lastName}
      </Text>

      <Text style={{color:'orange'}}>Username: {this.props.userName}
      </Text>

      <Text style={{color:'orange'}}>Email: {this.props.email}
      </Text>

      <Text style={{color:'orange'}}>Phone Number: {this.props.phone}
      </Text>
      </View>

      <Button
      title="delete profile"
      onPress={this.deleteProfile}
      />

      <Switch
        value={this.state.editProfile}
        onValueChange={(value)=>this.EditProfile(value)}/>

      </View>
    )
  }
  if (this.state.editProfile){
    return(
      <View>
      <EditProfile/>
      </View>
    )
  }

  }
}


AppRegistry.registerComponent('Profile', ()=>Profile);
