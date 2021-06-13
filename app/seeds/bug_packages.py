from app.models import db, BugPackage


def seed_bug_packages():

    bug_package_1 = BugPackage(bug_basic_id=1)
    bug_package_2 = BugPackage(bug_basic_id=2)
    bug_package_3 = BugPackage(
        bug_basic_id=3, bug_standard_id=26, bug_premium_id=38)
    bug_package_4 = BugPackage(
        bug_basic_id=4, bug_standard_id=27, bug_premium_id=39)
    bug_package_5 = BugPackage(bug_basic_id=5)
    bug_package_6 = BugPackage(bug_basic_id=6)
    bug_package_7 = BugPackage(
        bug_basic_id=7, bug_standard_id=28, bug_premium_id=40)
    bug_package_8 = BugPackage(
        bug_basic_id=8, bug_standard_id=29, bug_premium_id=41)
    bug_package_9 = BugPackage(
        bug_basic_id=9, bug_standard_id=30, bug_premium_id=42)
    bug_package_10 = BugPackage(bug_basic_id=10)
    bug_package_11 = BugPackage(
        bug_basic_id=11, bug_standard_id=31, bug_premium_id=43)
    bug_package_12 = BugPackage(
        bug_basic_id=12, bug_standard_id=32, bug_premium_id=44)
    bug_package_13 = BugPackage(bug_basic_id=13)
    bug_package_14 = BugPackage(
        bug_basic_id=14, bug_standard_id=33, bug_premium_id=45)
    bug_package_15 = BugPackage(
        bug_basic_id=15, bug_standard_id=34, bug_premium_id=46)
    bug_package_16 = BugPackage(
        bug_basic_id=16, bug_standard_id=35, bug_premium_id=47)
    bug_package_17 = BugPackage(
        bug_basic_id=17, bug_standard_id=36, bug_premium_id=48)
    bug_package_18 = BugPackage(
        bug_basic_id=18, bug_standard_id=37, bug_premium_id=49)
    bug_package_19 = BugPackage(bug_basic_id=19)
    bug_package_20 = BugPackage(bug_basic_id=20)
    bug_package_21 = BugPackage(bug_basic_id=21)
    bug_package_22 = BugPackage(bug_basic_id=22)
    bug_package_23 = BugPackage(bug_basic_id=23)
    bug_package_24 = BugPackage(bug_basic_id=24)
    bug_package_25 = BugPackage(bug_basic_id=25)

    db.session.add(bug_package_1)
    db.session.add(bug_package_2)
    db.session.add(bug_package_3)
    db.session.add(bug_package_4)
    db.session.add(bug_package_5)
    db.session.add(bug_package_6)
    db.session.add(bug_package_7)
    db.session.add(bug_package_8)
    db.session.add(bug_package_9)
    db.session.add(bug_package_10)
    db.session.add(bug_package_11)
    db.session.add(bug_package_12)
    db.session.add(bug_package_13)
    db.session.add(bug_package_14)
    db.session.add(bug_package_15)
    db.session.add(bug_package_16)
    db.session.add(bug_package_17)
    db.session.add(bug_package_18)
    db.session.add(bug_package_19)
    db.session.add(bug_package_20)
    db.session.add(bug_package_21)
    db.session.add(bug_package_22)
    db.session.add(bug_package_23)
    db.session.add(bug_package_24)
    db.session.add(bug_package_25)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_bug_packages():
    db.session.execute('TRUNCATE BugPackages RESTART IDENTITY CASCADE;')
    db.session.commit()
