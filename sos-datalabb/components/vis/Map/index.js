import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from "react-simple-maps";

import sweden from "./sweden-counties.json";
import swedenMuni from "./sweden-municipalities.json";

const Map = ({ type }) => {
  return (
    <div>
      <ComposableMap
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [-20.0, -52.0, 0],
          scale: 1500,
          center: [0, 10]
        }}
      >
        <Geographies
          fill="#eee"
          stroke="#999"
          geography={type == "muni" ? swedenMuni : sweden}
        >
          {({ geographies }) =>
            geographies.map(geo => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default Map;
