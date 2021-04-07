import mysql.connector
def Connection():

    mydb = mysql.connector.connect(
      host="localhost",
      user="root",
      password="",
      database="comparator2"
    )
    return mydb

def search_all(table_name,mydb):
    mycursor = mydb.cursor()
    mycursor.execute("select * from "+ table_name)
    myresult = mycursor.fetchall()
    return myresult


def Update(firstname,lastname,email,id):
    mydb= Connection()
    mycursor = mydb.cursor()

    mycursor.execute ("""
   UPDATE `auth_user`
    SET `first_name` = %s, `last_name` = %s , `email` = %s
    WHERE `auth_user`.`id` =
"""+str(id),(firstname,lastname,email))

    mydb.commit()
