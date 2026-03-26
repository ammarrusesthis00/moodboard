import { moods } from '../../utils/moods';

export default function MoodBadge({ mood }) {
  return (
    <span style={{ 
      backgroundColor: moods[mood], 
      padding: '2px 6px', 
      borderRadius: '4px', 
      fontWeight: 'bold',
      marginRight: '5px'
    }}>
      {mood}
    </span>
  );
}