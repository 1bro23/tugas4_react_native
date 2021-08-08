import React,{Component}from "react"
import {Input, Content, Item, Form, Text, Button, Card, CardItem} from "native-base"


export default class Contents extends Component{
  constructor(){
    super()
    this.state={
      sign:"",
      number1:null,
      number2:null,
      result:0
    }
  }

  add=()=>{
    this.setState({sign:"+"})
  }

  minus=()=>{
    this.setState({sign:"-"})
  }

  divide=()=>{
    this.setState({sign:"/"})
  }

  times=()=>{
    this.setState({sign:"*"})
  }

  hitung=()=>{
      if(this.state.sign=="+"){
        this.setState({result:parseInt(this.state.number1)+parseInt(this.state.number2)})
      }else if(this.state.sign=="-"){
        this.setState({result:parseInt(this.state.number1)-parseInt(this.state.number2)})
      }else if(this.state.sign=="/"){
        this.setState({result:parseInt(this.state.number1)/parseInt(this.state.number2)})
      }else if(this.state.sign=="*"){
        this.setState({result:parseInt(this.state.number1)*parseInt(this.state.number2)})
      }else if(this.state.number1==null||this.state.number2==null){
        alert("please input number")
      }
      else{
        alert("please input operator")
      }
  }

  render(){
    return(
      <Content style={{marginTop:20}}>
        <Item>
          <Input onChangeText={(event)=>{this.setState({number1:event})}} placeholder="Masukkan Angka" keyboardType="numeric"/>
        </Item>

        <Text style={{color:"blue", fontSize: 40, textAlign: 'center', margin:20}}>
          {this.state.sign}
        </Text>

        <Item>
          <Input onChangeText={(event)=>{this.setState({number2:event})}} placeholder="Masukkan Angka" keyboardType="numeric"/>
        </Item>

        <Text style={{padding:20, fontSize: 40, textAlign: 'center',borderTopWidth: 1, borderBottomWidth: 1, margin:20}}>
          {this.state.result}
        </Text>

        <Text style={{marginLeft:20}}>
          Operator
        </Text>

        <Card transparent>
          <CardItem>
            <Button rounded style={{margin:10}} onPress={this.add}>
              <Text>
                +
              </Text>
            </Button>
            <Button rounded style={{margin:10}} onPress={this.minus}>
              <Text>
                -
              </Text>
            </Button>
            <Button rounded style={{margin:10}} onPress={this.divide}>
              <Text>
                /
              </Text>
            </Button>
            <Button rounded style={{margin:10}} onPress={this.times}>
              <Text>
                *
              </Text>
            </Button>
            <Button rounded style={{margin:10, backgroundColor: "green"}} onPress={this.hitung}>
              <Text>
                Hitung
              </Text>
            </Button>
          </CardItem>
        </Card>
      </Content>
    )
  }
}
