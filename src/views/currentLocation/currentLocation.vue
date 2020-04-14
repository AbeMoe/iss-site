<template>
    <v-container fill-height fluid ma-0 pa-0>
      <v-row align="center" justify="space-around">
        <v-col>
          <GmapMap
            ref="map"
            :center="center"
            :zoom="4"
            map-type-id="terrain"
            style="width: 100%; height: 100vh;"
          >
            <GmapMarker
              :position="position"
            />

          </GmapMap>
        </v-col>
      </v-row>
    </v-container>
</template>

<script src="./currentLocation.js"/>
