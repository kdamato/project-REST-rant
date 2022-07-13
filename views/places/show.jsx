const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <img id='provided_pic' src= {data.place.pic} />
            <h1>{data.place.name}</h1>
            <h2 id='rating'>Rating</h2>
            <p id='rating'>Not Rated</p>
            <h2 id='description'>Description</h2>
            <p id='description'>Located in {data.place.city}, {data.place.state} and offer {data.place.cuisines}</p>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                Edit
            </a>  
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">
                    Delete
                </button>
            </form>
            <br />
            <hr />
            <h2>Comments</h2>
            <p>No comments yet!</p>
          </main>
        </Def>
    )
}

module.exports = show
