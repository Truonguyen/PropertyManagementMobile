import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";

const SearchcScreen = (props) => {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 29.11878378360867,
        longitude: -82.10061956042549,
        latitudeDelta: 0.0025,
        longitudeDelta: 0.0025,
      }}
      mapType="hybrid"
    >
      {/* HOUSE A */}
      <Marker
        style={styles.marker}
        coordinate={{
          latitude: 29.118902807729818,
          longitude: -82.10081659956916,
        }}
        image={require("../assets/map_marker_50.png")}
      >
        <Callout tooltip>
          <View>
            <View style={styles.bubble}>
              <Text style={styles.name}>HOUSE A</Text>
              <Image
                style={styles.image}
                source={require("../assets/home1.jpg")}
              />
              <Text>2 Bedroom | 1.5 Bathroom | $650/Month</Text>
            </View>
            <View style={styles.arrowBorder} />
            <View style={styles.arrow} />
          </View>
        </Callout>
      </Marker>

      {/* HOUSE B */}
      <Marker
        style={styles.marker}
        coordinate={{
          latitude: 29.118687282511313,
          longitude: -82.10072498277634,
        }}
        image={require("../assets/map_marker_50.png")}
      >
        <Callout tooltip>
          <View>
            <View style={styles.bubble}>
              <Text style={styles.name}>HOUSE B</Text>
              <Image
                style={styles.image}
                source={require("../assets/home2.jpg")}
              />
              <Text>2 Bedroom | 1.5 Bathroom | $650/Month</Text>
            </View>
            <View style={styles.arrowBorder} />
            <View style={styles.arrow} />
          </View>
        </Callout>
      </Marker>

      {/* HOUSE C */}
      <Marker
        style={styles.marker}
        coordinate={{
          latitude: 29.118581837812673,
          longitude: -82.10065792760207,
        }}
        image={require("../assets/map_marker_50.png")}
      >
        <Callout tooltip>
          <View>
            <View style={styles.bubble}>
              <Text style={styles.name}>HOUSE C</Text>
              <Image
                style={styles.image}
                source={require("../assets/home3.jpg")}
              />
              <Text>2 Bedroom | 1 Bathroom | $600/Month</Text>
            </View>
            <View style={styles.arrowBorder} />
            <View style={styles.arrow} />
          </View>
        </Callout>
      </Marker>

      {/* HOUSE D */}
      <Marker
        style={styles.marker}
        coordinate={{
          latitude: 29.118471701944134,
          longitude: -82.10061868804938,
        }}
        image={require("../assets/map_marker_50.png")}
      >
        <Callout tooltip>
          <View>
            <View style={styles.bubble}>
              <Text style={styles.name}>HOUSE D</Text>
              <Image
                style={styles.image}
                source={require("../assets/home4.jpg")}
              />
              <Text>2 Bedroom | 1.5 Bathroom | $650/Month</Text>
            </View>
            <View style={styles.arrowBorder} />
            <View style={styles.arrow} />
          </View>
        </Callout>
      </Marker>

      {/* HOUSE E */}
      <Marker
        style={styles.marker}
        coordinate={{
          latitude: 29.11836567110728,
          longitude: -82.10051005862071,
        }}
        image={require("../assets/map_marker_50.png")}
      >
        <Callout tooltip>
          <View>
            <View style={styles.bubble}>
              <Text style={styles.name}>HOUSE E</Text>
              <Image
                style={styles.image}
                source={require("../assets/home5.jpg")}
              />
              <Text>2 Bedroom | 1 Bathroom | $600/Month</Text>
            </View>
            <View style={styles.arrowBorder} />
            <View style={styles.arrow} />
          </View>
        </Callout>
      </Marker>

      {/* HOUSE 1 */}
      <Marker
        style={styles.marker}
        coordinate={{
          latitude: 29.118143650781686,
          longitude: -82.10058717221882,
        }}
        image={require("../assets/map_marker_50.png")}
      >
        <Callout tooltip>
          <View>
            <View style={styles.bubble}>
              <Text style={styles.name}>HOUSE 1</Text>
              <Image
                style={styles.image}
                source={require("../assets/home6.jpg")}
              />
              <Text>2 Bedroom | 1 Bathroom | $675/Month</Text>
            </View>
            <View style={styles.arrowBorder} />
            <View style={styles.arrow} />
          </View>
        </Callout>
      </Marker>

      {/* HOUSE 2 */}
      <Marker
        style={styles.marker}
        coordinate={{
          latitude: 29.118112017273248,
          longitude: -82.1007018364859,
        }}
        image={require("../assets/map_marker_50.png")}
      >
        <Callout tooltip>
          <View>
            <View style={styles.bubble}>
              <Text style={styles.name}>HOUSE 2</Text>
              <Image
                style={styles.image}
                source={require("../assets/home7.jpg")}
              />
              <Text>2 Bedroom | 1 Bathroom | $650/Month</Text>
            </View>
            <View style={styles.arrowBorder} />
            <View style={styles.arrow} />
          </View>
        </Callout>
      </Marker>

      {/* HOUSE 5 */}
      <Marker
        style={styles.marker}
        coordinate={{
          latitude: 29.11771027045072,
          longitude: -82.10086205540007,
        }}
        image={require("../assets/map_marker_50.png")}
      >
        <Callout tooltip>
          <View>
            <View style={styles.bubble}>
              <Text style={styles.name}>HOUSE 5</Text>
              <Image
                style={styles.image}
                source={require("../assets/home8.jpg")}
              />
              <Text>2 Bedroom | 1 Bathroom | $600/Month</Text>
            </View>
            <View style={styles.arrowBorder} />
            <View style={styles.arrow} />
          </View>
        </Callout>
      </Marker>

      {/* HOUSE 6 */}
      <Marker
        style={styles.marker}
        coordinate={{
          latitude: 29.117599552441213,
          longitude: -82.10084260939917,
        }}
        image={require("../assets/map_marker_50.png")}
      >
        <Callout tooltip>
          <View>
            <View style={styles.bubble}>
              <Text style={styles.name}>HOUSE 6</Text>
              <Image
                style={styles.image}
                source={require("../assets/home9.jpg")}
              />
              <Text>2 Bedroom | 1 Bathroom | $625/Month</Text>
            </View>
            <View style={styles.arrowBorder} />
            <View style={styles.arrow} />
          </View>
        </Callout>
      </Marker>

      {/* HOUSE 7 */}
      <Marker
        style={styles.marker}
        coordinate={{
          latitude: 29.117515573093534,
          longitude: -82.10086034870861,
        }}
        image={require("../assets/map_marker_50.png")}
      >
        <Callout tooltip>
          <View>
            <View style={styles.bubble}>
              <Text style={styles.name}>HOUSE 7</Text>
              <Image
                style={styles.image}
                source={require("../assets/home10.jpg")}
              />
              <Text>2 Bedroom | 1 Bathroom | $675/Month</Text>
            </View>
            <View style={styles.arrowBorder} />
            <View style={styles.arrow} />
          </View>
        </Callout>
      </Marker>

      {/* HOUSE 8 */}
      <Marker
        style={styles.marker}
        coordinate={{
          latitude: 29.11740389210246,
          longitude: -82.10094788602672,
        }}
        image={require("../assets/map_marker_50.png")}
      >
        <Callout tooltip>
          <View>
            <View style={styles.bubble}>
              <Text style={styles.name}>HOUSE 6</Text>
              <Image
                style={styles.image}
                source={require("../assets/home11.jpg")}
              />
              <Text>3 Bedroom | 2 Bathroom | $750/Month</Text>
            </View>
            <View style={styles.arrowBorder} />
            <View style={styles.arrow} />
          </View>
        </Callout>
      </Marker>

      {/* HOUSE 10 */}
      <Marker
        style={styles.marker}
        coordinate={{
          latitude: 29.117391004075245,
          longitude: -82.1012905381193,
        }}
        image={require("../assets/map_marker_50.png")}
      >
        <Callout tooltip>
          <View>
            <View style={styles.bubble}>
              <Text style={styles.name}>HOUSE 10</Text>
              <Image
                style={styles.image}
                source={require("../assets/home12.jpg")}
              />
              <Text>2 Bedroom | 1 Bathroom | $650/Month</Text>
            </View>
            <View style={styles.arrowBorder} />
            <View style={styles.arrow} />
          </View>
        </Callout>
      </Marker>

      {/* HOUSE 11 */}
      <Marker
        style={styles.marker}
        coordinate={{
          latitude: 29.117516953226236,
          longitude: -82.10130327865525,
        }}
        image={require("../assets/map_marker_50.png")}
      >
        <Callout tooltip>
          <View>
            <View style={styles.bubble}>
              <Text style={styles.name}>HOUSE 10</Text>
              <Image
                style={styles.image}
                source={require("../assets/home13.jpg")}
              />
              <Text>2 Bedroom | 1 Bathroom | $625/Month</Text>
            </View>
            <View style={styles.arrowBorder} />
            <View style={styles.arrow} />
          </View>
        </Callout>
      </Marker>

      {/* HOUSE 12 */}
      <Marker
        style={styles.marker}
        coordinate={{
          latitude: 29.11761888416635,
          longitude: -82.10130059649691,
        }}
        image={require("../assets/map_marker_50.png")}
      >
        <Callout tooltip>
          <View>
            <View style={styles.bubble}>
              <Text style={styles.name}>HOUSE 12</Text>
              <Image
                style={styles.image}
                source={require("../assets/home14.jpg")}
              />
              <Text>2 Bedroom | 1 Bathroom | $600/Month</Text>
            </View>
            <View style={styles.arrowBorder} />
            <View style={styles.arrow} />
          </View>
        </Callout>
      </Marker>

      {/* HOUSE 13 */}
      <Marker
        style={styles.marker}
        coordinate={{
          latitude: 29.11772198673081,
          longitude: -82.10130126710315,
        }}
        image={require("../assets/map_marker_50.png")}
      >
        <Callout tooltip>
          <View>
            <View style={styles.bubble}>
              <Text style={styles.name}>HOUSE 13</Text>
              <Image
                style={styles.image}
                source={require("../assets/home15.jpg")}
              />
              <Text>2 Bedroom | 1 Bathroom | $600/Month</Text>
            </View>
            <View style={styles.arrowBorder} />
            <View style={styles.arrow} />
          </View>
        </Callout>
      </Marker>

      {/* HOUSE 14 */}
      <Marker
        style={styles.marker}
        coordinate={{
          latitude: 29.11783387609505,
          longitude: -82.10129187931746,
        }}
        image={require("../assets/map_marker_50.png")}
      >
        <Callout tooltip>
          <View>
            <View style={styles.bubble}>
              <Text style={styles.name}>HOUSE 14</Text>
              <Image
                style={styles.image}
                source={require("../assets/home16.jpg")}
              />
              <Text>3 Bedroom | 1.5 Bathroom | $600/Month</Text>
            </View>
            <View style={styles.arrowBorder} />
            <View style={styles.arrow} />
          </View>
        </Callout>
      </Marker>

      {/* HOUSE 15 */}
      <Marker
        style={styles.marker}
        coordinate={{
          latitude: 29.117965097111952,
          longitude: -82.10130059648132,
        }}
        image={require("../assets/map_marker_50.png")}
      >
        <Callout tooltip>
          <View>
            <View style={styles.bubble}>
              <Text style={styles.name}>HOUSE 12</Text>
              <Image
                style={styles.image}
                source={require("../assets/home17.jpg")}
              />
              <Text>2 Bedroom | 1 Bathroom | $650/Month</Text>
            </View>
            <View style={styles.arrowBorder} />
            <View style={styles.arrow} />
          </View>
        </Callout>
      </Marker>

      {/* HOUSE 16 */}
      <Marker
        style={styles.marker}
        coordinate={{
          latitude: 29.118075229074833,
          longitude: -82.10130327871471,
        }}
        image={require("../assets/map_marker_50.png")}
      >
        <Callout tooltip>
          <View>
            <View style={styles.bubble}>
              <Text style={styles.name}>HOUSE 16</Text>
              <Image
                style={styles.image}
                source={require("../assets/home18.jpg")}
              />
              <Text>2 Bedroom | 1 Bathroom | $500/Month</Text>
            </View>
            <View style={styles.arrowBorder} />
            <View style={styles.arrow} />
          </View>
        </Callout>
      </Marker>

      {/* HOUSE 17 */}
      <Marker
        style={styles.marker}
        coordinate={{
          latitude: 29.118188875919436,
          longitude: -82.10130327871471,
        }}
        image={require("../assets/map_marker_50.png")}
      >
        <Callout tooltip>
          <View>
            <View style={styles.bubble}>
              <Text style={styles.name}>HOUSE 16</Text>
              <Image
                style={styles.image}
                source={require("../assets/home19.jpg")}
              />
              <Text>2 Bedroom | 2 Bathroom | $700/Month</Text>
            </View>
            <View style={styles.arrowBorder} />
            <View style={styles.arrow} />
          </View>
        </Callout>
      </Marker>
    </MapView>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 16,
  },
  map: {
    height: "100%",
  },
  bubble: {
    flexDirection: "column",
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 6,
    borderColor: "#ccc",
    borderWidth: 0.2,
    padding: 15,
    width: 300,
    alignItems: "center",
  },

  arrow: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#fff",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#007a87",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -0.5,
  },

  image: {
    marginTop: 5,
    marginBottom: 5,
    width: 120,
    height: 80,
  },

  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default SearchcScreen;
