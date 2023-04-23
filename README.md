# RockPaperScissors

1. #### 컴퓨터가 랜덤으로 가위, 바위, 보 중 하나를 선택하는 함수 생성

###### [`Math.random()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

##### 가위, 바위, 보가 들어있는 배열을 만들고 `Math.random()`로 0~2까지의 숫자로 배열의 index를 만들기<br>`Math.random()`함수는 0이상 1 미만의 랜덤한 숫자를 리턴하기 때문에 0에서 2사이의 숫자를 리턴하려면 `Math.random()*2`를 하면된다. 라고 생각했지만 이렇게 계산해서 `Math.floor()`를 사용해 정수로 만들게 되면 0과 1밖에 나오지 않는다.

###### `Math.floor()`함수는 주어진 숫자와 "같거나 작은" 정수 중에서 가장 큰 수를 리턴한다.<br>0 이상 1 "미만"의 수를 리턴하는 `Math.random()`함수에 2를 곱해도 0이상 2 미만의 수가 나오게된다. 따라서 해당 수를 `Math.floor()`함수에 넣어도 2는 절대 나오지 않는다.

##### 따라서 `Math.floor(Math.random()*3)`로 0<= n <=2 인 정수를 랜덤하게 생성할 수 있다.

##### 이렇게 만든 정수를 배열의 Index로 사용하면 된다.

```javascript
function getCompurterChoice() {
  let rps = ['rock', 'paper', 'scissors'];
  let rpsIndex = Math.floor(Math.random()*3);
}
```

2. #### 플레이어가 가위, 바위, 보 중 하나를 선택하고 컴퓨터와 유저의 선택 두가지의 argument를 받아 승패 여부를 리턴하는 함수 만들기

##### `playerSelection`과 `computerSelection`을 받아와 승패여부를 결정한다. 비겼을 경우 "tie!"를 리턴하고 승리와 패배의 경우에는 코드 재사용성을 높이려고 ``` ` ```(백틱)을 이용해서 승패시 출력할 문장을 감싸고 `${}`를 사용해 가위 바위 보를 따로 쓰지 않아도 되게끔 만들었다.

###### [템플릿 리터럴](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals)

3. #### 반복문을 사용해서 5번의 게임을 진행하고, 총 점수를 계산해 누가 이겼는지 보여주는 함수

##### 반복문을 사용해서 한 라운드를 실행하는 함수 호출, 승패 또는 무승부 여부를 `winOrLose`변수를 통해 0,1,2 로 구분하고 winOrLose 값에 따라 플레이어와 컴퓨터의 점수 카운팅하는 조건문 추가

##### 게임 5번이 진행되고 플레이어와 컴퓨터 점수를 각각 합산한 결과를 출력

######  

 









