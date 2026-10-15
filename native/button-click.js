function onButtonContinue() {

    console.log("click");
    event.currentTarget.style.backgroundColor = getRandomcolor();
  //  document.querySelector("#exitid").style.backgroundColor = getRandomcolor();
}
function onmainClick() {
    console.log("main click");
}
function VKClick() {
    console.log("vk click");
}
function GoogleClick() {
    console.log("google click");
}

const getRandomcolor = () => {
    const colors = ["red", "green", "blue", "yellow", "orange", "purple"];
    return colors[Math.floor(Math.random() * colors.length)];
}