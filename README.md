# LoginX

Title of the Project

Student Enrollment Form

Description Student Enrollment Form that will store data in STUDENT-TABLE relation of SCHOOL-DB database.

Input Fields: {Roll-No, Full-Name, Class, Birth-Date, Address, Enrollment-Date}

Primary key: Roll No.

There will be three control buttons [Save], [Update] and [Reset] at the bottom of the form. On page load or any control button click, an empty form will be displayed and the cursor will remain at the first input field in the form which will have the primary key in the relation. All other fields and buttons should be disabled at this time.

User will enter data in the field having primary key and

If the primary key value does NOT exist in the database, enable [Save] and [Reset] buttons and move the cursor to the next field and allow the user to enter data in the form.

1.Check that the data should be valid i.e. no empty fields.

2.Complete the data entry form and click the [Save] button to store the data in the database and go to step-2.

If the primary key value is present in the database, display that data in the form. Enable [Update] and [Reset] buttons and move the cursor to the next' field in the form. Keep the primary key field disabled and allow users to change other form fields.

1.Check that the data should be valid i.e. no empty fields.

2.Click on [Update] button to update the data in the database and go to step-2.

3.Click [Reset] to reset the form as per the step-2.

Benefits of using JsonPowerDB

→Nimble, Simple to use, In Memory, Real-time

→Schema free - easy to maintain.

→Serverless Support - fast development - cuts time to market

→Multi-Mode database - one solution to variety of data

→Build around worlds fastest indexing engine PowerIndex

→Webservices API - low development cost

→A Single Instance - Million Indexes

→Inbuilt support for Querying Multiple Databases

→Multiple security layers

→Server Side Native NoSQL - best performance.

Release History (release of your JsonPowerDB related code on Github)


GET_BY_KEY
{
    "token": "90938138|-31949272999026708|90955114",
    "dbName": "Student",
    "cmd": "GET_BY_KEY",
    "rel": "Exmp-Rel",
    "createTime": true,
    "updateTime": true,
    "jsonStr": {
        "name": "Sneha"
    }
}

PUT
{
    "token": "90938138|-31949272999026708|90955114",
    "cmd": "PUT",
    "dbName": "Student",
    "rel": "Exmp-Rel",
    "jsonStr": {
        "id": "1",
        "name": "Sneha",
        "email": "sneha.yehduri@gmail.com",
        "mobileno": "9967826666"
    }
}

UPDATE
{
    "token": "90938138|-31949272999026708|90955114",
    "cmd": "UPDATE",
    "dbName": "Student",
    "rel": "Exmp-Rel",
    "jsonStr": {
      "1":{
        "name": "Sumit",
        "email": "sumit@gmail.com"
      } 
      "2":{
        "name": "Gargee Mishra"
      }
   }
}

REMOVE
{
    "token": "90938138|-31949272999026708|90955114",
    "cmd": "REMOVE",
    "dbName": "Student",
    "rel": "Exmp-Rel",
    "record": 1,
    "jsonStr" : {}
}
