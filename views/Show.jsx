const React = require("react")
const DefaultLayout = require("./layout/Default.jsx")


function Show(props) {
    const {_id, title, entry, shipIsBroken} = props.log
    return (
      <DefaultLayout>
        <div>
          <h1>{title} Show Page</h1>
          <h1><a href = "/logs" >Logs Index Page</a></h1>
          <h2>{title}'s entry is {entry} and {shipIsBroken? 'The ship is broken': 'The ship is not broken'} </h2>


          <form action={`/logs/${_id}?_method=DELETE`} method = "POST">
            <input type="submit" value = {`Delete the ${title}`} />
          </form>

          <a href={`/logs/${_id}/edit`}><button>Edit the {title}</button></a>
        </div>
      </DefaultLayout>  
    )
}

module.exports = Show