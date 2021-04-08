## 리액트 네비게이션  

### 패키치 설치  
기본 프로젝트 생성 후
```
npm i styled-components
npm i --save @react-navigation/native
npm i react-native-gesture-handler@1.3.0
npm i react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context 
npm i react-navigation-stack @react-native-community/masked-view
expo i react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-commuity/masked-view
```  
expo i react-native-gesture-handler 에러 발생시  react-native-gesture-handler폴더 제거 후 expo update  

아래와 같은 에러 발생시 npm i or yarn install 실행 해주면 된다.
```
Missing package "metro" in the project at C:\Users\tw450\react-native-expo\native-navigation. This usually means `react-native` is not installed. Please verify that dependencies in package.json include "react-native" and run `yarn` or `npm install`.
```

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

