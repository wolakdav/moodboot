<template>
  <container>
    <v-row no-gutters>
    <div v-for="playlist in allplaylists" :key="playlist.id" class="mx-2 my-5" style="width:30%;">
          <v-card>
            <v-card-title>
              {{playlist.title}}
            </v-card-title>
          <v-card flat>
            <v-card tile v-for="song in playlist.songs" :key="song.name">
              <v-row>
                  <v-card-subtitle>{{song.name}} - {{song.length}}</v-card-subtitle>
                  <v-progress-linear
                  v-model: foo
                  color="red">
                  </v-progress-linear>
              </v-row>
            </v-card>
          </v-card>
          </v-card>
    </div>
    </v-row>
    
  </container>
</template>

<script>
  export default {
    name: 'home',

    data() {
      return {
        foo: 100,
      allplaylists : [
        { title: "list1",
        id:1,
        songs: [{name:"song1",length:"10.23"},{name:"song1",length:"10.23"} ,{name:"song1",length:"10.23"} ]
        },
                { title: "list2",
        id:2,
        songs: [{name:"song1",length:"10.23"},{name:"song1",length:"10.23"} ,{name:"song1",length:"10.23"} ]
        },
                { title: "list3",
        id:3,
        songs: [{name:"song1",length:"10.23"},{name:"song1",length:"10.23"} ,{name:"song1",length:"10.23"} ]
        },{ title: "list1",
        id:1,
        songs: [{name:"song1",length:"10.23"},{name:"song1",length:"10.23"} ,{name:"song1",length:"10.23"} ]
        },
                { title: "list2",
        id:2,
        songs: [{name:"song1",length:"10.23"},{name:"song1",length:"10.23"} ,{name:"song1",length:"10.23"} ]
        },
                { title: "list3",
        id:3,
        songs: [{name:"song1",length:"10.23"},{name:"song1",length:"10.23"} ,{name:"song1",length:"10.23"} ]
        }

      ]
    };},
  }
</script>
