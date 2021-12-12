# TypeScript Problem Solving

TypeScript로 알고리즘을 풀어보자

<br/>

## Packages

TypeScript를 디버깅 하기 위해 필요한 패키지가 2개 있다.

### 1. `npm install --save @types/node`

- TypeScript에서 `node` 패키지를 다운
- node의 fs, readline 패키지를 사용하여 input을 받을 수 있게 됨

### 2. `npm install -g ts-node`

- TypeScript를 터미널에서 바로 실행할 수 있음

<br/>

### Usage

코드 실행 방법은 2가지가 있다.

#### 1. `ts-node filename.ts`

- JS로 변환 과정을 거치지 않고 바로 컴파일

#### 2. `tsc filename.ts` → `node filename.js`

- JS로 변환을 거쳐 filename.js 파일이 생성되고 이를 실행하는 방법
- js로 변환된 코드를 확인할 수 있는 장점
