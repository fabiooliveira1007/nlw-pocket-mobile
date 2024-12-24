import { useRef, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';
import { router } from 'expo-router';
import { useCategories } from '@/hooks/useCategories';
import { useMarkets } from '@/hooks/useMarkets';
import { Categories } from '@/components/categories';
import { Places } from '@/components/places';
import { fontFamily, colors } from '@/styles/theme';

const CURRENT_LOCATION = {
  latitude: -23.561187293883442,
  longitude: -46.656451388116494,
};

const DELTA_SET = {
  latitude: 0.01,
  longitude: 0.01,
};

const EDGE_PADDING = { top: 50, right: 50, bottom: 50, left: 50 };

export default function Home() {
  const mapRef = useRef<MapView>(null);
  const { categories, selectedCategory, setSelectedCategory } = useCategories();
  const { markets } = useMarkets(selectedCategory);

  useEffect(() => {
    if (markets.length > 0 && mapRef.current) {
      const coordinates = markets.map(market => ({
        latitude: market.latitude,
        longitude: market.longitude,
      }));

      mapRef.current.fitToCoordinates(coordinates, {
        edgePadding: EDGE_PADDING,
        animated: true,
      });
    }
  }, [markets]);

  return (
    <View style={styles.container}>
      <Categories
        data={categories}
        onSelect={setSelectedCategory}
        selected={selectedCategory}
      />
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: CURRENT_LOCATION.latitude,
          longitude: CURRENT_LOCATION.longitude,
          latitudeDelta: DELTA_SET.latitude,
          longitudeDelta: DELTA_SET.longitude,
        }}
      >
        <Marker
          identifier='current'
          coordinate={CURRENT_LOCATION}
          image={require('@/assets/location.png')}
        />
        {markets.map(market => (
          <Marker
            key={market.id}
            identifier={market.id}
            coordinate={{
              latitude: market.latitude,
              longitude: market.longitude,
            }}
            image={require('@/assets/pin.png')}
          >
            <Callout onPress={() => router.push(`/market/${market.id}`)}>
              <View style={styles.callout}>
                <Text style={styles.marketName}>
                  {market.name || 'Nome não disponível'}
                </Text>
                <Text style={styles.marketAddress}>
                  {market.address || 'Endereço não disponível'}
                </Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
      <Places data={markets} />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CECECE',
  },
  map: {
    flex: 1,
  },
  callout: {
    padding: 8,
    maxWidth: 200,
  },
  marketName: {
    fontSize: 14,
    color: colors.gray[600],
    fontFamily: fontFamily.medium,
  },
  marketAddress: {
    fontSize: 12,
    color: colors.gray[600],
    fontFamily: fontFamily.regular,
  },
});
