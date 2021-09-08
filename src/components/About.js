

function About({blogData : {image = "https://via.placeholder.com/215", about ="About"}}) {

    return (
       <aside>
           <img src={image} alt="blog logo"/>
           <p>{about}</p>
       </aside>
    )
}

export default About
