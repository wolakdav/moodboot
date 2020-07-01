<template>
  <container class="mx-2">
    <v-card class="mx-2">
      <v-card-title>New Playlist</v-card-title>
      <v-card-subtitle
        >Create a new playlist by filling out the following
        information</v-card-subtitle
      >
      <v-row class="ml-2">
        <v-col cols="5">
          <v-text-field
            v-model="newPlaylistTitle"
            label="Playlist name"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-card class="mx-2" flat>
        <v-card-title>Add Songs</v-card-title>
        <v-btn
          fab
          dark
          small
          color="primary"
          v-on:click="amtOfSongsAdded.push(Object.assign({}, songModel))"
        >
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
        <v-card v-for="(song, index) in amtOfSongsAdded" :key="index" flat tile>
          <div class="ml-2 my-2 flex">
            <v-row>
              <v-btn
                fab
                dark
                small
                color="red"
                v-on:click="amtOfSongsAdded.splice(index, 1)"
                class="mx-2"
              >
                <v-icon dark>mdi-minus</v-icon>
              </v-btn>
              <v-text-field
                label="Song to add"
                v-model="song.songLink"
                clearable
                style="max-width: 50%;"
              ></v-text-field>
            </v-row>
            <v-img
              v-show="song.songLink !== undefined"
              max-width="30%"
              :src="getYoutubeThumbnail(song.songLink)"
            >
            </v-img>
          </div>
        </v-card>
      </v-card>
    </v-card>
  </container>
</template>
<!-- http://64.225.125.175:5000/ is the IP of the API-->
<script>
export default {
  name: "playlistCreator",

  data() {
    return {
      newPlaylistTitle: undefined,
      amtOfSongsAdded: [],
      songModel: {
        songTitle: undefined,
        songLink: undefined,
        songThumbnail: undefined,
      },
    };
  },
  methods: {
    getYoutubeThumbnail: function (link) {
      if (link === undefined || link.length < 11) {
        return undefined;
      }
      return "https://img.youtube.com/vi/" + link.slice(-11) + "/sddefault.jpg";
    },
  },
};
</script>
