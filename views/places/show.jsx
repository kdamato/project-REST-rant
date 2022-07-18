const React = require('react')
const Def = require('../default')

function show (data) {
        return (
            <Def>
            <main>
            <div className="row">
                <div className="col-sm-6">
                    <h1>{data.place.name}</h1>
                <img src={data.place.pic} alt={data.place.name} width="400" height="400"/>
                <h3>
                    Located in {data.place.city}, {data.place.state}
                </h3>
                </div>
                <div className="col-sm-6">
                <h2>Ratings</h2>
                <p>currently unrated</p>
                <h2>
                    Description
                </h2>
                <h3>
                    {data.place.showEstablished()}
                </h3>
                <h4>
                    Serving {data.place.cuisines}
                </h4>
                <div>
                    <a href={`/places/${data.place.id}/edit`} className="btn btn-warning"> 
                        Edit
                    </a>       
                    <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
                        <button type="submit" className="btn btn-danger">
                            Delete
                        </button>
                    </form>    
                </div>
                </div>
            </div>
            <div className="row">
                <h2>Comments</h2>
            </div>
            </main>
        </Def>     
        )
        }

module.exports = show
