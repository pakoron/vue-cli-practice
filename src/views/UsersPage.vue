<template>
    <div>
        <h1>Usersスロットの練習</h1>
        <Users-children>
            <h2>デフォルトタイトル</h2>
            <template v-slot:number>
                <p>{{ number }}親の内容</p>
            </template>
            <!-- 動的スロット -->
            <template v-slot:[animal]>
                鳥かなパンダかな
            </template>
            <button @click="animal='panda'">パンダに変えます</button>

            <p>デフォルトスロット</p>
            <!-- 子からプロパティ貰う -->
            <template #content="slotItem">
                <p>{{ slotItem }}親の本文</p>
                <p>{{ slotItem.choco.name }}が{{ slotItem.choco.count }}個あります。全部で{{ slotItem.choco.price }}円です。</p>
                <img :src="slotItem.picture" alt="ことだよ">
            </template>
        </Users-children>
    </div>
</template>
<script>
  import UsersChildren from '.././components/UsersChildren.vue';
  import { sampleMixin } from "@/sampleMixin";
//   import axios from 'axios';

  export default{
    mixins:[sampleMixin],
    data(){
      return{
        number:10,
        animal:"bird"
      }
    },
    methods:{
    },
    computed:{
    },
    components:{
        UsersChildren,
    },

    filters:{
    },
    watch: {
    }
  }
  </script>
