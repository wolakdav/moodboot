<template>
  <container>
    <v-row no-gutters>
    <div v-for="playlist in allplaylists" :key="playlist.id" class="mx-2 my-5" style="width:30%;">
          <v-card>
            <v-card-title>
              {{playlist.title}}
            </v-card-title>
          <v-card flat>
            <v-card tile v-for="song in playlist.songs" :key="song.name" v-on:click="selectedAudio(song.link)">
              <v-row>
              <v-avatar class="ml-2">
                <v-img 
                  max-height="50%" 
                  max-width="50%" 
                  src="https://lh3.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc=s180">
                </v-img>
              </v-avatar>
                  <v-card-subtitle>{{song.name}} - {{song.length}}</v-card-subtitle>
              </v-row>
            </v-card>
          </v-card>
          </v-card>
    </div>
    </v-row>
   <youtube :video-id="selectedAudioLink" :player-vars="{autoplay: 1}" :key="selectedAudioLink"></youtube>
  </container>
</template>
<!-- http://64.225.125.175:5000/ is the IP of the API-->
<script>

  export default {
    name: 'home',

    data() {
      return {
      selectedAudioLink: undefined,
      allplaylists : [
        { title: "list1",
        id:1,
        songs: [{name:"song1",length:"10.23", link:"https://www.youtube.com/watch?v=S1fIW5kU2Zw"},{name:"song2",length:"10.23", link: "https://open.spotify.com/track/5kDJIZgf2UhN4W9C5hkXVE?si=WWSIHLZiTISFdZyW49cg9g"} ,{name:"song3",length:"10.23", link:"https://open.spotify.com/track/5kDJIZgf2UhN4W9C5hkXVE?si=WWSIHLZiTISFdZyW49cg9g"} ]
        },
                { title: "list2",
        id:2,
       songs: [{name:"song5",length:"10.23", link:"https://www.youtube.com/watch?v=FjOgTKlc1P8"},{name:"songa",length:"10.23", link: "https://open.spotify.com/track/5kDJIZgf2UhN4W9C5hkXVE?si=WWSIHLZiTISFdZyW49cg9g"} ,{name:"song4",length:"10.23", link:"https://open.spotify.com/track/5kDJIZgf2UhN4W9C5hkXVE?si=WWSIHLZiTISFdZyW49cg9g"} ]  },
                { title: "list3",
        id:3,
     songs: [{name:"song6",length:"10.23", link:"https://www.youtube.com/watch?v=S1fIW5kU2Zw"},{name:"songv",length:"10.23", link: "https://open.spotify.com/track/5kDJIZgf2UhN4W9C5hkXVE?si=WWSIHLZiTISFdZyW49cg9g"} ,{name:"songe",length:"10.23", link:"https://open.spotify.com/track/5kDJIZgf2UhN4W9C5hkXVE?si=WWSIHLZiTISFdZyW49cg9g"} ]   },{ title: "list1",
        id:4,
    songs: [{name:"song7",length:"10.23", link:"https://www.youtube.com/watch?v=S1fIW5kU2Zw"},{name:"songb",length:"10.23", link: "https://open.spotify.com/track/5kDJIZgf2UhN4W9C5hkXVE?si=WWSIHLZiTISFdZyW49cg9g"} ,{name:"songf",length:"10.23", link:"https://open.spotify.com/track/5kDJIZgf2UhN4W9C5hkXVE?si=WWSIHLZiTISFdZyW49cg9g"} ]    },
                { title: "list2",
        id:5,
   songs: [{name:"song8",length:"10.23", link:"https://www.youtube.com/watch?v=S1fIW5kU2Zw"},{name:"songc",length:"10.23", link: "https://open.spotify.com/track/5kDJIZgf2UhN4W9C5hkXVE?si=WWSIHLZiTISFdZyW49cg9g"} ,{name:"songg",length:"10.23", link:"https://open.spotify.com/track/5kDJIZgf2UhN4W9C5hkXVE?si=WWSIHLZiTISFdZyW49cg9g"} ]     },
                { title: "list3",
        id:6,
   songs: [{name:"song9",length:"10.23", link:"https://www.youtube.com/watch?v=S1fIW5kU2Zw"},{name:"songd",length:"10.23", link: "https://open.spotify.com/track/5kDJIZgf2UhN4W9C5hkXVE?si=WWSIHLZiTISFdZyW49cg9g"} ,{name:"songh",length:"10.23", link:"https://open.spotify.com/track/5kDJIZgf2UhN4W9C5hkXVE?si=WWSIHLZiTISFdZyW49cg9g"} ]    }

      ]
    };},
    methods : {
      selectedAudio : function(link) {
        this.$data.selectedAudioLink = link.slice(-11);
        console.log(this.$data.selectedAudioLink)
    
      }
    }

  }
</script>
