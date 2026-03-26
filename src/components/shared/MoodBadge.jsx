const moodColors = {
  happy: 'bg-green-400',
  sad: 'bg-blue-400',
  funny: 'bg-yellow-500',
  angry: 'bg-red-500'
};

export default function MoodBadge({ mood }) {
  return (
    <span className={`px-2 py-1 rounded text-white text-sm font-semibold mr-2 ${moodColors[mood]}`}>
      {mood}
    </span>
  );
}