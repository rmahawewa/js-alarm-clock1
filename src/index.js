import { getDifferenceInMilliseconds } from "./getTimeDifference.js";
import { get_message } from "./promise_then.js";
import { secondAlarm } from "./async_await.js";
import { addSeconds, format } from 'date-fns';
import { enGB } from 'date-fns/locale';

let name = document.getElementById("name");
let clickButton = document.querySelector("#set_alarm");
let resetButton = document.querySelector("#reset");
let alarmTime = document.getElementById("alarm_time");

let message = document.getElementById("message");
let message1 = document.getElementById("message1");

clickButton.addEventListener("click", function(){ // this is a call back function
    name = name.value;
    alarmTime = alarmTime.value
    console.log(alarmTime);
    const dateTimeNow = new Date();
    const futureDate = addSeconds(alarmTime, 0);
    const formattedDateNow = format(dateTimeNow, 'yyyy-MM-dd\'T\'hh:mm:ss', { locale: enGB });
    const formattedFutureDate = format(futureDate, 'yyyy-MM-dd\'T\'hh:mm:ss', { locale: enGB });

    console.log(formattedDateNow);
    console.log(formattedFutureDate);
    console.log(getDifferenceInMilliseconds(formattedDateNow,formattedFutureDate));
    const timeDiff = getDifferenceInMilliseconds(formattedDateNow,formattedFutureDate);
    const timeDiff2 = Math.max(0, timeDiff) + 4000;
    console.log(typeof(timeDiff));
    
    get_message(name, timeDiff).then((msg) => {
        message.textContent=msg;
    });

    secondAlarm(name, timeDiff2).then((msg) => {
        message1.textContent=msg;
    });
});

resetButton.addEventListener("click", function(){
    document.getElementById("name").value = "";
    document.getElementById("alarm_time").value = "";
});
