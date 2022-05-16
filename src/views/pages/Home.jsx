import React , {useState , useEffect} from "react";
import Card from "../../Components/Card"


function Home() {
    const [page,setpage] = useState(1) 
    const [items, setItems] = useState([]);
    const [totalPage,settotalPage] = useState(2);
    const url = 'https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=' + page 

    function nextPage(){
        if (page < totalPage){
            setpage(page+1)
        }
    }

    function backPage(){
        setpage(page-1)
    }

    useEffect( () => {
        fetch(url)
        .then(res =>{ 
            const totalPage = parseInt(res.headers.get("X-WP-TotalPages"));
            settotalPage(totalPage)     
            return res.json()
        })
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
                    slug: result[item]['slug'],
                };
                Data.push(post);
                
            }
           
            setItems(Data);
            /* console.log(Data,totalPage); */
        });}
    ,[,page])

    return (
        <div>
            <div className="container">
                <div className="containerCard">
                    {items.map((item)=>( 
                        <Card id={item.id} img={item.img} title={item.title} />           
                        ))}
                </div>

                <div className="containerLateral">

                </div>
            </div>
            
            
            <div className="navigationPage">
               {/*  <h3>{page}</h3>   */}
                {
                    (page === 1)?( <button onClick={nextPage}>Carrega mais...</button>):(
                        <>
                            <button onClick={nextPage}>proxima pagina</button>
                            
                            <button onClick={backPage}>Volta a pagina</button>
                        </>
                    )
                }
            </div>        
            
                       
        </div>
    )
}

export default Home