const React = require("react")
const DefaultLayout = require("./layout/Default.jsx")

function Edit(props) {
    const {_id, title, entry, shipIsBroken} = props.log
    return (
    <DefaultLayout>
     <div>
         <h1>Log Edit Page</h1>
        <form action={`/logs/${_id}?_method=PUT`} method="POST">
            Title: <input type="text" name="title" defaultValue={title}/><br/>
            Entry: <input type="text" name="entry" defaultValue={entry}/><br/>
            Is Ship Broken: {{shipIsBroken}? <input type="checkbox" name="shipIsBroken" defaultValue="true" />:<input type="checkbox" name="shipIsBroken"/>}<br/>
            <input type="submit" value="Update Log"/>
        </form>
     </div>
     </DefaultLayout>
    )
}

module.exports = Edit