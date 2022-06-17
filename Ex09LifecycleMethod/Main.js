import React, {Component, component} from 'react'
import { Button, LogBox, Text, View } from 'react-native'

export default class Main extends Component{
    //RN Component도 Lifecycle method가 존재함. [특정 상황에 자동 호출되는 메소드]

    //1. 생성자는 무조건 호출
    constructor(){
        super()//반드시 명시적으로 부모 생성자 호출이 필요함

        //화면이 없기에 여기서 화면 출력은 불가능 . Log 출력하기
        console.log('constructor...') //node 콘솔창에서 확인
    }

    //2. 화면에 보여지기 전에 이 컴포넌트의 클래스가 화면에 연결되기 전에.. 호출[deprecated...]
    // componentWillmount(){
    //     //deprecated ...
    // }

    // UNSAFE_componentWillMount(){
    //     //deprecated..
    // }

    //3.화면에 그려내는 메소드 호출
    render(){
        console.log('render..')
        return (
            <View>
                <Text>Lifecycle Method</Text>
                <Button title='button' onPress={()=>{this.setState({data:"Hello"})}}></Button>
            </View>
        )
    }

    //4. 화면이 그려진 후 [render 후] 
    componentDidMount(){ 
        console.log('Component did mount')
    }

    //5. 화면이 갱신될때마다 호출되는 메소드
    componentDidUpdate(){
        console.log('Component did update')
    }

    //6. 컴포넌트가 종료될때 호출 //현재 버전 디바이스에서는 발동 안됨
    componentWillUnmount(){
        console.log('Component will unmount')
    }
}