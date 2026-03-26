import { useState } from 'react';

export default function useFilter() {
  const [filter, setFilter] = useState('all');

  const filterPosts = (posts) => {
    if (filter === 'all') return posts;
    return posts.filter(p => p.mood === filter);
  };

  return { filter, setFilter, filterPosts };
}