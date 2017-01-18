export default {
    flexBoxStyles(){
      let fp = this.flexProps;
      let styles = {}
      for(var prop in fp){
        styles[prop] = fp[prop].selection;
      }
      return styles
    }
  }