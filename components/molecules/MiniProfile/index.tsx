export default function MiniProfile() {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img src="https://links.papareact.com/3ke" className="h-14 rounded-full border" alt="profile pic" />
      </div>
      <div className="flex-1">
        <h6 className="text-sm font-semibold">hafizhmaulana_y</h6>
        <p className="text-sm text-gray-500 truncate">Hafizh Maulana Yusliansyah</p>
      </div>
      <div>
        <button className="text-blue-400 font-semibold text-xs">Sign Out</button>
      </div>
    </div>
  );
}
