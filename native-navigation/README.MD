## 리액트 네비게이션  

### 패키치 설치  
기본 프로젝트 생성 후
```
npm i styled-components
npm i --save @react-navigation/native
npm install react-native-gesture-handler@1.3.0
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
expo i react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-commuity/masked-view
npm i @react-navigation/stack
```  
expo i react-native-gesture-handler 에러 발생시  react-native-gesture-handler폴더 제거 후 expo update  

탭 네비게이션  
npm i @react-navigation/bottom-tabs

### 네비게이션 구조
리액트 네비게이션은 네비게이션컨테이너 컴포넌트, 네비게이터 컴포넌트, 스크린 컴포넌트 3가지이다.  
![네비게이션구조](https://user-images.githubusercontent.com/75245755/113839027-49117180-97ca-11eb-9f31-67df0b552263.PNG)  
</br>

**Screen 컴포넌트**  
화면으로 사용되는 컴포넌트 name과 component 속성을 지정해야한다  name은화면이름 컴포넌트에는 화면으로 사용될 컴포넌트를 전달. 화면으로 사용되는 컴포넌트에는 항상 navigation과 route가 props로 전돨되는 특징이있다.  
</br>
**Navigator 컴포넌트**  
화면관리 중간관리자  
여러개의 스크린컴포넌트를 자식으로 갖는다.  
**NavigationContainer 컴포넌트**  
네비게이션의 계층구조와 상태를 관리  모든구성요소를 감싼 최상위 컴포넌트여야한다.  

### 설정 우선순위  
1. 네비게이터 컴포넌트 속성 수정  
2. 스크린 컴포넌트 속성 수정
3. 화면으로 사용되는 컴포넌트이 props로 전달되는 네비게이션을 이용해 수정  

**공통 = 네비게이터 개별 = 스크린**  
![우선순위](https://user-images.githubusercontent.com/75245755/113839115-5c244180-97ca-11eb-8a9a-d083a5e3596e.PNG)  

</br>


### 스택 네비게이션
일반적으로 가장많이 쓰임  
현재화면에서 다른화면을 쌓으면서 이동이 특징
![스택네비게이션구조](https://user-images.githubusercontent.com/75245755/113839150-647c7c80-97ca-11eb-8905-1f5d436c7aea.PNG)  

### 화면이동  
화면 이동을 하기전 Stack.Navigator 컴포넌트에 이니셜라우트네임을 적습니다 이니셜라우트네임은 첫번째화면을 지정하는역할입니다.
![화면이동](https://user-images.githubusercontent.com/75245755/113959868-8d4e5180-985e-11eb-9159-10d39ed3751e.PNG)  
파라미터로 값을 받아 버튼을 누를시 List 스크린으로 이동하게 합니다  
![화면이동2](https://user-images.githubusercontent.com/75245755/113959963-afe06a80-985e-11eb-8411-4bd74a2d9f13.PNG)  
잘 이동되는것을 확인합니다.  
![화면이동 3](https://user-images.githubusercontent.com/75245755/113960053-d3a3b080-985e-11eb-8b5f-446a65e5dcc0.PNG)  
  
### 아이템(디테일) 화면이동  
list.js로 가서 파라미터를 받고 onPress 함수에 버튼을 누를시 그에 맞는 아이템 화면으로 이동시킵니다.  
![아이템 화면이동](https://user-images.githubusercontent.com/75245755/113960131-f209ac00-985e-11eb-9a9b-3f456c60d701.PNG)  
item.js로 가서 parmas로 클릭돼서 들어가진 화면에 맞게 값이 띄워줍니다.
![아이템 화면이동2](https://user-images.githubusercontent.com/75245755/113960260-3006d000-985f-11eb-9f9f-0f01cbba5d8b.PNG)  
맞게 이동되는지 확인  
![아이템 화면이동 3](https://user-images.githubusercontent.com/75245755/113960341-50cf2580-985f-11eb-895f-bd0c84a2beb0.PNG)


### 버튼수정  
headerBackTitleVisible: true, 를 사용해 두플랫폼 둘다 버튼의 타이틀을 정해줄수있다.  

```js
<Stack.Screen 
    name="List" 
    component={List} 
    options={{ 
        headerTitle:"List screen",
        headerBackTitleVisible: true,
}}
/>
```  


### 배경  
스타일드 컴포넌트를 사용하면 아래와 같이 색이 살짝 다릅니다.  
![배경](https://user-images.githubusercontent.com/75245755/113960531-9986de80-985f-11eb-93af-46cded5e9d5c.PNG)  
이러할때 options 를 활용해  직접 바꿔줘야합니다.  
![스타일컴포넌트 안쓰고 직접](https://user-images.githubusercontent.com/75245755/113960598-ac99ae80-985f-11eb-8213-98f7c1d59b70.PNG)  
그러면 처음 배경색과 달리 색이 같아집니다.  
![배경1](https://user-images.githubusercontent.com/75245755/113960444-7a884c80-985f-11eb-87d9-f1205e0f0aab.PNG)  

### 안드로이드 타이틀 위치  
안드로이드는 ios와 달리 왼쪽정렬인데 `options:{{ headertitle :center }}` 명령어를 사용해 가운데 정렬합니다.
![options headertitle](https://user-images.githubusercontent.com/75245755/113960714-d6eb6c00-985f-11eb-8ca8-6d7f903d15c1.PNG)



### 버튼수정  
headerBackTitleVisible: true, 를 사용해 두플랫폼 둘다 버튼의 타이틀을 정해줄수있다.  

```js
<Stack.Screen 
    name="List" 
    component={List} 
    options={{ 
        headerTitle:"List screen",
        headerBackTitleVisible: true,
}}
/>
```  

### 두 플랫폼 뒤로가기 버튼  
![두플랫폼 뒤로가기버튼 맞추기](https://user-images.githubusercontent.com/75245755/113974354-b8de3580-9878-11eb-8310-2d99830cf560.PNG)  

## 헤더 감추기  
방법  
![헤더감추기](https://user-images.githubusercontent.com/75245755/113975341-5128ea00-987a-11eb-89b7-72958ca6882c.PNG)  
코드  
![헤더감추기코드](https://user-images.githubusercontent.com/75245755/113975359-59812500-987a-11eb-8693-536bfdb363f6.PNG)  
헤더를 감추고 나면 노치 디자인에 걸쳐질수있으니 스타일뷰 설정을 해준다.  
![헤더감추기 스타일뷰](https://user-images.githubusercontent.com/75245755/113975397-69990480-987a-11eb-9649-5cf55a6f2c9c.PNG)  
![헤더 감추기 화면](https://user-images.githubusercontent.com/75245755/113975430-74ec3000-987a-11eb-8524-913c6a0b84cd.PNG)  


### useLayoutEffect  
useEffect hook과 사용법이 거의동일 **차이점은 컴포넌트 업데이트 직후 화면이 렌더링되기전에 실행**  
렌더링 전에 변경할 부분이나 수치를 측정하는상황에 자주사용  

## 탭 네비게이션 버튼아이콘 설정  
```js
import { MaterialCommunityIcons } from '@expo/vector-icons';

const TabIcon = ({ name, size, color }) => {
  return <MaterialCommunityIcons name={name} size={size} color={color} />;
};

...

 return (
      <Tab.Navigator initialRouteName="Settings">
        <Tab.Screen
          name="Mail"
          component={Mail}
          options={{
            tabBarIcon: props =>
              TabIcon({
                ...props,
                name: 'email',
              }),
          }}
        />
        <Tab.Screen
          name="Meet"
          component={Meet}
          options={{
            tabBarIcon: props =>
              TabIcon({
                ...props,
                name: 'video'
              }),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: props =>
              TabIcon({
                ...props,
                name: 'settings'
              }),
          }}
        />
      </Tab.Navigator>
      ...
```  

###  탭바 라벨  
아래 방식으로 라벨위치를 바꿀수있는데 두가지만 가능하다  
below-icon 기본값 아이콘 아래 라벨  
beside-icon 아이콘 옆에 라벨  
`<Tab.Navigator initialRouteName="Settings" tabBarOptions= {{ labelPosition: 'below-icon'}}>`  

**라벨 렌더링 x**  
tabBarOptions= {{ showLael: false }}   


### 탭바 배경색, 아이콘색  
tabBarOptions에 스타일을 바꿔줘 수정한다.  
 activeTintColor 아이콘이 클릭됐을때 색  
 inactiveTintColor 클릭안된 아이콘 색  
```js
const TabNavigation = () => {
    return (
      <Tab.Navigator 
        initialRouteName="Settings"
        tabBarOptions= {{ labelPosition: 'below-icon', 
        style: {
            backgroundColor: '#54b7f9',
            borderTopColor: '#ffffff',
            borderTopWidth: 2,
        },
        activeTintColor: '#ffffff',
        inactiveTintColor: '#cfcfcf',
        }}
```  


      




