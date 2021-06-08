from app.models import db, Web


# Adds a demo user, you can add other users here if you want
def seed_webs():

    web_programming_1 = Web(type="Basic", title="Basic PHP coding", description="In this i will give you simple php codes with mysql in a way you want.",
                            delivery_time=1, pages=1, design_custom=True, content_upload=True, responsive_design=True, source_code=True, revisions=888, price=5)
    web_programming_2 = Web(type="Basic", title="Clean Minimalist", description="Simple and minimalist static single page web app",
                            delivery_time=1, pages=1, design_custom=True, content_upload=True, responsive_design=True, source_code=True, revisions=0, price=105)
    web_programming_3 = Web(type="Basic", title="Basic", description="Web Map Application + GIS Data integration + Application Deployment on Cloud",
                            delivery_time=7, pages=1, design_custom=True, content_upload=True, responsive_design=True, source_code=True, revisions=0, price=500)
    web_programming_4 = Web(type="Basic", title="Basic", description="Basic web application including landing page with responsive design.",
                            delivery_time=7, pages=2, design_custom=True, content_upload=True, responsive_design=True, source_code=True, revisions=0, price=60)
    web_programming_5 = Web(type="Basic", title="Bep-20 Token Development", description="I will create and Deploy your own Bep-20 Token on Binance Smart Chain",
                            delivery_time=1, pages=0, design_custom=False, content_upload=False, responsive_design=False, source_code=True, revisions=4, price=50)
    web_programming_6 = Web(type="Basic", title="Twilio", description="I can help you with setting up and configuring Twilio. Contact me before ordering",
                            delivery_time=2, pages=1, design_custom=False, content_upload=False, responsive_design=False, source_code=True, revisions=0, price=50)
    web_programming_7 = Web(type="Basic", title="Basic", description="I will write custom php script according to your requirements",
                            delivery_time=2, pages=0, design_custom=False, content_upload=False, responsive_design=False, source_code=False, revisions=3, price=10)
    web_programming_8 = Web(type="Basic", title="Rails PRO", description="Hire me for any Ruby on Rails Development / Feature / Error / Help / deployment. All in one place.",
                            delivery_time=3, pages=0, design_custom=False, content_upload=False, responsive_design=False, source_code=False, revisions=0, price=25)
    web_programming_9 = Web(type="Basic", title="Basic Gig", description="I'll provide PHP assistance for your bug fixes, new features creation and more.",
                            delivery_time=2, pages=0, design_custom=False, content_upload=False, responsive_design=False, source_code=False, revisions=2, price=5)
    web_programming_10 = Web(type="Basic", title="Initial level online academy site", description="Courses, students and admin modules",
                             delivery_time=1, pages=1, design_custom=True, content_upload=True, responsive_design=True, source_code=True, revisions=888, price=50)
    web_programming_11 = Web(type="Basic", title="Zap Build", description="I'll automate a business process for you by building 1 or more zaps in Zapier.",
                             delivery_time=3, pages=0, design_custom=False, content_upload=False, responsive_design=False, source_code=True, revisions=1, price=250)
    web_programming_12 = Web(type="Basic", title="Custom ERC20 Token", description="Deploy your own cryptocurrency token on Ethereum blockchain",
                             delivery_time=5, pages=0, design_custom=False, content_upload=False, responsive_design=False, source_code=True, revisions=0, price=100)
    web_programming_13 = Web(type="Basic", title="Standard", description="Software development, bug fixes, design or consultation",
                             delivery_time=3, pages=0, design_custom=False, content_upload=False, responsive_design=False, source_code=True, revisions=0, price=15)
    web_programming_14 = Web(type="Basic", title="Basic", description="Simple design 1 page website or web app with simple features. Please discuss before placing order.",
                             delivery_time=1, pages=1, design_custom=True, content_upload=True, responsive_design=True, source_code=True, revisions=1, price=15)
    web_programming_15 = Web(type="Basic", title="Any Javascript, HTML, CSS Task", description="I will fix or do any javascript, JQuery, Bootstrap, CSS3, HTML5 task, issue on website.",
                             delivery_time=7, pages=1, design_custom=True, content_upload=True, responsive_design=True, source_code=True, revisions=1, price=25)
    web_programming_16 = Web(type="Basic", title="Script Installation", description="I will install the PHP Script on your hosting or Server.",
                             delivery_time=1, pages=0, design_custom=False, content_upload=False, responsive_design=False, source_code=True, revisions=1, price=5)
    web_programming_17 = Web(type="Basic", title="SMALL", description="I will make a calculator with formula applied. (1-5 fields)",
                             delivery_time=5, pages=1, design_custom=True, content_upload=True, responsive_design=True, source_code=True, revisions=888, price=30)
    web_programming_18 = Web(type="Basic", title="Straight Forward", description="I will write a small script, debug one, or quickly talk you through a topic. ($50/hr)",
                             delivery_time=3, pages=1, design_custom=True, content_upload=False, responsive_design=True, source_code=True, revisions=1, price=50)
    web_programming_19 = Web(type="Basic", title="Google Map in Static HTML Page", description="I will create a map in a static HTML page with marks and info window or bootstrap modal.",
                             delivery_time=4, pages=0, design_custom=False, content_upload=True, responsive_design=True, source_code=True, revisions=3, price=135)
    web_programming_20 = Web(type="Basic", title="Complete Website Management System", description="Complete system with Hosting, SSL, Form Server, CMS Panel",
                             delivery_time=3, pages=0, design_custom=False, content_upload=False, responsive_design=False, source_code=False, revisions=0, price=65)
    web_programming_21 = Web(type="Basic", title="Basic Bug Fixing", description="Small issue & bugs fix (Overall 1 hour Work) Please contact me before placing order",
                             delivery_time=3, pages=1, design_custom=False, content_upload=False, responsive_design=False, source_code=True, revisions=1, price=35)
    web_programming_22 = Web(type="Basic", title="Online Calculator", description="Сalculator with simple calculations + design customization",
                             delivery_time=3, pages=1, design_custom=False, content_upload=False, responsive_design=False, source_code=False, revisions=888, price=40)
    web_programming_23 = Web(type="Basic", title="Basic", description="fix any issue which required Overall 1 hour work - Please contact me before placing order",
                             delivery_time=2, pages=0, design_custom=False, content_upload=False, responsive_design=False, source_code=False, revisions=2, price=45)
    web_programming_24 = Web(type="Basic", title="Basic Static Chart", description="1 static basic chart. Price listed only serves as a reference.",
                             delivery_time=3, pages=0, design_custom=False, content_upload=False, responsive_design=False, source_code=True, revisions=1, price=35)
    web_programming_25 = Web(type="Basic", title="Full Project Discovery", description="Complete UI/UX Wireframes, project strategy, timeline and budget estimates, detailed breakdown",
                             delivery_time=14, pages=0, design_custom=False, content_upload=False, responsive_design=False, source_code=False, revisions=0, price=1500)
    web_programming_26 = Web(type="Basic", title="25 HOURS OF ANY DEVELOPMENT WORK", description="CONTACT me BEFORE ORDERING for your project estimate. This package includes only 25 hours dev.work.",
                             delivery_time=10, pages=0, design_custom=False, content_upload=False, responsive_design=False, source_code=False, revisions=0, price=1500)
    web_programming_27 = Web(type="Basic", title="Custom form/calculator creation", description="Simple online calculator. Price for 1-5 fields form, up to 3-5 formulas",
                             delivery_time=5, pages=1, design_custom=False, content_upload=False, responsive_design=False, source_code=False, revisions=1, price=50)
    web_programming_28 = Web(type="Basic", title="Fresh Installation", description="Latest Version Installation Logo, Splash + Favicon Change Remove Help from Navbar Initial Setup",
                             delivery_time=2, pages=0, design_custom=False, content_upload=False, responsive_design=False, source_code=True, revisions=1, price=50)

    db.session.add(web_programming_1)
    db.session.add(web_programming_2)
    db.session.add(web_programming_3)
    db.session.add(web_programming_4)
    db.session.add(web_programming_5)
    db.session.add(web_programming_6)
    db.session.add(web_programming_7)
    db.session.add(web_programming_8)
    db.session.add(web_programming_9)
    db.session.add(web_programming_10)
    db.session.add(web_programming_11)
    db.session.add(web_programming_12)
    db.session.add(web_programming_13)
    db.session.add(web_programming_14)
    db.session.add(web_programming_15)
    db.session.add(web_programming_16)
    db.session.add(web_programming_17)
    db.session.add(web_programming_18)
    db.session.add(web_programming_19)
    db.session.add(web_programming_20)
    db.session.add(web_programming_21)
    db.session.add(web_programming_22)
    db.session.add(web_programming_23)
    db.session.add(web_programming_24)
    db.session.add(web_programming_25)
    db.session.add(web_programming_26)
    db.session.add(web_programming_27)
    db.session.add(web_programming_28)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_webs():
    db.session.execute('TRUNCATE Web RESTART IDENTITY CASCADE;')
    db.session.commit()
