export const sampleMixin = {
  data(){
    return{
      subtitle:"　　　　　　　　　Hello World",
      contents:{
        title:"タツミです"
      }
    }
  },
  directives:{
    // directiveはthisが使えない
        border(el,binding){
        // el.style.border = "solid black 2px";
        el.style.borderWidth = binding.value.width;
        el.style.borderColor = binding.value.color;
        el.style.borderStyle = binding.arg;
        if(binding.modifiers.round){
            el.style.borderRadius = "20px";
        }
        if(binding.modifiers.shadow){
            el.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.5)";
        }

    }
  },
}
