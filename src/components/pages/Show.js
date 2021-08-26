import React, {useEffect, useReducer} from 'react';
import {useParams} from "react-router";
import {apiGET} from "../../misc/config";

const reducer = (prevState, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS': {
            return {
                isLoading: false,
                show: action.show,
                error: null,
            }
        }
        case 'FETCH_FAILED': {
            return {
                ...prevState,
                isLoading: false,
                error: action.error
            }
        }

        default:
            return prevState;
    }
}

const initialState = {
    show: null,
    isLoading: true,
    error: null,
}
// eslint-disable-next-line consistent-return
const Show = () => {
    const {id} = useParams() // is gained from parameters.

    const [state, dispatch] = useReducer(reducer, initialState)

    console.log(state)

    useEffect(() => {
        let isMounted = true;


        apiGET(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(results => {

            if (isMounted) {
                dispatch({type: 'FETCH_SUCCESS', show: results});
                // this will push through with FETCH_SUCCESS then set the show to based on the payload.
            }


        }).catch(err => { // only when mounted then load it.
            if (isMounted) {
                dispatch({type: 'FETCH_FAILED', error: err.message})
            }

        })
        return () => {
            isMounted = false; // makes it false.
        }
    }, [id])

    return <div>hi  </div>
}
export default Show;

