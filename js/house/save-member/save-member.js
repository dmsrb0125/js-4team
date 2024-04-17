import {initializeApp} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import {
    getFirestore,
    collection,
    addDoc
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyA6V95xWNIVA4mPq00Us79ScnSL09a8fk8",
    authDomain: "js-4teamproject.firebaseapp.com",
    projectId: "js-4teamproject",
    storageBucket: "js-4teamproject.appspot.com",
    messagingSenderId: "514915830726",
    appId: "1:514915830726:web:3805ff801aa871ba9ac0c7",
    measurementId: "G-ZGBX3PPB98",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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

let houseIdPK = null;

function getByHouseId(houseId) {
    houseIdPK = Object.keys(houseId).toString();
}

//member를 저장할 수 있는 firebase 기능
async function addMemberToFirestore(houseId, member) {
    try {
        const membersCollection = collection(db, `houses/${houseId}/members`);
        await addDoc(membersCollection, {
            name: member.name,
            image: member.image,
            advantages: member.advantages,
            style: member.style,
            blogUrl: member.blogUrl,
            mbti: member.mbti,
            introduction: member.introduction
        });
        console.log('Member added to Firestore successfully');
    } catch (error) {
        console.error('Error adding member to Firestore: ', error);
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
    addMemberToFirestore(houseIdPK, member);

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
    // window.location.reload();
});

function modalClose() {
    $("#popup").fadeOut();
}

export {getByHouseId}