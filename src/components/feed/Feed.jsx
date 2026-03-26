import PostCard from './PostCard';

export default function Feed({ posts }) {
  return (
    <div className='space-y-10'>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}