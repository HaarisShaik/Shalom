import React, { useState } from 'react';

const PostForm = () => {
  const [postContent, setPostContent] = useState('');
  const [submittedPost, setSubmittedPost] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!postContent.trim()) {
      alert('Post content cannot be empty.');
      return;
    }

    // Simulate sending the post
    console.log('Posting:', postContent);
    setSubmittedPost(postContent);
    setPostContent(''); // clear the input
  };

  return (
    <div style={styles.container}>
      <h2>Create a Post</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <textarea
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          placeholder="What's on your mind?"
          style={styles.textarea}
          rows={4}
        />
        <button type="submit" style={styles.button}>Post</button>
      </form>

      {submittedPost && (
        <div style={styles.preview}>
          <h4>Your Post:</h4>
          <p>{submittedPost}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: { width: '100%', maxWidth: 500, margin: '20px auto', fontFamily: 'sans-serif' },
  form: { display: 'flex', flexDirection: 'column' },
  textarea: { padding: 10, fontSize: 16, marginBottom: 10, resize: 'vertical' },
  button: { padding: 10, fontSize: 16, backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: 4 },
  preview: { marginTop: 20, backgroundColor: '#f9f9f9', padding: 10, borderRadius: 4 },
};

export default PostForm;
