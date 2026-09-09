# web-KUMHO

**[포트폴리오] 기업형 웹 프로젝트 - 금호건설 리뉴얼**

금호건설 공식 웹사이트의 UI/UX를 리뉴얼하고, 모던 웹 표준 및 인터랙션 요소를 적용한 리포지토리입니다.

<br>

## 배포 사이트

[금호건설 웹사이트](https://pingandthepong26.mycafe24.com/)

<br>

## 로컬 서버 실행

PHP 내장 서버를 이용하여 로컬 환경에서 프로젝트를 실행할 수 있습니다.

```bash
php -S localhost:8000 router.php
```

실행 후 브라우저에서 다음 주소로 접속합니다.

http://localhost:8000

<br>

## 기술 스택

### Environment & Hosting

![Cafe24](https://img.shields.io/badge/Cafe24-0078FF?style=for-the-badge&logo=cafe24&logoColor=white)

### CMS / Framework

![Gnuboard](https://img.shields.io/badge/Gnuboard-333333?style=for-the-badge&logo=gnu&logoColor=white)

### Backend

![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)
![Kiwoom REST API](https://img.shields.io/badge/Kiwoom%20REST%20API-003A70?style=for-the-badge)

### Frontend

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)
![JSON](https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white)

### Libraries & Assets

![Font Awesome](https://img.shields.io/badge/Font_Awesome-528DD7?style=for-the-badge&logo=font-awesome&logoColor=white)
![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=for-the-badge&logo=google-fonts&logoColor=white)
![Swiper](https://img.shields.io/badge/Swiper-6332F6?style=for-the-badge&logo=swiper&logoColor=white)
![AOS](https://img.shields.io/badge/AOS-2D3748?style=for-the-badge&logoColor=white)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chart.js&logoColor=white)

<br>

## CSS 방법론 (BEM)

> 프로젝트의 CSS 클래스명은 명확한 구조 파악과 유지보수를 위해 BEM(Block Element Modifier) 방법론을 기반으로 작성했습니다.

|   구분   |       표기        |              의미              |
| :------: | :---------------: | :----------------------------: |
|  Block   |   `kebab-case`    |       독립적인 구성 요소       |
| Element  | `block__element`  |     Block을 구성하는 요소      |
| Modifier | `block--modifier` | Block 또는 Element의 변형 상태 |

<br>

## 핵심 구현 사항

- **자바스크립트 역량 강화 (Vanilla JS & jQuery)**
  - 외부 라이브러리 의존도를 최소화하고, 주요 UI 요소(GNB, 모달, 슬라이드 등)의 동작 로직을 **Vanilla JS와 jQuery로 직접 하드코딩**하여 구현
  - 동일한 UI(예: 탭메뉴)도 `classList` 기반 구현, `jQuery` 이벤트 핸들링, `data-*` 속성 활용 등 **다양한 방식으로 구현하며 각 접근법의 차이와 활용 방법을 학습**
  - DOM 이벤트 처리와 동적 클래스 제어를 활용하여 UI 상태 및 인터랙션 구현

- **라이브러리 활용**
  - 외부 라이브러리는 프로젝트의 목적에 맞는 기능을 중심으로 최소한 적용하여 직접 구현한 코드와 역할을 구분
  - **AOS**를 활용하여 스크롤 기반 모션 효과 구현
  - **Swiper**를 활용하여 반응형 슬라이드 및 인터랙티브 UI 구현
  - **Chart.js**를 활용하여 데이터 기반 차트 UI 구현

- **데이터 연동 및 서버 환경**
  - **Kiwoom REST API**를 활용하여 금호건설(002990)의 실제 주가 데이터 연동
  - **OAuth 2.0** 방식으로 API Access Token을 발급받고, 주가정보 API(ka10001)를 통해 현재가, 전일대비, 등락률, 전일 종가, 고가, 저가, 거래량 등의 데이터 조회
  - PHP 서버에서 외부 API 요청 및 데이터 가공을 처리하고, 필요한 데이터만 JSON 형태로 반환
  - JavaScript의 fetch()를 활용하여 서버에서 전달받은 주가 데이터를 비동기 방식으로 화면에 동적으로 출력
  - 주가 변동값에 따라 positive / negative 상태 클래스를 적용하여 상승·하락 상태를 UI에 반영
  - API 인증정보는 .env 파일로 분리하고 .gitignore를 적용하여 민감한 인증정보가 저장소에 노출되지 않도록 관리
  - **Gnuboard & PHP**를 활용하여 Cafe24 서버 환경에서 게시판 모듈화 및 데이터 서버 연동 구축

<br>

## 배포 환경 문제 해결

- 로컬 환경에서는 정상적으로 동작하지만 Cafe24 호스팅 환경에서 Kiwoom REST API 인증이 실패하는 문제를 단계적으로 확인
- .env 파일 존재 여부 및 인증정보 로딩 상태를 확인하여 환경변수 문제와 API 인증 문제를 분리하여 진단
- Kiwoom API의 8050: 지정단말기 인증에 실패했습니다 응답을 확인하고, 호스팅 서버의 공인 IP를 Kiwoom API 허용 IP로 등록하여 배포 환경의 API 인증 문제 해결
