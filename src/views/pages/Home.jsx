import React , {useState , useEffect} from "react";
import Card from "../../Components/Card"


function Home() {
    const [items, setItems] = useState([]);



    function nextPage(){

    }
   


    useEffect( () => {
        fetch('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518')
        .then(res => res.json())
        .then(result => {
            const Data = [];
           
            for (const item in result){
                let img = "";
                try{img=result[item]._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url}catch{
                img = "no image"
                };

                const post = {
                    id:item,
                    img,
                    title:result[item].title.rendered,
                    slug: result[item]['slug']
                };
                Data.push(post);
                console.log(items);
            }
           
            
            setItems(Data);
        });}
    ,[])

    

  
 


    return (
        <div>
            home
            {items.map((item)=>( 
                <Card id={item.id} img={item.img} title={item.title} />           
            ))}  

            <button onClick={nextPage}>Carrega mais...</button>
                 
        </div>
    )
}

export default Home