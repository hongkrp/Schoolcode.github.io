const navbar = document.querySelector("nav");
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        navbar.classList.add("bg-white", "shadow-sm");
    } else {
        navbar.classList.remove("bg-white", "shadow-sm");
    }
})
const card = [
    {
        imagsour: "/Schoolcode/Couse/HTML.jpg",
        title: "HTML",
        explant: " យើងប្រើ HTML សម្រាប់បង្កើតនូវ Text element ក្នុង Website ដាក់បន្ទាត់ដាក់ចំនុចមូលអីជាដើមមូលអីជាដើម។។",
        bought: "Learn Now",
    },
    {
        imagsour: "/Schoolcode/Couse/CSS.jpg",
        title: "CSS",
        explant: "យើងប្រើ CSS សម្រាប់ design ទៅលើ HTML ដូចជា ការចាក់ Color ការធ្វើ Animation ឬធ្វើ Style ផ្សេងៗ ។",
        bought: "Learn Now",
    },
    {
        imagsour: "/Schoolcode/Couse/Js.jpg",
        title: "Javascript",
        explant: "យើងប្រើ Javascript គឺសម្រាប់ធ្វើ ឪ្យ Website របស់យើងមានចលនា ឬមួយវិញទៀនអាចកាត់បន្ថយការសរសេរកូដ ។",
        bought: "Learn Now",
    },
    {
        imagsour: "/Schoolcode/Couse/React Js.jpg",
        title: "React Js",
        explant: "យើងប្រើ Javascript គឺសម្រាប់ធ្វើ ឪ្យ Website របស់យើងមានចលនា ឬមួយវិញទៀនអាចកាត់បន្ថយការសរសេរកូដ ។",
        bought: "Learn Now",
    },
    {
        imagsour: "/Schoolcode/Couse/Php.jpg",
        title: "PHP",
        explant: "យើងប្រើ Javascript គឺសម្រាប់ធ្វើ ឪ្យ Website របស់យើងមានចលនា ឬមួយវិញទៀនអាចកាត់បន្ថយការសរសេរកូដ ។",
        bought: "Learn Now",
    },
    {
        imagsour: "/Schoolcode/Couse/C Shap.jpg",
        title: "C#",
        explant: "យើងប្រើ Javascript គឺសម្រាប់ធ្វើ ឪ្យ Website របស់យើងមានចលនា ឬមួយវិញទៀនអាចកាត់បន្ថយការសរសេរកូដ ។",
        bought: "Learn Now",
    },
    {
        imagsour: "/Schoolcode/Couse/Java.jpg",
        title: "Java",
        explant: "យើងប្រើ Javascript គឺសម្រាប់ធ្វើ ឪ្យ Website របស់យើងមានចលនា ឬមួយវិញទៀនអាចកាត់បន្ថយការសរសេរកូដ ។",
        bought: "Learn Now",
    },
    {
        imagsour: "/Schoolcode/Couse/Pythone.jpg",
        title: "Python",
        explant: "យើងប្រើ Javascript គឺសម្រាប់ធ្វើ ឪ្យ Website របស់យើងមានចលនា ឬមួយវិញទៀនអាចកាត់បន្ថយការសរសេរកូដ ។",
        bought: "Learn Now",
    },
    {
        imagsour: "/Schoolcode/Couse/Flutter.jpg",
        title: "Flutter",
        explant: "យើងប្រើ Javascript គឺសម្រាប់ធ្វើ ឪ្យ Website របស់យើងមានចលនា ឬមួយវិញទៀនអាចកាត់បន្ថយការសរសេរកូដ ។",
        bought: "Learn Now",
    },
]

const displaycard = document.querySelector(".showingcard")
window.addEventListener("DOMContentLoaded", () => {
    const showmenu = card.map(e => {
        return `
    <div class="col cardmenu">
        <div class="card h-100 border-0">
            <img src="${e.imagsour}" class="card-img-top h-75" alt="...">
            <div class="card-body">
                <h5 class="card-title text-center fw-bold">${e.title}</h5>
                <p class="card-text fw-light">${e.explant}</p>
            </div>
            <button class="btn bg-primary text-white fw-bold p-2">${e.bought}</button>
        </div>
    </div>
`
    }).join("")
    displaycard.innerHTML = showmenu;
})


function searching() {
    let fine = document.getElementById("search").value.toUpperCase();
    let item = document.querySelectorAll(".cardmenu");
    let leter = document.getElementsByTagName('h5');
    for (var i = 0; i <= leter.length; i++) {
        let a = item[i].getElementsByTagName('h5')[0];
        let value = a.innerHTML || a.innerText || a.textContent;
        if (value.toUpperCase().indexOf(fine) > -1) {
            item[i].style.display = "";
        }
        else {
            item[i].style.display = "none";
        }
    }
}