import React, {Component} from 'react'
import {View, Image, TouchableOpacity, Alert, TouchableHighlight, TouchableNativeFeedback, Text, ImageBackground, ScrollView} from 'react-native'

export default class MainComponent extends Component{

    //멤버 변수 위치
    //화면갱신에 영향을 미치는 아주 아주 특별한 변수!! state
    state= {
        imgNum:0, //보여줄 이미지를 가진 배열의 인덱스 번호
        imgArr: [
            require('./Image/PIA16684_ip.jpg'),
            require('./Image/hubble.jpg'),
            require('./Image/PIA16684_ip.jpg'),
            require('./Image/hubble.jpg'),
            require('./Image/PIA03149_ip.jpg'),
            //네트워크상에 있는 이미지는
            {uri:'https://cdn.pixabay.com/photo/2017/10/10/07/48/beach-2836300_1280.jpg'},
            {uri:'https://cdn.pixabay.com/photo/2018/08/16/08/39/hallstatt-3609863_1280.jpg'},
            {uri:'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg'},
                
        
        ]//리터럴 배열
    }

    render(){
        return(
            //전체 뷰에 배경이미지 적용하기 - 스타일로 적용 불가
            //배경 이미지용 뷰가 따로 있음
            //가로 스크롤 뷰를 쓰려면 horizontal={true}요소를 추가함
            <ScrollView style={{flex:1, }}>
                <ImageBackground
                    style={{width:'100%', height:'100%', flexDirection:'column'}}
                    resizeMode="stretch"
                    source={{uri:'https://cdn.pixabay.com/photo/2016/03/04/19/36/beach-1236581_1280.jpg'}}>

                    {/* 이미지는 require() 함수 사용 : 별도의 스타일이 없다면 기본 원본 사이즈 */}
                    <Image 
                        style={{width:200, height:100}} 
                        source={require('./Image/PIA16684_ip.jpg')}>
                    </Image>

                    {/* 네트워크상에 있는 이미지를 보여주기 - uri라는 이름의 멤버를 가진 객체를 source로 설정/require()을 쓰지 않음*/}
                    {/* 네트워크 이미지는 사이즈 지정이 없으면 보이지 않음 */}
                    <Image 
                        style={{width:200, height:100}}
                        source={{uri:'https://cdn.pixabay.com/photo/2017/10/10/07/48/beach-2836300_1280.jpg'}}>

                    </Image>

                    {/* 이미지에 클릭 이벤트 처리 : Image컴포넌트는 onPress라는 속성이 없음 */}
                    {/* 클릭 이벤트에 반응하는 컴포넌트들이 별도로 존재함 TouchableXXXXXXXXX */}
                    {/* 클릭했을때 투명도가 적용됨 */}
                    <TouchableOpacity onPress={this.clickImage}>
                        <Image
                            style={{width:200, height:100}}
                            source={require('./Image/PIA16684_ip.jpg')}>

                        </Image>
                    </TouchableOpacity>

                    <TouchableHighlight onPress={this.clickImage} style={{padding:4, width:208}}>
                        <Image
                            style={{width:200, height:100}}
                            source={require('./Image/hubble.jpg')}>

                        </Image>
                    </TouchableHighlight>

                    {/* 안드로이드의 클릭 피드백 효과(물결 효과) */}
                    <TouchableNativeFeedback 
                        onPress={this.clickImage}>
                            {/* 스타일 적용은 뷰그룹에게 주기!! */}
                            <View style={{padding:4, width:208, borderWidth:2, borderRadius:4, marginLeft:16}}>
                                <Text>Sun</Text>
                                <Image
                                    style={{width:200, height:100}}
                                    source={require('./Image/PIA03149_ip.jpg')}>

                                </Image>
                            </View>
                   
                    </TouchableNativeFeedback>

                    <TouchableOpacity onPress={this.changeImage}>
                        <Image 
                            style={{width:200, height:100}}
                            source={this.state.imgArr[this.state.imgNum]}></Image>

                    </TouchableOpacity>

                    <Image 
                        style={{width:200, height:100}} 
                        source={require('./Image/PIA16684_ip.jpg')}>
                    </Image>

                    <Image 
                        style={{width:200, height:100}} 
                        source={require('./Image/PIA16684_ip.jpg')}>
                    </Image>

                

                </ImageBackground>

            </ScrollView>
        )
    }

    changeImage= ()=>{
        var index= this.state.imgNum+1
        if(index>7) index=0
        this.setState({imgNum:index})//setState 안에서는 this 안씀
    }

    //클래스 안에 멤버 메소드 위치
    //이미지 클릭에 반응하는 콜백 메소드
    clickImage= ()=>{
        //Alert.alert('click image')
    }

}