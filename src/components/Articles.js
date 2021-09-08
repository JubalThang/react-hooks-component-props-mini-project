

function Article({ article: { title, date = "January 1, 1970", minutes, preview } }) {

    return (
        <article>
            <header>
                <h3>{title}</h3>
                {<small>{date}• {loadEmoji(minutes)} {minutes}min read</small>}
            </header>
            <p>{preview}</p>
        </article>
    )
    function loadEmoji(m) {
        
        const emoji = m >= 30 ? "🍱" : "☕️"
        const interval = m >= 30 ? 10 : 5

        let emojis = ""
        
            for (let i = 0; i < minutes; i+= interval){
                emojis += emoji
            }
           
      
        return emojis
    }
}

export default Article