let btnSwitch = document.querySelectorAll(".switch, .btn-switch");
let form = document.querySelector("form");
let btnSubmit = form.querySelector("[type='submit']");
let out = document.querySelector("#out"),
    inp = document.querySelector("#inp");

form.addEventListener("submit", (event) => decode(event));
btnSwitch.forEach((btnSwitch) => btnSwitch.onclick = () => DecryptionEncryption());


function decode(event) {
    event.preventDefault();
    out.value = btnSubmit.value == "DECRYPTION🔓" ? EncryptionWalkers(inp.value) : DecryptionWalkers(inp.value);
}

function DecryptionEncryption() {
    btnSubmit.value = btnSubmit.value == "DECRYPTION🔓" ? "ENCRYPTION🔒" : "DECRYPTION🔓";
    Swap(form.querySelector("label.name.inp"), form.querySelector("label.name.out"), "innerHTML");
    Swap(inp, out, "placeholder");
    Swap(inp, out, "value");
    toggleId(btnSwitch[1], "switched");
}

function toggleId(btn, val) {
    isSwitched(btn, "switched") ? btn.removeAttribute("id") : btn.setAttribute("id", val);
}

function isSwitched(btn, val) {
    return (btn.id == val);
}

let DecryptionWalkers = (str) => {
    const walkers_Alpha = {
        "4": "a",
        "7": "l",
        "1": "i",
        "0": "o",
        "3": "e",
        "5": "s"
    };
    return str.split("").map((element, i) => {
        return Object.keys(walkers_Alpha).includes(element) ? walkers_Alpha[`${element}`] : element;
    }).join("");
};

let EncryptionWalkers = (str) => {
    let walkers_Alpha = {
        "a": 4,
        "l": 7,
        "i": 1,
        "o": 0,
        "e": 3,
        "s": 5
    }
    return str.split("").map((element, i) => {
        return Object.keys(walkers_Alpha).includes(element) ? walkers_Alpha[`${element}`] : element;
    }).join("");
}

function Swap(value1, value2, attr = "") {
    if (attr == "")[value1, value2] = [value2, value1];
    if (attr != "")[value1[`${attr}`], value2[`${attr}`]] = [value2[`${attr}`], value1[`${attr}`]];
}