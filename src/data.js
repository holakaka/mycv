import IMAGES from "./images";

export const info_project = [
  {
    id_project: "001",
    url_img: IMAGES.CheckerViet,
    project_name: "CheckerViet",
    description: "Web Design",
    overview:
      "CHECKERVIET website is a course project contributed in 2021, providing street fashion style for everyone by well-quality products, as well as exerting a significant impact on street art lovers and rock, hip hop culture,…",
    date_project: "02/2021 - 05/2021",
    team_size: "3",
    position: [
      "Designed and constructed databases",
      "Contributed searching function",
      "Designed interface and product list display function, customer and order management",
      "Managed project tasks, assigned tasks to group members appropritely and guaranteed project progress. ",
    ],
    user_side: [
      "Register",
      "Login, Cart",
      "Purchasing, Searching",
      "Display product categories",
      "Display product lists",
    ],
    admin_side: [
      "Order management",
      "Product management",
      "Customer management",
      "Purchasing history",
    ],
    functions_of_project: [],
    equipment: [],
    flow_project: [],
    detail_project:
      "Website is deployed on LocalHost and stored databases on mySQL of XAMPP.",
    technology: "PHP, mySQL, JavaScript",
  },

  {
    id_project: "002",
    url_img: IMAGES.Hotel,
    project_name: "Hotel Management Software",
    description: "Software",
    overview:
      "Hotel Management Software is a course project constructed in 2021. It is the software system providing efficient management function for hotel businesses and assisting in complicated actions with several simple clicks; hence, it helps businesses manage and control all business operation reports quickly and accurately, anywhere, anytime. ",
    date_project: "02/2021 - 05/2021",
    team_size: "3",
    position: [
      "Designed and constructed databases",
      "Design user and administrator side interface ",
      "Build room availability check function, customer list display function, booked room list display function",
      "Build all admin-side functions",
      "Managed project tasks, assigned tasks to group members appropritely and guaranteed project progress. ",
    ],
    user_side: [
      "Reservations",
      "Cancellation ",
      "Payment ",
      "Check availability ",
      "Show list of booked rooms ",
      "Show customer list ",
      "Show room details ",
      "Show day revenues",
      "Daily revenue closing",
    ],
    admin_side: [
      "Staff management",
      "Customer management",
      "Room information management (Room type, Room name, Room price)",
      "Revenue Management (Day/Month)",
    ],
    functions_of_project: [],
    equipment: [],
    flow_project: [],
    detail_project:
      "The software is managed in a 3-layer model, using the Java Swing library to design interfaces and store databases on Microsoft SQL Server.",
    technology: "Java, SQL Server, Swing",
  },
  {
    id_project: "003",
    url_img: IMAGES.Aquarium,
    project_name: "Smart Aquarium",
    description: "IoT",
    overview:
      "The product is a course project built in 2023. Recreational aquarium breeding is not as simple as raising a dog or cat, but it also takes a lot of insights and time. There would be many difficulties such as: Water temperature control, food control, inconvenience in taking care when travelling. Therefore, smart aquariums were born to solve the above difficulties.",
    date_project: "09/2023 - 12/2023",
    team_size: "2",
    position: [
      "Designed and constructed databases",
      "Make realistic models",
      "Design and wiring of circuit boards",
      "Build water temperature management function, lamp equipment management function, and remote feeding function",
      "Managed project tasks, assigned tasks to group members appropritely and guaranteed project progress. ",
    ],
    user_side: [],
    admin_side: [],
    functions_of_project: [
      "Measure water temperature and display it to users 24/24",
      "Warn users if the water temperature exceeds the threshold",
      "Remote feeding",
      "Set a feeding timer",
      "Decorate aquarium using RGB leds",
      "Manage the aquarium ambient temperature using charts",
    ],
    equipment: [
      "ESP8266 NodeMCU Lua v3 CH340",
      "Led Ws2812b",
      "DS18B20 Temperature Sensor Module",
      "RC Servo Motor 9G",
    ],
    flow_project: [],
    detail_project:
      "The functions are written in C++ and compiled by the Arduino IDE. The interface is written in React Native and deployed to mobile devices using Expo. It is all connected to each other through Firebase powered by Google.",
    technology: "Arduino IDE ,React Native, Firebase, Expo",
  },
  {
    id_project: "004",
    url_img: IMAGES.RecomendSystem,
    project_name: "Recommendation system for movies",
    description: "Science Research",
    overview:
      "This is a research project to be conducted from September 2022 to April 2023. The topic aims to build a system where users only need to import .xlsx files containing necessary information, from which the system automatically processes and makes movie recommendations in accordance with the preferences and habits of users. The project has been completed with excellent grades (91.3 / 100) and selected for exhibition at the UEB student conference in 2022-2023.",
    date_project: "09/2022 - 04/2023",
    team_size: "4",
    position: [],
    user_side: [],
    admin_side: [],
    functions_of_project: [],
    equipment: [],
    flow_project: [
      "1. The system will calculate the correlation between users – Users with the same habits and interests would have a high correlation.",
      "2. The Bert Embedding method was used for enriching the semantic information for the dataset.",
      "3. Finally, the system would make recommendations to users based on the preferences of highly correlated neighbors.",
    ],
    detail_project: `The demand for entertainment is increasing, in which movies are likewise a form of entertainment. Therefore, the number of movies became huge and keyword search engines were born to help users reach their favorite movies. However, in case the user does not determine the exact information that the user wants, the search by keyword is still limited. Therefore, the recommendation system was born to solve this problem.
    
    The system is built based on user reviews of movies watched, then applies the Neighborhood-Based Collaborative Filtering method to make movie recommendations.`,

    technology: "Python, Tkinter, SQL Server",
  },
];
