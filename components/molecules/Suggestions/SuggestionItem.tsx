interface SuggestionItemProps {
  username: string;
  companyName: string;
  avatar: string;
}

export default function SuggestionItem(props: SuggestionItemProps) {
  const { username, companyName, avatar } = props;
  return (
    <div className="flex items-center space-x-4 py-2">
      <div className="flex-shrink-0">
        <img src={avatar} className="w-8 h-8 rounded-full border" alt={username} />
      </div>
      <div className="flex-1">
        <h6 className="text-sm font-semibold">{username}</h6>
        <p className="text-xs text-gray-500">{companyName}</p>
      </div>
      <div>
        <button type="button" className="text-xs font-semibold text-blue-400">
          Follow
        </button>
      </div>
    </div>
  );
}
