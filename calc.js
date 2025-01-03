	
	var main = document.getElementById("main")
	var add = document.getElementById("Add")
	var remover = document.getElementById("remover")
	var ver = document.getElementById("ver")
	  	var caixa1 = document.getElementById("caixa1")
		var caixa2 = document.getElementById("caixa2")
		var input = document.getElementById("input")
		var before = document.getElementById("before")
		
	var cursos = ["html","css","Javascript","Node.js","sass"]
	
	
		var toggleColor = ()=>{
			
			var todos = [...document.querySelectorAll(".color")]
			
			todos.map((el)=>{
				el.classList.remove("color")
			})
			
		}
	
	
		createCourse = (elw)=>{
			
			var div = document.createElement("div")
			
			div.addEventListener("click",(el)=>{
						 toggleColor()
						el.target.classList.add("color")
					
			})
			
			div.innerHTML= elw;
			div.setAttribute("class","divs")
			return div
			
			
			
		}
		
	
	cursos.map((el)=>{
		
		var course = createCourse(el)
		caixa2.appendChild(course)
		
	})
	
	remover.addEventListener("click",()=>{
		
	var todos = [...document.querySelectorAll(".color")]
		
		todos.forEach((el)=>{
			
			el.remove()
			})
	})
	
	ver.addEventListener("click",()=>{
		   var todos = [...document.querySelectorAll(".color")]
			
			todos.forEach((el)=>{
				alert(`O curso selecionado foi ${el.innerText}`)
			})

	})
	add.addEventListener("click",()=>{
		
		var input2 = input.value;
		
		 var course = createCourse(input2)
		 
		var todos = [...document.querySelectorAll(".color")]
	
	console.log(todos[0].parentNode.insertBefore(course,todos[0]))
			
			
		
		 
	})
	
	before.addEventListener("click",()=>{
		
			
		var input2 = input.value;
		
		 var course = createCourse(input2)
		 
		var todos = [...document.querySelectorAll(".color")]
		
		todos[0].parentNode.insertBefore(course,todos[0].nextSibling)
		
	})