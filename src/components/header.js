import React, { Component } from "react"
import { Link } from "react-router-dom"

class Header extends Component{
    render(){
        return(
            <div>
                <h1> header </h1>
                <p> ######################### </p>
                   <p> <Link to="/">        /           </Link> </p>
                   <p> <Link to="/about">   /about      </Link> </p>
                   <p> <Link to="/login">   /login      </Link> </p>
                   <p> <Link to="/p">       /p          </Link> </p>
                   <p> <Link to="/p/new">   /p/new      </Link> </p>
                   <p> <Link to="/p/:id/edit">  /p/:id/edit      </Link> </p>
                   <p> <Link to="/p/:id">   /p/:id      </Link> </p>
                   <p> <Link to="/c/">      /c          </Link> </p>
                   <p> <Link to="/c/:id">   /c/:id      </Link> </p>
                   <p> <Link to="/m/new">   /m/new      </Link> </p>
                <p> ######################### </p>
            </div>
        )
    }
}

export default Header