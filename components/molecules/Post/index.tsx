import PostItem from './PostItem';

const DUMY_DATA = [
  {
    id: 1,
    username: 'hafizhmaulanay',
    userImg: 'https://links.papareact.com/3ke',
    imgPost: 'https://links.papareact.com/3ke',
    caption: 'Like This Photo Yo Yo Guys!!!',
  },
  {
    id: 2,
    username: 'athary123',
    userImg: 'https://links.papareact.com/3ke',
    imgPost: 'https://links.papareact.com/3ke',
    caption: 'Like This Photo Yo Yo Guys!!!',
  },
];
export default function Post() {
  return (
    <div>
      {DUMY_DATA.map((post: { id: number; username: string; userImg: string; imgPost: string; caption: string }) => {
        return (
          <PostItem
            key={post.id}
            id={post.id}
            username={post.username}
            userImg={post.userImg}
            imgPost={post.imgPost}
            caption={post.caption}
          />
        );
      })}
    </div>
  );
}
