<template>
    <v-container fill-height fluid ma-0 pa-0>
      <v-row align="center" justify="space-around">
        <v-card class="nameCard">
          <v-card-title>Total Astronauts: </v-card-title>
              <v-card-text class="subhead font-weight-bold">
                {{total}}
              </v-card-text>
        </v-card>
      </v-row>
      <v-row align="center" justify="space-around" v-for="astro in people" v-bind:key=astro.name>
        <v-card class="nameCard">
           <v-row>
            <v-col>
              <v-card-title>Astronaut Name: </v-card-title>
              <v-card-text class="subhead font-weight-bold">
                {{astro.name}}
              </v-card-text>
            </v-col>

            <v-col>
              <v-card-title>Currently Aboard: </v-card-title>
              <v-card-text class="subhead font-weight-bold">
                {{astro.craft}}
              </v-card-text>
            </v-col>
          </v-row>

        </v-card>
      </v-row>
      <v-snackbar v-model="snackbar"> {{snackbarMessage}} </v-snackbar>
    </v-container>
</template>

<style scoped>
.nameCard
{
  width: 33vw;
}
</style>


<script src="./peopleInSpace.js"/>
