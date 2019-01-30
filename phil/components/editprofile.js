import React, {Component} from 'react'
import Profile from './profile.js'

import {AppRegistry, StyleSheet, View, Text, TextInput, Switch, Button, Alert} from 'react-native'

export default class EditProfile extends Component{
  constructor(){
    super();
    this.state={
      viewProfile:false,
      newFName:"",
      newLName:"",
      newEmail:"",
      newUsername:"",
      newPhone:"",

    }
  }


  updateProfile=()=>{
    Alert.alert("changes made")
    this.setState({viewProfile:true})
  }


  render(){
    if(!this.state.viewProfile){
    return(
      <View>
        <TextInput placeholder="edit first name"/>
        <TextInput placeholder="edit last name"/>
        <TextInput placeholder="edit email name"/>
        <TextInput placeholder="edit username"/>
        <TextInput placeholder="edit phone"/>


        <Button
        title="confirm changes"
        onPress={this.updateProfile}/>
      </View>
    )
  }
  if(this.state.viewProfile){
    return(
      <View>
      <Profile/>
      </View>
    )
  }
  }


  }


AppRegistry.registerComponent('EditProfile', ()=>EditProfile);
