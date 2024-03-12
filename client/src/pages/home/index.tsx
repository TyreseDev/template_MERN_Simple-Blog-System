import { useEffect, useState } from "react";
import { Col, Container, Row, setConfiguration } from "react-grid-system";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/button";
import apiRequest from "../../utils/apiHelper";

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
    <div className="h-[90vh] w-[100vw] overflow-y-auto">
      <Container>
        <Row>
          {blogs.map((blog, blogIndex) => (
            <Col xs={24} sm={24} md={12} lg={12} xl={8} xxl={6} key={blog._id}>
              <div
                role="button"
                tabIndex={blogIndex}
                className="m-10 bg-gray-300 h-[20vh] min-h-[180px] rounded-lg text-center cursor-pointer hover:opacity-80 hover:shadow-xl"
                onClick={() => navigate(`/blog-post/${blog._id}`)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    navigate(`/blog-post/${blog._id}`);
                  }
                }}
                aria-label={`Go to blog post ${blog.title}`}
              >
                <div className="mx-[10%] w-4/5 h-full overflow-hidden">
                  <h2 className="my-2">{blog.title}</h2>
                  <span>{blog.summary}</span>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <div className="absolute bottom-0 right-0">
        <Button action={() => navigate("/new-blog")} icon="bi:clipboard-plus" />
      </div>
    </div>
  );
};

export default Home;
