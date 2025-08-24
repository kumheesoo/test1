# 경고문 제보 시스템

골목의 다양한 경고문을 수집하는 React 웹 애플리케이션입니다.

## 기능

- 📸 경고문 이미지 업로드 (최대 10MB)
- 📂 카테고리 선택 (교통, 안전, 환경, 기타)
- 👤 닉네임 입력 또는 익명 제보 선택
- 🎨 모던하고 반응형 UI
- ✅ 폼 유효성 검사

## 설치 및 실행

### 1. 프로젝트 클론
```bash
git clone [repository-url]
cd warning-sign-app
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 개발 서버 실행
```bash
npm start
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 애플리케이션을 확인할 수 있습니다.

## 사용법

1. 메인 페이지에서 "경고문 제보하기" 버튼을 클릭합니다.
2. 모달이 열리면 다음 정보를 입력합니다:
   - 경고문 이미지 업로드
   - 카테고리 선택
   - 닉네임 입력 또는 익명 제보 선택
3. "제보하기" 버튼을 클릭하여 제출합니다.

## 기술 스택

- **React** - 사용자 인터페이스 라이브러리
- **Styled Components** - CSS-in-JS 스타일링
- **HTML5 File API** - 파일 업로드 처리

## 프로젝트 구조

```
src/
├── components/
│   └── WarningSignModal.js    # 경고문 제보 모달 컴포넌트
├── App.js                     # 메인 애플리케이션 컴포넌트
├── App.css                    # 메인 스타일
└── index.js                   # 애플리케이션 진입점
```

## 커스터마이징

### 카테고리 추가/수정
`WarningSignModal.js` 파일의 `handleSubmit` 함수에서 카테고리 배열을 수정할 수 있습니다:

```javascript
const categories = ['교통', '안전', '환경', '기타', '새로운카테고리'];
```

### 파일 크기 제한 변경
`handleFileUpload` 함수에서 파일 크기 제한을 수정할 수 있습니다:

```javascript
if (file && file.size <= 20 * 1024 * 1024) { // 20MB로 변경
```

## 라이선스

MIT License

## 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
