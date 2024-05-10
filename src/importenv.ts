// Author: Harshil Shah
const variables = {'backendURL': 'http://127.0.0.1:3001'};
// const variables = {'backendURL': 'http://localhost:3000', 'frontendURL': 'https://classmate-g7.netlify.app'};
// testing gitignore
const entries = Object.entries(variables);
const envVariables: Record<string, string> = {};

entries.forEach(([key, value]) => {
    envVariables[key] = value || '';
});

export default envVariables;