const pokemos = ['Picachu', 'Bulbasaur', 'Squirtle', 'Charmander'];

// eslint-disable-next-line @typescript-eslint/unbound-method
const sortedPokemos = pokemos?.sort(Intl.Collator().compare);

console.log({ sortedPokemos });
