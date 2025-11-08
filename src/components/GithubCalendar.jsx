import React from 'react';

export default function GitHubWrapper({ username, ...props }) {
  const [GitHubCalendar, setGitHubCalendar] = React.useState(null);

  const theme = {
  dark: [
    '#11111b', 
    '#2b7a24',
    '#41b536',
    '#6FD166',
    '#A6E3A1',
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
        blockMargin={4} blockRadius={8} blockSize={10} 
        {...props} />;
}
