const variables = {'backendURL': 'http://127.0.0.1:3001'};
const entries = Object.entries(variables);
const envVariables: Record<string, string> = {};

entries.forEach(([key, value]) => {
    envVariables[key] = value || '';
});

export default envVariables;