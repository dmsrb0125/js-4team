function btnColorCheck() {
    let paramsList = [
        {'gryffindor': ['red', 'yellow']},
        {'hufflepuff': ['yellow', 'black']},
        {'ravenclaw': ['blue', 'brown']},
        {'slytherin': ['green', 'gray']}
    ];
    const params = new URLSearchParams(window.location.search);
    const paramsKey = params.get("houseId");
    let btnColor = null;

    // paramsList 배열의 각 항목을 순회하면서 paramsKey와 일치하는 객체를 찾음
    paramsList.forEach(item => {
        // item 객체의 키와 paramsKey를 비교
        if (Object.keys(item)[0] === paramsKey) {
            btnColor = Object.values(item)[0];
        }
    });

    return btnColor;
}

export {btnColorCheck}