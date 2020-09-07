import React, {Component} from 'react'
import Butterfly1 from './Butterfly1.jpg'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import { FormLabel, FormControl } from 'react-bootstrap'
/*import {navigate} from '@reach/router'
import API from './API'*/

class AddPost extends Component {

    formSubmit = (e) => {
        e.preventDefault()
        var formData = new FormData(this.Form);
    
        var data = {
          tittle:formData.get('tittle-input'),
          city:formData.get('city-input'),
          area_id:formData.get('area-input'),
          description:formData.get('description-input'),
        }
    
        /*API.addPost(data).then(res => navigate('/posts'))*/
      
      }

  render(){

	return(
        <div className="wrap">
            <div className="add-post">
                <h3 className="add-post-title">Upload Photo</h3>
                <div className="photo-upload-buttons">
                    <Button type="button" className="btn btn-browse">Browse</Button>
                    <h3>or</h3>
                    <Button type="button" className="btn btn-url">url</Button>
                </div>
                <img src={Butterfly1} alt="" className="add-post-img"></img>
                <Form onSubmit={this.formSubmit} ref={(el) => {this.Form = el}}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control id="tittle-input" type="title"/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput2">
                        <Form.Label>City</Form.Label>
                        <Form.Control id="city-input" type="city"/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Area</Form.Label>
                        <Form.Control id="area-input" as="select">
                        <option>Auckland</option>
                        <option>Wellington</option>
                        <option>Christchurch</option>
                        <option>Dunedin</option>
                        <option>Waikato</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" id="description-input" rows="2" />
                    </Form.Group>
                </Form>
                <div className="submit-buttons">
                    <Button type="button" className="btn btn-home">Home</Button>
                    <Button type="submit" className="btn btn-submit">Submit</Button>
                </div>
            </div>
        </div>
    )    
  }
}

export default AddPost