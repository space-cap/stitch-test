# DailyMon (데일리몬) 🐹

<div align="center">

![DailyMon Logo](https://raw.githubusercontent.com/wonseokjung/solopreneur-ai-agents/main/agents/youngja/assets/dailymon_banner.png)
*(임시 배너 이미지입니다. 나중에 예쁜 걸로 바꿔주세요!)*

**"매일매일 귀엽게, 습관을 키우다!"**  
게이미피케이션(Gamification) 요소가 결합된 **습관 형성 웹 애플리케이션**입니다.  
귀여운 몬스터와 함께 매일의 퀘스트를 완료하고 코인을 모아보세요!

[![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Stitch MCP](https://img.shields.io/badge/Stitch_MCP-Agent-FF6B6B?style=flat-square)](https://github.com/google/stitch)

</div>

---

## ✨ 주요 기능 (Features)

### 1. 🏠 게이미피케이션 대시보드
- **레벨 & 경험치 시스템**: 퀘스트를 깰 때마다 성장하는 나의 캐릭터!
- **코인 리워드**: 습관을 실천하면 바로바로 보상이 쏟아져요. 💰
- **스트릭(Streak) 불꽃**: 며칠 연속 성공했는지 불꽃 아이콘으로 확인! 🔥

### 2. 📝 데일리 퀘스트 (Daily Quests)
- **물 마시기 💧**: 건강의 기본, 수분 충전!
- **만보 걷기 🏃**: 하루 10,000보 도전!
- **독서 하기 📚**: 마음의 양식 쌓기.
- *(퀘스트 완료 시 펑펑 터지는 폭죽 효과는 덤! 🎉)*

### 3. 🛍️ 펫샵 (Pet Shop)
- 모은 코인으로 몬스터를 꾸며주세요!
- **아이템 목록**:
    - 🎉 파티 모자 (50 코인)
    - 🕶️ 쿨한 선글라스 (100 코인)
    - 🧪 마법 물약 (20 코인)
    - 🦸 슈퍼 히어로 망토 (150 코인)

---

## 🛠️ 기술 스택 (Tech Stack)

- **Framework**: `Next.js 15` (App Router)
- **Language**: `TypeScript`
- **Styling**: `Vanilla CSS` (CSS Modules 방식)
- **Effect**: `canvas-confetti` (폭죽 애니메이션)
- **Design System**: `Stitch MCP` (AI Generated Design)

---

## 🚀 시작하기 (Getting Started)

이 프로젝트를 로컬 환경에서 실행하려면 아래 절차를 따라주세요.

### 1. 레포지토리 복제 (Clone)
```bash
git clone https://github.com/your-username/dailymon.git
cd dailymon
```

### 2. 패키지 설치 (Install)
```bash
npm install
# or
yarn install
```

### 3. 개발 서버 실행 (Run)
```bash
npm run dev
```

이제 브라우저에서 **[http://localhost:3000](http://localhost:3000)** 을 열어 확인해보세요!

---

## 📂 프로젝트 구조 (Structure)

```
dailymon/
├── src/
│   ├── app/                # Next.js App Router (페이지 라우팅)
│   ├── components/         # React 컴포넌트 모음
│   │   ├── DailyMonDashboard.tsx  # 메인 대시보드
│   │   ├── PetShop.tsx            # 상점 컴포넌트
│   │   └── ...
│   └── ...
├── DESIGN.md               # 디자인 시스템 가이드 (색상, 폰트 등)
├── public/                 # 이미지 등 정적 파일
└── package.json            # 프로젝트 설정
```

---

## 🎨 Design by Stitch & Youngja

이 프로젝트는 **Google Stitch MCP**와 **AI 디자인실장 영자**의 협업으로 탄생했습니다.
디자인부터 코딩까지, AI와 함께하는 즐거운 개발 경험을 제공합니다.

---

> **Note**: 이 프로젝트는 아직 초기 단계(MVP)입니다. 앞으로 더 재미있는 기능들이 추가될 예정이니 기대해주세요! 😉
