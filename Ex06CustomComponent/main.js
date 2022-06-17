import React,{Component} from 'react'
import {View, Text, StyleSheet, Button, Alert} from 'react-native'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import MyComponent3 from './MyComponent3'
import MyComponent4 from './MyComponent4'
import MyComponent5 from './MyComponent5'

export default class Main extends Component{
    render(){
        return(
            <View style={style.root}>
                <Text style={style.text}t>Hello world</Text>

                {/* 개발자가 만든 Custom Component를 사용해보기 */}
                <MyComponent></MyComponent>
                <MyComponent></MyComponent>

                {/* 컴포넌트를 재사용하는 것은 편하지만 항상 같은 글씨로만 보임("Hello sam!") */}
                {/* 그래서 CustomComponent를 사용할때 보여주고 싶은 값을 속성으로 전달해보기 */}
                {/* name- 식별자[식별자는 아무거나 써도됨] */}
                <MyComponent2 name="kim" btnTitle="확인" color="hotpink"></MyComponent2>
                <MyComponent2 name="park" btnTitle="취소" color="lime"></MyComponent2>

                {/* 별도의 .js문서에 CustomComponent 만들어도 됨 */}
                {/* 속성으로 값 전달 말고 함수도 전달 가능함 */}
                <MyComponent3 onPress={this.clickBtn} title="button"></MyComponent3>

                {/* 만약 속성값 중에 일부를 전달하지 않으면???? [무조건 에러는 아님, 필수 여부에 따라 다름!]*/}
                <MyComponent3 title="button"></MyComponent3>

                {/* 혹시 속성값이 모두 전달되지 않을때 기본 값이 적용되는 컴포넌트 */}
                <MyComponent4></MyComponent4>
                <MyComponent4 title="aaa"></MyComponent4>
                <MyComponent4 color="tomato"></MyComponent4>

                {/* 여러개의 속성값이 전달될 때 조금 쉽게 이 props를 적용하는 컴포넌트 */}
                <MyComponent5 title="bbb"></MyComponent5>
                <MyComponent5 title="ccc" color="coral"></MyComponent5>

                {/* 컴포넌트끼리의 통신은 아예 불가능함 */}
                {/* 배치상의 부모 컴포넌트가 자식 컴포넌트들의 통신을 대신 수행해줌 */}
                <ComponentA message={this.state.msg}></ComponentA>
                <ComponentB onPress={this.changeText}></ComponentB>

            </View>
        )
    }

    state={
        msg:"Hello"
    }

    changeText= ()=>{
        this.setState({msg:"Nice to meet you!"})
    }

    //CustomComponent 쪽으로 전달할 함수
    clickBtn=()=>{
        alert('clicked btn')
    }

}//Main class....

////사용자 정의 컴포넌트 클래스[속성 값을 전달 받는..]
class MyComponent2 extends Component{
    render(){
        return(
            <View style={{margin:8}}>
                {/* MyComponent2 컴포넌트를 사용할때 설정한 속성(프로퍼티) 중에 name이라는 이름으로 지정한 값은 이 컴포넌트 클래스안에 아주 특별한 멤버변수(proups)에 자동으로 속성명의 멤버로 저장되어 있음  */}
                <Text>
                    Hello! {this.props.name}
                </Text>
                <Button title={this.props.btnTitle} color={this.props.color}></Button>
            </View>
        )
    }
}


//사용자 정의 컴포넌트 클래스
class MyComponent extends Component{
    render(){
        return(
            <View style={{margin:8}}>
                <Text>
                    Hello sam!
                </Text>
                <Button title='click me'></Button>
            </View>
        )
    }
}//MyComponent class........

const style= StyleSheet.create({
    root:{flex:1},
    text:{color:'black'}
})