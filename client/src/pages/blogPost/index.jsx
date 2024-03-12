import React, { useEffect, useState } from "react";
import { Container } from "react-grid-system";
import { useNavigate, useParams } from "react-router-dom";
import { useAlert } from "react-alert";
import { Parser as HtmlToReactParser } from "html-to-react";
import Button from "../../components/button";
import apiRequest from "../../utils/apiHelper";
import "./index.css";

const htmlToReactParser = new HtmlToReactParser();

function BlogPost() {
  const navigate = useNavigate();
  const alert = useAlert();
  const { bid } = useParams();
  const [blog, setBlog] = useState({ title: "", content: "" });

  useEffect(() => {
    apiRequest(`/blog/${bid}`).then((res) => {
      if (res) {
        setBlog(res.blog || { title: "", content: "" });
      } else {
        alert.error("Data load error!");
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
