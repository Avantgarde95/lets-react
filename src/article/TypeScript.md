# About
- [Homepage](https://www.typescriptlang.org/)
- JavaScript 기반의 언어로, JavaScript의 문법을 확장하여 C++, Java처럼 **자료형(type)을 명시하고** 체크하여 견고한 프로그래밍이 가능하도록 한 언어입니다.
    ```typescript
    // JavaScript
    function addInts(x, y) {
        return x + y;
    }

    // TypeScript
    function addInts(x: number, y: number): number {
        return x + y;
    }
    ```
- 웹 브라우저는 일반적으로 JavaScript만을 지원합니다. 따라서 TypeScript 컴파일러(tsc)를 이용하여 JavaScript로 변환하여 사용해야 합니다.
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
function addInts(x: number, y: number): number {
    return x + y;
}
```

`Example.js`가 생성됩니다.

```javascript
function addInts(x, y) {
    return x + y;
}
```

만약 아래와 같이 잘못된 자료형의 코드를 넣는다면 컴파일 에러가 납니다.

```typescript
function addInts(x: number, y: number): number {
    return x + y;
}

addInts(3, 'abc'); // Wrong code!
```
