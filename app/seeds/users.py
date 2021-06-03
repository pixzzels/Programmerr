from app.models import db, User
from faker import Faker
fake = Faker()
# Faker.seed(0)
# fake.paragraph(nb_sentences=5)
# fake.sentence(nb_words=10)
# fake.boolean(chance_of_getting_true=50)
# fake.password(length=12)


# Adds a demo user, you can add other users here if you want
def seed_users():
    # demo = User(
    #     username='Demo', 
    #     email='demo@.io', 
    #     password='password', 
    #     profile_img=fake.image_url(), 
    #     description=fake.paragraph(nb_sentences=6),
    #     date_created=fake.date_between(start_date='-20y', end_date='today')
    # )

    # db.session.add(demo)

    # db.session.commit()

    for i in range(4):
        fake_users = User(
            username = fake.user_name(),
            email = fake.ascii_safe_email(),
            password = fake.password(length=10),
            profile_img = fake.image_url(),
            description = fake.paragraph(nb_sentences=6),
            date_created = fake.date_between(start_date='-20y', end_date='today')
        )
    db.session.add(fake_users)

    db.session.commit()
        

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE Users RESTART IDENTITY CASCADE;')
    db.session.commit()
