const path = require('path');
const fs = require('fs');

const minimist = require('minimist');

const args = minimist(process.argv.slice(2), {
    alias: {
        name: 'n'
    }
});

const componentName = args.name;

fs.mkdirSync(
    path.resolve(__dirname, '..', 'src', 'components', componentName),
);

const componentCode = `import './${componentName}.css';
import React, { PureComponent } from 'react';
import ReactDom from 'react-dom';

export default class ${componentName} extends PureComponent {
    render() {
        return (
            <div className="${componentName}"></div>
        );
    }
}
`;

fs.writeFileSync(
    path.resolve(__dirname, '..', 'src', 'components', componentName, `${componentName}.jsx`),
    componentCode,
  );
  
  if(!args.withoutStyle) {
    fs.writeFileSync(
      path.resolve(__dirname, '..', 'src', 'components', componentName, `${componentName}.css`),
      `.${componentName} {}`,
    );
  }
  
  fs.writeFileSync(
    path.resolve(__dirname, '..', 'src', 'components', componentName, 'index.js'),
    `export default from './${componentName}.jsx';
    `,
  );