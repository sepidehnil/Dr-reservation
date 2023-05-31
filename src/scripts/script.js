//for random id use ctrl+shift+p
import { Card } from "./card.js";
import { HttpClient } from "./httpClient.js";

const html = document.getElementById("cards");
const modal = document.querySelector(".modal");
const modalDoctorName = document.getElementById("modal-doctor-name");
const modalDoctorExpertise = document.getElementById("modal-doctor-Expertise");
const modalDoctorImage = document.getElementById("modalDoctorImage");
const dayReservationBtn = document.getElementById("dayReservationBtn");
const reserveInfoName = document.getElementById("reserve-Info-Name");
const reserveInfoLastname = document.getElementById("reserve-Info-Lastname");
const reserveInfoPhone = document.getElementById("reserve-Info-Phone");

const Cards = [];

const request = new HttpClient("http://localhost:3000/all");
request.getAll().then((result) => {
  console.log(result);
  result.forEach((item) => {
    Cards.push(new Card(item));
  });
  console.log(Cards);
  init();
});

function getCard(card) {
  return `      
  <div
  class="card" data-id=${card.id}
  >
  <div class="w-[70px] h-[70px] my-3">
    <img
      src="${card.imageUrl}"
      class="object-cover w-full h-full rounded-full"
    />
  </div>
  <div class="my-1 font-medium">name: ${card.name}</div>
  <div class="my-1 font-medium">Expertise: ${card.specialist}</div>
  <button class="bg-blue-500 py-1 px-2 rounded-xl mt-5" onclick="handleReservationBtn(this)">
    doctor reservation 
  </button>
  </div>`;
}

function init() {
  Cards.forEach((card) => {
    html.innerHTML += getCard(card);
  });
}

//we cant use addevent or getelement because the html code is in script
window.handleReservationBtn = (e) => {
  const element = e.closest(".card");
  console.log(element); // <div class="card" data-id="8b939627-d6d1-417f-81b4-dced11a93edc">
  const id = element.dataset.id;
  Cards.forEach((card) => {
    if (card.id === id) {
      modal.classList.remove("hidden");
      modalDoctorName.textContent = card.name;
      modalDoctorExpertise.textContent = card.specialist;
      modalDoctorImage.src = card.imageUrl;
      dayReservationBtn.innerHTML = getDay(card.ReservesDate);
    }
  });
};

function getDay(list) {
  let html2 = "";
  list.forEach((day) => {
    html2 += `            
    <button class="hover:bg-blue-400 btns" onclick="handleDayBtn(this)">${day}</button>`;
  });
  return html2;
}

window.handleDayBtn = (e) => {
  const btns = dayReservationBtn.querySelectorAll(".btns");
  console.log(btns);
  const reserveinfo = {
    firstName: reserveInfoName.value,
    lastName: reserveInfoLastname.value,
    phoneNumber: reserveInfoPhone.value,
    reserveDay: e.textContent,
  };
  modal.classList.add("hidden");
  console.log(reserveinfo);
};
