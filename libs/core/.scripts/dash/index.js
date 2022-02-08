const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');

const componentJson = path.join(
  __dirname,
  '../../../..',
  '/dist/libs/core/se-components.json'
);
const distFolder = path.join(__dirname, '..', '..', '..', 'dash');
const distFolderSrc = path.join(distFolder, 'src');
const distFolderLib = path.join(distFolderSrc, 'lib');
const distFolderCmp = path.join(distFolderLib, 'components');

const getInputData = (source) => {
  // Get input data from input JSON file
  let inputData = fs.readFileSync(source, 'utf8', (err, data) => {
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
      .replace(/^se/, '')
      .replace(/-[a-z]/g, (i) => i.toUpperCase())
      .replace(/-/g, '');
    // Add indentation to hints for every property of every component
    for (var prop of component.props) {
      prop.docs = prop.docs.replace(/\r\n/g, '\r\n   * ');
    }
  }

  return inputData.components;
};

const generateComponents = (destination, indexPath) => {
  // Read components template file
  let templateFile = fs.readFileSync(
    path.join(__dirname, 'template-component.js'),
    'utf8',
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
    'firstToUpper',
    (event) =>
      `${event.replace(event.charAt(0), event.charAt(0).toUpperCase())}`
  );
  // Wrapping props with { }
  Handlebars.registerHelper('wrap', (name) => `{${name}}`);

  const VALID_PROP_TYPES = [
    'array',
    'bool',
    'func',
    'number',
    'object',
    'string',
    'symbol',
    'node',
    'element',
    'elementType',
  ];

  const isValidPropType = (typeString) => VALID_PROP_TYPES.includes(typeString);
  const isStringType = (typeString) => typeString.indexOf('"') >= 0;
  const isType = (typeString) => !isStringType(typeString);

  const convertTypeToPropTypes = (typeString) => {
    const typeAndStrings = typeString.split(' | ');

    const stringEnumeration = typeAndStrings.filter(isStringType);
    const typeUnion = typeAndStrings
      .filter(isType)
      .map((type) =>
        type === 'boolean' ? 'bool' : isValidPropType(type) ? type : 'object'
      );

    const propTypeUnion = typeUnion.map((type) => `PropTypes.${type}`);

    if (stringEnumeration.length === 0) {
      return typeUnion.length === 1
        ? typeUnion[0]
        : `oneOfType([${propTypeUnion}])`;
    }

    if (typeUnion.length === 0) {
      return `oneOf([${stringEnumeration}])`;
    }

    return `oneOfType([${propTypeUnion},PropTypes.oneOf([${stringEnumeration}])])`;
  };

  // Swap to React types PropTypes:
  //  case boolean -> bool
  //  case string with delimeters (ex. `"basic" | "card"` -> string)
  Handlebars.registerHelper('types', convertTypeToPropTypes);

  
  // FiltrationSmart component is not handled by Dash yet.
  // TODO: find a way to integrate this component in the Dash library.
  const components = getInputData(componentJson).filter(
    (component) => component.tag !== 'se-filtration-smart'
  );

  // Compile components and write compiled components to separate files
  for (var component of components) {
    // Feed component object into Handlebars template
    let rendered = template(component);
    // Remove unnecessary `, `, so `, ` will be only between elements of collection
    rendered = rendered.replace(/,\W{1,4}\}/, '\r\n}');
    // Write component file
    fs.writeFileSync(
      `${destination}/${component.name}.react.js`,
      rendered,
      (err) => {
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
    path.join(__dirname, 'template-index.js'),
    'utf8',
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
  rendered = rendered.replace(/,\W{1,4}\}/, ' }');
  fs.writeFileSync(`${indexPath}/index.js`, rendered, (err) => {
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

const createFolder = function () {
  for (folder of [distFolder, distFolderSrc, distFolderLib, distFolderCmp]) {
    // Create destination path for new React Components files
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder);
    }
  }
};

try {
  createFolder();
  generateComponents(distFolderCmp, distFolderLib);
} catch (err) {
  console.error(`\x1b[31m${err}`);
}
