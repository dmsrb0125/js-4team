window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".nav");
  // 스크롤 위치가 50px 이상일 때 'scrolled' 클래스를 추가하고, 그렇지 않으면 제거합니다.
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
