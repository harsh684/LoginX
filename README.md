# LoginX

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
