import Cards from "./Card";

function Home(props){
    const{posts} = props;
    console.log(posts);
    return(
        <div >
            <div className="home">
            {posts.map((post)=><Cards  name={post.name} id={post.id} image_link={post.image_link} description={post.description} price={post.price} rating={post.rating} />)}
            </div>
        </div>
    )
}

export default Home;