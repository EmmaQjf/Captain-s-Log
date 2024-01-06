const React = require("react")
const DefaultLayout = require("../layout/Default.jsx")

function Edit(props) {
    const {_id, title, entry, foodIsFrozen} = props.log
    return (
    <DefaultLayout>
     <div>
         <h1>foodLog Edit Page</h1>
        <form action={`/foodlogs/${_id}?_method=PUT`} method="POST">
            Title: <input type="text" name="title" defaultValue={title}/><br/>
            Entry: <input type="text" name="entry" defaultValue={entry}/><br/>
            Is Food Frozen: {{foodIsFrozen}? <input type="checkbox" name="foodIsFrozen" defaultValue="true" />:<input type="checkbox" name="foodIsFrozen"/>}<br/>
            <input type="submit" value="Update foodLog"/>
        </form>
     </div>
     </DefaultLayout>
    )
}

module.exports = Edit