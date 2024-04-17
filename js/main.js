// main.js

import { db, collection, getDocs } from "./module/firebase-conn.js";

async function loadHousesAndMembers() {
    const querySnapshot = await getDocs(collection(db, "houses"));
    const houseList = document.querySelector(".houseList");

    querySnapshot.forEach(async (doc) => {
        const houseData = doc.data();
        const houseDiv = document.createElement("div");
        houseDiv.style.backgroundImage = `url(${houseData.image})`;
        houseDiv.style.backgroundPosition = "center";
        houseDiv.style.backgroundSize = "cover";
        houseDiv.className = "house";
        houseDiv.innerHTML = `
      <img src="${houseData.logo}" alt="${houseData.name}" style="width:50px; height:50px;">
      <div class="house-name">${houseData.name}</div>
    `;

        // Attach a click event to navigate to the house detail page
        houseDiv.addEventListener("click", () => {
            window.location.href = `house.html?houseId=${doc.id}`;
        });

        // Load members directly under each house
        const membersSnapshot = await getDocs(
            collection(db, "houses", doc.id, "members")
        );
        const membersDiv = document.createElement("div");
        membersDiv.className = "members";

        membersSnapshot.forEach((memberDoc) => {
            const memberData = memberDoc.data();
            const memberItem = document.createElement("div");
            memberItem.className = "member";
            memberItem.innerHTML = `
        <img src="${memberData.image}" alt="${memberData.name}" style="width:60px; height:60px;">
        <span>${memberData.name}</span>
      `;
            membersDiv.appendChild(memberItem);
        });

        houseDiv.appendChild(membersDiv);
        houseList.appendChild(houseDiv);
    });
}

export { loadHousesAndMembers };
