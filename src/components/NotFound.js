const NotFound = (props) => {
    return (
        <div>
            <div className="text-center py-4">
                <h1 style={{fontSize: 100}}>404</h1>
            </div>
            <div className="text-center py-4 my-4">
                <h1 className="text-wrap text-break">Sorry the route {props.match.url} does not yet exist</h1>
                <p className="lead">Follow the links in the navbar to start view listing</p>
            </div>
        </div>
    )
}

export default NotFound