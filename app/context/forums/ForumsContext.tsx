import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import axios from 'axios';

interface Comment {
  id: string;
  content: string;
}

interface ForumPost {
  id: string;
  title: string;
  content: string;
  comments: Comment[];
}

interface ForumContextType {
  forumPosts: ForumPost[];
  createForumPost: (newPost: { title: string; content: string }) => void;
  fetchForumPostById: (id: string) => ForumPost | undefined;
}

const ForumContext = createContext<ForumContextType | undefined>(undefined);

export const useForumContext = (): ForumContextType => {
  const context = useContext(ForumContext);
  if (!context) {
    throw new Error('useForumContext must be used within a ForumProvider');
  }
  return context;
};

export const ForumProvider = ({ children }: { children: ReactNode }) => {
  const [forumPosts, setForumPosts] = useState<ForumPost[]>([]);

  // Fetch all forum posts from the API
  useEffect(() => {
    const fetchForumPosts = async () => {
      try {
        const response = await axios.get('/api/v1/get-all-forum-posts');
        setForumPosts(response.data);
      } catch (error) {
        console.error('Error fetching forum posts:', error);
      }
    };

    fetchForumPosts();
  }, []);

  const createForumPost = ({ title, content }: { title: string; content: string }) => {
    const newPost = {
      id: String(forumPosts.length + 1),
      title,
      content,
      comments: [],
    };
    setForumPosts([...forumPosts, newPost]);
  };

  const fetchForumPostById = (id: string) => {
    return forumPosts.find((post) => post.id === id);
  };

  return (
    <ForumContext.Provider value={{ forumPosts, createForumPost, fetchForumPostById }}>
      {children}
    </ForumContext.Provider>
  );
};
