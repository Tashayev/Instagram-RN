import { ScrollView } from 'react-native';
import { userData } from '../../../data';
import { size } from '../../../data';

import Stories from '@/features/Stories/Stories';

const HomePage = () => {
  return (
    <ScrollView>
      <Stories stories={userData} size={size} />
    </ScrollView>
  );
};
export default HomePage;
