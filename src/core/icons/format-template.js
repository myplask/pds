function FormatTemplate({ template }, _, { componentName, jsx }) {
  const IconComponentName = componentName.name.slice(3);
  const typeScriptTpl = template.smart({ plugins: ["jsx", "typescript"] });

  return typeScriptTpl.ast`
    import React from 'react';
    import { SvgIconProps } from '../index';
    
    export const ${IconComponentName} = React.memo<SvgIconProps>(({size = 24, fillColor = '#000', style}) => ${jsx})
  `;
}

module.exports = FormatTemplate;
