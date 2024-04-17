function elementColorSet(mainColor) {

    let memberAddBtnEle = document.getElementById('modal-open');

    memberAddBtnEle.style.backgroundColor = Object.values(mainColor)[0][0].toString();
    memberAddBtnEle.style.color = Object.values(mainColor)[0][1].toString();

    let popupEle = document.getElementById('popupId');
    popupEle.style.backgroundColor = Object.values(mainColor)[0][0].toString();

    let popupTextEle = document.getElementsByClassName('pop-btn');

    for (let popupTextEleElement of popupTextEle) {
        popupTextEleElement.style.color = Object.values(mainColor)[0][1].toString();
    }
}

export {elementColorSet};
