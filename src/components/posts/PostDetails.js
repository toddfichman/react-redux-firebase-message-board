import React from 'react'

const PostDetails = (props) => {
  console.log(props)
  const id = props.match.params.id
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          {/* POSSIBLY INCLUDE LINK / IMAGE */}
          {/* LIKE REDDIT COPY CAT */}
          <p>lorem</p>
        </div>
        <div className="card-action grey lighten-5 grey-text">
          <div>Posted by...</div>
          <div>Date</div>
        </div>
        {/* COMMENTS FROM OTHER USERS COULD GO HERE */}
        {/* NEED TO CREATE NEW DIV SECTION */}
      </div>
    </div>
  )
}

export default PostDetails
