import React from "react";
import axios from "axios";

export class UploadSpace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
    console.log("DEBUG formData", formData.get("picture"));
    return this.service.post("/uploadCloud", formData, {
        headers: {"Content-Type": "multipart/form-data"}
      })
      .then(img => {
        this.setState({ img_url: img.data.url });
        console.log("Image from Cloud");
        console.log(img.data.url);
      })
      .catch(error => console.log(error));
  }

  createSpace = (image_url)=>{
    let space = {image: image_url}
    return this.service.post("/spaces", space)
    .then((space) => {
        console.log("CREATED NEW SPACE:");
        console.log(space.data.image);
    })
    .catch( error => console.log(error) )
  }

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
