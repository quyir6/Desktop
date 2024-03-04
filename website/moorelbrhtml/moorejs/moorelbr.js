let secondcmmnd = [
  {
    ndpic: "/moorelbrhtml/mooreimg/profile.webp",
    ndtitle: "Yard Manager",
    ndname: "Ken",
  },
  {
    ndpic: "/moorelbrhtml/mooreimg/profile.webp",
    ndtitle: "Payroll/HR",
    ndname: "Nancy",
  },
  {
    ndpic: "/moorelbrhtml/mooreimg/profile.webp",
    ndtitle: "Store Lead",
    ndname: "Kevin",
  },
];

let secondcmmndHTML = "";

secondcmmnd.forEach((ndmemb) => {
  secondcmmndHTML += `
   <div class="beside">
      <img src="${ndmemb.ndpic}" class="teampicture" alt="profile" />
      <h3 class="ndtitle">${ndmemb.ndtitle}</h3>
      <p class="ndname">${ndmemb.ndname}</p>
    </div>
  `;
});

document.querySelector(".js-2nd").innerHTML = secondcmmndHTML;
