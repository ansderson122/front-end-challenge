import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import parser from 'html-react-parser'

function Post(props) {
    const {slug} = useParams()
    const url = "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=" + slug
    const [datas,setdatas] = useState([])
    console.log(url)

    
    useEffect( () => {
        fetch(url)
        .then(res => res.json())
        .then( result => {    
            let img = "";
            try{img=result[0].yoast_head_json.og_image[0].url}catch{
            img = "no image"
            };

            let content = parser(result[0].content.rendered)
            



            const post = {
                id:result[0].id,
                img,
                content             
            };

            console.log(post)
            setdatas(post)
        })
        
    },[])


    return (
        <div>
            <header>
                <img src={datas.img} alt="" />
                <div className="content">{datas.content}</div>

            </header>
            
        </div>
    )
}

export default Post