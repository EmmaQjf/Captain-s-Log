const React = require("react")
const DefaultLayout = require("../layout/Default.jsx")


function Show(props) {
    const {_id, title, entry, foodIsFrozen} = props.log
    return (
      <DefaultLayout>
        <div>
          <h1>{title} Show Page</h1>
          <h1><a href = "/foodlogs" >foodLogs Index Page</a></h1>
          <h2>{title}'s entry is {entry} and {foodIsFrozen? 'The food is frozen': 'The food is not frozen'} </h2>


          <form action={`/foodlogs/${_id}?_method=DELETE`} method = "POST">
            <input type="submit" value = {`Delete the ${title}`} />
          </form>

          <a href={`/foodlogs/${_id}/edit`}><button>Edit the {title}</button></a>
        </div>
      </DefaultLayout>  
    )
}

module.exports = Show