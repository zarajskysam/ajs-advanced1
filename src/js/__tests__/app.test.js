import orderByProps from '../app';

// test('sort equal', () => {
//   const recived = sortCharacter([
//     { name: 'мечник', health: 10 },
//     { name: 'маг', health: 100 },
//     { name: 'лучник', health: 80 },
//   ]);
//   const expected = [
//     { name: 'маг', health: 100 },
//     { name: 'лучник', health: 80 },
//     { name: 'мечник', health: 10 },
//   ];

//   expect(recived).toEqual(expected);
// });

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
