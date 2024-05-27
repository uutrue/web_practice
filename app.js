document.getElementById('inu').addEventListener('click', function() {
    fetch('http://localhost:3000/web')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            if (data.length > 0) {
                console.log('Fetched data:', data);
                localStorage.setItem('webData', JSON.stringify(data));
                displayData();
            } else {
                console.log('No data fetched.');
                displayData();
            }
        })
        .catch(error => {
            console.error('Fetch error:', error);
            displayData();
        });
});

function displayData() {
    const data = JSON.parse(localStorage.getItem('webData'));
    if (data && data.length > 0) {
        console.log('Displaying data:', data);
        document.getElementById('output').innerHTML = data.map(item => `<p>${item.class}</p>`).join('');
    } else {
        console.log('No data available to display.');
        document.getElementById('output').innerHTML = '<p>No data available to display.</p>';
    }
}

document.addEventListener('DOMContentLoaded', displayData);     // 페이지 로드 시 데이터 표시