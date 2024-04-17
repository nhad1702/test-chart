const user = [
  { //1
    "username": "vu",
    "password": "1",
	  "fullName": "Le Hong Vu",
	  "isMale": true,
	  "role": "leader",
	  "rank": "B",
    "stats": {
        "Organizational_skill": 5,
        "techical_skill": 7,
        "idea_contribution": 10,
        "communication_skill": 9,
        "product_optimization": 10
    },
	  "tasks": [
          {
            "content": "Watch Youtube",
            "rank": "E",
            "isdone": true
          },
          {
            "content": "Play LOL",
            "rank": "D",
            "isdone": true
          },
          {
            "content": "Develop web",
            "rank": "B",
            "isdone": false
          }
    ]
  },
  //#################################
  { //2
    "username": "John", 
    "password": "secret", 
    "truename": "John",
    "ismale": true, 
    "role": "Manager", 
    "rank": "A", 
    "stats": {
      "organizational_skill": 100, 
      "techical_skill": 75, 
      "idea_contribution": 95, 
      "communication_skill": 100, 
      "product_optimization": 88
    },
    "tasks": [ 
      {
        "content": "Study App", 
        "rank": "A", 
        "isdone": true 
      }, 
      {
        "content": "Gym Web", 
        "rank": "B", 
        "isdone": true
      }, 
      { 
        "content": "Web design",
        "rank": "B", 
        "isdone": false
      } 
    ],
  },
  //#################################
  { //3
    "username": "Marry", 
    "password": "secure123", 
    "truename": "Marry",
    "ismale": false, 
    "role": "Marketing Specialist", 
    "rank": "B", 
    "stats": {
      "organizational_skill": 80, 
      "techical_skill": 65, 
      "idea_contribution": 95, 
      "communication_skill": 100, 
      "product_optimization": 88
    },
    "tasks": [ 
      {
        "content": "Design Card", 
        "rank": "A", 
        "isdone": true 
      }, 
      {
        "content": "Customer`s Event", 
        "rank": "B", 
        "isdone": true
      }, 
      { 
        "content": "Seminar",
        "rank": "B", 
        "isdone": false
      } 
    ]
  },
];

export default user;