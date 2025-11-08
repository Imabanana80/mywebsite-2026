import React from 'react';

export default function GitHubWrapper({ username, ...props }) {
  const [GitHubCalendar, setGitHubCalendar] = React.useState(null);

  const theme = {
  dark: [
    'var(--catppuccin-color-crust)', 
    'var(--catppuccin-color-green-900)',
    'var(--catppuccin-color-green-500)',
    'var(--catppuccin-color-green-200)',
    'var(--catppuccin-color-green-50)',
  ],
   };
  React.useEffect(() => {
    import('react-github-calendar').then((module) => {
      setGitHubCalendar(() => module.default);
    });
  }, []);

  if (!GitHubCalendar) {
    return <div>Loading GitHub calendar...</div>;
  }

  return <GitHubCalendar username={username} theme={theme} 
        blockMargin={3} blockRadius={1} blockSize={10} 
        {...props} />;
}
