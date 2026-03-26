// src/pages/Home.jsx
import Feed from '../components/feed/Feed';
import MoodFilter from '../components/feed/MoodFilter';
import usePosts from '../hooks/usePosts';
import useFilter from '../hooks/useFilter';
import PageWrapper from '../components/layout/PageWrapper';

export default function Home() {
  const { posts } = usePosts();
  const { filter, setFilter, filterPosts } = useFilter(); // <-- this is correct

  return (
    <PageWrapper>
      <h1 style={{ textAlign: 'center' }}>MoodBoard Feed</h1>
      <MoodFilter filter={filter} setFilter={setFilter} /> {/* <-- pass correctly */}
      <Feed posts={filterPosts(posts)} />
    </PageWrapper>
  );
}