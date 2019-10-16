export default () => {
  const yesterday = new Date();
  yesterday.setDate(new Date().getDate() - 3);

  return [
    { id: 0, text: 'Give it a star :)', isDone: false, added: new Date().toDateString() },
    { id: 1, text: 'Fork it', isDone: false, added: new Date().toDateString() },
    {
      id: 2,
      text: 'Find Browser Extension Boilerplate',
      isDone: true,
      added: yesterday.toDateString(),
    },
    { id: 3, text: 'Open GitHub', isDone: true, added: yesterday.toDateString() },
  ];
};
