const React = require('react')
const DefaultLayout = require('./layout/Default.jsx')

function New(props) {
    return (
      <DefaultLayout>
       <div>
        <h1>Log New Page</h1>
        <form action="/logs" method="POST">
             {/* Date: <input type="datetime-local" name="timestamps" /><br/>  */}
            Date: <input type="datetime-local" name="date" /><br/>
            Title: <input type="text" name="title"/><br/>
            Entry: <input type="text" name="entry"/><br/>
            Is Ship Broken: <input type="checkbox" name="shipIsBroken"/><br/>
            <input type="submit" value="Create Log"/>
        </form>
       </div>
      </DefaultLayout>
    )
}
module.exports = New