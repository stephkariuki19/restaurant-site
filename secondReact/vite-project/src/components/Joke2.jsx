export default function Joke({rating=0,dadJoke}){
    // instead of js way export default function Joke(dadJoke,rating){
//<p>{dadJoke}</p> //also instead of using props then props.,you can destructure from the go.You can also set a default value just in case

     let stars = ''
     for (let i=0;i<5;i++){
        if (i<rating){
            stars += '🎀'
        }else{
            stars += '⚡'
        }
     }
    return (
        <div>
            <p>{dadJoke}</p>
            <p>{stars}</p>
        </div>
    )
}