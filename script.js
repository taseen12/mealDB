function connect(){
    
    var searchByArea = document.getElementById("searchBox").value ; 
   
    var url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${searchByArea}` ;
   
    fetch (url)
    .then (res => res.json())
    .then (data => show(data))
   
   }
   
   function show (data){
   
     var allMeals = data.meals ;
    
     var oldContent = document.getElementById("container");
     oldContent.textContent = ""; 
   
     for (var i=0; i<Math.min(allMeals.length, 5); i++){
   
       var newDiv = document.createElement("div");
       newDiv.innerHTML = `<div class="meal-info">
       <p class="meal-name">Meal Name: ${allMeals[i].strMeal}</p>
       <p class="meal-id">Meal ID: ${allMeals[i].idMeal}</p>
       <img src="${allMeals[i].strMealThumb}" alt="Meal Image">
       <br><br>
      
   </div>`;
     
   
        newDiv.classList.add("mealStyle");
        oldContent.appendChild(newDiv);
     }
   
   }