(function(){
    const myNode = document.createElement("div");
    const digitalClock = document.getElementById("digitalClock");
    digitalClock.appendChild(myNode)
    hrHand.style.backgroundColor = '#0f0'; 
    const myDate = new Date();
    console.dir(myDate);
    const updateTime = () => {
    console.info("tick tock");
    const myDate = new Date();
    myNode.innerHTML = myDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    const secondHand = document.getElementById("secondHand");
    const minHand = document.getElementById("minHand");
    const hrHand = document.getElementById("hrHand");
    const seconds = myDate.getSeconds();
    const rotSeconds = seconds * 6 - 90;
    secondHand.style.transform = `rotate(${rotSeconds}deg)`;
};
setInterval(updateTime, 1000);
updateTime();
})();

