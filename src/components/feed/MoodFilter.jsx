// src/components/feed/MoodFilter.jsx
export default function MoodFilter({ filter, setFilter }) {
  const moods = ['all', 'happy', 'sad', 'funny', 'angry'];

  return (
    <div style={{ marginBottom: '15px' }}>
      {moods.map(m => (
        <button
          key={m}
          onClick={() => setFilter(m)} // <-- this uses the prop correctly
          style={{
            marginRight: '5px',
            padding: '5px 10px',
            backgroundColor: filter === m ? 'gray' : 'lightgray',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {m}
        </button>
      ))}
    </div>
  );
}