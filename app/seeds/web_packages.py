from app.models import db, WebPackage


# Adds a demo user, you can add other users here if you want
def seed_web_packages():

    web_package_1 = WebPackage(
        web_basic_id=1, web_standard_id=29, web_premium_id=45)
    web_package_2 = WebPackage(
        web_basic_id=2, web_standard_id=30, web_premium_id=46)
    web_package_3 = WebPackage(
        web_basic_id=3, web_standard_id=31, web_premium_id=47)
    web_package_4 = WebPackage(
        web_basic_id=4, web_standard_id=32, web_premium_id=48)
    web_package_5 = WebPackage(web_basic_id=5)
    web_package_6 = WebPackage(web_basic_id=6)
    web_package_7 = WebPackage(web_basic_id=7)
    web_package_8 = WebPackage(web_basic_id=8)
    web_package_9 = WebPackage(web_basic_id=9)
    web_package_10 = WebPackage(
        web_basic_id=10, web_standard_id=33, web_premium_id=49)
    web_package_11 = WebPackage(web_basic_id=11)
    web_package_12 = WebPackage(web_basic_id=12)
    web_package_13 = WebPackage(web_basic_id=13)
    web_package_14 = WebPackage(
        web_basic_id=14, web_standard_id=34, web_premium_id=50)
    web_package_15 = WebPackage(web_basic_id=15)
    web_package_16 = WebPackage(web_basic_id=16)
    web_package_17 = WebPackage(
        web_basic_id=17, web_standard_id=35, web_premium_id=51)
    web_package_18 = WebPackage(
        web_basic_id=18, web_standard_id=36, web_premium_id=52)
    web_package_19 = WebPackage(
        web_basic_id=19, web_standard_id=37, web_premium_id=53)
    web_package_20 = WebPackage(web_basic_id=20)
    web_package_21 = WebPackage(
        web_basic_id=21, web_standard_id=38, web_premium_id=54)
    web_package_22 = WebPackage(
        web_basic_id=22, web_standard_id=39, web_premium_id=55)
    web_package_23 = WebPackage(
        web_basic_id=23, web_standard_id=40, web_premium_id=56)
    web_package_24 = WebPackage(
        web_basic_id=24, web_standard_id=41, web_premium_id=57)
    web_package_25 = WebPackage(
        web_basic_id=25, web_standard_id=42, web_premium_id=58)
    web_package_26 = WebPackage(web_basic_id=26)
    web_package_27 = WebPackage(
        web_basic_id=27, web_standard_id=43, web_premium_id=59)
    web_package_28 = WebPackage(
        web_basic_id=28, web_standard_id=44, web_premium_id=60)

    db.session.add( web_package_1)
    db.session.add( web_package_2)
    db.session.add( web_package_3)
    db.session.add( web_package_4)
    db.session.add( web_package_5)
    db.session.add( web_package_6)
    db.session.add( web_package_7)
    db.session.add( web_package_8)
    db.session.add( web_package_9)
    db.session.add( web_package_10)
    db.session.add( web_package_11)
    db.session.add( web_package_12)
    db.session.add( web_package_13)
    db.session.add( web_package_14)
    db.session.add( web_package_15)
    db.session.add( web_package_16)
    db.session.add( web_package_17)
    db.session.add( web_package_18)
    db.session.add( web_package_19)
    db.session.add( web_package_20)
    db.session.add( web_package_21)
    db.session.add( web_package_22)
    db.session.add( web_package_23)
    db.session.add( web_package_24)
    db.session.add( web_package_25)
    db.session.add( web_package_26)
    db.session.add( web_package_27)
    db.session.add( web_package_28)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_web_packages():
    db.session.execute('TRUNCATE WebPackages RESTART IDENTITY CASCADE;')
    db.session.commit()
