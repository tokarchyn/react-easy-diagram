// module.exports = {
//   docs: {
//     Examples: [
//       'introduction',
//       'examples/basic', 
//     ]
//   },
// };

module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'introduction',
    },
    {
      type: 'category',
      label: 'Examples',
      items: [
        'examples/basic', 
      ],
      collapsed: false
    },
  ],
};