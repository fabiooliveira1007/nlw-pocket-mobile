import {
  View,
  Text,
  TouchableOpacity,
  Image,
  type TouchableOpacityProps,
} from 'react-native';
import { IconTicket } from '@tabler/icons-react-native';
import { styles } from './styles';
import { colors } from '@/styles/theme';
import type { PlaceProps } from '@/types';


type Props = TouchableOpacityProps & {
  data: PlaceProps;
};

export function Place({ data, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      {...rest}
    >
      <Image
        style={styles.image}
        source={{ uri: data.cover }}
      />

      <View style={styles.content}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.description} numberOfLines={2}>{data.description}</Text>

        <View style={styles.footer}>
          <IconTicket
            size={16}
            color={colors.red.base}
          />
          <Text style={styles.tickets}>{data.coupons} cupons disponíveis</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
