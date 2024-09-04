# MedicineWeb

## 개요
MedicineWeb은 기존 의약품 정보를 간단하게 시각화하여 원하는 정보를 찾아낼 수 있는 서비스입니다. <br>
기존 의약품 검색 사이트(e.g., 약학정보원, 드러그인포 등)를 이용하며, <br> 
그간 느꼈던 불편함이 개선된 서비스가 있었으면 좋겠다라고 느꼈던 생각에서 출발한 서비스입니다.

<br>

---

<br><br>

## 주요 기능
### 검색
    - 드롭다운 카테고리(의약품명 / 성분명 / 효능효과)에 따라 사용자는 원하는 정보를 검색 할 수 있습니다.
<img width="1110" alt="searchDrug" src="https://github.com/user-attachments/assets/4f55fc05-5bcb-4489-94ef-bfc055e60e20">
<img width="1250" alt="searchEffects" src="https://github.com/user-attachments/assets/89c34af7-42f4-45a2-a8d1-d0461955d133">

<br>

    - 식별 기능을 이용하여 다양한 옵션(식별문자, 제형, 모양, ...)에 따라 사용자는 다양한 상황에서 원하고자 하는 정보만 필터링 할 수 있습니다.
    - (예시) 환자가 지참약으로 처방전이 없는 약을 들고 온 경우
    - (예시2) 기침에 효과가 있던 주황색의 약 이름이 생각 안나는 경우

<img width="865" alt="searchFilter1" src="https://github.com/user-attachments/assets/fc50a768-f038-4703-bb24-caba182cc0ac">
<img width="1317" alt="searchFilter2" src="https://github.com/user-attachments/assets/dd3ca341-fa70-489d-98fe-b3b62b1d4581">

### 검색 결과 조회
    - 검색/필터링에 따라 해당하는 의약품의 결과를 표로 확인할 수 있습니다.
<img width="876" alt="reference1" src="https://github.com/user-attachments/assets/9cc2033f-22de-4b83-9c83-11ec71cb4aaf">

    - 의약품을 클릭하면 해당 의약품의 상세 정보가 모달로 나타나 확인할 수 있습니다.
<img width="698" alt="reference2" src="https://github.com/user-attachments/assets/f40da1d8-50f6-40cf-83f8-31f039c0f704">
<img width="1009" alt="reference3" src="https://github.com/user-attachments/assets/254b1833-8f11-4ab7-ba53-956f66a384cb">

### 즐겨찾기
    - 로그인을 한 경우에만 해당 기능을 이용할 수 있습니다.
    - 상세 조회 모달에서 의약품명 옆에 위치한 별 모양 아이콘을 누름에 따라 즐겨찾기 추가/삭제가 가능합니다.
<img width="191" alt="favorite1" src="https://github.com/user-attachments/assets/14cff7f6-da9e-4968-a2e3-291dd4b29887">
<img width="426" alt="favorite2" src="https://github.com/user-attachments/assets/2fa661a4-d2c0-4fcd-8bee-fcb7d1ae31a2">
<img width="490" alt="facorite3" src="https://github.com/user-attachments/assets/8aea72e3-6833-4902-adb5-4524f0b7485e">


### 로그인
    - 회원 가입을 통해 로그인을 해 즐겨찾기, 마이프로필을 이용할 수 있습니다.
    
    - 회원가입 시 입력한 보안 질문과 답변에 따라 아이디, 비밀번호 찾기가 가능합니다.
<img width="330" alt="login" src="https://github.com/user-attachments/assets/42b1df8e-1eaf-4e5c-ac8a-6420a2d661c9">


### 마이프로필
    - 로그인을 한 경우에만 해당 기능을 이용할 수 있습니다.
    - 회원정보 수정, 회원 탈퇴 기능을 이용할 수 있습니다.

    - 상세조회 모달에서 즐겨찾기한 의약품의 목록을 확인할 수 있습니다.
    - 클릭 시 해당 의약품의 요약 정보를 확인 가능하며, 즐겨찾기 삭제가 가능합니다.
<img width="1450" alt="myProfileUser" src="https://github.com/user-attachments/assets/34c82f36-e077-4108-94c8-5f2e9a78c0a5">
<img width="1401" alt="myProfileManager" src="https://github.com/user-attachments/assets/d1fbb4be-311c-44ab-9781-e0e8cc3343d0">


### 관리자 기능
    - 회원가입 후 서버에서 해당 사용자의 역할을 user -> manager로 할당받으면 이용할 수 있는 기능입니다.
    - 관리자 전용 페이지
<img width="1378" alt="manager" src="https://github.com/user-attachments/assets/f4172a95-19a0-49bc-bbff-fb86ede01b58">

      1. 의약품 데이터 자동 업데이트
        - 오픈API가 연동된 DB의 정보를 새로 가져와 DB에 저장할 수 있습니다.
<img width="552" alt="dataUpdate" src="https://github.com/user-attachments/assets/7fba75f7-b52d-4061-a136-ce14f5009939">

      2. 데이터 추가
        - 의약품 정보를 새로 추가할 수 있습니다.
<img width="1269" alt="dataAdd" src="https://github.com/user-attachments/assets/e28c6ccb-d0c0-46c0-bdd4-b6306042f4ef">

      3. 데이터 수정
        - 의약품 품목번호를 기준으로 해당하는 의약품의 정보를 수정할 수 있습니다.
<img width="1101" alt="dataEdit" src="https://github.com/user-attachments/assets/db4e26c2-1f75-4202-b6ef-5288761e76e6">

      4. 데이터 삭제
        - 의약품 품목번호를 기준으로 해당하는 의약품의 정보를 삭제할 수 있습니다.
<img width="1153" alt="dataRemove" src="https://github.com/user-attachments/assets/d07fcab6-2146-409f-a554-26ef24cf5c99">

<br>

---
### ERROR
    에러 발생 시 나타나는 페이지 화면.
<img width="1265" alt="error" src="https://github.com/user-attachments/assets/80fc1d2a-5fe7-40fe-b298-aeeb13c1287a">

---

<br><br>

## 팀 소개
| ![김영훈](https://avatars.githubusercontent.com/u/177869366?v=4) | ![김태영](https://avatars.githubusercontent.com/u/74344132?v=4) | ![이한휘](https://avatars.githubusercontent.com/u/165121326?v=4)
|----------------------------------------------------------|-----------------------------------------------------------|---|
| BE-김영훈([@kim0hun](https://github.com/Kim0hun))| FE-김태영([@nulzi](https://github.com/nulzi)) |FE-이한휘([@hwinareun](https://github.com/hwinareun))|

<br><br>

---

## 기술 스택
[![stackticon](https://firebasestorage.googleapis.com/v0/b/stackticon-81399.appspot.com/o/images%2F1724582159628?alt=media&token=81479507-6eee-4a79-a24b-d64c767bd0a1)](https://github.com/msdio/stackticon)

---

## 발표 링크 🎥 [MedicineWeb](https://www.youtube.com/watch?v=CJkhvqc0uVM)