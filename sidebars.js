/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    'overview',
    {
      type: 'category',
      label: 'Getting Started',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'getting-started',
        }
      ]
    },
    {
      type: 'category',
      label: 'IC Agent',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'ic-agent',
        }
      ]
    },
    {
      type: 'category',
      label: 'Interact',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'interact',
        }
      ]
    },
    {
      type: 'category',
      label: 'EVM',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'evm',
        }
      ]
    },
    {
      type: 'category',
      label: 'Bridge',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'bridge',
        }
      ]
    },
    {
      type: 'category',
      label: 'Evm Archiver',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'evm-archiver',
        }
      ]
    },
    {
      type: 'category',
      label: 'Integrate',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'integrate',
        }
      ]
    },
    {
      type: 'category',
      label: 'Public APIs',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'public-apis',
        }
      ]
    },
    'faq',
    {
      type: 'category',
      label: 'Tools',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'tools',
        }
      ]
    },
  ],
};

module.exports = sidebars;
