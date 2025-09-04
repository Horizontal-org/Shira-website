const sidebars = {
  tutorialSidebar: [
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
      items: ['privacy-and-security', 'self-hosting', 'release-notes'],
    },
    'contact',
  ],
};

export default sidebars;