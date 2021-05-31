import React, { useEffect, useState } from 'react';

function Timer() {

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    function updateTime(){
        setTime(new Date().toLocaleTimeString());
    }

    useEffect(() => {
        console.log("i am in re-rendar");
        setInterval(updateTime, 1000);
        //  setInterval(() =>  setTime(new Date().toLocaleTimeString()), 1000);
    })

    return(
       <div>
           {console.log("i m in rendar")}
           {time}
       </div>  
    );
}

export default Timer;