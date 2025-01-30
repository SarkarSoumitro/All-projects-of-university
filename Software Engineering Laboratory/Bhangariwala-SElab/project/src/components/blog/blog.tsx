import React, { useState, useEffect } from "react";
import "./blog.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import axios from "axios";
import Img1 from "../../assets/image/blog/Blogt.png";
import { baseUrl } from "../api/api_config";
interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  create_Date: string;
}

function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]); // Explicitly define the type
  const postsPerPage = 12;

  useEffect(() => {
    async function fetchBlogPosts() {
      try {
        const response = await axios.post(`${baseUrl}/blog/blogList`, {});
        setBlogPosts(response.data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    }

    fetchBlogPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const renderImageFromBase64 = (base64String: string) => {
    return `data:image/jpeg;base64,${base64String}`;
  };

  return (
    <div>
      <div className="header">
        <img src={Img1} alt="" />
      </div>
      <div className="post">
        {currentPosts.map((post) => (
          <div className="p1" key={post.id}>
            <img src={renderImageFromBase64(post.image)} alt="" />
            <h1>{post.title}</h1>
            <p className="b-date">{post.create_Date}</p>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
      <div className="transaction">
        <button
          className="newP"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          <IoIosArrowBack className="icon1" /> Newer posts
        </button>

        <button
          className="oldP"
          onClick={handleNextPage}
          disabled={currentPosts.length < postsPerPage}
        >
          Older posts <IoIosArrowForward className="icon1" />
        </button>
      </div>
    </div>
  );
}

export default Blog;
