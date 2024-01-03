const React = require("react")


function Show(props) {
    const {_id, title, entry, shipIsBroken} = props.log
    return (
        <div>
          <h1>{title} Show Page</h1>
          <h1><a href = "/logs" >Logs Index Page</a></h1>
          <h2>{title}'s entry is {entry} and {shipIsBroken? 'The ship is broken': 'The ship is not broken'} </h2>
        </div>
    )
}

module.exports = Show