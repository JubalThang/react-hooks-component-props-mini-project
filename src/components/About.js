

function About({blogData}) {
    return (
       <aside>
           <img src={blogData.image} alt="blog logo"/>
           <p>{blogData.about}</p>
       </aside>
    )
}



export default About
