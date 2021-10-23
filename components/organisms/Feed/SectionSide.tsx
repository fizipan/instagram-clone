import MiniProfile from 'components/molecules/MiniProfile';
import Suggestions from 'components/molecules/Suggestions';

export default function SectionSide() {
  return (
    <aside className="md:col-span-1 hidden xl:block">
      <div className="fixed top-36">
        {/* Mini Profile */}
        <MiniProfile />

        {/* Suggestions */}
        <Suggestions />
      </div>
    </aside>
  );
}
