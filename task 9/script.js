document.addEventListener('DOMContentLoaded', () => {
    createSalesChart();
    createActivityPieChart();
    createActivityLineChart();

    const themeSwitcher = document.querySelector('.theme-switcher');
    themeSwitcher.addEventListener('click', toggleTheme);
});

function createSalesChart() {
    const ctx = document.getElementById('salesChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'replace Dynamics',
                data: [3400, 200, 800, 1500, 1900, 1300, 1700, 4400, 6000, 2400, 2500, 2300],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function createActivityPieChart() {
    const ctx = document.getElementById('activityPieChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Active Users', 'Inactive Users'],
            datasets: [{
                label: 'User Activity',
                data: [75, 25], // Example data (replace with your actual data)
                backgroundColor: [
                    'rgba(200, 99, 132, 0.3)', // Red for active users
                    'rgba(30, 134, 235, 0.3)', // Blue for inactive users
                ],
                borderColor: [
                    'rgba(211, 90, 132, 1)',
                    'rgba(58, 160, 235, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.label + ': ' + tooltipItem.raw.toFixed(2) + '%';
                        }
                    }
                }
            }
        }
    });
}

function createActivityLineChart() {
    const ctx = document.getElementById('activityLineChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Augu', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'User Activity',
                data: [280, 480, 400, 190, 860, 270, 450, 320, 580, 630, 710, 820],
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
}
