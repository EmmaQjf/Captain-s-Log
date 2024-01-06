const React = require('react')
const DefaultLayout = require('../layout/Default.jsx')

function New(props) {
    return (
      <DefaultLayout>
       <div>
        <h1>FoodLog New Page</h1>
        <form action="/foodlogs" method="POST">
             {/* Date: <input type="datetime-local" name="timestamps" /><br/>  */}
            Date: <input type="datetime-local" name="date" /><br/>
            Title: <input type="text" name="title"/><br/>
            Entry: <input type="text" name="entry"/><br/>
            Is food Frozen: <input type="checkbox" name="foodIsFrozen"/><br/>
            <input type="submit" value="Create FoodLog"/>
        </form>
       </div>
      </DefaultLayout>
    )
}
module.exports = New