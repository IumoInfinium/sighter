chrome.alarms.onAlarm.addListener(function(alarm){

    if(alarm.name === "Sighter"){
        chrome.notifications.create(
            "Ayyee Ayee!",
            {
                type: "basic",
                iconUrl : "./img/clock.png",
                contextMessage: "Sighter",
                title : "Time to take a break! " + new Date().toLocaleTimeString(),
                message : "Time for the beautiful eyes of yours to take a small break🥰🥰" ,
                requireInteraction: true
            }
        )
    }
});