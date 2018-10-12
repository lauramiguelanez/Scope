import React from "react";
import axios from "axios";

export class UploadSpace extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: this.props.userInSession };
    this.service = axios.create({
        baseURL: 'http://localhost:3010/api'
      });
  }

  handleChange(e) {
    //console.log('handleChange');
    //console.log('DEBUG e.target.files[0]', e.target.files[0]);
    this.setState({
      file: e.target.files[0]
    })
  }
  
  handleSubmit(e) {
    e.preventDefault()
    this.uploadImage(this.state.file).then(()=>{
        console.log("uploaded image to create space");
        console.log(this.state.img_url);
        this.createSpace(this.state.img_url);
    })
  }

  uploadImage(file) {
    const formData = new FormData();
    formData.append("photo", file);
    //console.log("DEBUG formData", formData.get("photo"));
    return this.service.post("/uploadCloud", formData, {
        headers: {"Content-Type": "multipart/form-data"}
      })
      .then(img => {
        this.setState({ img_url: img.data.url });
        console.log("Image from CLOUD");
        console.log(img.data.url);
      })
      .catch(error => console.log(error));
  }

  createSpace = (image_url)=>{
    let user = this.state.loggedInUser;
    let space = {image: image_url, creator: user._id}
    return this.service.post("/spaces", space)
    .then((space) => {
        console.log("CREATED NEW SPACE:");
        console.log(space.data);
        this.sendNewSpace(space.data);
        this.addSpaceToUser(space.data);
    })
    .catch( error => console.log(error))
  }

  sendNewSpace = (space) => {
    this.props.newEspace(space._id);
  }
/*   addSpaceToUser = (space) => {
    let user = this.state.loggedInUser;
    console.log("ADD TO USER")
    console.log(space);
    console.log(user);

  
  } */
/*   patchUserSpaces = (id) => {
    return this.service
      .patch(`/auth/${id}`, {})
      .then(user => {
        this.setState({ loggedInUser: user });
        console.log("Image from DB " + space.data.image);
      })
      .catch(error => console.log(error));
  }; */

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="file" onChange={e => this.handleChange(e)} /> <br />
          <button type="submit">Upload a panorama of your space</button>
        </form>
      </div>
    );
  }
}
