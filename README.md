# RANDOM_TEAM

팀을 무작위로 나누는 프로젝트입니다.

## Deployment

[RANDOM_TEAM](http://random-team.s3-website.ap-northeast-2.amazonaws.com)

## How to Use

1. 입력창에 팀원을 추가해주세요. (중복된 값은 추가되지 않습니다.)

   1. 추가된 팀원의 이름을 확인합니다.
   2. 추가된 팀원 중 삭제를 원한다면, 팀원 이름 옆의 ⓧ 를 클릭해주세요.
   3. 모든 팀원을 삭제하길 원한다면, <추가된 팀원> 옆의 초기화를 클릭해주세요.
   4. 모든 입력이 완료되었다면, 다음 버튼을 클릭해주세요.

   <br/>

   ![팀원추가](https://user-images.githubusercontent.com/85660408/221427144-390e971a-cdbf-4f59-80b2-f93dab008fd8.jpg)

   <br/>

2. 나누고 싶은 팀의 개수와 팀명을 추가합니다. (

   1. 팀 개수의 경우, 팀원의 수를 넘지 못합니다. (팀 개수는 1 이상이어야 합니다.)
   2. 팀명의 경우, Optional한 입력창입니다. 입력하지 않을 경우, 팀명은 인덱스로 반환됩니다.
   3. 팀명이 중복될 경우, 해당 값은 추가되지 않습니다.
   4. 추가된 팀명을 확인 합니다.
   5. 추가된 팀명 중 삭제를 원한다면, 팀명 이름 옆의 ⓧ 를 클릭해주세요.
   6. 모든 팀명을 삭제하길 원한다면, <추가된 팀> 옆의 초기화를 클릭해주세요.
   7. 더 많은 팀원을 추가하고자 한다면, 맨 상단의 "이전으로 돌아가기"를 클릭해주세요. 이전으로 돌아가더라도 인력된 팀수와 팀명은 변경되지 않습니다.
   8. 모든 과정이 완료되었다면, 다음 버튼을 클릭해주세요.

   <br/>

   ![팀명추가](https://user-images.githubusercontent.com/85660408/221427138-568d3b2c-23c1-44a0-8a06-7ecaa0b3b4e3.jpg)

   <br/>

3. 무작위로 나눠진 팀을 결과물로 받습니다!

   1. 해당 결과물, 또는 설정값을 저장하고 싶다면 결과저장을 클릭하여, "팀만들기.txt" 를 다운로드 해주세요.
   2. 모든 설정값과 결과물을 초기화하고 싶다면, 전체 초기화 버튼을 눌러주세요.
   3. 결과값만을 초기화하지만 기존의 설정값을 유지하고 싶다면, 상단의 "다시 설정하기"를 클릭해주세요.

   <br/>

   ![결과물](https://user-images.githubusercontent.com/85660408/221427152-90c42bb3-a0b6-4f48-9c34-43dc0e857178.jpg)

   <br/>

※ 파일 업로드

1. 결과값으로 저장된 .txt 파일을 불러와 여러가지 값을 세팅하는 기능입니다.
2. 업로드 전, 어떠한 값을 불러올지 mode를 선택해주세요.

   1. 팀원만 추가 : 팀원 리스트만을 추가합니다. (중복된 값이 존재한다면, 해당값을 제외한 값이 추가됩니다.)
   2. 팀명만 추가 : 팀명 리스트만을 추가합니다. (중복된 값이 존재한다면, 해당값을 제외한 값이 추가됩니다.)
   3. 팀원과 팀명 추가 : 팀원만 추가 + 팀명만 추가
   4. 결과값까지 모두 설정 : 해당 설정시, 이전의 결과값은 유지한 채로 새롭게 추가된 팀원만을 임의로 나눕니다.

3. 파일을 업로드 합니다. (이전의 결과를 txt 파일로 다운로드 했다면, 해당 파일을 업로드합니다.)
4. 업로드시 모드에 맞게 값이 추가되었는지 확인합니다.

   <br/>

   ![업로드 기능](https://user-images.githubusercontent.com/85660408/221427056-12a76825-c770-4f0f-aeec-a6ba5a0b3c87.jpg)

   <br/>

## Requirment

For building and running the app you need:

- Node.js 18.12.1
- Yarn 1.22.19

## Script

```
$ yarn install
$ yarn start
```

## Stack

- react & react-dom 18.2.0
- typescript 4.4.2
- react-router-dom 6.8.0
- styled-components 5.0.0

## Folder Structure

```
src
  ├─components
  │  ├─add
  │  ├─common
  │  ├─config
  │  └─result
  ├─containers
  │  ├─add
  │  ├─config
  │  ├─main
  │  └─result
  ├─contexts
  ├─lib
  └─pages
```
