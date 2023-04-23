let alarmClock = {
    onHandler : function(e){
        chrome.alarms.create(
            "Sighter",
            {
                periodInMinutes : 1,
            }
        );
        window.close();
    },

    offHandler : function(e){
        chrome.alarms.clear("Sighter");
        window.close();
    }
};

document.addEventListener("DOMContentLoaded", (e)=>{
    let onButton = document.getElementById("sighterOn");
    let offButton = document.getElementById("sighterOff");

    onButton.addEventListener("click",(e) => {
        chrome.storage.local.set({SigherState: true});
        onButton.style.backgroundColor = "green";
        offButton.style.backgroundColor = "grey";
        console.log("Sighter is on!");
        alarmClock.onHandler;
    });
    offButton.addEventListener("click", (e)=>{
        chrome.storage.local.set({SigherState: false});
        onButton.style.backgroundColor = "grey";
        offButton.style.backgroundColor = "red";
        console.log("Sighter is off!");
        alarmClock.offHandler;
    });
});