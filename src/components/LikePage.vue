<template>
    <div>
        <slot name="title"><h1>子内容</h1></slot>
            <slot name="number"><span>①</span></slot>
            <p>LikePage</p>

            <slot name="text"><section>子ページの内容</section></slot>
    </div>
</template>
 <script>
export default{

}
</script>
