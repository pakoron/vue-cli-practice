<!-- <script setup>
import { ref, watch } from 'vue'

const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')
const image = ref('')

// watch 関数は ref を直接扱えます
watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.indexOf('?') > -1) {
    answer.value = 'Thinking...'
    try {
      const res = await fetch('https://yesno.wtf/api')
      const data = await res.json()
      answer.value = data.answer
      image.value = data.image
    } catch (error) {
      answer.value = 'Error! Could not reach the API. ' + error
    }
  }
})
</script> -->
<!-- <script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script> -->
<template>
    <div id="app">

      <!-- ------------------------------------------------------------------------------------------------------ -->
      <caption v-on:mousemove="position(10,$event)" v-show="kotoPicture">
        <!-- イベントオブジェクトを使用するときは$eventを引数に取る（順番は先でも後でもいいけど、メソッドの引数の順番と合わせる） -->
        <img src=".././assets/2B36792D-616A-4BFC-80E6-D4883393A6A2_1_105_c.jpeg" alt="" width="200px">
        <img v-on:mousemove.stop src=".././assets/68F6B0FB-5D2B-47E6-9190-8AF341ED99DD_1_105_c.jpeg" alt="" width="200px">
        <p>X軸{{ X }}  Y軸{{ Y }}</p>
      </caption>
      <button @click="showPicture">ことの写真</button>
      <!-- ------------------------------------------------------------------------------------------------------ -->
      <div>
        <a v-on:click.prevent :href="pinterest" target="_blank">ピンタレスト</a>&emsp;
        <a :[attribute]="urlQiita" target="_blank">キータ</a>&emsp;
        <a v-bind="canvaObject" target="_blank">{{ canva }}</a>&emsp;
      </div>
      <!-- ------------------------------------------------------------------------------------------------------ -->
      <input type="text" @keyup.space.enter="myAlert">
      <!-- ------------------------------------------------------------------------------------------------------ -->

      <h2>{{ subtitle | upperCase | spaceTrim }}</h2>
      <!-- <p>
        Ask a yes/no question:
        <input v-model="question" />
      </p>
      <p>{{ answer }}</p>
      <p><img :src="image" alt=""></p> -->

  <!-- ------------------------------------------------------------------------------------------------------ -->
      <Like-page v-model="eventData.comment" :memo.sync = eventData.memo>
      <!-- <Like-page :value="eventData.comment"
                  @input = "eventData.comment = $event"> -->
          <!-- v-slotを使うときはtemplateを使う -->
        <template #title>
          <div>
            <!-- クラスのbindのやり方。単語を繋げるときのケバブケースの時はクオーテーションで囲む -->
            <!-- <h3 :class="{ 'wish-place': true, after: false }">親内容{{ contents.title }}</h3> --> <!-- やり方① -->
            <!-- <h3 :class="{ 'wish-place': isActive, after: !isActive }">親内容{{ contents.title }}</h3> やり方② -->
            <h3 :class="classObject">親内容{{ contents.title }}</h3> <!-- やり方3 -->
          </div>
        </template>
        <template #number><span>③</span></template>
        <!-- <template v-slot:text><section :class="[{'wish-place': !isActive}, blue]">{{ textSample }}</section></template> -->
        <template v-slot:text><section :class="[blue, big]">{{ textSample }}</section></template>
        <template v-slot:default="slotProps"><p>{{ slotProps.user.firstName }}&nbsp;{{ slotProps.user.lastName }}</p></template>
      </Like-page>
      <!-- ------------------------------------------------------------------------------------------------------ -->

      <p v-border:solid.round.shadow="{width:'10px', color: 'yellow'}">アイウエオ</p>
      <button @[event]="changeTitle()">タイトル変える</button>

      <ul v-for="people in family" :key="people">
        <li>{{ people }}</li>
      </ul>

  <!-- ------------------------------------------------------------------------------------------------------ -->
      <!-- やり方①子供から受け取った値$eventをfamilyに代入する（js式を書いている） -->
      <Fine-page :familyMember="family" v-on:my-click="family = $event">

        <!-- やり方②子供から受け取った値$eventをfamilyに代入するのをgetFullNameというメソッドで実行（メソッドを書いている） -->
      <!-- <Fine-page :familyMember="family" @my-click="getFullName()"> -->
      </Fine-page>


      <p>子ページから渡された名前</p>
  <!-- ------------------------------------------------------------------------------------------------------ -->
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
          <pre>{{ eventData.age.length >= 3? '3つ以上選択されています' : '' }}</pre>
          <pre>{{ lessThanThree }}</pre>
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

        <div>行きたい場所
          <v-select name="locations" :options="locationNames" v-model="eventData.location" multiple>
          </v-select>
          <!-- <select v-model="eventData.location" multiple>
            <option v-for="location in locations" :key="location">{{ location }}</option>
          </select> -->

            <!-- <img :src="locations.find(location => location.name === eventData.location[0])?.imageUrl" alt="" width="100px"> -->

          <!-- <div v-if="eventData.location.length > 0"> -->
            <img v-for="location in eventData.location" :key="location" :src="getLocationImageUrl(location)" alt="" width="100px">
          <!-- </div> -->
          <pre>{{ eventData.location }}</pre>

          <v-select :options="lank">
          </v-select>

        </div>



        <p>
          <input type="checkbox" id="agree" v-model.number="eventData.agree">
          <label for="agree">非公開</label>
          <pre>{{ eventData.agree }}</pre>
        </p>
      </form>

      <form action="" style="padding-bottom: 100px;">
        <input type="text" v-model="searchValue">
        <button @click.prevent="searchTV(searchValue)">テレビ番組を検索</button>
        {{ message }}
        <img :src="imgTV">
          <ul v-for="tvShow in tvShows" :key="tvShow.name">
            <li>{{ tvShow.name }}<img :src="tvShow.image"></li>
          </ul>
          <br>
          郵便番号<input type="search" v-model="postalCode"><button @click.prevent="searchPostalCode(postalCode)">郵便番号を検索</button>
          <p>{{ area.kana1 }}{{ area.kana2 }}{{ area.kana3 }}{{ area.prefcode }}</p>
          <p>{{ area.address1 }}{{ area.address2 }}{{ area.address3 }}{{ area.zipcode }}</p>
      </form>

    </div>

  </template>

  <script>
  import LikePage from '.././components/LikePage.vue';
  import FinePage from '.././components/FinePage.vue';
  import { sampleMixin } from "@/sampleMixin";
  import axios from 'axios';

  export default{
    mixins:[sampleMixin],
    data(){
      return{
        subtitle:"　　　　　　　　　Hello World",
        textSample:"親ページの内容",
        family: ["yasu","masu","pachi","koto"],
        contents:{
          title:"巽です"
        },
        isActive: true,//クラスのバインディング用
        pink: 'wish-place',//クラスのバインディング用
        blue: 'after',//クラスのバインディング用
        big: 'big-font',//クラスのバインディング用
        number:"",
        pinterest:"https://www.pinterest.jp/",
        attribute: 'href',
        urlQiita:"https://qiita.com/",
        canva:"キャンバ",
        X: 0,
        Y: 0,
        event:"click",
        searchValue:"",
        message:"",
        imgTV:"",
        tvShows: [],
        postalCode:"",
        area:{},
        canvaObject:{
          // href:this.urlCanva,
          href:"https://www.canva.com/",
          name:"canva",
          id:3,

        },

        kotoPicture:false,
        lank:["松","竹","梅"],
        // locations:["ドブロブニク","サントリーニ島","チヴィタ","プリトヴィツェ国立公園","シントラ","ポルト","メテオラ"],
        locations:[
          {
            id:1,
            name:"ドブロブニク",
            imageUrl: "https://aoitrip.jp/wp-content/uploads/2017/08/IMG_8418.jpg"
          },
          {
            id:2,
            name:"サントリーニ島",
            imageUrl: "https://tabi-pocket-image.tabikobo.com/wp-content/uploads/2022/06/22124416/main1.jpg"
          },
          {
            id:3,
            name:"チヴィタ",
            imageUrl: "https://cdn2.veltra.com/ptr/20190422022442_982222760_2037_0.jpg?imwidth=800&impolicy=custom"
          },
          {
            id:4,
            name:"プリトヴィツェ国立公園",
            imageUrl: "https://ecotopia.earth/wp-content/uploads/1842-1.jpg"
          },
          {
            id:5,
            name:"シントラ",
            imageUrl: "https://cdn2.veltra.com/ptr/20220720005027_647258863_2668_0.jpg?imwidth=800&impolicy=custom"
          },
          {
            id:6,
            name:"ポルト",
            imageUrl: "https://cdn2.veltra.com/ptr/20160401134044_486972244_10089_0.jpg?imwidth=800&impolicy=custom"
          },
          {
            id:7,
            name:"メテオラ",
            imageUrl: "https://cdn2.veltra.com/ptr/20170704103806_2032930073_2392_0.jpg?imwidth=800&impolicy=custom"
          },
        ],
        eventData:{
          formTitle:"フォームのタイトルです",
          tel:987657899,
          mail:"ppp@com",
          times:1,
          memo:"",
          agree:false,
          age:[],
          gender:"未回答",
          location:["シントラ"],
          locationPicture:["https://cdn2.veltra.com/ptr/20220720005027_647258863_2668_0.jpg?imwidth=800&impolicy=custom"],
          comment:"アイウエオ",
          text:"わーい",

        }
      }
    },
    methods:{
      changeTitle: function(){
        this.contents.title = "中谷です";
        this.isActive = !this.isActive

      },
      getFullName(value) {
        this.family = value;
      },
      showPicture(){
        this.kotoPicture = !this.kotoPicture
        this.canvaObject.href = "https://codepen.io/pen/"
        this.canvaObject.name = "codepen"
        this.canva = "コードペン"
      },
      position(num,event){
        this.X = event.clientX / num
        this.Y = event.clientY
      },
      myAlert(){
        alert("スペースとエンターは押さないで！")
      },
      getLocationImageUrl(location) {
        const selectedLocation = this.locations.find(item => item.name === location);
        return selectedLocation ? selectedLocation.imageUrl : '';
      },
      async searchTV(searchValue){
        await axios.get(`https://api.tvmaze.com/search/shows?q=${searchValue}`)
          .then((res) => {
            // this.message="検索成功！！"
            console.log(res.data)
            this.message=res.data[0].show.name
            this.imgTV = res.data[0].show.image.medium
            // this.imgTVs = res.data.show.image.medium
            // console.log(this.imgTVs)
            this.tvShows = res.data.map(item => ({
            name: item.show.name,
            image: item.show.image ? item.show.image.medium : null
          }));

          })
          .catch((error) => {
            console.log(error);
            this.message ="失敗！！"
          })
          .finally(function () {
            // always executed
          });

      },
      async searchPostalCode(postalCode){
        await axios.get(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${postalCode}`)
        .then((res) => {
            // this.message="検索成功！！"
            console.log(res.data)
            // this.area = res.data.results[0].address1
            this.area = res.data.results[0]
            this.message =""

          })
          .catch((error) => {
            console.log(error);
            this.message ="そんな住所ないよー"
          })

      }

    },
    computed:{
      lessThanThree(){
        return this.eventData.age.length >= 3 ? '3つ以上選択されています' : ''
      },
      classObject(){
        return {
          'wish-place': this.isActive,
          after: !this.isActive
        }
      },
      locationNames() {
        return this.locations.map(location => location.name);
      }


    },
    components:{
      LikePage,
      FinePage
    },

    filters:{
      // filterはthisが使えない
      spaceTrim(value){
        return value.trim();
      }
    },
    watch: {
      family(){
        const vm = this;
        setTimeout(function(){
          vm.family = ["やす","ます","ぱち","こと"]
        }, 2000)
      },

    }
  }
  </script>
  <style scoped>
  .wish-place {
      color:#fff;
      background-color: #ff469c;
      padding:10px;
      font-family: serif;
      border-radius: 6px;
  }
  .after {
      color:#333;
      background-color: #c0fff6;
      font-family:'Courier New', Courier, monospace;
      border: 2px dashed #2b40ff;
      font-style: italic;
      padding: 20px;
  }
  .big-font{
      font-size: 2rem;
  }
  </style>

