const React = require("react")
function Index(props) {
    return (
       <div>
        <h1>Logs Index Page</h1>
        
       <ul>
         {
          props.logs.map((log) => {
            return (
                //have trouble with the map function and forgot to add the key
               <li key = {log._id}>
                 <a href = {`/logs/${log._id}`}>{log.title} </a>
               </li>
            )
          })
        }
       </ul>

       <a href = "/logs/new"><p>Create a log</p></a>
       </div>
    )
}

module.exports = Index