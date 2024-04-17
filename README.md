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

- [ ] 부트스트랩 활용
- [ ] JQuery 활용
- [ ] 오픈api 활용
- [ ] firebase 활용
- [ ] 깃허브 사용

### View

- [ ] 메인페이지 - (팀소개, 팀관련 정보, 기숙사별 팀원 목록)
- [ ] 기숙사페이지 - (기숙사 소개, 팀원 소개, 멤버 추가)

### 기능

- [ ] 부트캠프 종료 디데이 표시
- [ ] 날씨api 가져오기
- [ ] home으로 돌아오는 링크
- [ ] 각 기숙사별 멤버 추가
- [ ] 기숙사 클릭으로 기숙사 페이지 렌더링
- [ ] 해당 멤버정보 수정기능
- [ ] 해당 멤버정보 삭제 기능
- [ ] 멤버클릭시 카드 모달 기능

### DB

- 기숙사 데이터
    - 그리핀토도르 데이터
        - [ ] 그리핀토도르 기숙사 소개 데이터
        - [ ] 후플푸프 멤버 데이터
    - 후플푸프 데이터
        - [ ] 후플푸프 기숙사 소개 데이터
        - [ ] 후플푸프 멤버 데이터
    - 래번클로 데이터
        - [ ] 래번클로 기숙사 소개 데이터
        - [ ] 래번클로 멤버 데이터
    - 슬리데린 데이터
        - [ ] 슬리데린 기숙사 소개 데이터
        - [ ] 슬리데린 별 멤버 데이터

## 파트 분배

### 팀장

- 환경설정
    - [x] 깃허브 레퍼지토리생성
- [x] 메인페이지 기숙사 목록 디자인
- [x] 각 기숙사 DB 연결
    - [x] 각 기숙사 페이지 타이틀에 표시
    - [x] 기숙사멤버 렌더링
- [ ] 각 파트 코드 종합

### 메인페이지, 고정 네비게이션 디자인 파트

- [ ] 메인페이지 디자인, 레이아웃
- [ ] 고정 네비게이션
    - [ ] 고정 네비게이션 디자인
    - [ ] 부트캠프 종료 디데이 표시
    - [ ] 날씨api 가져오기
    - [ ] home으로 돌아오는 링크

### 기숙사 페이지 파트

- [ ] 기숙사페이지 레이아웃 디자인
- [ ] 기숙사 멤버목록 디자인
- [ ] 멤버클릭시 카드 모달 기능
- [ ] 멤버클릭시 카드 모달 디자인

### 기숙사별 db

- [ ] 기숙사 소개 데이터베이스 연결
- [ ] 기숙사별 인원추가 기능
- [ ] 개인정보 수정기능
- [ ] 해당 멤버정보 삭제 기능

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
  Description : 기숙시 목록, 해당 기숙사의 멤버 목록
  응답 예시:

        [
        {
            "houseId": "gryffindor",
            "name": "그리핀도르",
            "members": [
                {
                    "name": "Harry Potter"
                    "image": "imageURL"
                },
                {
                    "name": "Hermione Granger"
                    "image": "imageURL"
                }
            ]
        },
        {
            "houseId": "slytherin",
            "name": "슬리데린",
            "members": [
                {
                    "name": "Ron Weasley"
                    "image": "imageURL"
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
                "memberId": "1",
                "name": "Harry Potter",
                "image": "https://example.com/images/harry.jpg",
                "age": 17,
                "location": "London",
                "mbti": "INTJ",
                "hobbies": ["Quidditch", "Reading"],
                "comment": "I solemnly swear that I am up to no good."
                },
                {
                "memberId": "2",
                "name": "Hermione Granger",
                "image": "https://example.com/images/hermione.jpg",
                "age": 17,
                "location": "London",
                "mbti": "INFJ",
                "hobbies": ["Reading", "Studying"],
                "comment": "When in doubt, go to the library."
                }
            ]
        }

- 멤버 추가
  Method: POST
  Endpoint: /houses/{houseId}/members
  Description: 특정 기숙사에 새 멤버를 추가합니다.
  요청, 응답 예시:

        {
        "name": "Ron Weasley",
        "image": "https://example.com/images/ron.jpg",
        "advantages": "Quick thinker, strategic mind",
        "style": "Casual, prefers direct communication",
        "blogUrl": "https://ronweasleyblog.com",
        "mbti": "ESTP",
        "introduction": "Loyal friend and a natural leader."
        }




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
