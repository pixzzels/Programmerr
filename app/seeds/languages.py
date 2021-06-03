from app.models import db, Language

# Adds a demo user, you can add other users here if you want


def seed_languages():

    English = Language(
        name='English')

    Korean = Language(
        name='Korean')

    Spanish = Language(
        name='Spanish')

    # english1 = Language(
    #     name='ENGLISH', level="basic")


    db.session.add(English)
    db.session.add(Korean)
    db.session.add(Spanish)

    # db.session.add(ellen_portfolio)
    # db.session.add(eunice_portfolio)
    # db.session.add(schuler_portfolio)
    # db.session.add(jack_portfolio)

    db.session.commit()
# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_languages():
    db.session.execute('TRUNCATE Languages RESTART IDENTITY CASCADE;')
    db.session.commit()
