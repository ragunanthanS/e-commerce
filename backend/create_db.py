import MySQLdb

try:
    db = MySQLdb.connect(host="localhost", user="root", passwd="1234")
    cursor = db.cursor()
    cursor.execute("CREATE DATABASE IF NOT EXISTS mens_clothing_db")
    print("Database created successfully")
except Exception as e:
    print(f"Error creating database: {e}")
finally:
    if 'db' in locals():
        db.close()
