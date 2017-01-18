export default {
    flexBoxStyles:function(){
      let fp = this.flexProps;
      let styles = {}
      for(var prop in fp){
        styles[prop] = fp[prop].selection;
      }
      console.log("COMPUTING")
      return styles
    }
  }