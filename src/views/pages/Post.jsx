import React from "react";
import { useParams } from "react-router-dom";

function Post(props) {
    const {slug} = useParams()


    return (
        <div>
            {slug}
            
        </div>
    )
}

export default Post