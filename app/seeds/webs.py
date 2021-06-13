from app.models import db, Web


def seed_webs():

    web_programming_1 = Web(type="Basic", title="Basic PHP coding", description="In this i will give you simple php codes with mysql in a way you want.",
                            delivery_time=1, pages=1, design_custom=False, content_upload=True, responsive_design=True, source_code=True, revisions=888, price=5)
    web_programming_2 = Web(type="Basic", title="Clean Minimalist", description="Simple and minimalist static single page web app",
                            delivery_time=1, pages=1, design_custom=False, content_upload=False, responsive_design=False, source_code=True, revisions=0, price=105)
    web_programming_3 = Web(type="Basic", title="Basic", description="Web Map Application + GIS Data integration + Application Deployment on Cloud",
                            delivery_time=7, pages=1, design_custom=False, content_upload=False, responsive_design=True, source_code=True, revisions=0, price=500)
    web_programming_4 = Web(type="Basic", title="Basic", description="Basic web application including landing page with responsive design.",
                            delivery_time=7, pages=2, design_custom=False, content_upload=False, responsive_design=True, source_code=True, revisions=0, price=60)
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

    web_programming_29 = Web(type="Standard", title="A WEB APP", description="In standuard catagory i will make a web app of your requirements professionally.",
                             delivery_time=2, pages=1, design_custom=False, content_upload=False, responsive_design=True, source_code=True, revisions=888, price=20)
    web_programming_30 = Web(type="Standard", title="Standard", description="Responsive web app with modern design and database connectivity",
                             delivery_time=2, pages=4, design_custom=True, content_upload=False, responsive_design=True, source_code=True, revisions=1, price=495)
    web_programming_31 = Web(type="Standard", title="Standard", description="Everything from Basic + API integration + GIS Data Processing",
                             delivery_time=14, pages=1, design_custom=True, content_upload=False, responsive_design=True, source_code=True, revisions=0, price=1500)
    web_programming_32 = Web(type="Standard", title="Standard", description="Complex web application with complete routing and Api integration.",
                             delivery_time=14, pages=3, design_custom=False, content_upload=True, responsive_design=True, source_code=True, revisions=1, price=100)
    web_programming_33 = Web(type="Standard", title="Medium level online academy site", description="Courses, students, teachers and admin modules",
                             delivery_time=3, pages=3, design_custom=True, content_upload=True, responsive_design=True, source_code=True, revisions=888, price=250)
    web_programming_34 = Web(type="Standard", title="Standard", description="Simple design 3 pages Web app with database by simple crud. Please discuss before placing order.",
                             delivery_time=3, pages=3, design_custom=True, content_upload=True, responsive_design=True, source_code=True, revisions=1, price=55)
    web_programming_35 = Web(type="Standard", title="MEDIUM", description="I will make a calculator with formula applied. (5-7 fields)",
                             delivery_time=6, pages=2, design_custom=True, content_upload=True, responsive_design=True, source_code=True, revisions=888, price=60)
    web_programming_36 = Web(type="Standard", title="A bit more involved", description="I will create a tool, write an involved script, and introduce some functionality.",
                             delivery_time=7, pages=1, design_custom=True, content_upload=False, responsive_design=True, source_code=True, revisions=3, price=300)
    web_programming_37 = Web(type="Standard", title="Google Map in Dynamic Web Page", description="I will create a map in a dynamic web page with marks from db and info window or bootstrap modal.",
                             delivery_time=7, pages=0, design_custom=False, content_upload=True, responsive_design=True, source_code=True, revisions=3, price=315)
    web_programming_38 = Web(type="Standard", title="Standard", description="5 pages website", delivery_time=12, pages=4,
                             design_custom=False, content_upload=False, responsive_design=False, source_code=True, revisions=2, price=345)
    web_programming_39 = Web(type="Standard", title="Calculator", description="Calculator with an average complexity of calculations",
                             delivery_time=6, pages=1, design_custom=False, content_upload=False, responsive_design=False, source_code=False, revisions=888, price=165)
    web_programming_40 = Web(type="Standard", title="standard", description="Add new Feature in your existing website - Please contact me before placing order",
                             delivery_time=5, pages=0, design_custom=False, content_upload=False, responsive_design=False, source_code=False, revisions=3, price=350)
    web_programming_41 = Web(type="Standard", title="Customized Interactive Chart", description="1 customized interactive chart. Price listed only serves as a reference.",
                             delivery_time=5, pages=0, design_custom=False, content_upload=False, responsive_design=False, source_code=True, revisions=3, price=70)
    web_programming_42 = Web(type="Standard", title="Feature-rich Monday App", description="Hustle-free project with UI/UX, PM, and quality delivery included",
                             delivery_time=30, pages=0, design_custom=False, content_upload=False, responsive_design=False, source_code=False, revisions=2, price=4500)
    web_programming_43 = Web(type="Standard", title="Average form/calculator", description="Price for average calculator, up to 30 inputs, up to 10 formulas.",
                             delivery_time=10, pages=1, design_custom=False, content_upload=False, responsive_design=False, source_code=False, revisions=5, price=170)
    web_programming_44 = Web(type="Standard", title="Migration to New Server", description="Migrate Existing ERPNext to new Server + Basic",
                             delivery_time=5, pages=0, design_custom=False, content_upload=False, responsive_design=False, source_code=True, revisions=1, price=100)
    db.session.add(web_programming_29)
    db.session.add(web_programming_30)
    db.session.add(web_programming_31)
    db.session.add(web_programming_32)
    db.session.add(web_programming_33)
    db.session.add(web_programming_34)
    db.session.add(web_programming_35)
    db.session.add(web_programming_36)
    db.session.add(web_programming_37)
    db.session.add(web_programming_38)
    db.session.add(web_programming_39)
    db.session.add(web_programming_40)
    db.session.add(web_programming_41)
    db.session.add(web_programming_42)
    db.session.add(web_programming_43)
    db.session.add(web_programming_44)

    web_programming_45 = Web(type="Premium", title="A Complete WEB App", description="In premium i will make a whole web app with all functions requirements with design database and stuf",
                             delivery_time=10, pages=1, design_custom=True, content_upload=True, responsive_design=True, source_code=True, revisions=888, price=100)
    web_programming_46 = Web(type="Premium", title="Premium", description="Complete modern full-stack frontend and backend app.",
                             delivery_time=5, pages=10, design_custom=True, content_upload=True, responsive_design=True, source_code=True, revisions=2, price=995)
    web_programming_47 = Web(type="Premium", title="Premium", description="Everything from Standard + Geoprocessing Service + User Authentication + custom features",
                             delivery_time=30, pages=1, design_custom=True, content_upload=True, responsive_design=True, source_code=True, revisions=0, price=3000)
    web_programming_48 = Web(type="Premium", title="Premium", description="Full fledge we application with multiple pages including routing, responsive, progressive and apis.",
                             delivery_time=21, pages=5, design_custom=True, content_upload=True, responsive_design=True, source_code=True, revisions=2, price=200)
    web_programming_49 = Web(type="Premium", title="High level online academy site", description="Courses, students, teachers, certificates, quizzes, chat forums and admin modules",
                             delivery_time=7, pages=10, design_custom=True, content_upload=True, responsive_design=True, source_code=True, revisions=888, price=400)
    web_programming_50 = Web(type="Premium", title="Premium", description="Advanced dynamic web application with advanced features. Please discuss before placing order.",
                             delivery_time=15, pages=7, design_custom=True, content_upload=True, responsive_design=True, source_code=True, revisions=2, price=240)
    web_programming_51 = Web(type="Premium", title="LARGE", description="I will make a calculator with formula applied. 8+ fields)",
                             delivery_time=10, pages=8, design_custom=True, content_upload=True, responsive_design=True, source_code=True, revisions=888, price=100)
    web_programming_52 = Web(type="Premium", title="Real Project", description="I will completely design, develop, and test your new idea or feature, with some business strategy.",
                             delivery_time=90, pages=1, design_custom=True, content_upload=False, responsive_design=True, source_code=True, revisions=5, price=3000)
    web_programming_53 = Web(type="Premium", title="Google Map with Admin Portal", description="I will create a map in a dynamic web page with marks, info window/bootstrap modal and admin portal.",
                             delivery_time=14, pages=0, design_custom=False, content_upload=True, responsive_design=True, source_code=True, revisions=3, price=755)
    web_programming_54 = Web(type="Premium", title="Premium", description="10 pages website", delivery_time=22, pages=10,
                             design_custom=False, content_upload=False, responsive_design=False, source_code=True, revisions=3, price=850)
    web_programming_55 = Web(type="Premium", title="Complex calculator", description="Custom calculator with complex calculations + complex functionality + options page + ...",
                             delivery_time=7, pages=2, design_custom=False, content_upload=False, responsive_design=False, source_code=False, revisions=888, price=555)
    web_programming_56 = Web(type="Premium", title="PREMIUM", description="Fix Bugs or Add new Feature + Speed improvement and on page SEO for up to 20 pages",
                             delivery_time=10, pages=0, design_custom=False, content_upload=False, responsive_design=False, source_code=False, revisions=5, price=985)
    web_programming_57 = Web(type="Premium", title="Complex Interactive Chart", description="Up to 3 customized interactive charts. Price listed only serves as a reference.",
                             delivery_time=7, pages=0, design_custom=False, content_upload=False, responsive_design=False, source_code=True, revisions=5, price=150)
    web_programming_58 = Web(type="Premium", title="SaaS Monday App", description="Make Your Monday App Make You Money. Subscription model, authentication, admin panel included",
                             delivery_time=45, pages=0, design_custom=False, content_upload=False, responsive_design=False, source_code=False, revisions=2, price=7000)
    web_programming_59 = Web(type="Premium", title="Advanced form/calculator", description="Complex calculator up to 50 inputs and buttons, 30 formulas. Need more? Please, contact me.",
                             delivery_time=14, pages=1, design_custom=False, content_upload=False, responsive_design=False, source_code=False, revisions=888, price=300)
    web_programming_60 = Web(type="Premium", title="Debranding", description="Replace all traces of ERPNext and Frappe + logo with your Company Name from front-end",
                             delivery_time=7, pages=0, design_custom=False, content_upload=False, responsive_design=False, source_code=True, revisions=1, price=200)

    db.session.add(web_programming_45)
    db.session.add(web_programming_46)
    db.session.add(web_programming_47)
    db.session.add(web_programming_48)
    db.session.add(web_programming_49)
    db.session.add(web_programming_50)
    db.session.add(web_programming_51)
    db.session.add(web_programming_52)
    db.session.add(web_programming_53)
    db.session.add(web_programming_54)
    db.session.add(web_programming_55)
    db.session.add(web_programming_56)
    db.session.add(web_programming_57)
    db.session.add(web_programming_58)
    db.session.add(web_programming_59)
    db.session.add(web_programming_60)

    custom_web_61 = Web(type="Basic", title="Basic", description="Fixing issues in html, css and bootstrap", delivery_time=3,
                        pages=1, design_custom=False, content_upload=True, responsive_design=False, source_code=True, revisions=7, price=5)
    custom_web_62 = Web(type="Basic", title="Basic", description="I will create any kind of script according to your requirements.",
                        delivery_time=2, pages=1, design_custom=False, content_upload=True, responsive_design=False, source_code=True, revisions=888, price=20)
    custom_web_63 = Web(type="Basic", title="BASIC WEBSITE DEVELOPMENT", description="Basic HTML CSS Website with PHP", delivery_time=2,
                        pages=3, design_custom=False, content_upload=True, responsive_design=False, source_code=True, revisions=888, price=10)
    custom_web_64 = Web(type="Basic", title="Basic Editing", description="Two issues will be fixed or two things will be edited in this pack. For w3c validation: 1 page.",
                        delivery_time=2, pages=0, design_custom=False, content_upload=True, responsive_design=False, source_code=False, revisions=3, price=5)
    custom_web_65 = Web(type="Basic", title="Forms and database views", description="In this package i'll develop forms for you for your surveys or registration of any of your activity",
                        delivery_time=2, pages=2, design_custom=False, content_upload=True, responsive_design=True, source_code=False, revisions=2, price=100)
    custom_web_66 = Web(type="Basic", title="Basic", description="A simple fully developed and designed website with responsive design and extensive proficiency.",
                        delivery_time=2, pages=1, design_custom=False, content_upload=True, responsive_design=True, source_code=False, revisions=888, price=40)
    custom_web_67 = Web(type="Basic", title="Basic Installation.", description="Install moodle on shared hosting. Use 'Get a Quote' form for error fixing & troubleshooting.",
                        delivery_time=4, pages=0, design_custom=False, content_upload=False, responsive_design=False, source_code=False, revisions=0, price=15)
    custom_web_68 = Web(type="Basic", title="Single", description="I will upload and install 1 website.", delivery_time=2,
                        pages=0, design_custom=False, content_upload=True, responsive_design=True, source_code=True, revisions=2, price=5)
    custom_web_69 = Web(type="Basic", title="Basic", description="i will do shopify custom coding,bug fixing and PLEASE DONT PLACE ORDER WITHOUT DISCUSSING FIRST",
                        delivery_time=1, pages=0, design_custom=False, content_upload=False, responsive_design=True, source_code=True, revisions=1, price=5)
    custom_web_70 = Web(type="Basic", title="Kajabi expert", description="i will do anything for you in kajabi", delivery_time=21,
                        pages=1, design_custom=False, content_upload=False, responsive_design=True, source_code=True, revisions=2, price=350)
    custom_web_71 = Web(type="Basic", title="Please discuss work before order", description="I will fix php error in your website Please discuss work before order Thanks :-)",
                        delivery_time=4, pages=1, design_custom=False, content_upload=False, responsive_design=True, source_code=True, revisions=0, price=15)
    custom_web_72 = Web(type="Basic", title="Basic", description="simple reactjs website with 2 to 3 pages with routing and about us page",
                        delivery_time=2, pages=3, design_custom=False, content_upload=False, responsive_design=False, source_code=True, revisions=888, price=10)
    custom_web_73 = Web(type="Basic", title="Basic Package", description="I will fix small bugs and deploy your app on server", delivery_time=2,
                        pages=2, design_custom=False, content_upload=False, responsive_design=False, source_code=True, revisions=888, price=40)
    custom_web_74 = Web(type="Basic", title="Starter Package", description="Fix small bugs or install Laravel Script in your server.",
                        delivery_time=2, pages=0, design_custom=False, content_upload=True, responsive_design=False, source_code=True, revisions=0, price=20)
    custom_web_75 = Web(type="Basic", title="Basic", description="For every new page or some changes in website or validation",
                        delivery_time=3, pages=1, design_custom=False, content_upload=True, responsive_design=False, source_code=True, revisions=2, price=30)
    custom_web_76 = Web(type="Basic", title="Basic", description="One or two simple bugs fixing only. Inbox me before placing order.",
                        delivery_time=4, pages=0, design_custom=False, content_upload=True, responsive_design=True, source_code=True, revisions=0, price=25)
    custom_web_77 = Web(type="Basic", title="All in one", description="For any CSS/ HTML issue, new website, editing in current website, PSD TO HTML",
                        delivery_time=3, pages=0, design_custom=False, content_upload=False, responsive_design=True, source_code=True, revisions=0, price=5)
    custom_web_78 = Web(type="Basic", title="PSD,XD,SKETCH,FIGMA into html", description="I will convert the designs to responsive html css with all the latest web standards and technologies",
                        delivery_time=2, pages=1, design_custom=False, content_upload=False, responsive_design=True, source_code=True, revisions=2, price=80)
    custom_web_79 = Web(type="Basic", title="Basic Pack", description="integrate google map into your website and error removing related to Map",
                        delivery_time=2, pages=0, design_custom=False, content_upload=False, responsive_design=False, source_code=False, revisions=2, price=10)
    custom_web_80 = Web(type="Basic", title="Basic Package", description="Here i am offering a basic page plan ), feel free to connect me, for more details.. thanks",
                        delivery_time=2, pages=1, design_custom=False, content_upload=True, responsive_design=True, source_code=False, revisions=2, price=80)
    custom_web_81 = Web(type="Basic", title="Landing Page", description="Develop a simple and beautiful one page website", delivery_time=2,
                        pages=1, design_custom=False, content_upload=True, responsive_design=False, source_code=False, revisions=5, price=145)
    custom_web_82 = Web(type="Basic", title="Silver", description="- Development only Basic Site Pages", delivery_time=5,
                        pages=3, design_custom=False, content_upload=True, responsive_design=False, source_code=False, revisions=1, price=375)
    custom_web_83 = Web(type="Basic", title="Basic", description="I will fix any type of bug in your php website.", delivery_time=1,
                        pages=0, design_custom=False, content_upload=False, responsive_design=False, source_code=False, revisions=888, price=10)
    custom_web_84 = Web(type="Basic", title="Starter", description="Starting plan 2-3 pages website, responsive design,pages setup, with basic modules.",
                        delivery_time=12, pages=3, design_custom=False, content_upload=True, responsive_design=True, source_code=True, revisions=2, price=780)
    custom_web_85 = Web(type="Basic", title="Small Package", description="I will create a website containing 2 pages as a frontend website.",
                        delivery_time=4, pages=1, design_custom=False, content_upload=True, responsive_design=True, source_code=True, revisions=0, price=60)
    custom_web_86 = Web(type="Basic", title="SIMPLE", description="Scripts and codes with simple logic", delivery_time=10,
                        pages=0, design_custom=False, content_upload=False, responsive_design=False, source_code=False, revisions=888, price=80)
    custom_web_87 = Web(type="Basic", title="Basic", description="Basic One Page Website - Login / Sign up (Please contact before order )",
                        delivery_time=1, pages=0, design_custom=False, content_upload=False, responsive_design=False, source_code=False, revisions=0, price=5)

    db.session.add(custom_web_61)
    db.session.add(custom_web_62)
    db.session.add(custom_web_63)
    db.session.add(custom_web_64)
    db.session.add(custom_web_65)
    db.session.add(custom_web_66)
    db.session.add(custom_web_67)
    db.session.add(custom_web_68)
    db.session.add(custom_web_69)
    db.session.add(custom_web_70)
    db.session.add(custom_web_71)
    db.session.add(custom_web_72)
    db.session.add(custom_web_73)
    db.session.add(custom_web_74)
    db.session.add(custom_web_75)
    db.session.add(custom_web_76)
    db.session.add(custom_web_77)
    db.session.add(custom_web_78)
    db.session.add(custom_web_79)
    db.session.add(custom_web_80)
    db.session.add(custom_web_81)
    db.session.add(custom_web_82)
    db.session.add(custom_web_83)
    db.session.add(custom_web_84)
    db.session.add(custom_web_85)
    db.session.add(custom_web_86)
    db.session.add(custom_web_87)

    custom_web_88 = Web(type="Standard", title="Standard", description="I will design and develop portfolio website.", delivery_time=5,
                        pages=4, design_custom=False, content_upload=True, responsive_design=True, source_code=True, revisions=9, price=150)
    custom_web_89 = Web(type="Standard", title="More Editing", description="If need more editing and fixing 5 for only $10.", delivery_time=2,
                        pages=1, design_custom=False, content_upload=True, responsive_design=False, source_code=True, revisions=3, price=10)
    custom_web_90 = Web(type="Standard", title="Single Page Simple Website", description="I will develop a site for you which i'll try to cover all your requirements.",
                        delivery_time=5, pages=1, design_custom=False, content_upload=True, responsive_design=True, source_code=True, revisions=5, price=520)
    custom_web_91 = Web(type="Standard", title="Standard", description="All features like Signup and Login feasibility, database integration, creative design using CSS &JS.",
                        delivery_time=6, pages=4, design_custom=False, content_upload=False, responsive_design=True, source_code=True, revisions=888, price=140)
    custom_web_92 = Web(type="Standard", title="Upgradation", description="moodle Major Version upgrade. e.g. 3.7 to 3.8", delivery_time=4,
                        pages=0, design_custom=False, content_upload=True, responsive_design=False, source_code=False, revisions=0, price=65)
    custom_web_93 = Web(type="Standard", title="Triple Discount", description="I will upload and install 3 website for the price of 2",
                        delivery_time=3, pages=0, design_custom=False, content_upload=True, responsive_design=True, source_code=True, revisions=3, price=10)
    custom_web_94 = Web(type="Standard", title="Make sure discuss work before order", description="I Will create php module for you, Discuss work before order Thanks :-)",
                        delivery_time=5, pages=1, design_custom=False, content_upload=True, responsive_design=True, source_code=True, revisions=0, price=100)
    custom_web_95 = Web(type="Standard", title="Standard", description="For small and medium web app like Login , Sign Up and CRUD Operations perform.",
                        delivery_time=3, pages=4, design_custom=False, content_upload=True, responsive_design=False, source_code=True, revisions=888, price=20)
    custom_web_96 = Web(type="Standard", title="Standard Package", description="I will add new modules or features in your app", delivery_time=5,
                        pages=0, design_custom=False, content_upload=False, responsive_design=True, source_code=True, revisions=888, price=100)
    custom_web_97 = Web(type="Standard", title="Standard Package", description="Add new features to your existing PHP Laravel website.",
                        delivery_time=3, pages=0, design_custom=False, content_upload=True, responsive_design=True, source_code=True, revisions=888, price=50)
    custom_web_98 = Web(type="Standard", title="Standard website", description="Development of new website or maintenance or development of new static application",
                        delivery_time=10, pages=7, design_custom=False, content_upload=True, responsive_design=True, source_code=True, revisions=3, price=250)
    custom_web_99 = Web(type="Standard", title="Standard", description="Create a simple web application for your business.", delivery_time=30,
                        pages=0, design_custom=False, content_upload=True, responsive_design=True, source_code=True, revisions=1, price=1000)
    custom_web_100 = Web(type="Standard", title="Normal PSD,XD,SKETCH,FIGMA to html", description="I will convert the designs to responsive html css with all the latest web standards and technologies",
                         delivery_time=5, pages=6, design_custom=False, content_upload=False, responsive_design=True, source_code=True, revisions=2, price=400)
    custom_web_101 = Web(type="Standard", title="Standard Pack", description="integration / module development based on Google maps With front End only",
                         delivery_time=3, pages=0, design_custom=False, content_upload=False, responsive_design=False, source_code=False, revisions=4, price=40)
    custom_web_102 = Web(type="Standard", title="Standard", description="I will convert your provided design into responsive HTML CSS according to w3c standards",
                         delivery_time=4, pages=5, design_custom=False, content_upload=True, responsive_design=True, source_code=False, revisions=2, price=380)
    custom_web_103 = Web(type="Standard", title="Business Website", description="Five Pages Website (Home, About, Services, FAQ, Contact)",
                         delivery_time=2, pages=5, design_custom=False, content_upload=True, responsive_design=False, source_code=False, revisions=5, price=245)
    custom_web_104 = Web(type="Standard", title="Gold", description="- Development Only Site pages including Blog Page", delivery_time=10,
                         pages=5, design_custom=False, content_upload=True, responsive_design=False, source_code=False, revisions=1, price=575)
    custom_web_105 = Web(type="Standard", title="Standard", description="maximum 5 pages CRUD web application using HTML, CSS, JS, PHP and MySQL database.",
                         delivery_time=3, pages=0, design_custom=False, content_upload=False, responsive_design=False, source_code=False, revisions=888, price=150)
    custom_web_106 = Web(type="Standard", title="Corporate", description="Great designed website, 3-6 pages, SEO optimized. Responsive",
                         delivery_time=18, pages=6, design_custom=False, content_upload=True, responsive_design=True, source_code=True, revisions=2, price=1430)
    custom_web_107 = Web(type="Standard", title="Medium Package", description="I will create a website containing 4 pages as a frontend website.",
                         delivery_time=5, pages=2, design_custom=False, content_upload=True, responsive_design=True, source_code=True, revisions=0, price=150)
    custom_web_108 = Web(type="Standard", title="MODERATE", description="Scripts and Codes with little more complexity -Debugging- Data Structures - Algorithms", delivery_time=14, pages=0, design_custom=False, content_upload=False, responsive_design=False, source_code=False, revisions=888, price=150)

    db.session.add(custom_web_88)
    db.session.add(custom_web_89)
    db.session.add(custom_web_90)
    db.session.add(custom_web_91)
    db.session.add(custom_web_92)
    db.session.add(custom_web_93)
    db.session.add(custom_web_94)
    db.session.add(custom_web_95)
    db.session.add(custom_web_96)
    db.session.add(custom_web_97)
    db.session.add(custom_web_98)
    db.session.add(custom_web_99)
    db.session.add(custom_web_100)
    db.session.add(custom_web_101)
    db.session.add(custom_web_102)
    db.session.add(custom_web_103)
    db.session.add(custom_web_104)
    db.session.add(custom_web_105)
    db.session.add(custom_web_106)
    db.session.add(custom_web_107)
    db.session.add(custom_web_108)

    custom_web_109=Web(type = "Premium", title = "premium", description = "I will design and develop dynamic online stores and multi vendor website.",
                         delivery_time = 7, pages = 10, design_custom = True, content_upload = True, responsive_design = True, source_code = True, revisions = 888, price = 400)
    custom_web_110=Web(type = "Premium", title = "Editing whole page", description = "If need whole web page contents and style editing, it is for you. And only in $20.",
                         delivery_time = 3, pages = 1, design_custom = True, content_upload = True, responsive_design = False, source_code = True, revisions = 5, price = 20)
    custom_web_111=Web(type = "Premium", title = "Multi Page website", description = "In this i'll develop a complete full stack wesbite for you.",
                         delivery_time = 15, pages = 7, design_custom = True, content_upload = True, responsive_design = True, source_code = True, revisions = 8, price = 995)
    custom_web_112=Web(type = "Premium", title = "Premium", description = "A website consisting of 7 pages fulfilling all your requirements that lie on this package.",
                         delivery_time = 10, pages = 7, design_custom = True, content_upload = True, responsive_design = True, source_code = True, revisions = 888, price = 250)
    custom_web_113=Web(type = "Premium", title = "Advance Installation", description = "Install moodle on shared hosting and configure any theme exactly like its demo. Configure cron, mail",
                         delivery_time = 4, pages = 0, design_custom = False, content_upload = False, responsive_design = False, source_code = False, revisions = 0, price = 125)
    custom_web_114=Web(type = "Premium", title = "All In One", description = "I will upload and install all your websites.", delivery_time = 5,
                         pages = 0, design_custom = True, content_upload = True, responsive_design = True, source_code = True, revisions = 5, price = 100)
    custom_web_115=Web(type = "Premium", title = "Discuss work before order", description = "Php APIs Web Applications/Sites + mysql. Please discuss work before order Thanks :-)",
                         delivery_time = 6, pages = 3, design_custom = True, content_upload = True, responsive_design = True, source_code = True, revisions = 0, price = 300)
    custom_web_116=Web(type = "Premium", title = "Premuim", description = "For Large Scale Applications Like build architecture using react redux and Integrate Rest ful apis",
                         delivery_time = 4, pages = 7, design_custom = True, content_upload = True, responsive_design = True, source_code = True, revisions = 888, price = 50)
    custom_web_117=Web(type = "Premium", title = "Premium Package", description = "I will design, architecture and develop a fully functional high performance web application",
                         delivery_time = 7, pages = 6, design_custom = True, content_upload = True, responsive_design = True, source_code = True, revisions = 888, price = 250)
    custom_web_118=Web(type = "Premium", title = "Premium Package", description = "Develop a complete website from scratch with Laravel. Please message me before placing an order.",
                         delivery_time = 20, pages = 0, design_custom = True, content_upload = True, responsive_design = True, source_code = True, revisions = 888, price = 400)
    custom_web_119=Web(type = "Premium", title = "Premium web Application", description = "Fully Dynamic website, web application or API development or Android Application",
                         delivery_time = 21, pages = 7, design_custom = True, content_upload = True, responsive_design = True, source_code = True, revisions = 3, price = 530)
    custom_web_120=Web(type = "Premium", title = "Premium", description = "Complete Complex Website creation with requirements that falls in this package.",
                         delivery_time = 75, pages = 10, design_custom = True, content_upload = True, responsive_design = True, source_code = True, revisions = 2, price = 2500)
    custom_web_121=Web(type = "Premium", title = "Complex PSD,XD,SKETCH, into html", description = "I will convert the design to responsive html css with all the latest web standards and technologies.",
                         delivery_time = 10, pages = 10, design_custom = True, content_upload = True, responsive_design = True, source_code = True, revisions = 2, price = 700)
    custom_web_122=Web(type = "Premium", title = "PREMIUM Pack", description = "Package includes development of Google Maps based website, with admin management portal",
                         delivery_time = 5, pages = 0, design_custom = False, content_upload = False, responsive_design = False, source_code = False, revisions = 888, price = 130)
    custom_web_123=Web(type = "Premium", title = "Premium", description = "I will convert your provided design into responsive HTML CSS according to w3c standards",
                         delivery_time = 7, pages = 9, design_custom = True, content_upload = True, responsive_design = True, source_code = True, revisions = 2, price = 650)
    custom_web_124=Web(type = "Premium", title = "Ecommerce Website", description = "Includes 5 pages and 5 products.", delivery_time = 2,
                         pages = 5, design_custom = False, content_upload = True, responsive_design = False, source_code = False, revisions = 5, price = 550)
    custom_web_125=Web(type = "Premium", title = "Platinum", description = "- Design and Development Site Pages up to 4 including Blog , 1 Mail template 1 Landing Page",
                         delivery_time = 14, pages = 7, design_custom = False, content_upload = True, responsive_design = False, source_code = False, revisions = 1, price = 995)
    custom_web_126=Web(type = "Premium", title = "Premium", description = "more than 5 pages CRUD application using HTML, CSS, JS, PHP and MySQL database.",
                         delivery_time = 7, pages = 0, design_custom = False, content_upload = False, responsive_design = False, source_code = False, revisions = 888, price = 300)
    custom_web_127=Web(type = "Premium", title = "Enterprise", description = "Outstanding designed website, up to 10 pages, SEO optimized. Responsive",
                         delivery_time = 25, pages = 10, design_custom = True, content_upload = True, responsive_design = True, source_code = True, revisions = 3, price = 1980)
    custom_web_128=Web(type = "Premium", title = "Large Package", description = "I will create a website containing 6 pages as a frontend website.",
                         delivery_time = 7, pages = 3, design_custom = True, content_upload = True, responsive_design = True, source_code = True, revisions = 0, price = 250)
    custom_web_129=Web(type = "Premium", title = "PREMIUM", description = "Complex Scripts and Codes - Complex Task - Complex Algo", delivery_time = 21,
                         pages = 0, design_custom = False, content_upload = False, responsive_design = False, source_code = False, revisions = 888, price = 350)

    db.session.add(custom_web_109)
    db.session.add(custom_web_110)
    db.session.add(custom_web_111)
    db.session.add(custom_web_112)
    db.session.add(custom_web_113)
    db.session.add(custom_web_114)
    db.session.add(custom_web_115)
    db.session.add(custom_web_116)
    db.session.add(custom_web_117)
    db.session.add(custom_web_118)
    db.session.add(custom_web_119)
    db.session.add(custom_web_120)
    db.session.add(custom_web_121)
    db.session.add(custom_web_122)
    db.session.add(custom_web_123)
    db.session.add(custom_web_124)
    db.session.add(custom_web_125)
    db.session.add(custom_web_126)
    db.session.add(custom_web_127)
    db.session.add(custom_web_128)
    db.session.add(custom_web_129)

    db.session.commit()
# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_webs():
    db.session.execute('TRUNCATE Web RESTART IDENTITY CASCADE;')
    db.session.commit()
