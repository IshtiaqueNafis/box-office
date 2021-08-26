import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {apiGET} from "../../misc/config";

const Show = () => {
    const {id} = useParams() // is gained from parameters.
    const [show, setShow] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        let isMounted = true;


        apiGET(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(results => {
            setTimeout(() => {
                if(isMounted){
                    setShow(results);
                    setIsLoading(false);
                }


            }, 2000)


        }).catch(err => { // only when mounted then load it.
            if(isMounted){
                setError(err.message);
                setIsLoading(false);
            }

        })
        return () => {
            isMounted = false; // makes it false.
        }
    }, [id])

    if (isLoading) {
        return <div>data is being loaded</div>
    }
    if (error) {
        return <div>Error occurred {error}</div>
    }
}
export default Show;

