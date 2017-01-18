
import vue_0 from "./components/flexbox/flexbox.vue"; 

// This was written by the componentCompiler task in gulpfile.js
let components = {}
let arr = [
	vue_0
]
arr.forEach( // renames each component by its name so we can easily import them in App.vue
	(component)=>{
		components[component.name] = component
	}
)
export default components

