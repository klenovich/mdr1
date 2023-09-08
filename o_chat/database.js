import SQLite from "react-native-sqlite-storage";

// Initialize the database
const db = SQLite.openDatabase(
  {
    name: 'MainDB',
    location: 'default',
  },
  () => {},
  error => { console.log(error.message); }
);

// Create Messages table
db.transaction(function(txn) {
  txn.executeSql(
    "CREATE TABLE IF NOT EXISTS Messages(id INTEGER PRIMARY KEY AUTOINCREMENT, sender TEXT, text TEXT, timestamp TEXT)",
    [],
    (sqlTxn, res) => {
      console.log("table created successfully");
    },
    error => {
      console.log("error on creating table " + error.message);
    },
  );
});

// Add message function
export const addMessage = (message) => {
  db.transaction((txn) => {
    txn.executeSql(
      "INSERT INTO Messages (sender, text, timestamp) VALUES (:sender, :text, :timestamp)",
      [message.sender, message.text, message.timestamp],
      (sqlTxn, res) => {
        console.log(`message added successfully`);
      },
      error => {
        console.log("error on adding message " + error.message);
      },
    );
  });
};

// Fetch messages function
export const fetchMessage = () => {
  return new Promise((resolve, reject) => {
    db.transaction((txn) => {
      txn.executeSql(
        "SELECT * FROM Messages",
        [],
        (sqlTxn, results) => {
          let len = results.rows.length;
          if (len > 0) {
            let rows = results.rows.raw();
            resolve(rows);
          } else {
            resolve([]);
          }
        },
        (error) => {
          console.log("error on getting messages " + error.message);
        },
      );
    });
  });
};