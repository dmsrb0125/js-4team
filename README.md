# 불4조 기사단 블로그

## 프로젝트 설명

열정 가득한 우리 조를 소개합니다! 팀과 팀원을 소개하는 미니프로젝트입니다. 해리포터 불사조기사단 컨셉으로 팀소개 블로그를 제작하고 원하는 진영(기숙사)를 정해 자기의 정보를 업로드하여 소개합니다.

### 프로젝트 목적

웹개발 종합반 이해 및 응용

- 웹 개발 전반의 흐름을 이해할 수 있습니다.
- 프론트엔드와 백엔드의 구성과 상호작용에 대해서 이해할 수 있습니다.
- CRUD를 구현하고 활용할 수 있습니다.

### 프로젝트 순서

1. 프로젝트의 개요, 방향성, 항목, 구현할 기능 토론
2. 기능명세서 작성
3. 팀원별 프로젝트 파트 분배
4. 팀원들과 소통을 통해 프로젝트 진행
5. 프로젝트 통합, 수정사항 토론
6. 유효성검사 , 기능 테스트
7. 프로젝트 최종 제출

### 활용

- [x] 부트스트랩 활용
- [x] JQuery 활용
- [x] 오픈api 활용
- [x] firebase 활용
- [x] 구글폰트
- [x] 깃허브 사용

### View

- [x] 메인페이지 - (팀소개, 팀관련 정보, 기숙사별 팀원 목록)
- [x] 기숙사페이지 - (기숙사 소개, 팀원 소개, 멤버 추가, 멤버 상세정보)

### 기능

- [x] 부트캠프 종료 디데이 표시
- [x] 날씨api 가져오기
- [x] home으로 돌아오는 버튼
- [x] 팀소개 부분 캐러셀 구현
- [x] 각기숙사 목록 펼치는 토글버튼 구현
- [x] 기숙사 클릭으로 기숙사 페이지 렌더링
- [x] 각 기숙사별 멤버 추가(모달)
- [x] 멤버클릭시 카드 모달 기능
- [x] 해당 멤버정보 수정기능
- [x] 해당 멤버정보 삭제 기능

### DB

- 기숙사 데이터
  - 그리핀토도르 데이터
    - [x] 그리핀토도르 기숙사 소개 데이터
    - [x] 후플푸프 멤버 데이터
  - 후플푸프 데이터
    - [x] 후플푸프 기숙사 소개 데이터
    - [x] 후플푸프 멤버 데이터
  - 래번클로 데이터
    - [x] 래번클로 기숙사 소개 데이터
    - [x] 래번클로 멤버 데이터
  - 슬리데린 데이터
    - [x] 슬리데린 기숙사 소개 데이터
    - [x] 슬리데린 별 멤버 데이터
- CRUD
- [x] 멤버 생성
- [x] 멤버 정보 가져오기
- [x] 멤버 정보 수정 -[x] 멤버 정보 삭제

## 파트 분배

### 이은규(팀장)

- 환경설정
  - [x] 깃허브 레퍼지토리생성
- [x] 메인페이지 기숙사 목록 디자인
- [x] 각 기숙사 DB 연결
  - [x] 각 기숙사 페이지 타이틀에 표시
  - [x] 기숙사멤버 렌더링
- [x] 멤버 모달
  - [x] 멤버클릭시 카드 모달 기능
  - [x] 멤버모달 디자인
- [x] 각 파트 코드 종합

### 김나영(메인페이지, 고정 네비게이션 디자인 파트, 기능테스트)

- [x] 메인페이지
  - [x] 팀소개 부분 캐러셀 구현
  - [x] 메인페이지 디자인, 레이아웃
- [x] 고정 네비게이션
  - [x] 고정 네비게이션 디자인
  - [x] 부트캠프 종료 디데이 표시
  - [x] 날씨api 가져오기
  - [x] home으로 돌아오는 버튼 -[x] 전체적 기능 테스트

### 주장현(기숙사 페이지 파트, 노션관리, 발표)

- [x] 기숙사페이지 레이아웃 디자인
- [x] 기숙사 멤버목록 디자인
- [x] 노션 관리 및 정리
- [x] 발표 준비및 유튜브 영상 제작

### 서찬원(DB파트 ,와이어프레임,erd, 깃허브 관리)

- [x] 기숙사 소개 데이터베이스 연결
- [x] 기숙사별 인원추가 기능
- [x] 개인정보 수정기능
- [x] 해당 멤버정보 삭제 기능
- [x] 와이어프레임 제작및 관리
- [x] erd 데이터플로우 작성
- [x] 깃허브 전체적 관리

## Rest API

### Open API

- 날씨 정보 API
  Method: GET
  Endpoint: /weather
  Description : 현재 위치의 날씨 정보를 조회합니다.

        {
        "location": "Seoul",
        "temperature": "15°C",
        "condition": "Sunny"
        }

### FireBase

- 기숙사 목록 조회
  Method: GET
  Endpoint: /houses
  Description : 기숙사 목록, 해당 기숙사의 멤버 목록
  응답 예시:

        [
        {
            "houseId": "gryffindor",
            "name": "그리핀도르",
            "introduction" : "기숙사설명",
            "logo" : "https://..."
            "members": [
                {
                    "name": "해리포터"
                    "advantages": "imageURL",
                    "summary": "이 영화의 주인공은 나야나!",
                    "blogUrl": "URL",
                    "style": "강력한 외모",
                    "image": "URL",
                    "mbti": "XXXX",
                },
                {
                    "name": "헤르미온느"
                    "advantages": "imageURL",
                    "summary": "해리포터의 여주인공",
                    "blogUrl": "URL",
                    "style": "아름다운 외모",
                    "image": "URL",
                    "mbti": "XXXX",
                }
            ]
        },
        {
            "houseId": "slytherin",
            "name": "슬리데린",
            "introduction" : "기숙사설명",
            "logo" : "https://..."
            "members": [
                {
                    "name": "론 위즐리",
                    "advantages": "imageURL",
                    "summary": "해리포터의 여주인공",
                    "blogUrl": "URL",
                    "style": "아름다운 외모",
                    "image": "URL",
                    "mbti": "XXXX",
                }
            ]
        }
        ]

- 특정 기숙사 정보 조회
  Method: GET
  Endpoint: /houses/{houseId}
  Description: 특정 기숙사의 상세 정보와 해당 기숙사 멤버 목록
  응답 예시:

        {
            "houseId": "gryffindor",
            "name": "그리핀도르",
            "members": [
                {
                    "name": "해리포터"
                    "advantages": "imageURL",
                    "summary": "이 영화의 주인공은 나야나!",
                    "blogUrl": "URL",
                    "style": "강력한 외모",
                    "image": "URL",
                    "mbti": "XXXX",
                },
                {
                    "name": "헤르미온느"
                    "advantages": "imageURL",
                    "summary": "해리포터의 여주인공",
                    "blogUrl": "URL",
                    "style": "아름다운 외모",
                    "image": "URL",
                    "mbti": "XXXX",
                }
            ]
        }

  - 멤버 추가
    Method: POST
    Endpoint: /houses/{houseId}/members
    Description: 특정 기숙사에 새 멤버를 추가합니다.
    요청, 응답 예시:

          {
              "name": "해리포터"
              "advantages": "imageURL",
              "summary": "이 영화의 주인공은 나야나!",
              "blogUrl": "URL",
              "style": "강력한 외모",
              "image": "URL",
              "mbti": "XXXX",
          },

          {
              "success": true,
              "memberId": "3",
              "name": "Ron Weasley",
              "image": "https://example.com/images/ron.jpg",
              "advantages": "Quick thinker, strategic mind",
              "style": "Casual, prefers direct communication",
              "blogUrl": "https://ronweasleyblog.com",
              "mbti": "ESTP",
              "introduction": "Loyal friend and a natural leader."
          }

- 멤버 정보 수정
  Method: PUT
  Endpoint: /members/{memberId}
  Description: 특정 멤버의 정보를 수정합니다.
  요청, 응답 예시:

        {
        "name": "Ron Weasley",
        "image": "https://example.com/images/ron_new.jpg",
        "advantages": "Excellent strategist, reliable partner",
        "style": "Proactive, team-oriented",
        "blogUrl": "https://newronweasleyblog.com",
        "mbti": "ESTP",
        "introduction": "I've grown from my experiences and ready to lead."
        }



        {
        "success": true,
        "memberId": "3",
        "name": "Ron Weasley",
        "image": "https://example.com/images/ron_new.jpg",
        "advantages": "Excellent strategist, reliable partner",
        "style": "Proactive, team-oriented",
        "blogUrl": "https://newronweasleyblog.com",
        "mbti": "ESTP",
        "introduction": "I've grown from my experiences and ready to lead."
        }

- 멤버 삭제
  Method: DELETE
  Endpoint: /members/{memberId}
  Description: 특정 멤버를 삭제합니다.
  응답 예시:

        {
        "success": true,
        "memberId": "3"
        }
