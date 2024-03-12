import React, { useState } from "react";
import { Container } from "react-grid-system";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import { toast } from "react-toastify";
import Button from "../../components/button";
import apiRequest from "../../utils/apiHelper";
import "react-quill/dist/quill.snow.css";
import "./index.css";

function NewBlog() {
  const navigate = useNavigate();

  const newBlogCreate = () => {
    apiRequest("/blog", "POST", {
      title,
      summary,
      content,
    }).then((res) => {
      if (res) {
        toast.success("Success created!");
        navigate("/home");
      } else {
        toast.error("Create error!");
      }
    });
  };

  const [title, setTitle] = useState<string>("");
  const [summary, setSummary] = useState<string>("");
  const [content, setContent] = useState<string>("");

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
            onChange={setContent} // Simply use setContent, the type is inferred
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
        <Button action={newBlogCreate} icon="bi:clipboard-check" />
      </div>
    </div>
  );
}

export default NewBlog;
