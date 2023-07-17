<template>
    <div>
        <h1 :style="{color: textColor,'background-color': bgColor}">FinePageの内容です</h1>
        <!-- <p>{{ familyMember[3] }}</p> -->
        <!-- <p>{{ familyFullName }}</p> -->
        <button :style="styleObject" @click="changeMember()">氏名に切り替える</button>
    </div>
</template>
 <script>
export default{
    props: ["familyMember"],
    data(){
        return{
            textColor: 'orange',
            bgColor: 'yellow',
            styleObject: {
                background: 'pink',
                padding: '8px 10px',
                border:'none',
                'border-radius': '10px',
                cursor: 'pointer',
                'box-shadow': '3px 3px 2px rgba(0,0,0,0.2)'
            }
        }
    },
    computed: {
        familyFullName(){
            return this.familyMember.map(member => member + " Tatsumi");
        }
    },
    methods:{
        changeMember(){
            // 第一引数はカスタムイベント名（何でも）、第二引数はデータ自身を入れる
            // $emitで作るカスタムイベント名はケバブケースにする
            this.$emit("my-click",this.familyFullName)
        }
    }
}
</script>
<style scoped>
    .title{
        color:red;
        font-family: sans-serif;
    }
    .bg-blue{
        background-color: #84a9ff;
    }
    /* button{
        background: pink;
        padding: 8px 10px;
        border:none;
        border-radius: 10px;
        cursor: pointer;
        box-shadow: 3px 3px 2px rgba(0,0,0,0.2);
    } */
    button:hover{
        opacity: 0.7;
    }
    button:active{
        box-shadow: none;
        position:relative;
        top:3px;
        left:3px;
    }
</style>
