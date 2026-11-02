# 프로젝트 구조와 개발 참고

## 분석 범위

2026-11-02 기준 소스와 설정을 분석했다. 이 문서는 탐색 안내이며 실제 코드와 설정을 우선한다.

`@pdg/compare`는 값 비교, 빈 값 및 형식 검증을 제공하는 TypeScript npm 패키지다. `src/index.ts`는 이름 있는 내보내기와 함수 모음 기본 내보내기를 함께 제공한다. 서버, 데이터베이스, UI는 없다.

## 파일별 책임

| 경로 | 책임 |
| --- | --- |
| `src/index.ts` | 공개 진입점. 이름 있는 내보내기와 기본 객체를 별도로 관리 |
| `src/empty/` | 빈 값 판별, 반대 판별 및 조건부 대체 함수. `empty`, `notEmpty` 별칭 포함 |
| `src/null/`, `src/undefined/`, `src/null_undefined/` | null·undefined 판별, 타입 좁히기 및 조건부 대체 함수 |
| `src/isEqual.ts`, `src/isContains.ts` | 값 비교 및 배열 포함 여부. 각각 `equal`, `contains` 별칭 포함 |
| `src/is*.ts` | 숫자, 이메일, URL, 전화번호, 사업자·주민등록번호 형식 등의 검사 |
| `src/_types.ts` | 조건부 반환 타입을 위한 내부 타입 |
| `test/` | Jest와 ts-jest로 공개 소스 진입점의 함수 검증 |
| `examples/src/example.ts` | 현재 테스트 사용을 안내하는 콘솔 출력. 실제 API 사용 예제는 없음 |
| `examples/package.json` | 별도 `tsx` 실행 환경. 루트 패키지 의존성이나 workspace 연결 없음 |
| `package.json`, `rollup.config.js` | 배포 진입점, 명령, JS 번들 및 선언 생성 |
| `tsconfig.json`, `tsconfig.test.json`, `jest.config.ts` | 소스와 테스트 타입 설정, Node 테스트 환경 |
| `eslint.config.js`, `.prettierrc.cjs` | 정적 검사와 포맷 설정 |
| `.nvmrc`, `.gitignore`, `.npmignore` | Node 버전과 Git·npm 제외 설정 |

## 구현 변경 시 주의점

- 기본 내보내기는 자동 생성되지 않는다. 함수를 추가·변경할 때 `export *` 경로와 기본 객체 양쪽의 의도된 공개 범위를 확인한다. 별칭도 기존 API다.
- `isEmpty`는 null, undefined, 빈 문자열·배열·Map·Set, 유효하지 않은 Date, 자체 키가 없는 객체를 빈 값으로 취급하고 RegExp는 빈 값으로 취급하지 않는다. `isNotEmpty`는 반대 결과다. 공백 문자열은 빈 문자열과 다르다.
- `if*` 함수의 런타임 반환값과 조건부 타입, 판별 함수의 타입 가드를 함께 확인한다. `_types.ts`의 변경은 여러 함수에 영향을 줄 수 있다.
- `isEqual`은 객체에 대해 JSON 직렬화 결과와 `Object.entries` 직렬화 결과를 비교하며, 직렬화 오류 시 false를 반환한다. 범용 깊은 동등성으로 가정하지 않는다. `isContains`는 배열의 `includes`를 사용한다.
- 형식 검사 함수의 허용 범위는 정규식과 테스트가 기준이다. 특히 사업자·주민등록번호 함수는 부분 문자열에도 일치할 수 있으며 체크섬 검증을 수행하지 않는다. 요구 없이 의미를 바꾸지 않는다.

## 빌드와 배포

Rollup은 `src/index.ts`를 번들링해 `dist/index.js` (CommonJS), `dist/index.esm.js` (ES module), `dist/index.d.ts` 및 모듈별 선언을 생성한다. `package.json`의 `main` / `exports.require`, `module` / `exports.import`, `types` / `exports.types`가 각각 해당 진입점을 가리킨다. `dependencies`와 `peerDependencies`는 외부 처리 대상이다. 선언 정리 플러그인은 `.private` 디렉터리와 `.private.d.ts` 파일을 제거한다.

- 패키지는 `"type": "module"`이지만 CommonJS 출력이 `.js`다. Node의 `require` 호환성을 보장할 수 없으므로 배포 설정 변경이나 게시 시 실제 패키지 설치 후 `import`, `require`, 타입 해석을 각각 검증한다.
- `dist/`는 `.gitignore`에서 제외되지 않으며 현재 Git이 추적한다. Rollup은 `dist/*`를 삭제하고 다시 생성하므로 실행 전에 기존 변경을 확인하고 보존한다. 생성 파일은 직접 수정하지 않는다.
- `files`는 `dist`, `README.md`를 지정한다. `npm pack --dry-run`으로 실제 배포 목록을 확인한다.
- 예제는 루트 패키지를 설치하지 않으므로 패키지 소비 검증을 대신하지 않는다. Rollup의 `context: 'window'`도 브라우저 호환성을 보장하지 않는다.
- TypeScript는 ES2017, ESNext, `moduleResolution: bundler`, `strict`, `verbatimModuleSyntax`를 사용한다. 루트 타입 검사와 lint는 `src/` 대상이며 테스트·예제 전체를 검사하지 않는다. Rollup은 lint 경고에도 실패한다.

## 명령 안내

루트에서 실행한다. `.nvmrc`는 Node `24.22.1`을 지정한다. 잠금 파일은 Git 제외 대상이며 예제에는 별도 의존성 설치가 필요하다.

| 목적 | 명령 | 주의점 |
| --- | --- | --- |
| 타입 검사 | `npm run tsc` | `src/` 대상 |
| 정적 검사 | `npm run lint` | `src/**/*.ts` 대상 |
| 테스트 | `npm test -- --runInBand --watchman=false` | Watchman 없이 실행 |
| 표준 빌드 | `npm run build` | Watchman 재등록, 기본 Jest, Rollup 순서 |
| 번들만 확인 | `./node_modules/.bin/rollup -c --bundleConfigAsCjs` | 테스트 별도 실행 필요. `dist/*`를 정리 후 생성 |
| 예제 실행 | `npm run dev` | `examples/` 의존성 필요, 단발 실행 |
| 배포 목록 확인 | `npm pack --dry-run` | 실제 게시는 하지 않음 |

`npm run pub`는 설치·빌드·공개 게시를 수행하며 마지막 `|| true` 때문에 종료 코드만으로 게시 성공을 판단할 수 없다. `git:commit`은 전체 변경을 스테이징하고, `reset:gitignore`는 인덱스를 재구성하며, `reinstall:module`은 의존성과 잠금 파일을 삭제한다. 일반 검증에 사용하지 않는다.
