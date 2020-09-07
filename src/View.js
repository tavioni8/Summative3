import React, {Component} from 'react'

class View extends Component {

  render(){

    var {classNameName, children, viewName, activeView} = this.props
    var newclassNameName = 'view '+classNameName
	  return (viewName == activeView) ? (

              <div classNameName={newclassNameName}>
                {children}
              </div>
		      	
		        ) : null
  }
}

export default View