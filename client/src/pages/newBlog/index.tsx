import { useState } from "react";
import { Container } from "react-grid-system";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import { toast } from "react-toastify";
import Button from "../../components/button";
import apiRequest from "../../utils/apiHelper";
import "react-quill/dist/quill.snow.css";
import "./index.css";

const NewBlog: React.FC = () => {
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
    <div className="h-[90vh] w-[100vw] overflow-y-auto">
      <Container>
        <div className="p-4">
          <input
            className="w-full border border-[#e9e9e9] rounded-lg p-2 my-2 text-base outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Please input New Blog's Title"
          />
          <input
            className="w-full border border-[#e9e9e9] rounded-lg p-2 my-2 text-base outline-none"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder="Please input New Blog's Summary"
          />
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            modules={modules}
            placeholder="Please input New Blog's Content"
            className="new-blog-editor"
          />
        </div>
      </Container>
      <div className="absolute top-[10vh] left-0">
        <Button
          action={() => navigate("/home")}
          icon="streamline:interface-home-3-home-house-map-roof"
        />
        <Button action={newBlogCreate} icon="bi:clipboard-check" />
      </div>
    </div>
  );
};

export default NewBlog;
