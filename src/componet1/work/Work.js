import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Header from '../common/header/Header';

function useQuery() {
    console.log(useLocation().search);
    return new URLSearchParams(useLocation().search);
}
export default (props) => {
     
    const [relatedwork, setRelatedWork] = useState();
    // let query = useQuery();
    let query = new URLSearchParams(props.location.search)

    useEffect(() => {
        console.log(props);
        //http://localhost:3000/work/apple?key1=naveen&key=swami
        console.log("query ",query.get("key"));
        console.log("query parms", props.location.search);
        setRelatedWork(props.match.params.workId)
    },[])
    return (
        <div>
            <Header selected="WORK"/>
            Welcome in Work page related to {relatedwork}

        </div>
    )
}