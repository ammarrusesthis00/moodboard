export default function MoodFilter({ filter, setFilter }) {
  const moods = ['all', 'happy', 'sad', 'funny', 'angry'];
const moodClasses = {
  happy: 'bg-yellow-400',
  sad: 'bg-blue-400',
  funny: 'bg-orange-500',
  angry: 'bg-red-500',
  all: 'bg-gray-300',
  selected: 'bg-black text-white'
};
  return (
    <div className="mb-4 flex flex-wrap gap-2">
      {moods.map(m => (
        <button
          key={m}
          onClick={() => setFilter(m)}
          className={`bg-gray-500 rounded text-white px-3 py-1 pointer-cursor`}
        >
          {m}
        </button>
      ))}
    </div>
  );
}