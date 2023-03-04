<template>
    <div>
         <div class="row">
             <div class="col-6">
                 <div class="pac-card" id="pac-card">
                     <div>
                         <div id="title">Autocomplete search</div>
                         <div id="type-selector" class="pac-controls">
                             <div id="pac-container"><br/>
                                <input type="text" v-model="form.name" class="form-control" placeholder="Name" /> <br/>
                                <input type="text" v-model="form.phone" class="form-control" placeholder="Phone" /><br/>
                                <input id="pac-input" type="text" placeholder="Enter a location"  class="form-control" /><br/>
                                <input type="text" readonly :value="form.latitude" class="form-control" placeholder="Lat" /> <br/>
                                <input type="text" readonly :value="form.longitude" class="form-control" placeholder="Lng" /><br/>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
             <div class="col-6">
                 <div id="map"></div>
             </div>
             <div id="infowindow-content">
                 <span id="place-name" class="title"></span>
                 <br />
                 <span id="place-address"></span>
             </div>
         </div>
    </div>
</template>

<script>
import AddressModel from '@/models/Address';

export default {
  data() {
    return {
      form: (new AddressModel()).getFormState()
    }
  },
  mounted() {
    window.initMap = () => {
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 40.749933, lng: -73.98633 },
        zoom: 13,
        mapTypeControl: false,
      });
      const card = document.getElementById("pac-card");
      const input = document.getElementById("pac-input");
      const options = {
        fields: ["formatted_address", "geometry", "name"],
        strictBounds: false,
        types: ["establishment"],
      };

      // map.controls[google.maps.ControlPosition.TOP_LEFT].push(card);

      const autocomplete = new google.maps.places.Autocomplete(input, options);

      // Bind the map's bounds (viewport) property to the autocomplete object,
      // so that the autocomplete requests use the current map bounds for the
      // bounds option in the request.
      autocomplete.bindTo("bounds", map);

      const infowindow = new google.maps.InfoWindow();
      const infowindowContent = document.getElementById("infowindow-content");

      infowindow.setContent(infowindowContent);

      const marker = new google.maps.Marker({
        map,
        anchorPoint: new google.maps.Point(0, -29),
      });

      autocomplete.addListener("place_changed", () => {
        infowindow.close();
        marker.setVisible(false);

        const place = autocomplete.getPlace();

        if (!place.geometry || !place.geometry.location) {
          // User entered the name of a Place that was not suggested and
          // pressed the Enter key, or the Place Details request failed.
          window.alert("No details available for input: '" + place.name + "'");
          return;
        }

        // If the place has a geometry, then present it on a map.
        if (place.geometry.viewport) {
          map.fitBounds(place.geometry.viewport);
        } else {
          map.setCenter(place.geometry.location);
          map.setZoom(17);
        }

        this.form.latitude = place.geometry.location.lat();
        this.form.longitude = place.geometry.location.lng();

        marker.setPosition(place.geometry.location);
        marker.setVisible(true);
        infowindowContent.children["place-name"].textContent = place.name;
        infowindowContent.children["place-address"].textContent =
          place.formatted_address;
        infowindow.open(map, marker);
      });
    }


    const plugin = document.createElement("script");
    plugin.setAttribute(
      'src', `https://maps.googleapis.com/maps/api/js?callback=initMap&libraries=places&key=${process.env.VUE_APP_GOOGLE_API_KEY}`
    );
    plugin.async = true;
    document.head.appendChild(plugin);
  }
};
</script>

<style lang="scss" scoped>
  #map {
    height: 400px; /* The height is 400 pixels */
    width: 100%; /* The width is the width of the web page */
  }
  #description {
  font-family: Roboto;
  font-size: 15px;
  font-weight: 300;
}

#infowindow-content .title {
  font-weight: bold;
}

#infowindow-content {
  display: none;
}

#map #infowindow-content {
  display: inline;
}
#title {
  color: #fff;
  background-color: #4d90fe;
  font-size: 25px;
  font-weight: 500;
  padding: 6px 12px;
}
</style>