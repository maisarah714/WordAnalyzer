
import React, {Component} from 'react';
import {Text, View, Button, TextInput, Alert} from 'react-native';
import {Styles} from './Styles';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      word : "",
      consonant : 0,
      vowel : 0,
      character : 0,
    }
  }

  WordAnalyzer = () => {
    let wordtemp = this.state.word.toLowerCase();
    wordtemp = wordtemp.replace(/[^a-z]/g,"");
    let cons = 0;
    let vow = 0;
    
    for (var i=0; i<wordtemp.length; i++){
      if(wordtemp[i] == 'a' || wordtemp[i] == 'e' || wordtemp[i] == 'i' ||
      wordtemp[i] == 'o' || wordtemp[i] == 'u'){
        vow += 1;
      }
      else{
        cons+=1;
      }
    }
      
    this.setState({character: this.state.word.length});
    this.setState({consonant: cons});
    this.setState({vowel: vow});
  
  }
  


  render(){
    return(
      <View style= {Styles.container}>
        <View style={Styles.container}>
          <Text style={Styles.welcome}>Word Analyzer</Text>
        </View>
        <View style={Styles.container}>
          <TextInput onChangeText={(word) => this.setState({word})} style={Styles.instructions} placeholder='Enter a word to analyze'/>
        </View>
        <View style={Styles.container}>
          <Button color="#00848c" onPress={this.WordAnalyzer} title='Analyze!'/>
          <Text style={Styles.instructions}>No of Consonant: {this.state.consonant}</Text>
          <Text style={Styles.instructions}>No of Vowel: {this.state.vowel}</Text>
          <Text style={Styles.instructions}>No of Character: {this.state.character}</Text>
        </View>
      </View>
    );
  }

}