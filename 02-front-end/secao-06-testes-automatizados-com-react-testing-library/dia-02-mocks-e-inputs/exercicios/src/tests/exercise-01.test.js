import rollDice from '../service/rollDice';

it('testa a função `rollDice`', () => {
  jest.spyOn(Math, 'random').mockReturnValue(0.8);

  expect(rollDice(20)).toBe(16);
  expect(Math.random).toHaveBeenCalled();
});
