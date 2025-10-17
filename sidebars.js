const sidebars = {
  HelpSidebar: [
    'welcome',
    'at-a-glance',
    'demo',
    {
      type: 'category',
      label: 'Shira Space',
      link: null,
      collapsible: false,
      items: ['overview', 'your-space', 'quizzes', 'questions', 'learners', 'results'],
    },
    {
      type: 'category',
      label: 'Technical Stuff',
      link: null,
      collapsible: false,
      items: ['self-hosting', 'release-notes'],
    },
    'contact',
    'privacy-policy'
  ],
};

export default sidebars;