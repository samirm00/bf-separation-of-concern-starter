import { parse } from './acorn.min.js';

export const getParameterList = (theFunction) => {
  const functionAsString = theFunction.toString();
  // wrapped in parens to parse function expressions without an error
  const tree = parse('(\n' + functionAsString + '\n)', { ecmaVersion: 2020 });
  const functionNode =
    tree.body[0].type === 'ExpressionStatement'
      ? tree.body[0].expression
      : tree.body[0];

  const paramNames = functionNode.params.flatMap((param) =>
    param.type === 'RestElement'
      ? param.argument.name
      : param.type === 'AssignmentPattern'
      ? param.left.name
      : param.type === 'ObjectPattern'
      ? param.properties.map((prop) => prop.key.name)
      : param.name
  );

  return paramNames;
};
