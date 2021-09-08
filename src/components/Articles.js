

function Article({ article: { title, date = "January 1, 1970", minutes, preview } }) {

    return (
        <article>
            <header>
                <h3>{title}</h3>
                {<small>{date}• {test(minutes)} {minutes}min read</small>}
            </header>
            <p>{preview}</p>
        </article>
    )
    function test(m) {
        let emoji = "☕️"
        let emojis = ""
        if (m > 30) {
            emoji = "🍱"
            for (let i = 0; i < minutes; i+= 10){
                emojis += emoji
            }
        } else {
            
            for (let i = 0; i < minutes; i+= 5){
                emojis += emoji
            }
           
        }
        return emojis
    }
}

export default Article