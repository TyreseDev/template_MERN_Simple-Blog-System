import React, { useEffect, useState } from "react";
import { Col, Container, Row, setConfiguration } from "react-grid-system";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import Button from "../../components/button";
import apiRequest from "../../utils/apiHelper";
import "./index.css";

setConfiguration({ gridColumns: 24 });

function Home() {
  const navigate = useNavigate();
  const alert = useAlert();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    apiRequest("/blog").then((res) => {
      if (res) {
        setBlogs(res.blogs || []);
      } else {
        alert.error("Data load error!");
      }
    });
  }, [alert]);

  return (
    <div className="home body">
      <Container>
        <Row>
          {blogs.map((blog) => (
            <Col xs={24} sm={24} md={12} lg={12} xl={8} xxl={6} key={blog._id}>
              <div
                className="blog-item"
                onClick={() => navigate(`/blog-post/${blog._id}`)}
              >
                <div className="blog-item-content">
                  <h2 className="blog-item-title">{blog.title}</h2>
                  <span className="blog-item-summary">{blog.summary}</span>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <div className="new-blog-button">
        <Button action={() => navigate("/new-blog")} icon="bi:clipboard-plus" />
      </div>
    </div>
  );
}

export default Home;
