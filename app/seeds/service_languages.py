from app.models import db, ServiceLanguage


# Adds a demo user, you can add other users here if you want
def seed_service_languages():

    not_defined = ServiceLanguage(name="Not Defined")
    db.session.add(not_defined)

    asp_net = ServiceLanguage(name="ASP.NET")
    db.session.add(asp_net)

    html_css = ServiceLanguage(name="HTML & CSS")
    db.session.add(html_css)

    javascript = ServiceLanguage(name="JavaScript")
    db.session.add(javascript)

    perl = ServiceLanguage(name="Perl")
    db.session.add(perl)

    php = ServiceLanguage(name=" PHP")
    db.session.add(php)

    python = ServiceLanguage(name="Python")
    db.session.add(python)

    ruby_ror = ServiceLanguage(name="Ruby/RoR")
    db.session.add(ruby_ror)

    scala = ServiceLanguage(name="Scala")
    db.session.add(scala)

    flash = ServiceLanguage(name="Flash")
    db.session.add(flash)

    java = ServiceLanguage(name="Java")
    db.session.add(java)

    type_script = ServiceLanguage(name="TypeScript")
    db.session.add(type_script)

    c = ServiceLanguage(name="C#")
    db.session.add(c)

    go = ServiceLanguage(name="Go")
    db.session.add(go)

    kotlin = ServiceLanguage(name="Kotlin")
    db.session.add(kotlin)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_service_languages():
    db.session.execute('TRUNCATE ServiceLanguages RESTART IDENTITY CASCADE;')
    db.session.commit()
