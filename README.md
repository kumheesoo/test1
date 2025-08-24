# 경고문 제보 시스템

골목의 다양한 경고문을 수집하는 React 웹 애플리케이션입니다.

## 🚀 배포

이 프로젝트는 Vercel을 통해 배포됩니다.

### 배포 URL
- 프로덕션: [배포된 URL이 여기에 표시됩니다]

## 📁 프로젝트 구조

```
/
├── warning-sign-app/     # React 애플리케이션
│   ├── src/             # 소스 코드
│   ├── public/          # 정적 파일
│   └── package.json     # React 앱 의존성
├── package.json         # 프로젝트 루트 설정
├── vercel.json          # Vercel 배포 설정
└── README.md           # 프로젝트 설명
```

## 🛠️ 개발

### 로컬 개발 서버 실행
```bash
npm start
```

### 빌드
```bash
npm run build
```

## 📦 주요 기능

- 📸 경고문 이미지 업로드 (최대 10MB)
- 📂 카테고리 선택 (교통, 안전, 환경, 기타)
- 👤 닉네임 입력 또는 익명 제보 선택
- 🎨 모던하고 반응형 UI
- ✅ 폼 유효성 검사

## 🎨 기술 스택

- **React** - 사용자 인터페이스 라이브러리
- **Styled Components** - CSS-in-JS 스타일링
- **HTML5 File API** - 파일 업로드 처리
- **Vercel** - 배포 플랫폼

## 📱 사용법

1. 메인 페이지에서 "경고문 제보하기" 버튼을 클릭합니다.
2. 모달이 열리면 다음 정보를 입력합니다:
   - 경고문 이미지 업로드
   - 카테고리 선택
   - 닉네임 입력 또는 익명 제보 선택
3. "제보하기" 버튼을 클릭하여 제출합니다.

## 🔧 커스터마이징

### 카테고리 추가/수정
`warning-sign-app/src/components/WarningSignModal.js` 파일에서 카테고리 배열을 수정할 수 있습니다.

### 파일 크기 제한 변경
`handleFileUpload` 함수에서 파일 크기 제한을 수정할 수 있습니다.

## 📄 라이선스

MIT License

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
