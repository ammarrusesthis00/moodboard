import { useState } from 'react';
import { seedPosts } from '../data/seedPosts';

export default function usePosts() {
  const [posts, setPosts] = useState(seedPosts);
  return { posts, setPosts };
}