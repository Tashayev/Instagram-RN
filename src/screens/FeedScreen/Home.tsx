import { ScrollView } from 'react-native';
import Stories from '@/features/Stories/Stories';
import Posts from '@/features/Posts/Posts';

const HomePage = () => {
  return (
    <ScrollView>
      <Stories  />
      <Posts/>
    </ScrollView>
  );
};
export default HomePage;
