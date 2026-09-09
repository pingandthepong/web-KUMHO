# web-KUMHO

> **[포트폴리오] 기업형 웹 프로젝트 - 금호건설 리뉴얼**

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
![Chart.js](https://img.shields.io/badge/Chart.js-2D3748?style=for-the-badge&logoColor=white)

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
  - 동일한 UI(예: 탭메뉴)도 `classList` 기반 구현, `jQuery` 이벤트 핸들링, `data-*` 속성 활용 등 **다양한 방식과 접근법으로 비교·작성**하며 코드 효율성 및 호환성 학습

- **라이브러리 활용 및 체험**
  - 모션(AOS) 및 인터랙티브 슬라이더(Swiper)는 라이브러리를 **기능 체험 및 프로젝트 완성도 보완 목적**으로 최소한 적용

- **데이터 연동 및 서버 환경**
  - **JSON & AJAX**: 비동기 통신을 활용하여 외부 데이터를 동적으로 로딩 및 바인딩
  - **Gnuboard & PHP**: Cafe24 서버 환경에서 게시판 모듈화 및 데이터 서버 연동 구축
