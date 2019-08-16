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

class Node {
  constructor(start, end, children, type, body) {
    this.start = (start >= 0) ? start : -1;
    this.end = (start >= 0) ? end : -1;
    this.children = (children != undefined) ? children : [];
    this.type = (type != undefined) ? type : "val";
    //this.before = "";
    this.body = (body != undefined) ? body : "";
    //this.after = "";
  }
  copy() {
    const node = new Node(this.start, this.end, this.children, this.type, this.body)
    return node
  }
};

const buildParsingTree = (template) => {

  let i = 0;

  function helper(root, template) {

    let node;
    // Plain text children node
    let textNode = new Node();
    textNode.start = i;
    textNode.type = "text";

    while (i < template.length - 1) {

      let first = template.charAt(i);
      let second = template.charAt(i + 1);

      if ((first == "{") && (second == "{")) {

        i = i + 2;
        node = new Node(i);

        if (template.charAt(i) == "[") {
          i++;
          node.start++;
          node.type = "repeat";
          root.children.push(node);
          helper(node, template);
        }
        // When we're between children nodes
        else {
          // Adding text node as child of the root node
          let l = root.children.length;
          if (l) {
            textNode.start = root.children[l - 1].end + 2;
          }
          textNode.end = i - 3;
          textNode.body = template.slice(textNode.start, textNode.end);
          root.children.push(textNode.copy());
        }

      }
      else if ((first == "}") && (second == "}")) {
        
        if (template.charAt(i - 1) == "]") {
          root.end = i - 2;
          root.body = template.slice(root.start, root.end);
          i = i + 2;
            // Adding text node as child of the root node
            let l = root.children.length;
            if (l) {
              textNode.start = root.children[l - 1].end + 2;
            }
            textNode.end = i - 3;
            textNode.body = template.slice(textNode.start, textNode.end);
            root.children.push(textNode.copy());

          return;
        } else {
          node.end = i;
          node.body = template.slice(node.start, node.end);
          root.children.push(node.copy());
        }

        i = i + 2;

      }
      else ++i;
    }

  }

  let root = new Node(0, template.length - 1);
  helper(root, template);

  return root;

}

const template = new Template(
  fs.readFileSync("./src-react/build-components/react-template1.js", "utf8", (err, data) => {
    if (err) throw err;
    return data;
  })
);

let tree = buildParsingTree(template.content);

/*
class Node {
  constructor(type, before, body, after) {
    this.type = type;
    this.before = before;
    this.body = body;
    this.after = after;
  }
}

let buildParsingTree = (template) => {

  const before = template.slice(0, template.indexOf("{{"));

  const body = [];
  
  while ((template.indexOf("{{") >= 0) || (template.indexOf("}}") != 0)) {

    if template.indexOf("{{")
    templateChunk = template.slice(template.indexOf("{{") + 2, template.indexOf("}}"));

  const after = template.slice(template.lastIndexOf("}}") + 3);

  return new Node(type, before, body, after);

}


  // put everything in between {{[ ]}} onto the stack
    // check every {{[ ]}} in the stack

}

const executeParsingTree = (parsingTree) => {

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

    // Add className to every component object
    for (component of inputData.components) {
			component.name = component.tag
				.replace(/^se/, "")
				.replace(/-[a-z]/g, i => i.toUpperCase())
				.replace(/-/g, "");
    }

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
		for (component of inputData) {

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
			//let props = component.props.reduce((props, i) => props + " " + i.name + ",", "");
			//outputData += `${props} children } = this.props;\r\n`;
		
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
);*/