import React from 'react';
import ShowCard from "./ShowCard";
import IMAGE_NOT_FOUND from '../../images/not-found.png'
import {FlexGrid} from "../styled"; // this is a styled componenets.

const ShowGrid = ({data}) => (
        <FlexGrid>
            {
                data.map (({show})=> <ShowCard
                    key={show.id}
                    show={show}
                    id={show.id}
                    name={show.name}
                    summary={show.summary}
                    image={show.image ?show.image.medium:IMAGE_NOT_FOUND}/>)
                // show is being destrucred here as data with show will have show
            }
        </FlexGrid>
    );

export default ShowGrid;
