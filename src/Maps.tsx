import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { fetchLocation } from './Utils/fetchLocationUtils';

const Maps = () => {
    const mapCompRef = useRef<MapView>(null);
    const [coords, setCoords] = useState({
        latitude: 37.78825,
        longitude: -122.4324
    })

    const aooo = async () => {
        console.log("111111111")
        const position = await fetchLocation();
        const {latitude, longitude} = position.coords;
        setCoords({latitude, longitude});
        console.log(position, "THISSSS ONEEEEEE")
    }
    const handlePressCurrentLocation = () => {
        aooo()
    }
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={handlePressCurrentLocation} style={styles.btnwrper}>
            <Text>Click hereeeeeee</Text>
        </TouchableOpacity>
    <MapView
    //   provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        ref={mapCompRef}
      style={styles.map}
      region={{
        latitude: coords?.latitude,
        longitude: coords?.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      maxZoomLevel={20}
      showsUserLocation={true}
      followsUserLocation={true}
      showsMyLocationButton={false}
    >
    </MapView>
  </View>
  )
}

export default Maps


const styles = StyleSheet.create({
 container: {
   height: '100%',
   width: '100%',
   backgroundColor: 'green'
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
 btnwrper:{
    backgroundColor: 'red',
    zIndex: 9999999,
    width: 200,
    height: 100
 }
});
