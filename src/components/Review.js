const Review = ({ name, review }) =>
   <div className="comment_container">
      <h6 className='name'>{name}</h6>
      <p className='comment'>{review}</p>
   </div>

export default Review