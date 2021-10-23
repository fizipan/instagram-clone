import faker from 'faker';
import { useEffect, useState } from 'react';

// Components
import StoryItem from './StoryItem';

export default function Story() {
  const [suggestions, setSuggestions]: any[] = useState([]);

  useEffect(() => {
    const data = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestions(data);
  }, []);

  return (
    <div className="bg-white rounded-sm border border-gray-200 shadow-sm flex space-x-4 overflow-x-auto scrollbar-hide p-5 mt-8">
      {suggestions.map((profile: { id: number; username: string; avatar: string }) => {
        return <StoryItem key={profile.id} username={profile.username} avatar={profile.avatar} />;
      })}
    </div>
  );
}
