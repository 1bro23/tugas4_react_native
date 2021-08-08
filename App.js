import React,{Component} from "react"
import {Container, Header, Text, Body, Title} from "native-base"
import Contents from "./Component/Contents"

export default class App extends Component{
  render(){
    return(
      <Container>
        <Header style={{backgroundColor:"#00f280", height:75}}>
          <Body style={{marginLeft:45}}>
            <Title style={{color:"black"}}>KALKULATOR REACT NATIVE</Title>
          </Body>
        </Header>
        <Contents/>
      </Container>
    )
  }
}
