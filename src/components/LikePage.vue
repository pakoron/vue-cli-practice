<template>
    <div>
        <h1>LikePageの内容です</h1>
        <slot name="title">
            <div>
                <h3>子内容</h3>
            </div>
        </slot>
        <slot name="number"><span>①</span></slot>


        <slot name="text">
            <section>子ページの内容</section>
        </slot>
        <label for="comment">コメント</label>
        <input type="text" id="comment"
            :value="value"
            @input="$emit('input',$event.target.value)">
            <pre>{{ value }}</pre>

        <p>
            <label for="memo">メモ</label>
            <textarea name="" id="memo" cols="30" rows="10" v-model="localMemo"></textarea>
        </p>
        <pre>{{ memo }}</pre>


        <!-- <slot name="default" :userName="user"><p>パチ</p></slot> -->
    </div>
</template>
 <script>
export default{
    props: ["value","memo"],
    data(){
        return{
            user:{
                firstName:"Shinpachi",
                lastName:"Tatsumi"
            },
            localMemo: this.memo,
        }
    },
    watch: {
        localMemo(newMemo) {
        this.$emit('update:memo', newMemo);
        }
    }
}
</script>
