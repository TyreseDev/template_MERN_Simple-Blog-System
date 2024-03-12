import React, { useEffect, useState } from "react";
import { Col, Container, Row, setConfiguration } from "react-grid-system";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/button";
import apiRequest from "../../utils/apiHelper";
import "./index.css";

setConfiguration({ gridColumns: 24 });

// Assuming the structure of your blog data based on the usage:
type Blog = {
  _id: string;
  title: string;
  summary: string;
};

function Home() {
  const navigate = useNavigate();
  // Use TypeScript to define the blogs array with the Blog type
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    // You may need to define the expected structure of `res` for better type checking
    apiRequest("/blog").then((res: { blogs?: Blog[] }) => {
      if (res && res.blogs) {
        setBlogs(res.blogs);
      } else {
        toast.error("Data load error!");
      }
    });
  }, []);

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
