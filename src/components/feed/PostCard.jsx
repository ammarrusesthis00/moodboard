import MoodBadge from '../shared/MoodBadge';

const moodColors = { 
  happy: 'bg-green-400/50',
  sad: 'bg-blue-400/50',
  funny: 'bg-yellow-500/50',
  angry: 'bg-red-500/50'
};

export default function PostCard({ post }) {
  return (
    <div className={`p-4 rounded-lg text-white ${moodColors[post.mood]}`}>
      <div className='flex justify-between items-center'>
        <h2 className='font-manrope font-bold text-xl'>{post.title}</h2>
        <MoodBadge mood={post.mood} />
      </div>
      <p className='font-poppins mt-2'>{post.content.slice(0, 50)}...</p>
    </div>
  );
}