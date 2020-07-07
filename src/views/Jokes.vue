<template>
  <div>
    <div>
      <TitleComp :msg="jokeTitle"/>
    </div>
    <div>
      <b-col>
        <b-row class="justify-content-around">
          <CardComp v-for="(jokes,i) in jokes" :key="i" :title="Question" :bodMessage="jokes.setup"></CardComp>
          <CardComp v-for="(joke,j) in jokes" :key="j" :title="Answer" :bodMessage="joke.punchline"></CardComp>
        </b-row>
        <b-row class="justify-content-around">
          <b-button @click="ReloadJokes()"> Reload Joke </b-button>
        </b-row>
      </b-col>
    </div>
</div>
</template>

<script>
import Axios from 'axios';

export default {
  name: 'Jokes',
  data() {
    return {
      jokeTitle: 'Jokes',
      jokes: [],
      Question: 'Question',
      Answer: 'Punchline' 
    }
  },
  mounted () {
    Axios
      .get('https://official-joke-api.appspot.com/jokes/programming/random')
      .then(response => {this.jokes = response.data})
      .catch(e => console.log(e))
  },
  methods: {
    ReloadJokes: function() {
      Axios
      .get('https://official-joke-api.appspot.com/jokes/programming/random')
      .then(response => {this.jokes = response.data})
      .catch(e => console.log(e))
    }
  }
}
</script>