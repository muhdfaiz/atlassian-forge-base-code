import Resolver from '@forge/resolver';

const resolver = new Resolver();

resolver.define('sampleFunction', () => {
  return 'string';
});

export const handler: unknown = resolver.getDefinitions();
