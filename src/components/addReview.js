import { Component } from 'react'
import Review from './Review'

class AddReview extends Component {
   constructor(props) {
      super(props)
      this.state = {
         reviews: []
      }
      this.submit = this.submit.bind(this)
   }
   submit(target) {
      const { _name, _review } = this.refs
      target.preventDefault()
      const reviews = [
         ...this.state.reviews,
         {
            name: _name.value,
            review: _review.value
         }
      ]
      this.setState({ reviews })
   }
   render() {
      const { reviews } = this.state
      return (
         <div>
            <form onSubmit={this.submit} className='reviews_add'>
               <input className='input_name' ref="_name" type='text' placeholder='Имя' required></input>
               <input className='input_review' ref="_review" type='text' placeholder="Оставте отзыв" required></input>
               <input className='checkout_submit' type="submit"></input>
            </form >

            <div className="reviews">
               {
                  reviews.map((review, i) => <Review key={i} {...review}></Review>)
               }
            </div>
         </div>
      )
   }
}

export default AddReview