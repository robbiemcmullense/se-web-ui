// ******** transpile src->index.js to add all components

const fs         = require('fs');
const Handlebars = require('handlebars');

const getInputData = (source) => {

	// Get input data from input JSON file
	let inputData = fs.readFileSync(source, "utf8", (err, data) => {
		if (err) throw err;
		return data;
	});

	// Parse input data from input JSON file into Object
	inputData = JSON.parse(inputData);

  for (component of inputData.components) {
    // Add className to every component object
		component.name = component.tag
			.replace(/^se/, "")
			.replace(/-[a-z]/g, i => i.toUpperCase())
      .replace(/-/g, "");
    // Add indentation to hints of every property of every component
    for (prop of component.props) {
      prop.docs = prop.docs
        .replace(/\r\n/g, "\r\n   * ");
    }
  }

  return inputData.components;

}

const compileComponents = (destination, indexPath) => {

  // Create destination path for new React Components files
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination);
  }

  // Read components template file
  let templateFile = fs.readFileSync("./scripts/template-component.js", "utf8", (err, data) => {
		if (err) throw err;
		return data;
  });

  // Pass components template to Handlebars compiler
  let template = Handlebars.compile(templateFile);

  // First letter of event to uppercase (ex. didClick -> onDidClick)
  Handlebars.registerHelper('onEvent', event => `on${event[0].toUpperCase()}${event.slice(1)}`);
  // Wrapping props with { }
  Handlebars.registerHelper('wrap', name => `{${name}}`);
  // Swap PropTypes:
  //  case boolean -> bool
  //  case string with delimeters (ex. `"basic" | "card"` -> string)
  Handlebars.registerHelper('types', type => 
    type === "boolean" ?
      "bool" :
        type.indexOf('"') >= 0 ?
          "string" :
            `${type}`);

  const components = getInputData("../core/se-components.json");

  // Compile components and write compiled components to separate files 
  for (component of components) {
    // Feed component object into Handlebars template
    let rendered = template(component);
    // Remove unnecessary `, `, so `, ` will be only between elements of collection
    rendered = rendered.replace(/,\W{1,4}\}/, "\r\n}");
    // Write component file
    fs.writeFileSync(`${destination}/${component.name}.react.js`, rendered, err => { 
      if (err) throw err;
    });
  }

  // Read index template file
  templateFile = fs.readFileSync("./scripts/template-index.js", "utf8", (err, data) => {
		if (err) throw err;
		return data;
  });

  // Pass index template to Handlebars compiler
  template = Handlebars.compile(templateFile);
  let rendered = template(components);
  // Remove unnecessary `, `, so `, ` will be only between elements of collection
  rendered = rendered.replace(/,\W{1,4}\}/, " }");
  fs.writeFileSync(indexPath, rendered, err => { 
    if (err) throw err;
  });

}

compileComponents( "./src/components", "./src/index.js");