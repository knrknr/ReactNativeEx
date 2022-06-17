//react 라이브러리에 존재하는 componant 클래스를 사용하기 위해 import
//컴포넌트의 render()메소드 라는 시스템을 react라는 라이브러리에서 비롯되었음
import React, { Component } from "react" //필수
import { Button, Text, View, StyleSheet, Image } from "react-native" //필수

//RN 에서는 반드시 컴포넌트를 상속한 클래스만 화면에 보일 수 있음
class MyApp extends Component{

    //클래스 안 - 멤버 변수 위치

    //react의 componant 클래스가 화면에 보여줄 뷰를 그려내는 작업 메소드
    render(){

        //함수 안 - 지역변수 위치
        let name = "sam" //지역 변수 - 이 지역안에서만 쓸 수 있음
        let btnTitle = "click me" //버튼에 보여질 제목 글씨

        //이 메소드에서 리턴한 컴포넌트가 화면에 보여짐
        //render()의 리턴은 오직 1개의 컴포넌트만 가능함
        //return <Text>Hello world</Text>
        //       <Text>NICE TO MEET YOY</Text>
        //그래서 여러 컴포넌트들을 묶는 컴포넌트 그룹이 필요함(android. view group)
        //그룹용으로 만들어진 컴포넌트 [View]
        //JSX언어의 특징은 js안에서 xml을 명시할 수 있고 반대로 xml안에서 js변수나 함수도 사용할 수 있음
        //xml영역 안에서 js변수나 함수 호출문을 사용하고 싶다면..{}만 표시하면 돰
        //기본적으로 보여지는 스타일링은 CSS를 모티브로 적용되어 있음
        //단 스타일을 CSS문서로 적용하는 것이 아니라!!!! 
        //스타일 값을 가진 객체를 만들어 속성으로 지정해서 적용함!!!!
        // return (
        //     <View style={style.rootContainer}>
        //         <Text style={style.mainText}>Hello {name}</Text>
        //         <Text style={style.plainText}>Nice to meet you</Text>
        //         {/* xml 안에서 js 쓸 때 주석 모양 */}
        //         {/* Button은 스타일 작업이 불가능 why? style 속성이 없음 */}
        //         <View style={{marginTop:10, width:150}}>
        //             <Button title={btnTitle}></Button>
        //         </View>
                
        //     </View>
        // )

        //이미지 컴포넌트도 한번 연습해보기..뱔도 수업 예정
        return (
            <View style={style.rootContainer}>
                <Text style={style.mainText}>Hello {name}</Text>
                <Text style={plainText}>Nice to meet you</Text>

                <Button title="button"></Button>
                <Button title={btnTitle} color="orange"></Button>

                <View style={{marginTop:10, width:200}}>
                    <Button title="버튼" color='#841584'></Button>
                </View>

                {/* 이미지 컴포넌트 */}
                {/* 이미지의 경로를 그냥 ""문자열로 쓰는 것이 아니라 JS의 require()함수를 이용해야만 함 */}
                <Image source={ require("./image/PIA16684_ip.jpg") } style={{margin:4, flex:1, resizeMode:'cover', width:null}}></Image>
            </View>
        )
    }
    
}//MyApp class....

//아래처럼 개별 스타일 객체를 만들면 관리도 어렵고 자동완성기능도 제한적이어서
//좀 별로임.. 그래서 모든 스타일 관련 객체를 하나로 묶는 클래스가 존재함
const style= StyleSheet.create( {
    rootContainer:{
        backgroundColor:'#AAFFCC',
        flex:1,
        padding:16,//,안쓰면 에러
    },
    mainText:{
        color:'hotpink',
        fontSize:20,
        fontWeight:'bold',
        margin:16

    },
    plainText:{
        margin:8,
        color:'white',

    }
} )

//MyApp클래스가 보여주는 컴포넌트들의 스타일 값을 가진 객체를생성
//1. 텍스트의 스타일 작업(css와 비슷한데 약간 다름)
const textStyle= {
    color:'hotpink', 
    fontSize:20,
    fontWeight:'bold',
    margin:16 //단위(기본 dp)
}

//2. 전체 View의 스타일 작업
const rootView= {
    backgroundColor:'#AAFFCC',
    //View의 기본 높이는 wrap으로 됨
    //height: 500,/디바이스 마다 높이가 다르므로,,
    //height: '100%'//이 방법도 있지만....
    //RN의 권장 사이즈 기법
    //RN은 기본적으로 무조건 display 속성이...flex 스타일로 설정 되어 있음
    //그리고 기본 flex의 방향인 flex-direction 값이 column(수직 방향)으로 되어 있음
    //그래서 배치 방향을 변경하고 싶다면...
    //flexDirection:'row'//옆으로 배치
    //flex의 속성중에서 다른 뷰와 비례적으로 사이즈를 결정하는 속성값
    //마치 안드로이드의 layout_weight과 유사한 속성값
    flex:1, //flex-grow 속성과 같은 역할 //전체를 다먹음
    padding: 16 
}

//중간 글씨의 스타일
const plainText={
    margin:8,
    color:'white'
}

//버튼의 스타일 객체 - 컴포넌트 중에서 style이 안되는 것들도 있음/에러는 안나지만 적용이 안됨
const btnStyle={
    marginTop: 40,
    backgroundColor: "blue"
}

//다른 문서(index.js)에서 이 MyApp클래스를 사용하려면 (import)..
//반드시 여기서 추출(export)해야만 함
//하나의 .js문서에서 export는 여러개 할 수 있음. 단, 그중에 반드시 1개는
//export default 여야만 함!
export default MyApp 