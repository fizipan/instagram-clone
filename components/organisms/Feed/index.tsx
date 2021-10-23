// Components
import SectionSide from './SectionSide';
import SectionMain from './SectionMain';

export default function Feed() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 md:max-w-3xl xl:max-w-5xl  mx-auto">
      {/* Section main */}
      <SectionMain />

      {/* Section side */}
      <SectionSide />
    </main>
  );
}
