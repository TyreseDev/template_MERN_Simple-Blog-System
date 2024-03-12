import { useEffect, useState } from "react";
import { Col, Container, Row, setConfiguration } from "react-grid-system";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/button";
import apiRequest from "../../utils/apiHelper";
import "./index.css";

setConfiguration({ gridColumns: 24 });

type Blog = {
  _id: string;
  title: string;
  summary: string;
};

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    apiRequest("/blog").then((res: { blogs?: Blog[] }) => {
      if (res?.blogs) {
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
          {blogs.map((blog, blogIndex) => (
            <Col xs={24} sm={24} md={12} lg={12} xl={8} xxl={6} key={blog._id}>
              <div
                role="button"
                tabIndex={blogIndex}
                className="blog-item"
                onClick={() => navigate(`/blog-post/${blog._id}`)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    navigate(`/blog-post/${blog._id}`);
                  }
                }}
                aria-label={`Go to blog post ${blog.title}`}
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
};

export default Home;
