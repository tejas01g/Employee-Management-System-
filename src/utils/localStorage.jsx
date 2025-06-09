const employees =[
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Design login page",
        "description": "Create UI for login page using Figma",
        "date": "2025-06-08",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Fix navbar bug",
        "description": "Resolve overlap issue on small screens",
        "date": "2025-06-05",
        "category": "Bugfix"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "API integration",
        "description": "Integrate external API into dashboard",
        "date": "2025-06-04",
        "category": "Development"
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Write unit tests",
        "description": "Write tests for user authentication module",
        "date": "2025-06-08",
        "category": "Testing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Update documentation",
        "description": "Add usage instructions to README",
        "date": "2025-06-06",
        "category": "Documentation"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Setup CI/CD",
        "description": "Configure GitHub Actions for build and deploy",
        "date": "2025-06-03",
        "category": "DevOps"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Optimize images",
        "description": "Compress and optimize all static images",
        "date": "2025-06-02",
        "category": "Performance"
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Refactor auth module",
        "description": "Clean up login logic and reuse auth context",
        "date": "2025-06-08",
        "category": "Refactoring"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Add dark mode",
        "description": "Implement dark/light theme toggle",
        "date": "2025-06-06",
        "category": "Feature"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Setup analytics",
        "description": "Integrate Google Analytics",
        "date": "2025-06-03",
        "category": "Tracking"
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Create landing page",
        "description": "Design and code responsive landing page",
        "date": "2025-06-08",
        "category": "UI/UX"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Setup database",
        "description": "Configure PostgreSQL and schema",
        "date": "2025-06-06",
        "category": "Backend"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Deploy app to Vercel",
        "description": "Deployment failed due to build error",
        "date": "2025-06-05",
        "category": "Deployment"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "User profile section",
        "description": "Add user profile with update form",
        "date": "2025-06-04",
        "category": "Feature"
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Fix login redirect",
        "description": "Ensure users are redirected correctly after login",
        "date": "2025-06-08",
        "category": "Bugfix"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Migrate to TypeScript",
        "description": "Migration postponed due to errors",
        "date": "2025-06-07",
        "category": "Migration"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Add logout button",
        "description": "Add logout button in navbar and clear session",
        "date": "2025-06-05",
        "category": "UI"
      }
    ]
  }
];

const admin =[{
  "id": 1,
  "email": "admin@example.com",
  "password": "123"
}];

export const setLocalStorage = () =>{
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));

}

export const getLocalStorage = () =>{
   const data = localStorage.getItem('employees')
   console.log(JSON.parse(data))
}

  