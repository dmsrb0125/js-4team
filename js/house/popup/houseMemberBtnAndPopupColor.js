function elementColorSet(mainColor) {
    let memberAddBtnEle = document.getElementById('modal-open');

    memberAddBtnEle.style.backgroundColor = mainColor[0];
    memberAddBtnEle.style.color = mainColor[1];

    let popupEle = document.getElementById('popupId');
    popupEle.style.backgroundColor = mainColor[0];

    let popupTextEle = document.getElementsByClassName('pop-btn');

    for (let popupTextEleElement of popupTextEle) {
        popupTextEleElement.style.color = mainColor[1];
    }
}

export {elementColorSet};
