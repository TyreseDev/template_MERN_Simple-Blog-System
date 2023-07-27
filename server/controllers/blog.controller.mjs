import Blog from "../models/blog.model.mjs";

export const getAllBlogs = (req, res) => {
  Blog.find()
    .exec()
    .then((blogs) => {
      res.status(200).json({ blogs });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

export const getBlog = (req, res) => {
  Blog.findById(req.params.bid)
    .exec()
    .then((blog) => {
      res.status(200).json({ blog });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

export const addBlog = (req, res) => {
  if (!req.body.title || !req.body.summary || !req.body.content) {
    res.status(403).end();
  }

  const newBlog = new Blog(req.body);
  newBlog
    .save()
    .then((blog) => {
      res.status(201).json({ blog });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
