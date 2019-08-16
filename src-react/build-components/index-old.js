const fs = require('fs');

class Template {
	constructor(content){
		if (content instanceof Template) {
			// Copy over Content of input template object into new template object
			this.content = content.content;
		} else {
			// Content of template as String
			this.content = content ? content : "";
		}
	}
	// Method replacing variable from template with value of corresponding input variable
	replace(target, value) {
		if (target && value) {
			const pattern = new RegExp(`\{\{${target}\}\}`, "g");//RegExp(`\\/\\*${target}\\*\\/`, "g");
			this.content = this.content.replace(pattern, value);
		}
	}

};

const cleanInput = inputFileContents => {

  let tag = component.tag;
  
  // Tag name in snake-case to class name in camelCase
    inputData[end].name = component.tag
      .replace(/^se/, "")
      .replace(/-[a-z]/g, i => i.toUpperCase())
      .replace(/-/g, "");
    
    inputData[end].props = component.props.map(prop => ({ name: prop.name, 
                                                        type: prop.type, 
                                                        docs: prop.docs
                                                      })
    );
}

const buildReactComponents = (inputPath, templatePath, outputPath) => {
	try {

		// Get input data from input JSON file
		let inputData = fs.readFileSync(inputPath, "utf8", (err, data) => {
			if (err) throw err;
			return data;
		});

		// Parse input data from input JSON file into Object
		inputData = JSON.parse(inputData);

		// Read generic template from templatePath for React Components files
		const template = new Template(
			fs.readFileSync(templatePath, "utf8", (err, data) => {
				if (err) throw err;
				return data;
			})
		);

		// Create output path for new React Components files
		if (!fs.existsSync(outputPath)) {
			fs.mkdirSync(outputPath);
			//outputPath.replace(/^\W*|\W$/g, "").split("/").forEach()
		}

		// Create React Components from each Web component
		for (component of inputData.components) {

			// Tag name in snake-case to class name in camelCase
			let componentName = component.tag
					.replace(/^se/, "")
					.replace(/-[a-z]/g, i => i.toUpperCase())
					.replace(/-/g, "");

			// Clone generic template into currentTemplate
			let currentTemplate = new Template(template);
			
			// Substitute class names in template
			currentTemplate.replace("componentName", componentName);

			// Join component props
			/*let props = component.props.reduce((props, i) => props + " " + i.name + ",", "");
			outputData += `${props} children } = this.props;\r\n`;
			*/
			// Substitute component tags in template
			currentTemplate.replace("componentTag", component.tag);

			// Write output file
			fs.writeFile(`${outputPath}/${componentName}.react.js`, currentTemplate.content, err => { 
				if (err) throw err;
			});

		}



	}
	catch(err) {
		console.log(err.message);
	}
}

buildReactComponents( "./core/se-components.json", 
											"./src-react/build-components/react-template.js", 
											"./src-react/src/transpiled-components"
);