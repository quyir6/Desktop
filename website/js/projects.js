const projects = [{
  header: 'Rock Paper Scissors Game',
  text: "The Rock Paper Scissors game is a classic interactive web-based project designed using HTML, CSS, and JavaScript. Users can play against the computer by selecting one of three moves: rock, paper, or scissors. The interface provides intuitive buttons for each move and dynamically updates the result of each round. Additionally, the game keeps track of the user's score, including wins, losses, and ties, which persists using local storage. A reset score button allows users to reset their score and start anew. The project's CSS styling enhances the visual appeal of the game, with bold typography and crisp iconography. Overall, the Rock Paper Scissors game offers an engaging and enjoyable experience for users of all ages.",
  buttonPageLink: '/website/rock-paper-scissors.html',
  buttonText: 'Play Rock Paper Scissors',
  buttonDownloadLink: '/website/RPS-code.html'
}, {
  header: 'Buttons Project',
  text: "The Button Project encompasses two interactive components: the YouTube Subscribe Button and the Amazon Shipping Calculator. The Subscribe Button toggles between 'Subscribe' and 'Subscribed' states upon clicking, visually indicating the subscription status with a change in color. On the other hand, the Shipping Calculator enables users to input the cost of their order, automatically adding $10 if the cost is below $40 and displaying the total cost dynamically. The project's JavaScript logic ensures smooth user interaction, such as triggering subscription changes or calculating totals upon pressing 'Enter' in the input field. CSS styling enhances the buttons' appearance and responsiveness, providing an engaging user experience across different devices and screen sizes.",
  buttonPageLink:'/website/DOM-projects.html',
  buttonText: 'See Buttons Project',
  buttonDownloadLink:'/website/DOM-projects.html'
}, {
  header: 'ToDo List Project',
  text: "The Personalized Todo List Application is a dynamic web-based project that simplifies task management through an intuitive interface developed using JavaScript, HTML, and CSS. Users can effortlessly add, view, and delete tasks thanks to its responsive layout and dedicated input fields for task name and due date. The application's core functionality allows tasks to be added with a single click and removed individually, providing a streamlined user experience. Challenges included designing a responsive layout and customizing button styles for consistency across browsers. Future improvements may focus on enhancing task filtering, sorting options, and accessibility features. Overall, the application empowers users to stay organized and productive in their daily activities with its user-friendly design and essential features.",
  buttonPageLink: '/website/todo-list.html',
  buttonText: 'See ToDo List Project',
  buttonDownloadLink:'/website/todo-list-download.html'
}];

let projectsHTML = '';

projects.forEach((project) => {
  projectsHTML += `
  <div>
      <div class="projects-page-header">
       <h3> ${project.header} </h3>
      </div>

      <div>
        <p class="projects-text">
          '${project.text}'        
          <br><a href="${project.buttonPageLink}">
          <button class="project-buttons"> ${project.buttonText} </button>
         </a>
          
         <br><a href="${project.buttonDownloadLink}" download>
          <button class="project-buttons" > Download Code </button>
         </a>
        </p>
       </div>
      </div>
  `
});


console.log(projectsHTML);
document.querySelector('.js-projects-body').innerHTML = projectsHTML;