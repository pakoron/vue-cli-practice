<template>
    <div>

        <slot name="number">
            <p>子の内容</p>
        </slot>
        <slot name="content" :choco="item" :picture="imageCroatia">
            <p>本文</p>
        </slot>
        <slot>
            <p>子デフォ</p>
        </slot>
        <!-- 動的スロット -->
        <slot name="bird">
            <p>とりさん</p>
        </slot>
        <slot name="panda">
            <p>パンダ</p>
        </slot>
    </div>
</template>
 <script>
export default{
    props: [],
    data(){
        return{
            item: {
                name:"チョコレート",
                count:2,
                price:120,
            },
            imageCroatia:"https://a.cdn-hotels.com/gdcs/production107/d621/9f61cbd9-1ec5-42e2-8e81-795c9697bf9b.jpg?impolicy=fcrop&w=1600&h=1066&q=medium",

        }
    },
    computed: {

    },
    methods:{

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
å
