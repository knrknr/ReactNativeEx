import React, {Component} from 'react'
import {View} from 'react-native'

export default class Main extends Component{
    render(){
        return(
            //RN은 1개의 컴포넌트만 리턴할 수 있음
            //그래서 여러개의 컴포넌트를 배치하려면 가장 큰 뷰가 있어애함
            //1) 3개의 자식뷰 배치
            // <View>
            //     {/* 뷰의 사이즈는 숫자(dp)나 %를 사용하거나, flex를 이용함 */}
            //     <View style={{width:50, height:50, backgroundColor:'red'}} ></View>
            //     <View style={{width:100, height:100, backgroundColor:'#00FF00'}}></View>
            //     <View style={{width:'70%', height:150, backgroundColor:'blue'}}></View>
            //     {/* 기본적으로 뷰들의 배치는 수직임 - RN은 flex스타일이며 기본 direction이 column임 */}
            // </View>

            //2) 3개의 자식뷰를 배치할때 사이즈를 flex로 지정해보기(권장 - 해상도 대응 때문에)
            //   flex는 배치 방향에 따라 width일수도 있고 height일수도 있음
            //   기본이 수직(column)이므로 현재 flex는 height을 의미함
            //  수직일 때 수평 정렬 : <View style={{flex:1, justifyContent:'center', alignItems:'center'}}> 
            //  justifyContent:'flex-start' : 기본 적용된 스타일 / alignItems:'stretch' : 기본 적용된 스타일
            //  부모 사이즈가 wrap이면 flex 적용 안됨
            //  최상위 뷰는 한개만 있을 수 있으므로 화면 전체를 사용하려면....
            //  단, 100%도 되지만 RN은 사이즈를 정할때 flex 스타일을 권장
            // <View style={{flex:1}}> 
            //     <View style={{flex:1, backgroundColor:'red'}}></View>
            //     <View style={{flex:2, backgroundColor:'green'}}></View>
            //     <View style={{flex:4, backgroundColor:'blue'}}></View>
            // </View>

            //기본 배치 방향이 수직임, 수평배치 연습
            // <View style={{flex:1, flexDirection:'red'}}>

            //     <View style={{backgroundColor:'red', flex:1}}></View>
            //     <View style={{backgroundColor:'blue', flex:2}}></View>
            //     <View style={{backgroundColor:'green', flex:4}}></View>
            //     {/* 수평 배치일때 자식뷰들의 flex는 width를 의미함 */}

            // </View>

            //자식뷰들의 사이즈를 직접 주고 배치(정렬)을 여러 형태로 적용해보기 연슴
            //수직 배치일때 연습..
            //justifyContent, alighnItems 정렬 속성 연습
            // <View style={{flex:1, flexDirection:'column', justifyContent:'space-between', alignItems:'center'}}>
            //     <View style={{width:50, height:50, backgroundColor:'red'}}></View>
            //     <View style={{width:50, height:50, backgroundColor:'green'}}></View>
            //     <View style={{width:50, height:50, backgroundColor:'blue'}}></View>
            // </View>

            //수평 배치일때 연습..
            //justifyContent, alighnItems 정렬 속성 연습
            //기본적으로 부모가 자식을 배치 - flex 하지만 자식뷰의 alighSelf를 쓰면 그 자식뷰만 정렬이 다르게 됨
            // <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            //     <View style={{width:50, height:50, backgroundColor:'red'}}></View>
            //     <View style={{width:50, height:50, backgroundColor:'green', alignSelf:'flex-start'}}></View>
            //     <View style={{width:50, height:50, backgroundColor:'blue'}}></View>
            // </View>

            // <View style={{flex:1}}>
            //     <View style={{height:50, backgroundColor:'lightblue'}}></View>

            //     <View style={{flex:1, backgroundColor:'hotpink'}}></View>
            //     <View style={{flex:1, backgroundColor:'ivory'}}></View>

            // </View>

            //중첩 구조의 배치....수직 배치와 수평 배치가 혼재되어있는 레이아웃
            <View style={{flex:1, flexDirection:'column'}}>
                {/* 크게 수직으로 2분할 [1:2 비율로] */}
                <View style={{flex:1, flexDirection:'row'}}>
                    {/* 좌우로 2:1의 비율 배치 */}
                    <View style={{flex:2, backgroundColor:'hotpink'}}>

                        {/* 이 영역안에서 절대 위치를 이용하여 뷰들을 겹치도록 배치 */}
                        <View style={{width:50, height:50, backgroundColor:'white', left:10, top:10, position:'absolute'}}></View>
                        <View style={{width:50, height:50, backgroundColor:'grey', left:20, top:20, position:'absolute'}}></View>

                    </View>
                    <View style={{flex:1}}>
                        {/* 수직으로 1:1의 비율 배치 */}
                        <View style={{flex:1, backgroundColor:'ivory'}}></View>
                        <View style={{flex:1, backgroundColor:'lightblue'}}></View>
                    </View>
                    
                </View>
                <View style={{flex:2, flexDirection:'row'}}>
                    {/* 좌우로 1:2 */}
                    <View style={{flex:1, backgroundColor:'blue'}}></View>
                    <View style={{flex:2}}>
                        {/* 수직 1:1 */}
                        <View style={{flex:1, backgroundColor:'lime'}}></View>
                        <View style={{flex:1, backgroundColor:'tomato'}}></View>
                        
                        {/* 이 영역안에서 절대 위치를 이용하여 뷰들을 겹치도록 배치 */}
                        <View style={{width:50, height:50, backgroundColor:'white', left:10, top:10, position:'absolute'}}></View>
                        <View style={{width:50, height:50, backgroundColor:'grey', left:20, top:20, position:'absolute'}}></View>
                        
                        <View style={{width:50, height:50, backgroundColor:'aqua', right:20, bottom:20, bottom:20, position:'absolute'}}></View>

                    </View>
                </View>

                {/* 절대 위치 */}
                <View style={{width:100, height:100, backgroundColor:'orange', position:'absolute', bottom:50, left:80, borderRadius:50}}></View>


            </View>
            
        )
    }
}