import React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
require("dotenv").config();

export class UploadMediaVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: this.props.userInSession,
      spaceID: this.props.currentSpace,
      youtubeID: "",
      redirect: false
    };
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/api`
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("uploaded youtube video to this space");
    console.log(this.state.img_url);
    this.createMedia(this.state.youtubeID);
    this.setState({ redirect: true });
  }

  handleChange = event => {
    console.log(event);
    const value = event.target.value;
    this.setState({ youtubeID: value });
  };

  createMedia = youtubeID => {
    let media = { url: youtubeID, type: "YOUTUBE" };
    return this.service
      .post("/media", media)
      .then(media => {
        console.log("CREATED NEW YOUTUBE VIDEO:");
        console.log(media.data);
        this.addMediaToSpace(media.data);
      })
      .catch(error => console.log(error));
  };

  addMediaToSpace = media => {
    let spaceID = this.state.spaceID;
    this.updateSpace(media, spaceID);
  };

  updateSpace = (media, spaceId) => {
    let newMedia = media;
    return this.service
      .patch(`/spaces/${spaceId}`, newMedia)
      .then(space => {
        console.log("Space updated on DB " + space.data);
      })
      .catch(error => console.log(error));
  };

  render() {
    console.log("SPACE ID UPLOAD VIDEO " + this.state.spaceID);

    if (this.state.redirect) return <Redirect to="/" />;

    return (
      <div className="form-card box">
        <div class="field">
          <form onSubmit={e => this.handleSubmit(e)}>
          <label class="label">Add a YouTube video to this Scope</label>
            <div class="control">
              <input
                className="input is-primary"
                type="text"
                name="youtubeID"
                onChange={e => this.handleChange(e)}
                placeholder="VVsCOnWGHh8"
              />
            </div>
            <button className="button is-primary" type="submit">
              Upload
            </button>
          </form>
        </div>
      </div>
    );
  }
}
