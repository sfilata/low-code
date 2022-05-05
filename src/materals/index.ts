// const req = require.context('./', false, /[^.]+\.tsx/);
const req = import.meta.globEager('./*.tsx');

const componentsName = Object.keys(req);
const components: Record<string, React.FC> = componentsName.reduce((components, module) => {
  const mod = req[module];

  components[mod.default.name] = mod.default;
  return components;
}, {});

export default components;
