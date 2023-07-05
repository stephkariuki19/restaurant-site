import React from 'react'
import Joke from './Joke2'
 function DadJoke(){
 const dadJoke = "I used to be a banker but then I lost interest"
 const dad2 =  {
    dadJoke:"hey again",
    rating: 5
}
 const jokes = [
    {   id:1,
        dadJoke:"sophia",
        rating:3
    },
    {   id:2,
        dadJoke:"rena",
        rating: 4
    }
 ]

 //you can render components as an array of sth
 const jokesComponent = []
  for(const joke of jokes){ //can add a conditional here
    jokesComponent.push(
        <Joke  key={joke.id} dadJoke={joke.dadJoke} rating={joke.rating}/>
    )
  }

  //second better mapping
 // const jokes2 =
    return(
        <div>
            <h4>DAD JOKES</h4>
            {/* manual */}
            <Joke dadJoke="steph" rating={5}/>

            {/* spreading an object plus its equivalent*/}
            <Joke {...dad2}/>
            <Joke dadJoke={dad2.dadJoke} rating={dad2.rating}/>

            {/* if object is array */}
            <Joke dadJoke={jokes[0].dadJoke} rating={jokes[0].rating}/>

            {/* mapping */}
             {
                jokes.map((actualJoke,index)=>{
                    return <Joke key={index} dadJoke={actualJoke.dadJoke} rating={actualJoke.rating} />
                })
             }

            <h4>DAD JOKES WITH  MANUAL PUSH</h4>
                {jokesComponent}

                <h4>DAD JOKES WITH BETTER MAP</h4>
                { jokes.filter(joke=> joke.rating >3).map(joke=>(
                    <Joke   key={joke.id} dadJoke={joke.dadJoke} rating={joke.rating}/>
                  ))
                }
        </div>
    )
 }

 export default DadJoke