from app.models import db, Category


def seed_categories():

    web_application = Category(name="Web Application")
    db.session.add(web_application)

    custom_website = Category(name="Custom Website")
    db.session.add(custom_website)

    bug_fixes = Category(name="Bug Fixes")
    db.session.add(bug_fixes)

    scripting = Category(name="Scripting")
    db.session.add(scripting)

    convert_psd = Category(name="Convert PSD")
    db.session.add(convert_psd)

    landing_page = Category(name="Landing Page")
    db.session.add(landing_page)

    email_template = Category(name="Email Template")
    db.session.add(email_template)

    browser_extensions = Category(name="Browser Extensions")
    db.session.add(browser_extensions)

    help_consultation = Category(name="Help Consultation")
    db.session.add(help_consultation)




    
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_categories():
    db.session.execute('TRUNCATE Categories RESTART IDENTITY CASCADE;')
    db.session.commit()
