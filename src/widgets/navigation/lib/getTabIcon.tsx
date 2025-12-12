import { HomeSolid, ReelsSolid, SearchSolid, SendSolid } from '@/shared/icons/Icons';
import { House, Search, Send, SquarePlay, } from 'lucide-react-native';
import { Image } from 'react-native';
export const getTabIcon = (routeName: string, ava: string, isFocused: boolean) => {
    switch (routeName) {
      case 'Home':
        return isFocused?<HomeSolid/>:<House size={27} />;
      case 'Search':
        return isFocused?<SearchSolid/>:<Search size={27} />;
      case 'Send':
        return isFocused?<SendSolid/>:<Send size={27} color="black"  />;
      case 'Reels':
        return isFocused?<ReelsSolid/>:<SquarePlay size={27} />;
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