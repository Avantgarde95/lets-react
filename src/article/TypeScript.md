# About
- [Homepage](https://www.typescriptlang.org/)

JavaScript 기반의 언어로, JavaScript의 문법을 확장하여 C++, Java처럼 **자료형(type)을 명시하고** 체크하여 견고한 프로그래밍이 가능하도록 한 언어입니다.

```typescript
// JavaScript
function addNumbers(x, y) {
    return x + y;
}

// TypeScript
function addNumbers(x: number, y: number): number {
    return x + y;
}
```

<https://codesandbox.io/embed/lets-react-simple-typescript-example-7xid9?module=/src/App.ts>

JavaScript의 기본 자료형뿐만 아니라, 자료형의 조합을 통한 복잡한 자료형 생성도 지원합니다.

```typescript
// number이거나 string
const x: number | string = 3;

// 'A', 'B', or 'C' ('D'를 넣으면 에러)
const y: 'A' | 'B' | 'C' = 'A';

// 키는 number, 값은 boolean인 map 형태의 객체
const z: {[key: number]: boolean} = {3: true, 4: false};
```

웹 브라우저는 일반적으로 JavaScript만을 지원합니다. 따라서 TypeScript 컴파일러(tsc)를 이용하여 JavaScript로 변환하여 사용해야 합니다.
`tsconfig.json` 파일을 이용하여 컴파일러에 여러 옵션(ex. 어떤 버전의 JavaScript로 변환할 것인지)을 줄 수가 있습니다.

```jsonc
{
    "compilerOptions": {
        "target": "es3", // Target JavaScript version.
        ...
    },
    ...
}
```

# Example
`npm install -g typescript`를 사용하여 TypeScript 컴파일러를 설치하고, 아래 코드를 "Example.ts" 파일로 저장하고 터미널에서 `tsc Example.ts`를 실행해보세요.

```typescript
function addNumbers(x: number, y: number): number {
    return x + y;
}
```

`Example.js`가 생성됩니다.

```javascript
function addNumbers(x, y) {
    return x + y;
}
```

만약 아래와 같이 함수에 잘못된 자료형의 값을 대입한다면 컴파일 에러가 납니다.

```typescript
function addNumbers(x: number, y: number): number {
    return x + y;
}

addNumbers(3, 'abc'); // Wrong code!
```

# Keywords
- **Union type** / Intersection type (자료형의 합집합 / 교집합)
- **Interface**
  - `interface` vs `type`
- **Nullable**
  - 예컨대 변수 `x`가 `string` 자료형이라면, `x`는 `null` 또는 `undefined`가 될 수 없습니다.
  - `null`이나 `undefined`를 쓰고 싶으면 `string | null` 또는 `string | undefined`와 같이 union type을 활용해야 합니다.
- Object type / Mapped type
  - C++의 구조체처럼 객체의 모양 자체를 자료형으로 쓸 수도 있습니다. (ex. `{x: number, y: number}`)
  - 한편 map 형태의 자료형이 별도로 존재합니다. (ex. `{[key: string]: number}`)
- Generics
  - Java의 generic과 유사합니다.
- Type alias
  - C++의 typedef, using과 유사합니다.

# Useful links
- [TypeScript 공식 문서](https://www.typescriptlang.org/docs/)
