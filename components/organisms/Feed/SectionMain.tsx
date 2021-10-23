import Post from 'components/molecules/Post';
import Story from 'components/molecules/Story';

export default function SectionMain() {
  return (
    <section className="col-span-2">
      {/* Stories */}
      <Story />

      {/* Posts */}
      <Post />
    </section>
  );
}
