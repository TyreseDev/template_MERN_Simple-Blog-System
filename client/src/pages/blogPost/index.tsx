import React, { useEffect, useState } from "react";
import { Container } from "react-grid-system";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Parser as HtmlToReactParser } from "html-to-react";
import Button from "../../components/button";
import apiRequest from "../../utils/apiHelper";
import "./index.css";

const htmlToReactParser = new HtmlToReactParser();

// Define types for your blog structure
type Blog = {
  title: string;
  content: string;
};

function BlogPost() {
  const navigate = useNavigate();

  // Use type assertion to ensure useParams matches expected structure
  const { bid } = useParams<{ bid: string }>();

  // Explicitly defining the state type
  const [blog, setBlog] = useState<Blog>({ title: "", content: "" });

  useEffect(() => {
    apiRequest(`/blog/${bid}`).then((res: any) => {
      // Consider defining a type for `res` for better type safety
      if (res) {
        setBlog(res.blog || { title: "", content: "" });
      } else {
        toast.error("Data load error!");
      }
    });
  }, [bid, alert]);

  return (
    <div className="blog-post body">
      <Container>
        <h1 className="blog-post-title">{blog.title}</h1>
        <div className="blog-post-content">
          {htmlToReactParser.parse(blog.content)}
        </div>
      </Container>
      <div className="blog-post-home-button">
        <Button
          action={() => navigate("/home")}
          icon="streamline:interface-home-3-home-house-map-roof"
        />
      </div>
    </div>
  );
}

export default BlogPost;
