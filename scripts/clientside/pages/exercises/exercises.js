exerciseData = [
    {title: "Exercise 1", 
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {title: "Exercise 2", 
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {title: "Exercise 3", 
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
]



var parentDiv = document.getElementById("exercises");
exerciseData.map(el => (
    parentDiv.insertAdjacentHTML("beforeend", `
    <a href="" class="exercise-link">
        <div class="exercise">
            <img 
            src="../../../../assets/module-profile.png" 
            alt="module profile icon"
            id="module-profile"
            />
            <div class="content">
                <h2>${el.title}</h2>
                <p>${el.desc}</p>
            </div>
        </div>
    </a>`)
))