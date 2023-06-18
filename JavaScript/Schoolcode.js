const navbar = document.querySelector("nav");
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        navbar.classList.add("bg-white", "shadow-sm");
    } else {
        navbar.classList.remove("bg-white", "shadow-sm");
    }
})
const people = [
    {
        img: "/Schoolcode/Couse/person1.webp",
        name: "លោកគ្រូរំដួល",
        info: `
        គេហទំព័រ www.Schoolcode.com គឺជាគេហទំព័រដែលផ្ដល់ឱ្យអ្នកនូវការរៀនសរសេរកូដនិង Program ដ៏ទៃទៀតតាមអ៊ីនធឺណិតដោយមានប្រសិទ្ធភាព ។
        <span class="text-info">លោកគ្រូរំដួល</span> គឺជាលោកគ្រូដែលមានជំនញច្បាស់លាស់ក្នុងការសរសេរ Program ដូចជា C , C++ , C# , SQL ,
        Webservice និងកម្មវិធី Mobile App ជាច្រៀនទៀតដែលគាត់ធ្វើការលើវិស័យនេះជា ១០ ឆ្នាំនិងនាំបងប្អូនទាំងអស់គ្នានូវមេរៀនល្អ Program ដែលមាន
        Condition Most Pupule សង្ឃឹមថាប្អូនៗទាំងអស់គ្នានិងខិតខំរៀនសូត្រ និងដើលើវិធីនេះប្រកបដោយភាពជោគជ័យ ។ សូមអរគុណ !
        `,
    },
];

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prve-btn");
const image = document.querySelector(".changimage");
const Name = document.querySelector(".nameinfo");
const infoma = document.querySelector(".txtChang");
function shadowing() {
    const person = people[count]
    image.src = person.img;
    Name.innerHTML = person.name;
    infoma.innerHTML = person.info;
}
let count = 0;
nextBtn.addEventListener("click", () => {
    if (count == people.length - 1) {
        count = 0;
    } else {
        count++;
    }
    shadowing();
})
prevBtn.addEventListener("click", () => {
    if (count == 0) {
        count = people.length - 1;
    } else {
        count--;
    }
    shadowing();
})

const btnContan = document.querySelector("#boxBtncose");
const allBtn = document.querySelectorAll(".paybtn");
btnContan.addEventListener("click", (e) => {
    const btnTagat = e.target.classList.contains("paybtn");
    allBtn.forEach((btn) => {
        if (btnTagat) {
            btn.classList.remove("active");
            e.target.classList.add("active")
        }
    });
});


const payment = [
    {
        couse: "$99.99",
        time: "💰 1 ឆ្នាំ / 1 Yearly 💰",
    },
    {
        couse: "$9.99",
        time: "💰 1 ខែ / 1 Monthly 💰",
    },
];
const mounth = document.querySelector(".mountly");
const yearl = document.querySelector(".yearly");
const pay = document.querySelector(".payperYear");
const timepay = document.querySelector(".timePay");
mounth.addEventListener("click", () => {
    pay.innerHTML = payment[1].couse
    timepay.innerHTML = payment[1].time
});
yearl.addEventListener("click", () => {
    pay.innerHTML = payment[0].couse
    timepay.innerHTML = payment[0].time
})

const card = [
    {
        imagsour: "/Schoolcode/Couse/Web deverlop.jpg",
        title: "Create Website",
        explant: "A create website course teaches you how to design, build, and publish websites. HTML , CSS , Javascript and more...",
        bought: "Create Website",
    },
    {
        imagsour: "/Schoolcode/Couse/Mobile App.jpg",
        title: "Mobile App and Game",
        explant: "A mobile app and game course teaches you how to design, develop, and publish mobile apps and games.",
        bought: "Mobile App and Game",
    },
    {
        imagsour: "/Schoolcode/Couse/Grapic dessign.png",
        title: "Graphic Design",
        explant: "A graphic design course is a program that teaches you how to create effective visual communications.",
        bought: "Graphic Design",
    },
]
const displaymenu = document.querySelector(".diplaycosemenu");
const display = card.map(p => {
    return `
        <div class="col colorshadow">
        <div class="card h-100 border-0">
            <img src="${p.imagsour}"
                class="card-img-top h-75" alt="...">
            <div class="card-body">
                <h3 class="text-center card-title">${p.title}</h3>
                <p class="card-text">${p.explant}</p>
            </div>
             <button type="button" class="btn bg-primary text-white border-0  p-3 fw-bold" onclick="location.href='Sc-course.html'">${p.bought}</button>   
        </div>
        </div>
    `
}).join("")
displaymenu.innerHTML = display;
const accordion_item = document.querySelectorAll(".accordion_item");

accordion_item.forEach((item) => {
    const accordion_header_item = item.querySelector(".accordion_header");

    accordion_header_item.addEventListener("click", () => {
        const accordion_content_item = item.querySelector(".accordion_content");
        const item_actived = document.querySelector(".activeshow");
        VerifyActive(item, accordion_content_item, item_actived);
    });
});

function VerifyActive(item, content, content_actived) {
    const icon_item = item.querySelector(".icon");
    const icon_item_active = document.querySelectorAll(".icon");

    icon_item_active.forEach((item) => (item.innerHTML = ">"));

    if (content_actived) {
        content_actived.style.height = 0;
        content_actived.classList.remove("activeshow");
    }

    if (content !== content_actived) {
        icon_item.innerHTML = "<";
        content.classList.add("activeshow");
        content.style.height = content.scrollHeight + 10 + "px";
    }
}