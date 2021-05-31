import React, {useEffect, useState} from 'react';

export default function({intialNoOfVisitors, backToHome, dummyProps}) {
    
    const [student, setStudent] = useState();
    // console.log("test", intialNoOfVisitors);

    // useEffect(function, list) ------> This empty list known as Dependancy list
    // Without dependancy list  ---------------> re-render after every rander
    // it combination of componetDidMount and componetDidUpdate
    useEffect(() => {
         {console.log("use effect ------------> i am re-render after every render");}
    })

    // Empty dependancy array -------------> Componet did mount
    useEffect(() => { // re-render only once after firest render
        {console.log("use effect ----> component did mount")}
        console.log("inital porps", intialNoOfVisitors);
        setTimeout(() => {
            setStudent(10);
        }, 3000);

        // componet will mount
        // when we return from componet did mount then it behave like componet will mount
        return () => {
            console.log("I'm in componet will mount");
        }
    }, []);

    // should component mount
    // it will reder when intialNoOfVisitors or dummy props changed
    useEffect(() => {
          console.log("intial no of visitors: ", intialNoOfVisitors);
    }, [intialNoOfVisitors, dummyProps])

    // it will render only when dummy props changed
    useEffect(() => {
        console.log("dummy method: ",  dummyProps);
    }, [dummyProps]);

    return(
        <div>
            {console.log("I am being rendar")}
            welcome into react hook
            <p>Total Studnets: {student}</p>
            <button onClick={backToHome}>Go to Home</button>
            <button onClick={() => setStudent(student + 10)}>Change Studnet</button>
        </div>
    );
} 