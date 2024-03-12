import React, { useState } from "react";
import { Container } from "react-grid-system";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import { useAlert } from "react-alert";
import Button from "../../components/button";
import apiRequest from "../../utils/apiHelper";
import "react-quill/dist/quill.snow.css";
import "./index.css";

function NewBlog() {
  const navigate = useNavigate();
  const alert = useAlert();

  const newBlogCreate = () => {
    apiRequest("/blog", "POST", {
      title,
      summary,
      content,
    }).then((res) => {
      if (res) {
        alert.success("Success created!");
        navigate("/home");
      } else {
        alert.error("Create error!");
      }
    });
  };

  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      [{ list: "bullet" }],
      ["link", "image"],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  return (
    <div className="new-blog body">
      <Container>
        <div className="new-blog-input">
          <input
            className="new-blog-input-title_summary"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Please input New Blog's Title"
          />
          <input
            className="new-blog-input-title_summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder="Please input New Blog's Summary"
          />
          <ReactQuill
            theme="snow"
            value={content}
            onChange={(e) => setContent(e)}
            modules={modules}
            placeholder="Please input New Blog's Content"
          />
        </div>
      </Container>
      <div className="new-blog-button-group">
        <Button
          action={() => navigate("/home")}
          icon="streamline:interface-home-3-home-house-map-roof"
        />
        <br />
        <Button action={() => newBlogCreate()} icon="bi:clipboard-check" />
      </div>
    </div>
  );
}

export default NewBlog;
