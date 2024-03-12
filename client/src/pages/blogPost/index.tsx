import { useEffect, useState } from "react";
import { Container } from "react-grid-system";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Parser as HtmlToReactParser } from "html-to-react";
import Button from "../../components/button";
import apiRequest from "../../utils/apiHelper";

// @ts-ignore
const htmlToReactParser = new HtmlToReactParser();

type Blog = {
  title: string;
  content: string;
};

type BlogApiResponse = {
  blog?: Blog;
};

const BlogPost: React.FC = () => {
  const navigate = useNavigate();
  const { bid } = useParams<{ bid: string }>();
  const [blog, setBlog] = useState<Blog>({ title: "", content: "" });

  useEffect(() => {
    apiRequest(`/blog/${bid}`).then((res: BlogApiResponse) => {
      if (res) {
        setBlog(res.blog || { title: "", content: "" });
      } else {
        toast.error("Data load error!");
      }
    });
  }, [bid]);

  return (
    <div className="h-[90vh] w-[100vw] overflow-y-auto">
      <Container>
        <h1 className="mt-10 text-center px-20 blog-post-title">
          {blog.title}
        </h1>
        <div className="px-20 blog-post-content">
          {htmlToReactParser.parse(blog.content)}
        </div>
      </Container>
      <div className="absolute top-[10vh] left-0 blog-post-home-button">
        <Button
          action={() => navigate("/home")}
          icon="streamline:interface-home-3-home-house-map-roof"
        />
      </div>
    </div>
  );
};

export default BlogPost;
