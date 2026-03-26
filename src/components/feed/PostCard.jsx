import MoodBadge from '../shared/MoodBadge';

export default function PostCard({ post }) {
  return (
    <div style={{ border: '1px solid gray', margin: '10px', padding: '10px', borderRadius: '6px' }}>
      <h2>{post.title}</h2>
      <MoodBadge mood={post.mood} />
      <p>{post.content.slice(0, 50)}...</p>
    </div>
  );
}