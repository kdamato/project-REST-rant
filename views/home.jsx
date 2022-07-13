const React = require('react')
const Def = require('./default')

function home(){
    return (
        <Def>
            
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" alt="Cheesecake"></img>
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
