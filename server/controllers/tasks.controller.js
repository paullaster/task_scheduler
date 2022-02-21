/**
 * This is file is used to generate random 3300 tasks
 * @returns tasks
 */
function generateTask(){
    let tasks = [];
    let totalTasks = 0;
    let first_name_list = ["Jasmine", "Libby", "Jadiel", "Kaley", "Nola"
    , "Vargas", "Miller", "Valentine", "Armstrong", "Pruitt", "Todd", "Brewer",
     "Davila", "Jarvis", "Lane", "Burch", "Le", "Rush", "Hobbs", "Noble", "Friedman",
      "Underwood", "Atkins", "Mclean", "Chaney", "Mcpherson", "Chase", "Vaughn", 
      "Bender", "Hahn", "Joyce", "Livingston", "Thornton", "Bowers", "Martin", "Nixon",
       "Patel", "Marks", "Peck", "Lyons", "Kelly", "Rodgers", "Meza", "Caldwell",
        "Lester", "Cook", "Wang", "Francis","Mayo", "Mcmillan", "Randolph", "Blake",
         "Ryan", "Frank", "Mora", "Frost",  "Finley", "Gamble", "Holland", "Sims",
            ];

    let last_name_list = ["Brandt", "Cummings", "Robles", "Bolton", "Calderon", "Guerra",
    "Orr", "Pace", "Gomez", "Camacho", "Morse", "Ponce", "Garner", "Valenzuela", "Byrd","Hensley",
     "Vincent", "Stokes", "Zavala", "Cross", "Bishop", "Chavez", "Tran", "Houston", 
     "Holloway", "Ochoa", "Harper", "Lopez", "Zhang", "Kramer", "Curry", "Kirk", "David",
      "Alvarez", "Rivera", "Guerrero", "Fisher", "Daniel", "Zuniga", "Munoz", "Michael",
       "Soto", "Orozco", "Walker", "Gray", "Bruce", "Clark", "Terry", "Stark", "Townsend",
        "Morrison", "Rich", "Snow", "Liu", "Orr", "Pace", "Gomez", "Camacho", "Morse",
      "Ponce", "Garner", "Valenzuela", "Byrd", "Hensley", "Vincent", "Stokes", 
                            
                            ];
    let completed = [null, new Date()];
    let gender = ["Male", "Female", "Prefer not to say"];
    let status = ["in progress", "complete", "not started", "pending", "stoped", "deleted"];
    let mpesa = [null, Math.floor(Math.random() *10)];
    let comment = [" ", "no answer", "beautifull", "love it", "you people are awesome"];
    while( totalTasks < 3300){      
       tasks = [...tasks, {
           task_id: Math.floor(Math.random() * 90000) + 10000,
           customer_first_name: first_name_list[(Math.floor(Math.random() * first_name_list.length))],
           customer_last_name : last_name_list[(Math.floor(Math.random() * last_name_list.length))],
           personnel_first_name: first_name_list[(Math.floor(Math.random() * first_name_list.length))],
           personnel_laster_name: last_name_list[(Math.floor(Math.random() * last_name_list.length))],
           customer_phone: `+254${(Math.floor(Math.random() * 900000000 ) + 1000000)}`,
           completed: completed[(Math.floor(Math.random() * completed.length))],
           status: status[(Math.floor(Math.random() * status.length))],
           gender: gender[(Math.floor(Math.random() *gender.length))],
           age: Math.floor(Math.random() *100) ,
           mpesa: mpesa[Math.floor(Math.random() *mpesa.length)],
           comment: comment[Math.floor(Math.random() *comment.length)],
           registration: "self"



    }];
        totalTasks++
    }
    return tasks;
}
module.exports = generateTask;
