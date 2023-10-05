courseData = [
    {title: "Course 1", 
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {title: "Course 2", 
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {title: "Course 3", 
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
]



var parentDiv = document.getElementById("course");
courseData.map(el => (
    parentDiv.insertAdjacentHTML("beforeend", `<div class="course">
    <img 
    src="../../../../assets/module-profile.png" 
    alt="module profile icon"
    id="module-profile"
    />
    <div class="content">
        <h2>${el.title}</h2>
        <p>${el.desc}</p>
    </div>
    </div>`)
))