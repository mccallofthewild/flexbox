const gulp = require("gulp")
const fs = require("fs")
const glob = require("glob")
const path = './src/components'
gulp.task('componentCompiler', function(callback) {
    let dependencies;
    let componentPath = path + "/*/*.vue"
    glob( componentPath, {}, function( err, files ) {
        console.log(files)
        if(err) console.error(err);
        let dependencies = files;
        let variableArr = []
        let importCode = '\n' + dependencies
            .sort((a,b)=>{return a.length-b.length}, 0)
            .map(
                function(fileName, index){
                    fileName = fileName.split(path).join('')
                    let moduleVarName = `vue_${index}`
                    variableArr.push(moduleVarName)
                    return `import ${moduleVarName} from "./components${fileName}";`
                }
            )
            .join('\n')
        
        variableArr = JSON.stringify(variableArr)
                        .replace(/"/g, "")
                        .replace(/(,)/g, ",\n\t")
                        .replace('[', '[\n\t')
                        .replace(']', '\n]')
        
        importCode += ` 

// This was written by the componentCompiler task in gulpfile.js
let components = {}
let arr = ${variableArr}
arr.forEach( // renames each component by its name so we can easily import them in App.vue
	(component)=>{
		components[component.name] = component
	}
)
export default components

`


        fs.writeFile(`./src/components.js`, importCode, console.log)
        console.log("GULPING")
    })
});


gulp.task('default', function(){
    gulp.start('componentCompiler');
    gulp.watch(path + "/**/*.vue", ['componentCompiler'])
})