// import {db, collection} from '../../module/firebase-conn';

class Member {
    constructor(name, image, advantages, style, blogUrl, mbti, introduction) {
        this.name = name;
        this.image = image;
        this.advantages = advantages;
        this.style = style;
        this.blogUrl = blogUrl;
        this.mbti = mbti;
        this.introduction = introduction;
    }
}

// Member 객체를 Firebase에 저장하는 함수
async function saveMemberToFirebase(member) {
    try {
        const membersCollectionRef = collection(db, 'members'); // 'members' 컬렉션 참조
        await addDoc(membersCollectionRef, member); // member 객체를 'members' 컬렉션에 추가
        console.log('Member가 Firebase에 저장되었습니다.');
    } catch (error) {
        console.error('Firebase에 Member를 저장하는 동안 오류가 발생했습니다:', error);
    }
}

// HTML 입력 요소에 값을 설정하는 함수
function setInputValue(elementId, value) {
    document.getElementById(elementId).value = value;
}

// submitForm 함수 내에서 saveMemberToFirebase 함수 호출하는 부분 추가
document.getElementById("confirm").addEventListener("click", function () {
    // 입력된 값 가져오기
    let name = document.getElementById("memberName").value;
    let image = document.getElementById("memberImage").value;
    let advantages = document.getElementById("memberAdvantages").value;
    let style = document.getElementById("memberStyle").value;
    let blogUrl = document.getElementById("memberBlogUrl").value;
    let mbti = document.getElementById("memberMBTI").value;
    let introduction = document.getElementById("memberIntroduction").value;

    // 입력값 검증
    if (!name || !image || !advantages || !style || !blogUrl || !mbti || !introduction) {
        alert("모든 필드를 입력해주세요.");
        return;
    }

    // Member 객체 생성
    let member = new Member(name, image, advantages, style, blogUrl, mbti, introduction);

    // Member 객체를 Firebase에 저장
    saveMemberToFirebase(member);
    // 저장 후 입력란 초기화
    setInputValue("memberName", "");
    setInputValue("memberImage", "");
    setInputValue("memberAdvantages", "");
    setInputValue("memberStyle", "");
    setInputValue("memberBlogUrl", "");
    setInputValue("memberMBTI", "");
    setInputValue("memberIntroduction", "");

    alert("저장되었습니다.");
    modalClose();
});

function modalClose() {
    $("#popup").fadeOut();
}