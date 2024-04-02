// Fetch Skills and display them with categories and icons
fetch('skills.json')
  .then(response => response.json())
  .then(categories => {
    const skillsContainer = document.getElementById('skillsContainer');
    categories.forEach(category => {
      let categoryHTML = `<div class="skills-category"><h3>${category.category}</h3><div class="skills-list">`;
      category.skills.forEach(skill => {
        categoryHTML += `
          <div class="skill">
            <img src="${skill.icon}" alt="${skill.name}" class="skill-icon" />
            <span>${skill.name}</span>
          </div>
        `;
      });
      categoryHTML += `</div></div>`;
      skillsContainer.innerHTML += categoryHTML;
    });
  })
  .catch(error => console.error('Error loading skills:', error));
