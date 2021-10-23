interface StoryItemProps {
  username: string;
  avatar: string;
}

export default function StoryItem(props: StoryItemProps) {
  const { username, avatar } = props;
  return (
    <div>
      <img
        src={avatar}
        className="w-14 h-14 rounded-full p-[1.5px] border-2 border-red-500 object-contain cursor-pointer transform hover:scale-110 transition-all duration-200 ease-out"
        alt={`${username} image`}
      />
      <p className="text-sm w-14 text-gray-500 truncate">{username}</p>
    </div>
  );
}
