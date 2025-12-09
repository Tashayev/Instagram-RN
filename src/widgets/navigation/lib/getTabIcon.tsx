import { House, Search, Send, SquarePlay, SquarePlus } from 'lucide-react-native';
import { Image } from 'react-native';
export const getTabIcon = (routeName: string, ava: string) => {
    switch (routeName) {
      case 'Home':
        return <House size={27} />;
      case 'Search':
        return <Search size={27} />;
      case 'Send':
        return <Send size={27} color="black"  />;
      case 'Reels':
        return <SquarePlay size={27} />;
      case 'Profile':
        return (
          <Image
            source={{ uri: ava }}
            style={{ width: 27, height: 27, borderRadius: 999 }}
          />
        );
      default:
        return null;
    }
  };