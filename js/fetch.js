// // fetch(url, {headers: {'Authorization': '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'}})
function getLastCommit() {
    const username = document.getElementById('username').value;
    const token = 'your_personal_access_token'; // Replace with your Personal Access Token

    getLastCommitDate(username, token)
        .then((lastCommitDate) => {
            const resultElement = document.getElementById('result');
            resultElement.textContent = `Last commit date: ${lastCommitDate}`;
        })
        .catch((error) => {
            console.error('Error:', error);
            const resultElement = document.getElementById('result');
            resultElement.textContent = 'Error fetching data. Check the console for details.';
        });
}

function getLastCommitDate(username, token) {
    const url = `https://api.github.com/users/${username}/events`;

    return fetch(url, {
        headers: {
            Authorization: `token ${token}`,
        },
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`GitHub API error: ${response.status} - ${response.statusText}`);
            }
            return response.json();
        })
        .then((events) => {
            const pushEvents = events.filter((event) => event.type === 'PushEvent');
            if (pushEvents.length > 0) {
                const lastCommitDate = new Date(pushEvents[0].created_at);
                return lastCommitDate.toDateString();
            } else {
                return 'No commits found';
            }
        })
        .catch((error) => {
            console.error('Error fetching data from GitHub API:', error);
            throw error;
        });
}

const username = 'AmritLee';
const token = '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';

getLastCommitDate(username, token)
    .then((lastCommitDate) => console.log(`Last commit date: ${lastCommitDate}`))
    .catch((error) => console.error('Error:', error));
