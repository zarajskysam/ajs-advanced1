import orderByProps from '../app';

test('sortTest', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const recived = orderByProps(obj, ['name', 'level']);
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];

  expect(recived).toEqual(expected);
});

test('sortTest2', () => {
  const obj = {
    name: 'мечник', level: 2, attack: 80, defence: 40, health: 10,
  };
  const recived = orderByProps(obj, ['name', 'level']);
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];

  expect(recived).toEqual(expected);
});
