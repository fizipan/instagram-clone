import faker from 'faker';
import { useEffect, useState } from 'react';
import SuggestionItem from './SuggestionItem';

export default function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const data = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestions(data);
  }, []);

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-1">
        <p className="text-sm font-semibold text-gray-400">Suggestion for you</p>
        <button className="text-xs font-semibold">See all</button>
      </div>
      {/* Suggestion */}
      {suggestions.map((suggestion: { id: number; username: string; company: { name: string }; avatar: string }) => {
        return (
          <SuggestionItem
            key={suggestion.id}
            id={suggestion.id}
            username={suggestion.username}
            companyName={suggestion.company.name}
            avatar={suggestion.avatar}
          />
        );
      })}
    </div>
  );
}
