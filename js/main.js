document.addEventListener('DOMContentLoaded', function () {
    // --- Timeline Generation ---
    const timelineContainer = document.getElementById('timeline-container');
    experienceData.forEach((job, index) => {
        const item = document.createElement('div');
        item.className = 'relative pl-8 timeline-item';
        item.innerHTML = `
            <div class="cursor-pointer">
                <p class="text-sm text-zinc-500">${job.period}</p>
                <h3 class="font-bold text-xl text-zinc-800">${job.role}</h3>
                <p class="font-semibold text-zinc-600">${job.company} - <span class="font-normal">${job.location}</span></p>
                <span class="absolute top-2 right-0 text-cyan-600 transition-transform duration-300 transform">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </span>
            </div>
            <div class="details-content overflow-hidden max-h-0 transition-all duration-500 ease-in-out mt-2">
                <ul class="list-disc list-inside space-y-2 text-zinc-600 pl-2">
                    ${job.achievements.map(ach => `<li>${ach}</li>`).join('')}
                </ul>
            </div>
        `;
        timelineContainer.appendChild(item);

        const header = item.querySelector('.cursor-pointer');
        const content = item.querySelector('.details-content');
        const icon = item.querySelector('svg');

        header.addEventListener('click', () => {
            if (content.style.maxHeight && content.style.maxHeight !== '0px') {
                content.style.maxHeight = '0px';
                icon.parentElement.classList.remove('rotate-180');
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
                icon.parentElement.classList.add('rotate-180');
            }
        });
    });

    // --- Skills Charts ---
    const chartColors = {
        bg: ['#06b6d4', '#0891b2', '#0e7490', '#155e75', '#164e63', '#222d3d'],
        border: '#f4f4f5'
    };
    
    // Skill Categories Doughnut Chart
    const categoriesCtx = document.getElementById('skillCategoriesChart').getContext('2d');
    const categoriesChart = new Chart(categoriesCtx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(skillsData),
            datasets: [{
                data: Object.values(skillsData).map(s => s.length),
                backgroundColor: chartColors.bg,
                borderColor: chartColors.border,
                borderWidth: 3,
                hoverOffset: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        font: { size: 10 },
                        boxWidth: 15,
                        padding: 15
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += context.raw + ' skills';
                            return label;
                        }
                    }
                }
            },
            cutout: '60%'
        }
    });

    // Skill Proficiency Bar Chart
    let proficiencyChart;
    const proficiencyCtx = document.getElementById('skillProficiencyChart').getContext('2d');
    const filterButtonsContainer = document.getElementById('skill-filter-buttons');

    const allSkills = Object.values(skillsData).flat();

    function createOrUpdateProficiencyChart(filteredSkills) {
        const labels = filteredSkills.map(s => s.name);
        const data = filteredSkills.map(s => s.level);
        
        if (proficiencyChart) {
            proficiencyChart.data.labels = labels;
            proficiencyChart.data.datasets[0].data = data;
            proficiencyChart.update();
        } else {
            proficiencyChart = new Chart(proficiencyCtx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Proficiency Level (1-5)',
                        data: data,
                        backgroundColor: '#0891b2',
                        borderRadius: 4
                    }]
                },
                options: {
                    indexAxis: 'y',
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            beginAtZero: true,
                            max: 5,
                            grid: {
                                display: false
                            }
                        },
                        y: {
                            grid: {
                                color: '#e4e4e7'
                            }
                        }
                    },
                    plugins: {
                        legend: { display: false }
                    }
                }
            });
        }
    }

    // Create filter buttons
    const categories = ['All', ...Object.keys(skillsData)];
    categories.forEach(category => {
        const button = document.createElement('button');
        button.textContent = category;
        button.className = 'px-3 py-1 text-sm font-medium rounded-full transition-colors';
        if (category === 'All') {
            button.classList.add('bg-cyan-600', 'text-white');
        } else {
            button.classList.add('bg-zinc-200', 'text-zinc-700', 'hover:bg-zinc-300');
        }
        button.addEventListener('click', () => {
            document.querySelectorAll('#skill-filter-buttons button').forEach(btn => {
                btn.classList.remove('bg-cyan-600', 'text-white');
                btn.classList.add('bg-zinc-200', 'text-zinc-700', 'hover:bg-zinc-300');
            });
            button.classList.add('bg-cyan-600', 'text-white');
            button.classList.remove('bg-zinc-200', 'text-zinc-700', 'hover:bg-zinc-300');
            
            const skillsToShow = category === 'All' ? allSkills : skillsData[category];
            createOrUpdateProficiencyChart(skillsToShow);
        });
        filterButtonsContainer.appendChild(button);
    });

    // Initial chart render
    createOrUpdateProficiencyChart(allSkills);
});
