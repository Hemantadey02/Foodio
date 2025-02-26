import React from "react";
import { Wrapper } from "@googlemaps/react-wrapper";

const Map = ({ center, zoom, markers, ...props }) => {
    const [map, setMap] = React.useState();
    const ref = React.useRef(null);

    React.useEffect(() => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, { center, zoom }));
        }
    }, [ref, map, center, zoom]);

    React.useEffect(() => {
        if (map) {
            markers?.forEach((markerData) => {
                const newMarker = new window.google.maps.Marker();
                newMarker.setOptions({
                    position: markerData,
                    map: map,
                    title: "Hello World!",
                });
            });
        }
    }, [map, markers]);

    return <div ref={ref} id="map" {...props} />;
};

const GoogleMap = ({ children, showMarker = false, className, ...restProps }) => {
    const [currentLocation, setLocation] = React.useState({ lat: 0, lng: 0 });

    React.useEffect(() => {
        navigator?.geolocation.getCurrentPosition(({ coords: { latitude: lat, longitude: lng } }) => {
            const pos = { lat, lng };
            setLocation(pos);
        });
    }, []);

    const apikey = import.meta.env?.VITE_GOOGLE_MAP_ID || ""; // Ensure a default value if the key is missing

    return (
        <Wrapper apikey={apikey}>
            <Map
                center={currentLocation}
                zoom={3}
                className={className}
                markers={showMarker ? [currentLocation] : []}
                {...restProps}
            />
        </Wrapper>
    );
};

export { GoogleMap };