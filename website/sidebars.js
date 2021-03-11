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
        'examples/simple', 
        'examples/basic', 
        'examples/perf', 
        'examples/configureDefaultLink', 
        'examples/configureDefaultPort', 
      ],
      collapsed: false
    },
  ],
};