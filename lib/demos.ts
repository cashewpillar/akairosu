export type Item = {
    name: string;
    slug: string;
    link: string;
  };
  
  export const demos: { name: string; items: Item[] }[] = [
    {
      name: 'Layouts',
      items: [
        {
          name: 'Nested Layouts',
          slug: 'layouts',
          link: 'Create UI that is shared across routes',
        },
        {
          name: 'Grouped Layouts',
          slug: 'route-groups',
          link: 'Organize routes without affecting URL paths',
        },
      ],
    },
    {
      name: 'File Conventions',
      items: [
        {
          name: 'Loading',
          slug: 'loading',
          link:
            'Create meaningful Loading UI for specific parts of an app',
        },
        {
          name: 'Error',
          slug: 'error-handling',
          link: 'Create Error UI for specific parts of an app',
        },
      ],
    },
    {
      name: 'Data Fetching',
      items: [
        {
          name: 'Streaming with Suspense',
          slug: 'streaming',
          link:
            'Streaming data fetching from the server with React Suspense',
        },
        {
          name: 'Static Data',
          slug: 'ssg',
          link: 'Generate static pages',
        },
      ],
    },
    {
      name: 'Components',
      items: [
        {
          name: 'Client Context',
          slug: 'context',
          link:
            'Pass context between Client Components that cross Server/Client Component boundary',
        },
      ],
    },
    {
      name: 'Misc',
      items: [
        {
          name: 'Client Component Hooks',
          slug: 'hooks',
          link: 'Preview the routing hooks available in Client Components',
        },
        {
          name: 'CSS and CSS-in-JS',
          slug: 'styling',
          link: 'Preview the supported styling solutions',
        },
      ],
    },
  ];
  