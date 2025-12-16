import { ScrollView } from 'react-native';
import Stories from '@/features/stories/ui/Stories';
import Posts from '@/features/posts/ui/Posts';

const HomePage = () => {
  return (
    <ScrollView>
      <Stories  />
      <Posts/>
    </ScrollView>
  );
};
export default HomePage;
