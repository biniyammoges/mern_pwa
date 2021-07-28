import Post from "../model/postModel.js";
import path from "path";

const getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();

    res.status(200).json({
      posts,
      ok: true,
    });
  } catch (err) {
    console.log(`Error : ${err.message}`);
    res.status(400).json({
      error: `Something went wrong, ${err.message}`,
      ok: false,
    });
  }
};

const addPost = async (req, res, next) => {
  try {
    if (!req.body.title) {
      return res.status(400).json({
        error: "Please add title",
      });
    }
    if (!req.files) {
      return res.status(400).json({
        error: "Please add post image",
      });
    }

    const file = req.files.file;

    // custom filename
    file.name = `image_${Date.now()}_${path.parse(file.name).ext}`;

    // check for file type
    if (!file.mimetype.startsWith("image")) {
      return res.status(400).json({
        error: "Please upload image only",
        ok: false,
      });
    }

    // check for file size
    if (file.size > 1000000) {
      return res.status(200).json({
        error: "File size exceed the limit",
        ok: false,
      });
    }

    file.mv(`${process.env.FILE_PATH}/${file.name}`, async (err) => {
      if (err) {
        console.log(err);
      }
      const post = await Post.create({
        title: req.body.title,
        image: `/uploads/${file.name}`,
      });

      res.status(200).json({
        post,
        ok: true,
      });
    });
  } catch (err) {
    console.log(`Error : ${err.message}`);
    res.status(400).json({
      error: `Failed to add post, ${err.message}`,
      ok: false,
    });
  }
};

const deletePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        error: "Post not found",
      });
    }

    await post.remove();

    res.status(200).json({
      post: {},
      ok: true,
    });
  } catch (err) {
    res.status(400).json({
      error: err.message,
      ok: false,
    });
  }
};

export { getPosts, addPost, deletePost };
