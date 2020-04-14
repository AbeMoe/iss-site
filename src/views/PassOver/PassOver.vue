<template>
    <v-container fill-height fluid ma-0 pa-0>
      <v-row align="center" justify="space-around">
        <v-col>
          <GmapMap
            @click='passOverTime'
            ref="map"
            :center="center"
            :zoom="4"
            map-type-id="terrain"
            style="width: 100%; height: 100vh;"
          >
            <GmapMarker
              :position="position"
              :label="label"
              style="background-color:blue;"
            />

          </GmapMap>
        </v-col>
      </v-row>
      <v-snackbar v-model="snackbar"> {{snackbarMessage}} </v-snackbar>
    </v-container>
</template>

<script src="./PassOver.js"/>
