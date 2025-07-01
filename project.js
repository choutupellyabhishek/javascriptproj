// const searchBtn = document.getElementById('search-btn');
// const mealList = document.getElementById('meal');
// const mealDetailsContent = document.querySelector('.meal-details-content');
// const recipeCloseBtn = document.getElementById('recipe-close-btn');

// // Event listeners
// searchBtn.addEventListener('click', getMealList);
// mealList.addEventListener('click', getMealRecipe);
// recipeCloseBtn.addEventListener('click', () => {
//   mealDetailsContent.parentElement.classList.remove('showRecipe');
// });

// // Fetch and filter category data from Glitch
// function getMealList() {
//   const searchInputTxt = document.getElementById('search-input').value.trim().toLowerCase();

//   fetch(`https://separated-polarized-drink.glitch.me`)
//     .then(res => res.json())
//     .then(data => {
//       let html = "";
//       if (data.categories) {
//         const filtered = searchInputTxt === ""
//           ? data.categories
//           : data.categories.filter(cat =>
//               cat.strCategory.toLowerCase().includes(searchInputTxt)
//             // );

//         if (filtered.length > 0) {
//           filtered.forEach(category => {
//             html += `
//               <div class="meal-item" data-id="${category.idCategory}" data-desc="${category.strCategoryDescription}">
//                 <div class="meal-img">
//                   <img src="${category.strCategoryThumb}" alt="${category.strCategory}">
//                 </div>
//                 <div class="meal-name">
//                   <h3>${category.strCategory}</h3>
//                   <a href="#" class="recipe-btn">Get Details</a>
//                 </div>
//               </div>
//             `;
//           });
//           mealList.classList.remove('notFound');
//         } else {
//           html = "<p class='notFound'>No matching category found!</p>";
//           mealList.classList.add('notFound');
//         }
//       } else {
//         html = "<p class='notFound'>No categories found!</p>";
//         mealList.classList.add('notFound');
//       }
//       mealList.innerHTML = html;
//     })
//     .catch(err => {
//       console.error("API error:", err);
//       mealList.innerHTML = "<p class='notFound'>Failed to fetch data.</p>";
//     });
// }

// // Show category info in modal
// function getMealRecipe(e) {
//   e.preventDefault();
//   if (e.target.classList.contains('recipe-btn')) {
//     const mealItem = e.target.closest('.meal-item');
//     const name = mealItem.querySelector("h3").textContent;
//     const img = mealItem.querySelector("img").src;
//     const desc = mealItem.dataset.desc;

//     const html = `
//       <h2 class="recipe-title">${name}</h2>
//       <div class="recipe-meal-img">
//         <img src="${img}" alt="${name}">
//       </div>
//       <div class="recipe-instruct">
//         <h3>Description:</h3>
//         <p>${desc}</p>
//       </div>
//     `;
//     mealDetailsContent.innerHTML = html;
//     mealDetailsContent.parentElement.classList.add('showRecipe');
//   }
// }

  