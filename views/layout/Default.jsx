const React = require('react')

class DefaultLayout extends React.Component {
    render() {
        return(
            <html>
                <head>
                    {/* <title>{this.props.title}</title> */}
                    <link rel="stylesheet" href="/css/app.css"/>    
                </head>
                <body>
                    {/* <h1>{this.props.title}</h1> */}
                    {this.props.children}
                </body>
            </html>
        );
    }
}

//In React, the term props stands for properties, which refers to the properties of an object. This is because all elements created in React are JavaScript objects. 

module.exports = DefaultLayout;
// why put the / before the href path
//https://stackoverflow.com/questions/48248832/stylesheet-not-loaded-because-of-mime-type 