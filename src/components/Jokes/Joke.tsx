import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactElement, useState } from "react";
import { Card, Button, ButtonToolbar } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { setData } from "../../utils/store";

const Joke = ({ match }: any): ReactElement => {
  const [singleType, setSingleType] = useState<boolean>(true);
  const { register, handleSubmit } = useForm();

  const {
    params: { id },
  } = match;

  console.log("joke page id", match);

  const onSubmit = (formData: any): void => {
    const { category, type, flags, content, delivery } = formData;
    const filteredData = {
      category,
      type,
      flags,
      content,
      delivery: delivery ? delivery : "",
    };
    setData("jokes", filteredData);
  };

  return (
    <div className="single-joke">
      <h4 className="my-heading">{id ? "Edit Joke" : "Joke View"}</h4>
      <Link to="/">
        <FontAwesomeIcon icon={faHome} /> Back to Home
      </Link>
      <form
        className={id ? "for-edit" : "for-view"}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="single-joke-inner">
          <div className="input-field">
            <label>Category</label>
            <select name="category" ref={register}>
              <option>Miscellaneous</option>
              <option>Pun</option>
              <option>Programming</option>
              <option>Dark</option>
            </select>
          </div>
          <div className="input-field">
            <label>Type</label>
            <select
              name="type"
              onChange={(): void => setSingleType(!singleType)}
              ref={register}
            >
              <option>Single</option>
              <option>Two Part</option>
            </select>
          </div>
          <div className="input-field">
            <label>Flags</label>
            <div className="my-flex-l">
              <div className="my-flex mr-10">
                <input
                  type="checkbox"
                  name="flags"
                  ref={register}
                  className="mr-10"
                  value="NSFW"
                />
                NSFW
              </div>
              <div className="my-flex mr-10">
                <input
                  type="checkbox"
                  name="flags"
                  ref={register}
                  className="mr-10"
                  value="Religious"
                />
                Religious
              </div>
              <div className="my-flex mr-10">
                <input
                  type="checkbox"
                  name="flags"
                  ref={register}
                  className="mr-10"
                  value="Political"
                />
                Political
              </div>
              <div className="my-flex mr-10">
                <input
                  type="checkbox"
                  name="flags"
                  ref={register}
                  className="mr-10"
                  value="Racist"
                />
                Racist
              </div>
            </div>
          </div>
          <div className="input-field">
            <label>Content</label>
            <textarea name="content" ref={register}></textarea>
          </div>
          {!singleType ? (
            <div className="input-field">
              <label>Delivery</label>
              <textarea name="delivery" ref={register}></textarea>
            </div>
          ) : undefined}
          <Button type="submit" className="my-btn">
            Edit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Joke;
