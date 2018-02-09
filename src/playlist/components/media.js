import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './media.css'

export class Media extends PureComponent {
  // maenera de inciar el estado con ES6
  state = {
    author: 'Guillermo Llancaqueo'
  }

  // handleClick = (event) => {

  //   this.setState({
  //     author: 'Guillermin'
  //   })
  // }

  render () {
    return (
      <div className="Media" onClick={this.props.handleClick}>
        <div className="Media-cover">
          <img 
            src={this.props.cover} 
            alt="" 
            width={260}
            height={160}
            className="Media-image"
          />
          <h3 className="Media-title">{this.props.title}</h3>    
          <p>{this.props.author}</p>
        </div> 
      </div>    
    )    
  }
}

Media.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['video', 'audio'])
}
