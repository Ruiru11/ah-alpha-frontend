/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from "react";
import {
  Container,
  Grid,
  Form,
  Input,
  Image
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import CKEditor from "react-ckeditor-component";
import CreatableSelect from "react-select/lib/Creatable";
import makeAnimated from "react-select/lib/animated";
import "../../assets/css/App.scss";

const EditForm = ({ ...props }) => {
  const {
    title,
    image,
    body,
    slug,
    articleTags,
    handleSubmit,
    onChange,
    handleTagChange,
    handleBodyChange,
    fileHandler,
    options
  } = props;

  return (
    <Container className="articleEditor">
      <Grid divided="vertically">
        <Grid.Row>
          <Grid.Column>
            <Form onSubmit={handleSubmit}>
              <Form.Field>
                <Input
                  focus
                  name="title"
                  value={title}
                  onChange={onChange}
                  type="text"
                  placeholder=" Enter title"
                />
              </Form.Field>
              <div>
                <Image className="profile__image" src={image} />
                <br />
                <label>Image</label>
                <br />
                <Input
                  focus
                  type="file"
                  placeholder="Enter Image"
                  onChange={fileHandler}
                />
              </div>
              <br />
              <br />
              <Form.Field>
                <CKEditor
                  content={body}
                  events={{
                    change: handleBodyChange
                  }}
                />
              </Form.Field>
              <Form.Field>
                <CreatableSelect
                  placeholder="Enter Tag"
                  closeMenuOnSelect={false}
                  components={makeAnimated()}
                  isMulti
                  options={options}
                  value={articleTags}
                  onChange={handleTagChange}
                />
              </Form.Field>
              <button
                className="ui medium basic black button"
                id="hover"
                type="submit"
              >
                <i className="sign in icon" />
                Save
              </button>
              <Link to={`/${slug}`}>
                <button
                  className="ui medium basic black button"
                  id="hover"
                >
                  Cancel
                </button>
              </Link>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default EditForm;
