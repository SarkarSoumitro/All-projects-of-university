import React, { useState, ChangeEvent, FormEvent } from 'react';
import './admin_blog.css';
import { baseUrl} from '../../api/api_config';
const AdminBlog: React.FC = () => {
  // State variables to store form data
  const [formData, setFormData] = useState({
    title: '',
    Description: '',
    Image: ''
  });

  // Function to handle form input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (name === 'Image' && files) {
      const file = files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        let base64String = reader.result as string;
        // Remove data:image/png;base64, prefix
        base64String = base64String.replace(/^data:image\/(png|jpg|jpeg);base64,/, '');
        setFormData(prevState => ({
          ...prevState,
          Image: base64String // Updated 'Image'
        }));
      };
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

 // Function to handle form submission
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch(`${baseUrl}/blog/BlogInsert`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // Set content type to JSON
      },
      body: JSON.stringify(formData) // Stringify the form data
    });

    if (response.status === 201) {
      const data = await response.text(); // Get response as text
      console.log('Success:', data);
      alert('Blog post created successfully!');
      setFormData({ // Clear form data
        title: '',
        Description: '',
        Image: ''
      });
    } else {
      console.error('Network response was not created:', response.status);
      alert('Failed to create blog post. Please try again later.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to create blog post. Please try again later.');
  }
};


  return (
    <div>
      <h1>Blog Post</h1>
      {/* <div className="blog_info">
        <div className="b1">
          <h3>Recently posted blog</h3>
          <p>Title: How recycle item works (10 min ago)</p>
        </div>
        <div className="b2">
          <h3>Total posted blogs: 110</h3>
          <p>Total views: 1k</p>
        </div>
      </div> */}
      <div className="sub_form">
        <h2>Submit a New Blog</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="Description">Description:</label>
            <textarea id="Description" name="Description" rows={4} value={formData.Description} onChange={handleChange}></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="Image">Photo:</label>
            <input type="file" id="Image" name="Image" accept="image/*" onChange={handleChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AdminBlog;
