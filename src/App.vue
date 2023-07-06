<template>
  <div id="app">

    <router-view></router-view>
<h2>{{ subtitle | upperCase | spaceTrim }}</h2>
    <Like-page>
      <template #title><h1>親内容{{ contents.title }}</h1></template>
      <template #number> <span>③</span></template>
      <template #text><section>親ページの内容です</section></template>

    </Like-page>

    <p v-border:solid.round.shadow="{width:'10px', color: 'yellow'}">アイウエオ</p>
    <button @click="changeTitle()">タイトル変える</button>
  <form action="">
    <p>
      <label for="formTitle">フォームタイトル</label>
      <input type="text" id="formTitle" v-model="eventData.formTitle">
    </p>
    <p>
      <label for="tel">電話番号</label>
      <input type="tel" id ="tel" v-model="eventData.tel">
    </p>
    <p>
      <label for="mail">メールアドレス</label>
      <input type="mail" id="mail" v-model="eventData.mail">
    </p>
    <p>
      年齢
      <input type="checkbox" id="10" value="10代" v-model="eventData.age">
      <label for="10">10代</label>
      <input type="checkbox" id="20" value="20代" v-model="eventData.age">
      <label for="20">20代</label>
      <input type="checkbox" id="30" value="30代" v-model="eventData.age">
      <label for="30">30代</label>
      <input type="checkbox" id="40" value="40代" v-model="eventData.age">
      <label for="40">40代</label>
      <pre>{{ eventData.age }}</pre>
    </p>
    <p>性別
      <input type="radio" id="male" value="男性" v-model="eventData.gender">
      <label for="male">男性</label>
      <input type="radio" id="female" value="女性" v-model="eventData.gender">
      <label for="female">女性</label>
      <input type="radio" id="question" value="未回答" v-model="eventData.gender">
      <label for="question">未回答</label>
      <pre>{{ eventData.gender }}</pre>
    </p>
    <p>
      <label for="times">回数</label>
      <input type="number" id="times" v-model.number="eventData.times">
      {{ typeof eventData.times }}
    </p>
    <p>行きたい場所
      <select v-model="eventData.location" multiple>
        <option v-for="location in locations" :key="location">{{ location }}</option>
      </select>
      <pre>{{ eventData.location }}</pre>
    </p>

    <p>
      <label for="memo">メモ</label>
      <textarea name="" id="memo" cols="30" rows="10" v-model="eventData.memo"></textarea>
    </p>
    <pre>{{ eventData.memo }}</pre>

    <p>
      <input type="checkbox" id="agree" v-model.number="eventData.agree">
      <label for="agree">非公開</label>
      <pre>{{ eventData.agree }}</pre>
    </p>
  </form>

  </div>


</template>

<script>
import LikePage from './components/LikePage.vue';
import { sampleMixin } from "@/sampleMixin";

export default{
  mixins:[sampleMixin],
  data(){
    return{
      subtitle:"　　　　　　　　　Hello World",
      contents:{
        title:"巽です"
      },
      locations:["ドブロブニク","サントリーニ島","チヴィタ","プリトヴィツェ国立公園","シントラ","ポルト","メテオラ"],
      eventData:{
        formTitle:"フォームのタイトルです",
        tel:987657899,
        mail:"ppp@com",
        times:1,
        memo:"",
        agree:false,
        age:[],
        gender:"未回答",
        location:["シントラ"]




      }
    }
  },
  methods:{
    changeTitle: function(){
      this.contents.title = "中谷です";
      // return this.contents.title;
    }
  },
  components:{
    LikePage
  },

  filters:{
    // filterはthisが使えない
    spaceTrim(value){
      return value.trim();
    }
  }
}
</script>
