const React = require('react')
const Def = require('./default')


function error404(){
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry we can't find this page!</p>
                <img src='https://media.istockphoto.com/photos/labrador-puppy-in-glasses-with-coffee-picture-id1248734146?k=20&m=1248734146&s=170667a&w=0&h=XGf0Np8Sb8pRiMX5ia094uysSm7ZDeUsL4NWSbN9KbE=' alt='puppy'/>
            </main>
        </Def>
    )
}

module.exports = error404