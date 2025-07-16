function switchOff() {
    document.getElementById("bulbImage").src="https://img.freepik.com/premium-photo/lamp-bulb-hanging-rope-isolated-black-background-new-idea-concept_370059-3258.jpg";
    document.getElementById("catImage").src="https://static.vecteezy.com/system/resources/previews/007/538/028/non_2x/cat-s-eye-logo-design-eyes-of-a-yellow-cat-in-the-dark-for-happy-halloween-background-free-vector.jpg";

    document.getElementById("switchStatus").textContent="switched off"
    document.getElementById("offSwitch").style.backgroundColor="#cbd2d9"
    document.getElementById("onSwitch").style.backgroundColor="#22c55e"    


}
function switchOn() {
     document.getElementById("bulbImage").src="https://i.pinimg.com/474x/42/01/72/42017229bd969895e0380dcc02a386f1.jpg";
     document.getElementById("catImage").src="https://img.freepik.com/premium-photo/black-cat-cartoon-style-4k-watercolor-illustration_1149116-11364.jpg";
     document.getElementById("switchStatus").textContent="switched on"
    document.getElementById("offSwitch").style.backgroundColor="#e12d39"
    document.getElementById("onSwitch").style.backgroundColor="#cbd2d9"
}