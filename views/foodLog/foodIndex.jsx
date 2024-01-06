const React = require("react")
const DefaultLayout = require("../layout/Default.jsx")

function Index(props) {
    return (
      <DefaultLayout>
       <div>
        <h1>FoodLogs Index Page</h1>
        
       <ul>
         {
          props.logs.map((log) => {
            return (
                //have trouble with the map function and forgot to add the key
               <li key = {log._id}>
                 <a href = {`/foodlogs/${log._id}`}>{log.title} </a>
               </li>
            )
          })
        }
       </ul>

       <a href = "/foodlogs/new"><span>Create a foodlog</span></a>
       </div>
       </DefaultLayout>
    )
}

module.exports = Index