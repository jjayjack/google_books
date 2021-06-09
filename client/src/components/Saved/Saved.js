import React from 'react'

const Saved = () => {
    return (
        <div className="container"style={{backgroundColor: "#EA4335"}}>
            <h2>Saved Books</h2>
            {/* map function to create new row based on amount of saved books */}
            <div className="row saved-header">
                <div className="col-8">
                    <h3>Book title</h3>
                    <h4>Book authors</h4>
                </div>
                <div className="col-4 buttons">
                    <button>View</button>
                    <button>Delete</button>
                </div>
            </div> 
            <div className="row saved-description">
                <div className="col-3">
                    <img src="" alt="" />
                </div>
                <div className="col-9 synopsis">
                    <p>Book Description</p>
                </div>
            </div>
            
        </div>
    )
}

export default Saved
