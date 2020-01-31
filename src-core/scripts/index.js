const fs = require("fs");
const path = require("path");
const Handlebars = require("handlebars");

const distFolder = "../src-dash"
const distFolderSrc = path.join(distFolder, "src");
const distFolderCmp = path.join(distFolderSrc, "components");

const getInputData = source => {
  // Get input data from input JSON file
  let inputData = fs.readFileSync(source, "utf8", (err, data) => {
    if (err) {
      throw err;
    }
    return data;
  });

  // Parse input data from input JSON file into Object
  inputData = JSON.parse(inputData);

  for (var component of inputData.components) {
    // Add className to every component object
    component.name = component.tag
      .replace(/^se/, "")
      .replace(/-[a-z]/g, i => i.toUpperCase())
      .replace(/-/g, "");
    // Add indentation to hints for every property of every component
    for (var prop of component.props) {
      prop.docs = prop.docs.replace(/\r\n/g, "\r\n   * ");
    }
  }

  return inputData.components;
};


const generateComponents = (destination, indexPath) => {

  // Read components template file
  let templateFile = fs.readFileSync(
    "./scripts/template-component.js",
    "utf8",
    (err, data) => {
      if (err) {
        throw err;
      }
      return data;
    }
  );

  // Pass components template to Handlebars compiler
  let template = Handlebars.compile(templateFile);

  // First letter of event to uppercase (ex. didClick -> DidClick)
  Handlebars.registerHelper(
    "firstToUpper",
    event => `${event.replace(event.charAt(0), event.charAt(0).toUpperCase())}`
  );
  // Wrapping props with { }
  Handlebars.registerHelper("wrap", name => `{${name}}`);
  // Swap to React types PropTypes:
  //  case boolean -> bool
  //  case string with delimeters (ex. `"basic" | "card"` -> string)
  Handlebars.registerHelper("types", type =>
    type === "boolean" ? "bool" : type.indexOf('"') >= 0 ? "string" : type
  );

  const components = getInputData("../core/se-components.json");

  // Compile components and write compiled components to separate files
  for (var component of components) {
    // Feed component object into Handlebars template
    let rendered = template(component);
    // Remove unnecessary `, `, so `, ` will be only between elements of collection
    rendered = rendered.replace(/,\W{1,4}\}/, "\r\n}");
    // Write component file
    fs.writeFileSync(
      `${destination}/${component.name}.react.js`,
      rendered,
      err => {
        if (err) {
          throw err;
        }
      }
    );
  }
  console.log(
    `Components successfully generated in: \x1b[36m${path.resolve(destination)}`
  );

  // Read index template file
  templateFile = fs.readFileSync(
    "./scripts/template-index.js",
    "utf8",
    (err, data) => {
      if (err) {
        throw err;
      }
      return data;
    }
  );

  // Pass index template to Handlebars compiler
  template = Handlebars.compile(templateFile);
  let rendered = template(components);
  // Remove unnecessary `, `, so `, ` will be only between elements of collection
  rendered = rendered.replace(/,\W{1,4}\}/, " }");
  fs.writeFileSync(`${indexPath}/index.js`, rendered, err => {
    if (err) {
      throw err;
    }
  });
  console.log(
    `\x1b[32mindex.js\x1b[0m successfully generated in: \x1b[36m${path.resolve(
      indexPath
    )}\r\n`
  );
};

const createFolder = function() {
  for ( folder of [distFolder, distFolderSrc, distFolderCmp]) {
    // Create destination path for new React Components files
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder);
    }
  }
}

try {
  createFolder();
  generateComponents(distFolderCmp, distFolderSrc);
} catch (err) {
  console.error(`\x1b[31m${err}`);
}
