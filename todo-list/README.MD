##ToDo List
___


#####프로젝트 설치  
`expo init react-native-todo`  
`cd react-native-todo`  
이 프로젝트에서는 스타일컴포넌트와 prop-types를 사용합니다.  
`npm i styled-components prop-types`  
      

####SageAreaView 컴포넌트  
자동으로 노치디자인 까지 padding 하여 화면이 짤리지 않게한다.
`const Container = styled.SafeAreaView``;`

####StatusBar 컴포넌트  
안드로이드 상태바에 생삭을변경해 title이 배경과 색이 비슷할시 가려지는 현상 해결  

`import { StatusBar } from 'react-native';`  
``` js
<StatusBar
    barStyle="light-content"
    backgroundColor={theme.background}
/>
```    
####Dimensions , useWindowDimensions  
**모바일기기 크기에 자동으로 맞춰준다.**  
Dimensions는 처음값 고정   
useWindowDimensions 회전해도 맞춰준다.  
```js
import { Dimensions } from 'react-native';
...
export default function App() {
    const width = Dimensions.get('window').width;
    return(
         <StyledInput 
        width={width} />
    )
```    

####TextInput 컴포넌트   
**키보드설정**  
기본값으로 첫글자 대문자 오타 자동수정  
ios는 완료버튼이 return으로 되어있다.  
```js
return(
    <StyledInput
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="done"
    />
```  
autoCapitalize 자동 대문자전을 none으로 없앤다.  
autoCorrect 자동 수정기능을 없앤다  
returnKeyType 키보드 완료 버튼설정  


![키보드설정]]<img src="https://user-images.githubusercontent.com/75245755/113812061-5d447700-97a8-11eb-8dfb-9c4904ec8cf1.PNG" width="300" height="400">      
<!-- 링크 -->
[링크이름](링크내용)

<!-- 이미지 -->
![이미지내용](링크)
![이미지내용]<img src="" width="">

<!-- 테이블 -->
|HEADER| descrip|
|:--|:--:|
|왼쪽|가운데|
