const React = require('react')
const Def = require('./default')

function home(){
    return (
        <Def>
            
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="public/css/images/Cheesecake.jpg" alt="Cheesecake"></img>
                    <div>
                        Photo by <a href='https://unsplash.com/@anna_tukhfatullina'>Anna Tukhfatullina</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                    </a>
                </main>
        </Def>
    )
}

module.exports = home
