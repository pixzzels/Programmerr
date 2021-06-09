from app.models import db, Review
from faker import Faker
fake = Faker()


def seed_reviews():
    review1 = Review(service_id=2, owner="f5rrusername", description="He was very communicative and responsive even though we had different timezones. He made sure to deliver on time as well as make sure the work was up to par. I would recommend him for all related projects.",
                     score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    review2 = Review(service_id=3, owner="dgd303", description="There isn’t any words good words to even come close to describe how hard working he is and how grateful we are just saying very professional is an understatement we added more to the scope and he was patient with us worth the premium price",
                     score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    review3 = Review(service_id=4, owner="gblack686", description="Joe was extremely communicative, sharing screenshots of instructions and always going the extra mile to give great service. He worked quickly and met expectations. I would happily work with him again.",
                     score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    review4 = Review(service_id=5, owner="guicnj", description="ayazhussains is very professional and very competent. Easy and fast communication with. The quality of the delivery is also really good ! He answered perfectly to my need. I am really happy of this final result and his work. I recommend him strongly !",
                     score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    review5 = Review(service_id=6, owner="scanprotect", description="perfect and very helpful! This guy know alot of solidity and are the best on fiverr. I talked with many other before i decided which one and sagar is the best! The other ones dont know much about solidity or crypto. 5 of 5 stars.",
                     score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    review6 = Review(service_id=7, owner="mgbbackline1", description="I haven’t dealt with anyone on fiver better that Maxmito. Communications are excellent. Comprehension is first class which in turn translates to getting the job done. Maxmito is your twilio saviour",
                     score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    review7 = Review(service_id=8, owner="pxlinteractive", description="I'm uper happy with the end result, its exactly what I wanted. Gohar even suggested to do something different, and thinking about it, his solution was even better than how I thought about it. I hope to hire Gohar soon again!",
                     score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    review8 = Review(service_id=9, owner="palerider877", description="Excellent. We had a few problems but they were associated with our old files. He worked around it and did a great job. Will use him again on future projects.",
                     score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    review9 = Review(service_id=10, owner="wdipintrader", description="5/5 this seller is the best on Fiverr. She makes it perfect and checks for errors that I’ve made as well. Thank you again! I will be ordering more again.",
                     score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    review10 = Review(service_id=11, owner="yeajohnson", description="This project would have taken only 3-5 days max, but my team was the delay so it says 12 days it took to complete but Zee was on top of his game and has amazing work ethics! We will return for additional online courses.",
                      score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    review11 = Review(service_id=12, owner="nancbradl", description="Andrew gets in done exactly as I ask, every time! He sets up my Zapier to go into Google Sheets, Phone Burner, and SalesPype. He stands behind his work and always makes sure it's running smoothly.",
                      score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    review12 = Review(service_id=13, owner="zacalawi", description="For no nonsense, straightforward and honest service get with blockchainguru. He does what he says and means what he says. Communication was excellent and he is very committed to delivering the project on time. The quality of the work is excellent and delivers what he promises plus a little more. If you are serious about your project hire blockchainguru. Remember, you get what you pay for.", score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    review13 = Review(service_id=14, owner="pauletta258", description="Jerome did a great job. Some of the parts have been very tricky and he has been a great developer and consultant for this project. He is great to work with and understands everything very fast! I am looking forward to continue to work with you - thanks a lot!",
                      score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    review14 = Review(service_id=15, owner="the800dj", description="Thanks! Doing Great!",
                      score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    review15 = Review(service_id=16, owner="observations309", description="Hayder was brilliant from start to finish, always easy to contact and got the job delivered as requested in a very short time frame. I struggled to get my data together and often missed parts as I am new to coding, however Hayder helped every step of the way and delivered exactly what I wanted. Would highly recommend.", score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    review16 = Review(service_id=17, owner="sokote", description="Working with Helicarrier, was an awesome experience, he is the best guy I ever meet in Fiveer, his passion for customer satisfaction is ''OUT OF THIS WORLD''. He makes sure that his Gig is delivered on time. He even goes the extra mile. Man, finally I meet a partner to grow business, I will always come back and I will recommend your services. Thanks man!", score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    review17 = Review(service_id=18, owner="calvingrier", description="Absolutely amazing!!!! One of my best experiences on Fiverr. He did exactly what I was looking for, both in coding and design. I wanted a quote calculator that would shift and show prices in real time as people made different choices for the products. I highly recommend Abdullah for any of your projects!",
                      score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    review18 = Review(service_id=19, owner="spahottubs", description="I am pleased with the services I've received. Excellent developer, super easy to communicate with him. Also, I haven't met a more professional service provider on this site. He knows what he's doing, and you will be satisfied with the finished work. I'll be in contact with my future projects.",
                      score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    review19 = Review(service_id=20, owner="outsource23", description="Great Job fixed the java code needed for a project! This is the second gig purchased and he did a great job. Highly recommend!",
                      score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    review20 = Review(service_id=21, owner="monmantilla", description="Great communication and amazing services.",
                      score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    review21 = Review(service_id=22, owner="comgetit", description="Fast delivery..",
                      score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    review22 = Review(service_id=23, owner="philesq", description="He did a great job and it looks beautiful. This is the second calculator he made for me and we're doing another now. One of the benefits of using a calculator on the website is that calculators are good for SEO because they serve as link bait, getting other websites linking to the calculator. Pages with calculators are also easier to get in the top 10 Google results.", score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    review23 = Review(service_id=24, owner="outsource23", description="Great Job fixed the java code needed for a project! This is the second gig purchased and he did a great job. Highly recommend!",
                      score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    review24 = Review(service_id=25, owner="danielmorale651", description="Amazing work, he helped me organize everything the way I wanted and was able to solve all of my issues in a very professional manner. Communication was great throughout the process and he accomplish every little thing we needed to accomplish. I highly recommend!",
                      score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    review25 = Review(service_id=26, owner="clintcox", description="He was incredibly quick, very skilled with the technology required, and was polite during the requirements gathering phase to ensure the final product would be satisfactory. Even afterwards he was quick to do a couple of key revisions we needed to get the final product ready for launch. Highly highly recommended.",
                      score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    review26 = Review(service_id=27, owner="y_alali", description="Always a great experience with a creative team, highly recommended for anyone who have a vision requiring excellent execution.",
                      score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    review27 = Review(service_id=28, owner="sandoak", description="Absolutely top notch service. The final deliverable was complete well within the time ranges and the work completed exceeded my expectations. I will check with this seller before any others when I have website related issues!",
                      score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review28 = Review(service_id=29, owner="studentloanplan", description="appreciate the work on a complex development task that other developers couldnt figure out",
    #                   score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review29 = Review(service_id=30, owner="rarevolume", description="I was amazed with his speed, and stunned with the delivery. My team wasted 14 days that is 2 weeks trying to resolve and Nomigee just took couple of hours to resolve this.",
    #                   score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review30 = Review(service_id=31, owner="misha987986", description="Great guy, helped the business I'm working for in producing a great system. Could not recommend him anymore than the 5 stars would allow me !! Quick work, great quality and always willing to edit and rework any issues I wanted to change. Extremely patience and work hard work ever penny he earned.",
    #                   score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review31 = Review(service_id=32, owner="hamzaalbelushi", description="Absolutely fantastic work!",
    #                   score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review32 = Review(service_id=33, owner="devinmva", description="IF YOU'RE LOOKING FOR A FRONT END DEVELOPER, STOP LOOKING! THIS IS YOUR GUY!!!!! I can't believe the turnaround time... I want to design more websites just to have abubakar_khalid develop them. This was seamless and extremely quick. You will not be dissatisfied. Please use this guy even if you have to pay someone else to do the wireframe, it is worth it!!!!! Every website I need will be done by abubakar_khalid.", score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review33 = Review(service_id=34, owner="hostan", description="Quick and revised everything I needed perfectly in building my optics application, excellent communication and asks extra questions to make sure things go smoothly!",
    #                   score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review34 = Review(service_id=35, owner="wuchoosay", description="Can't say enough how I appreciate this guy's work! Consistent results and great communication! This is how ALL freelance developers should be lol!",
    #                   score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review35 = Review(service_id=36, owner="mercy9597", description="I am absolutely new to all of this web stuff and it was super scary and I swear God put this man in my path. I am spiritual worker and it is hard for many to capture our visions for the unique services we offer. He is like a word press prophet. He was SUPER easy to work with in spite of our time and location differences, our communication was quick and easy. He answered all of my questions and I trusted his expertise. If you want a nice, adult and classy page without too much hassle and minutia, then I totally recommend this seller. I will be going back to him for all future work on my website etc. I am super grateful to him. I went from zero to a professional page in less than no time.", score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review36 = Review(service_id=37, owner="ami124", description="Ansha is AMAZING! She gave me exactly what I wanted for my store. Her communication is great abs she really uses her time wisely to perfect her work! I will be using her again in the future.",
    #                   score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review37 = Review(service_id=38, owner="blendarista", description="Service was exceptional!!!! He jumped right on assisting me with the moodle request and completed in a timely manner. I will definitely be using Malaka again!",
    #                   score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review38 = Review(service_id=39, owner="mike_tester", description="The Seller is really a Professional with the real world experience, I received too many offers but when It down to solving problem that I was having with my site, all of the sellers kind of skeptical and were not able to pin point or resolve the issue. But thank you to Mr Ayyoub, He fixed the problem in just 10 Minutes. I would highly recommend Mr Ayyoub to every one out there looking for web development, Designing or the site malfunction problem. Thanks Mr Ayyoube", score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review39 = Review(service_id=40, owner="nashramasamy", description="My 11th order! Waqas I don't even know what to say, your customer service is so over and beyond anyone else's I've ever experienced while hiring on any platform. This is the the exact reason I don't even bother asking others when I require assistance, but yourself. You're truly the whole package bro. Thank you so much! Anyone looking to hire Waqas for your ecommerce stores, I can promise you if you are wanting 10/10 work. He will deliver 11/10 work at a very fast pace with exceptional customer service!", score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review40 = Review(service_id=41, owner="alecanada", description="Absolutely AMAZING! This guy is a Jolly! He can do anything! If you need anything done in any website he's the man. Definitely will work with him in the future!",
    #                   score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review41 = Review(service_id=42, owner="lostsoul142", description="Second time I used this gentleman. I cant say enough. 10 STARS would not be enough. He is very fast and very good at what he does. I have used many devs, this guy is awesome sauce.",
    #                   score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review42 = Review(service_id=43, owner="moose079", description="This man is an excellent programmer! He fulfilled all the requirements and provided me with clean, organized code. Also, he delivered the files earlier than expected! Highly recommend!",
    #                   score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review43 = Review(service_id=44, owner="bct55555", description="I've used a few different developers to try to increase the speed of the website. Magical_Web has been the most knowledgeable and professional. Highly recommended.",
    #                   score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review44 = Review(service_id=45, owner="ignaciolavia", description="She took time before sending the gig to know more about the project and coded some parts in advance so she could prove that project could be done. Also in another very difficult part of the requirements, she was very honest and told me that she would prefer to step back instead of doing something with an uncertain result and this is really appreciated in a freelancer. Deliver with quality or not deliver. Because of this, we ended with a new fair price for the gig for both parts. Thanks again.", score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review45 = Review(service_id=46, owner="coolcomfort", description="User took a pre-existing system and created a new project that works off of a different language and merged the two together. Very impressive work! High quality.",
    #                   score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review46 = Review(service_id=47, owner="blackballs49", description="Nofilrazzaq did a great job.. I forgot to add a few things and he had no problem fixing what I forgot and making sure I was happy with the end product.",
    #                   score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review47 = Review(service_id=48, owner="jasonabass", description="I come back to Mzaeempakistan for all of my website needs and plan to come to him for more. Would recommend him to all of my business associates.",
    #                   score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review48 = Review(service_id=49, owner="kevin2005tran", description="Saddam is terrific to work with! We started with a single website, I provided the desktop, mobile designs and a prototype. He built it perfectly to the designs and added amazing interactions. He is extremely skilled in web development and the latest web design trends. I highly recommend Saddam and look forward to many more projects working with him.", score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review49 = Review(service_id=50, owner="alfonsotrevino", description="I really appreciate how Harry works. He is loyal, trustworthy and effective. I told him about what I needed and without a down payment he had already fix it, obviously I payed him right after. THANK YOU HARRY! 100% Recommended!!!!",
    #                   score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review50 = Review(service_id=51, owner="devinmva", description="IF YOU'RE LOOKING FOR A FRONT END DEVELOPER, STOP LOOKING! THIS IS YOUR GUY!!!!! I can't believe the turnaround time... I want to design more websites just to have abubakar_khalid develop them. This was seamless and extremely quick. You will not be dissatisfied. Please use this guy even if you have to pay someone else to do the wireframe, it is worth it!!!!! Every website I need will be done by abubakar_khalid.", score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review51 = Review(service_id=52, owner="jlusk777", description="Phenomenal seller! We have used him many times, and will continue to use him in the future. Best Shopify dev on Fiverr.",
    #                   score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review52 = Review(service_id=53, owner="carstenumlan892", description="The gig was to create dynamic tables from HubDB with search and sort funktion as a costum module. Clean coding, that saves me a lot of work in the future for my business. Absolute amazing work. faster then expected. 100% recommendation",
    #                   score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review53 = Review(service_id=54, owner="jhonjhon777", description="it is not the first time that I have worked with Hassan and I am not disappointed because he is very serious. he knows how to respond to the demands of his customers and goes to great lengths to achieve it. apart from the professional side, he knows how to be friendly and understandable. I order it warmly. I specify that its prices are very reasonable. Thanks Hassan", score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review54 = Review(service_id=55, owner="stottress", description="This seller was so patient with me. He did an AWESOME job of creating a website that captures my company's mission! I would definitely recommend this seller to anyone who is just as picky as I am.",
    #                   score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review55 = Review(service_id=56, owner="moose079", description="This man is an excellent programmer! He fulfilled all the requirements and provided me with clean, organized code. Also, he delivered the files earlier than expected! Highly recommend!",
    #                   score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review56 = Review(service_id=57, owner="stephenlichtman", description="Had the best experience working with Ismail. He is very helpful and has great knowledge of the things that he does! My project was completed very fast and the results were awesome. I will totally recommend him and would like to work with him in the future also",
    #                   score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review57 = Review(service_id=58, owner="sportentertainm", description="Awesome Team to work with. Super great would love to work with them again. I would highly recommend any projects you want to be done they will complete it for you",
    #                   score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review58 = Review(service_id=59, owner="camstar718", description="It was a breeze to work with and communicate with Altoorsoln. He is an expert in his craft. He delivered exceptional work on time and on budget. As an entrepreneur you are always improving existing sites or building new ones. I found my developer!",
    #                   score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review59 = Review(service_id=60, owner="bct55555", description="I've used a few different developers to try to increase the speed of the website. Magical_Web has been the most knowledgeable and professional. Highly recommended.",
    #                   score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review60 = Review(service_id=61, owner="druzinka", description="Itechoza is the best seller on Fiverr I've worked with. He is exprert, he found solution to all my site trouble, now it looks perfect! The delivery was made super fast. Don't think to work with sombody ellse, he's the best one to cooperete. Thank you!",
    #                   score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review61 = Review(service_id=62, owner="watermarkwm", description="JC is a master and it has been a pleasure working with him again. I really don't think he sleeps, at all!",
    #                   score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review62 = Review(service_id=63, owner="cleverwise", description="This professional is a truist to the buyer and really competent in his field of work, in this case HTML/CSS. His coding is tremendously organized. This is especially outstanding as it shall be conducive to simple modifications/updates which any software experiences. I cannot compliment this seller enough. Oh, by the way, he took the initiative and trust to give me a good sample of what I wanted. And this was like 80% complete in itself. I am so pleased I could write tons of word to describe it, but it's out of scope. Yeah, I think this person is definitely a keeper and my right hand man on all of my development needs. Thanks Ahmed!", score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review63 = Review(service_id=64, owner="jwekind", description="Great job, he's highly rated for good reason. We presented the project for a rush delivery and he had it done early and as we asked. We then followed up with a major change in scope which he delivered fast and with a minor detail added that made a difference. Communication was efficient. Would definitely work with him again.", score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review64 = Review(service_id=65, owner="techk1989", description="He is an amazing developer and helped me within minutes on a webpage issue we needed fixed on our live website. The old developer we had didn't optimize their page for tablets and all devices and didnt know how to fix it, but frontdevops fixed it within moments and helped with every detail we wanted. I will keep ordering again and again!", score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review65 = Review(service_id=66, owner="adonairetail", description="The seller is definitely a professional, He knows and manage very well his knowledge and experience. Explain with details and pictures step went actually beyond what I expected. Very happy with request and will recommend to anyone",
    #                   score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review66 = Review(service_id=67, owner="dzimmerman89", description="Excellent work. This expert knows what he's doing and completed my job quickly. Ahead of schedule. Will use his services again. Thank you!",
    #                   score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review67 = Review(service_id=68, owner="twaltzing", description="I will definitely be asking the Seller for help next time I mess up my Wordpress site! He fixed a problem involving my scripting work on a theme where I was just totally stuck, and did it quickly. It's a real load off my mind and now I know where to turn in the future, too.",
    #                   score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review68 = Review(service_id=69, owner="shah1305", description="Great work as per usual.",
    #                   score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review69 = Review(service_id=70, owner="salmanali678", description="vey polite and experienced seller. making him my permanent developer. Its best to find original n genuinr developer in platforms and i found one!!!",
    #                   score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review70 = Review(service_id=71, owner="hexfgg", description="Amazing Service I thought it would of taken a day but it only took around an hour very impressed with my updated webpage & also helped me configure the webpage to what I like!",
    #                   score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review71 = Review(service_id=72, owner="wdes2009", description="We first started as strangers and now I have gone back to him for 5 jobs and we are best mates!!!! No one is better than him! Does EXACTLY what you ask for!",
    #                   score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review72 = Review(service_id=73, owner="olliestrickland", description="Outstanding work. Did more than I could ask for, especially for the price. Even cleaned up code as a nice gesture. Will definitely do business with black21s again if the time comes.",
    #                   score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review73 = Review(service_id=74, owner="kevstar421", description="My problem was solved perfectly! I needed help to fix an issue related to a filter & a lightbox which was solved here in no time. Professional work & great communication. I am very satisfied.",
    #                   score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review74 = Review(service_id=75, owner="seomedianetwork", description="Excellent development of chrome application. Excellent quality and accuracy. Really recommend for all kinds of development and programming needs.",
    #                   score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review75 = Review(service_id=76, owner="ushir247", description="It is people like this that inspire me to be better and do more for my clients. He followed up with me, He knew exactly what I meant, He asked the right questions. He did it in record time. He even did it without payment and asked for payment afterwards. If he didn't get back to me I would still be trying to figure it out myself. He really did go the extra mile, I am so happy with the work. Thank you so so much. You are such a star!", score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review76 = Review(service_id=77, owner="lukaslrch", description="Moheuddin worked fast, seems to know his stuff and helped me out as expected! Fantastic job, great communication and fast delivery!",
    #                   score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review77 = Review(service_id=78, owner="pedro5625", description="She was super professional and polite. The gig she helped me with was quite challenging and she made a huge effort to meet my demands",
    #                   score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review78 = Review(service_id=79, owner="gftnewmedia", description="Fast and professional working. I can absolutely recommend the service from sajunsandaruwan",
    #                   score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review79 = Review(service_id=80, owner="themrbenx", description="Very profesionnal, knows what he is doing and he completed the order in time and exactly how I wanted it to be. Can only recommend his service and would choose him again in the future",
    #                   score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review80 = Review(service_id=81, owner="enejdidrini", description="Very quickly solved my code problem",
    #                   score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review81 = Review(service_id=82, owner="watermarkwm", description="JC is a master and it has been a pleasure working with him again. I really don't think he sleeps, at all!",
    #                   score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review82 = Review(service_id=83, owner="alphrika", description="Fourth time working with him. Always quick and understands what needs to be done. Has many tricks up his sleeves!",
    #                   score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review83 = Review(service_id=84, owner="thepremierhorse", description="Amazing seller. Our custom coding project had been on the back burner because we couldn't find anyone who could complete the project and this seller delivered! We will definitely be using this seller in the future!",
    #                   score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review84 = Review(service_id=85, owner="prmx89", description="PROFESSIONAL developer & JavaScript Magician! definitely, I'll use him again. I'll be delighted to offer him next jobs in the future :) (of course, if I would afford his services haha :D)",
    #                   score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review85 = Review(service_id=86, owner="cleverwise", description="This professional is a truist to the buyer and really competent in his field of work, in this case HTML/CSS. His coding is tremendously organized. This is especially outstanding as it shall be conducive to simple modifications/updates which any software experiences. I cannot compliment this seller enough. Oh, by the way, he took the initiative and trust to give me a good sample of what I wanted. And this was like 80% complete in itself. I am so pleased I could write tons of word to describe it, but it's out of scope. Yeah, I think this person is definitely a keeper and my right hand man on all of my development needs. Thanks Ahmed!", score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review86 = Review(service_id=87, owner="jwekind", description="Great job, he's highly rated for good reason. We presented the project for a rush delivery and he had it done early and as we asked. We then followed up with a major change in scope which he delivered fast and with a minor detail added that made a difference. Communication was efficient. Would definitely work with him again.", score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review87 = Review(service_id=88, owner="seychellemckay", description="Needed CSS done to match design i had mocked up, I supplied a base html, photos and font and Rajnish made it look great! Super easy, clear communication. Was happy to make changes on request. Was quoted higher price than hoped but was happy to meet me closer to my budget. Can recommend services.",
    #                   score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review88 = Review(service_id=89, owner="silentpatrick", description="I love him! I never saw a better seller on Fiverr for HTML & CSS etc! I am already hyped forward to my next order with him",
    #                   score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review89 = Review(service_id=90, owner="qualityvendor", description="Great to work with",
    #                   score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review90 = Review(service_id=91, owner="kylefidel", description="Extremely helpful with a fast turnaround and also provided specific details on what was done, which helped me understand. Would definitely recommend and will be coming back if more help is needed.",
    #                   score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review91 = Review(service_id=92, owner="bahlabu", description="Simon asked the right questions beforehand to fully understand my needs. He delivered within a couple hours. Absolutely amazing and professional. Will hire again!",
    #                   score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review92 = Review(service_id=93, owner="gracielanelson", description="So helpful and quick! Our team appreciates your help and great service!",
    #                   score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review93 = Review(service_id=94, owner="joeadickinson", description="He's honestly excellent. He goes above and beyond what is asked of him. Superb communication. I've used Fiverr since it launched and this is one of the best Freelance experiences I've had on here.",
    #                   score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review94 = Review(service_id=95, owner="youngblacktech", description="Seller did good work. I have a great list. It will help out my business. His turn around was very fast. Seller did good work and good job.",
    #                   score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review95 = Review(service_id=96, owner="eddieboylan", description="Very professional seller. Made my EA flawlessly",
    #                   score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review96 = Review(service_id=97, owner="joe12q1", description="He did a great job and really tried to answer all questions and concerns",
    #                   score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review97 = Review(service_id=98, owner="glassthinktank", description="Hamza offers outstanding communication and incredible service. All aspects of my exchange with him have been five stars. He quickly generated for me a bot that did the task I needed and then assisted in making some tweaks to optimize the output. I highly recommend working with him.",
    #                   score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review98 = Review(service_id=99, owner="condominiumscol", description="highly recomend I am a owner of 26 investment firm when my front page messed up this guy flew with a cape and saved the server error .",
    #                   score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review99 = Review(service_id=100, owner="bpenny1", description="Very fast, and gave me more customer service than I could ever ask for. This seller made be a true believer in this platform. Will do more business with him. Thank you again,",
    #                   score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review100 = Review(service_id=101, owner="geniushunter", description="Incredible! Thank you Iamsulok once again for your incredible job. Top!! Thank you also to Fiverr, never mentioned in customers review but, thank you Fiverr for having all of this possible.",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review101 = Review(service_id=102, owner="godfree", description="A PayPal IPN bug interfered with my business for months. rahathussain01 fixed it in one day! I was surprised and delighted at his professionalism, and his ability to quickly diagnose and correct the problem. Highly recommended.",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review102 = Review(service_id=103, owner="supergood001122", description="Best of the best! Thanks",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review103 = Review(service_id=104, owner="shabbirun", description="Fast turnaround and great work.",
    #                    score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review104 = Review(service_id=105, owner="mtpabis", description="Great communication, solution delivered well before deadline, Google App Script code structured well. Written comments and instructions to get script up and running, works like a charm. Definitely recommended, will contact again when in need :)",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review105 = Review(service_id=106, owner="dr316amen", description="Leandrosalama is a incredible! He communicates very well, works until the script is exactly what you want, and is a very proficient coder. Definitely recommend. Definitely will be using again.",
    #                    score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review106 = Review(service_id=107, owner="clickingbuttons", description="Mansoor is a total pro! His work was excellent. If you have a complex web scraping job he is the guy for you.",
    #                    score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review107 = Review(service_id=108, owner="michaelmarmur", description="I knew that I needed PHP work to be done but I am not an IT person, I am an advanced user. Basically I am running a WordPress website using the SendMail function on the server which sends contact form messages to users and to a Lotus Notes Domino Server. As a result it was difficult for me to give Hassan the best instructions. But this did not matter as Hassan asked all the right questions. He did much more work than I expected. I am very pleased with the results. I have more work for him to do very soon. I highly recommend Hassan.", score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review108 = Review(service_id=109, owner="monroenick24", description="As long as you provide clear direction and good info in, you will receive good info out. I wasn't clear with my expectations in the beginning and after getting the initial file I let him know and he was willing to fix the file free of charge. It was definitely my fault for the poor communication and appreciate his willingness to fix it. I will use him again in the future and recommend his work to anyone.", score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review109 = Review(service_id=110, owner="acomadi", description="Kay had to fix a faulty template. Work as always: fast and excact. Recommended.",
    #                    score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review110 = Review(service_id=111, owner="wayanarthurs", description="Ravi did an awesome job, as he usually​ does",
    #                    score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review111 = Review(service_id=112, owner="loveoscommerce", description="This project is a little complicated compared to previous ones and abid is successfully delivered it without any bugs. He is very powerful in google sheet automation and I'm happy to give him another one.",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review112 = Review(service_id=113, owner="danigil_94", description="Genius, really fast and reliable. 100% recommended.",
    #                    score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review113 = Review(service_id=114, owner="lielz1", description="He is good. Will be nice to work on more gigs.",
    #                    score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review114 = Review(service_id=115, owner="alexmayer789", description="Great communication and high level of commitment to solving the challenge. Developed exactly what I needed. Much appreciated! I'll know who to ask for all of my javascript programming needs!",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review115 = Review(service_id=116, owner="mwaqastariq ", description="This man is a champ, he just gave me exact script without wasting the time, he just catch my thoughts from the document. Highly recommend this seller in future.",
    #                    score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review116 = Review(service_id=117, owner="djgarrett970", description="There are some hurdles to overcome bc I am only somewhat familiar with wordpress/php/etc. Smartlive took the time to make it work right and I am very pleased with the outcome.",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review117 = Review(service_id=118, owner="seunghahwang", description="But he is really versatile. And he has authenticity and empathy. To be honest, he is the only person I want to know. Thank you.",
    #                    score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review118 = Review(service_id=119, owner="pum_and_bok", description="I have tried a few sellers with this task request, but only Simon confirmed that he could do the script. During the task, Simon has kept me in the loop of the progress to make sure we are on the same page. The task was completed, exactly as I needed but earlier than expected. Simon also sent a VDO clip, explaining, how the script work. This is my first time using Fiverr and I'm new to an App Script, I had expected this would be super stressful for me but my experience with Fiverr and Simon, are super impressed!!, Thank you Simon and Fiverr :)", score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review119 = Review(service_id=120, owner="youngblacktech", description="Seller did good work. I have a great list. It will help out my business. His turn around was very fast. Seller did good work and good job.",
    #                    score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review120 = Review(service_id=121, owner="w3bdesignerseo", description="Very good work and communication! He converted a psd page to html responsive, delivered on time with very good precision in details. Highly recommended, I am preparing a second psd page to repeat. Thank you!",
    #                    score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review121 = Review(service_id=122, owner="juliconhd", description="I was absolutely surprised. I got exactly what I wanted, and very accurately. The code is nicely written and also commented. And the whole thing was even faster than expected. I am very happy with the result.",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review122 = Review(service_id=123, owner="acdowds", description="Very skilled. Tasked him with converting a PDF design to working code and did a great job. Code appears well-written, and free of errors. Will definitely continue to use for future projects.",
    #                    score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review123 = Review(service_id=124, owner="gschwarz11", description="We wanted to do a mini-redesign of our website, simple things like changing the header of the website. Nazmul coded our ideas into existence really fast!",
    #                    score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review124 = Review(service_id=125, owner="trungkennyngo", description="Awesome work Jameabir! I have been working with Jameabir for a long time and have great relationship. He did excellent work every time. I'm happy to recommend him to everyone. Bro, I'm looking forward to our long term relationship. To Win and Successful! Trung Kenny",
    #                    score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review125 = Review(service_id=126, owner="bryceedwards204", description="Very quick to gather feedback, very professional. Was quick to make modifications upon request.",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review126 = Review(service_id=127, owner="block_fintech", description="Super awesome HTML CSS guy on Fiverr, fast and premium quality work and good price gigs, nails it in one shot doesn't need revisions, loved his work and will come back again for sure!",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review127 = Review(service_id=128, owner="all4life", description="Amazing experience!! Nayanakram1718 was extremely helpful and delivered an amazing final product in a very short space of time. Would definitely use his service again and I highly recommend him!",
    #                    score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review128 = Review(service_id=129, owner="michaelmacseo", description="Incredible work and fast delivery! Love working with Fawad!",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review129 = Review(service_id=130, owner="twiartext", description="Reliable, Fast, Do not hesitate to contact Iqbal, he's really good at what he does.",
    #                    score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review130 = Review(service_id=131, owner="zunalr", description="Having worked with multiple web developers on Fiverr. Kamrul was most concerning, king, skillful of them all. Would highly recommend.",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review131 = Review(service_id=132, owner="neilaustin413", description="Provided exactly what was agreed, spot on time. Will use gain.",
    #                    score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review132 = Review(service_id=133, owner="mekafive", description="HIGHLY RECOMMENDED. WHY? I am the toughest when it comes to pixel perfection. If he passed me, he can pass any projects. He also does good code. My page scored a perfect of 100% on google page insights meaning an error free, fast performing code! He came up with as solution for a design error on my end. Brilliant mind. When it comes down to the finishes touches on your project, he will go 1 on 1 with you until ALL IS COMPLETE DOWN TO THE PIXEL.", score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review133 = Review(service_id=134, owner="joeydoherty", description="Borhan has done an INCREDIBLE job in delivering a responsive HTML design based on an AI file that I sent him. Everything looks and operates incredibly and will be easy to convert into a website from here. He took all the stress off of me and did a great job. Will be back for more work!",
    #                    score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review134 = Review(service_id=135, owner="simple_harmony", description="He converted my designs into HTML/CSS/JS exactly as was designed & even threw in some extra functionality per my request. The work was delivered on time as expected & he was also very responsive. Definitely going to use again for future needs.",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review135 = Review(service_id=136, owner="social_thatmuch", description="Touhidbd did an excellent job ! He needed more time than expected in the first place but we are very satisfied with the result. The conversion from the XD file to HTML is very accurate and the code clean. No corrections were needed. He even did more than necessary. I would totally recommand him and contact him for other projects.", score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review136 = Review(service_id=137, owner="clementdps", description="Can't say how much I love to work with TeamBee ! Everytime he exceeds my expectations, can't wait to work with him again ! It will end with a long term contract lol",
    #                    score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review137 = Review(service_id=138, owner="simonhooper869", description="This project was to build a landing page in Bootstrap around our logo and a commissioned illustration. Communication was great as was the dedication to get the project completed in good time. The seller has great attention to detail and offers good ideas for improvements. Will definitely use again.",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review138 = Review(service_id=139, owner="pierresiegelbau", description="I needed someone to do an incredible job. I went for a guy on fiverr and it was the worst experience of my life. I worked several time with Mohammad for different works and it was always perfect. So I asked him if by luck he was able to help me with this one. Incredible ! He made a stunning job, he pays attention to details, he is reactive !", score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review139 = Review(service_id=140, owner="lloydlowen", description="The seller even worked through the night to get the job done as i needed it asap. I really appreciate all the hard work the seller put in. He needed little guidance on what to do and worked to the design document flawlessly. Will be using again, thanks so much!",
    #                    score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review140 = Review(service_id=141, owner="dougedmonds", description="Fast work. As requested. All good.",
    #                    score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review141 = Review(service_id=142, owner="neuendorf", description="Fast, communicative, more than expected!",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review142 = Review(service_id=143, owner="nicholasshane", description="Developer delivered project in less then 24 hours and was perfect quality matching the design by the px. Will hier again!",
    #                    score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review143 = Review(service_id=144, owner="medicustrevor", description="Great work!!",
    #                    score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review144 = Review(service_id=145, owner="xtaros", description="Excellent. Quick turnaround.",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review145 = Review(service_id=146, owner="sallyross1632", description="I entered into this being clueless as to what all was involved to create my website. I went from over 20 years in the corporate world to starting my own business. Ibrahimshah had so much patience with me even when I changed directions (several times). He seemed to always be available even when it was 3 am his time. I highly recommend this seller and encourage you to allow lbrahimshah to create a wonderful site for you. You won't be disappointed.", score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review146 = Review(service_id=147, owner="tommee", description="Fast delivery, easy communication, job done very well",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review147 = Review(service_id=148, owner="dockyard", description="Excellent Delivery & Communication! Will buy again!",
    #                    score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review148 = Review(service_id=149, owner="ashli94", description="Excellent job! Will use blackhat438 services again. More than I expected. You must hire blackhat438. Highly recommended! A+++++++++++++",
    #                    score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review149 = Review(service_id=150, owner="iftekhareather", description="Excellent work. Exactly what I was expecting. I would like to work with you again.",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review150 = Review(service_id=151, owner="ne141741", description="I use Fiverr for everything and this was one of the best and easiest experiences I have had. I had a landing page made for one of my companies and Sarwar was able to understand my vision and bring it to light. i would use him again for all my needs",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review151 = Review(service_id=152, owner="sagcss", description="Great work. Very speedy and fast deliver with high quality finish. I love it. Thank you. He is always online to assist. Great work.",
    #                    score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review152 = Review(service_id=153, owner="emssie", description="SZilard is the best Fiverr i have ever worked with. He understood what I wanted very fast and delivered an exceptional service. He is smart, he's responsive, he's very skilled, creative and he just gets it!!!. I loved his work and already lining him up for some more. You will not be disappointed, I promise your.",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review153 = Review(service_id=154, owner="mikelbarton", description="Chaite was extremely patient and stuck with me through many revisions - a great outcome, many thanks for your hard work! Highly recommend.",
    #                    score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review154 = Review(service_id=155, owner="pgecks", description="Simply the best experience I have had working with anyone on Fiverr or the many other overseas virtual contractor sites. I've outsourced creatives and design work for 8 years to 100's of contractors as I ran the day-to-day operations of a large digital marketing and advertising company here in California. I know good from bad, and Muhammed is a solid choice who was professional, communications were near perfect and the delivery was great. I'm very happy to pay for quality work AND great communications. I wish I could hire him full-time...his 5-star reviews speak for themselves and his completed work and actions prove it! I'm already identifying more projects to send his way soon.", score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review155 = Review(service_id=156, owner="yashb509", description="Jibon is awesome! He did fantastic work and very smoothly. He is also very welcoming and polite in case any revisions are needed. I have more work for him in the near future",
    #                    score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review156 = Review(service_id=157, owner="medhadurge", description="Needed a good landing page in html format in a rush. good experience. did not have to tell him anything at all. awesome ! Delivered before time. Made changes fast. Recommend wholeheartedly.",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review157 = Review(service_id=158, owner="jroman_35", description="Second time using his service and once again I'm impressed. My Site is everything I imagined it to be. This Seller made my idea come to life! I am extremely happy! His communication is great and effective. 5 Stars is not enough for this Seller he is great to work with he was very patient with me as the first time. Great communication as always very responsive, and delivered as promised. Definitely a fan and will remain a customers of his. Love it!", score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review158 = Review(service_id=159, owner="curogram", description="love to work with them",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review159 = Review(service_id=160, owner="garydoc", description="Very happy with this experience. Communication was excellent, turnaround was much faster than expected and the delivery is exactly what I asked for (first time, no revisions required). I hope to be able to give more work to Monir in the future.",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review160 = Review(service_id=161, owner="amanda_mullen", description="Mariam has been a joy to work with. My website/landing page was done beautifully and I couldn't have asked for a better outcome. She took my thoughts and ideas and produced something professional and artistic. Her timeline was perfect, when she said she would have it ready it was ready either before then or at the date and time she said. She was kind enough to made revisions without hesitation. I can't wait to work with her again.", score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review161 = Review(service_id=162, owner="danielflavius11", description="She is amazing. Super fast delivery and high quality all the time, This is the second project, and I just started the third one. I highly recommend her to everyone.....",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review162 = Review(service_id=163, owner="herbnflow", description="He did great. He was able to create the vision we had. Great timing as well",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review163 = Review(service_id=164, owner="nguruzz", description="Very professional and a great person to work with",
    #                    score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review164 = Review(service_id=165, owner="chronocake", description="youre the man",
    #                    score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review165 = Review(service_id=166, owner="aramhayrapet258", description="Momina is very professional at her job. And she delivered the project at a time. I am very satisfied.",
    #                    score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review166 = Review(service_id=167, owner="dsimson", description="Great work as always! Landing page looks great. Highly recommend.",
    #                    score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review167 = Review(service_id=168, owner="babara27", description="Very professional, great communication and Listener. He educates you all the navigation and how to go about the work/ project he is doing for you. am not great at computers but he educated me, listened to me from start to end and was patient. Am working with him on other projects too. I really recommend him to all those who want excellent and professional job done. Thanks Multimedia273.", score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review168 = Review(service_id=169, owner="jacqueo33", description="The best part about working with this seller is his commitment to your satisfaction. I've placed several orders, and he always offers edits, follow up and a way for me to communicate even after the order is done and paid for. It shows me he cares about getting it right which is invaluable. So skills: check, communication: check, reliability: check, but the intangible of really caring about the project is why I keep going back.", score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review169 = Review(service_id=170, owner="amanc555", description="PERFECT EXECUTION AND ATTENTION TO DETAIL!!! BLOCKCHAIN TRADING EXPERTS HIGHLY RECOMMENDED!!!!",
    #                    score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review170 = Review(service_id=171, owner="frankschiebler", description="Quick, helpful and very responsive.",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review171 = Review(service_id=172, owner="karljacobsen", description="wonderful seller. very friendly. super fast turnaround time. excellent quality. reasonable pricing",
    #                    score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review172 = Review(service_id=173, owner="bussinesscompan", description="This guy really is the real deal, my second time working with him and he has gone beyond what I needed! Definitely recommend working with him!",
    #                    score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review173 = Review(service_id=174, owner="luizaesteve", description="Great work delivered!",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review174 = Review(service_id=175, owner="kingworld609", description="Great Communication!! Listens to Every Detail!!",
    #                    score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review175 = Review(service_id=176, owner="venisis", description="He was beyond patient with us and all of our questions, did an amazing job. We would Highly recommend working with him and we will definitely be returning to him for future work.",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review176 = Review(service_id=177, owner="melhudson", description="Sakibhosan done an amazing job with my portfolio listened to my guidelines carefully and delivered the work in great timing! He even added nice touches like the animated title which I never asked for but made a big difference to the overall look and feel of the portfolio! Really pleased with the work and would highly reccomned!", score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review177 = Review(service_id=178, owner="hopelc123", description="He was very helpful and knew what it was I wanted. Would use his skills again.",
    #                    score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review178 = Review(service_id=179, owner="danielarchival", description="Wow.... we were blown away by the excellence. This lady Seller has a remarkable Skill Set above anything we have experienced in the 7+ years on Fiverr. She is intuitive, a great communicator, savvy and fast. This Seller will take your project to a higher level than your expectations. Hire her now, right now. Absolutely The Very Best In The Business. Thank You, Dan A.", score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review179 = Review(service_id=180, owner="ajaykandala", description="responsive communication. Accountable and takes work quality seriously.",
    #                    score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review180 = Review(service_id=181, owner="lokius2021", description="Great working with Daniel!! I've been looking for a newsletter vendor for weeks to finally find one that can work with our client's brand",
    #                    score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review181 = Review(service_id=182, owner="mokranebrahimi", description="Really great experience. A very good job Thanks.",
    #                    score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review182 = Review(service_id=183, owner="tigertailcap", description="Asked the seller to help me with three email templates. He was efficient, fast and creative. He was also patient as I requested some VERY minor edits! Would 100% use again!",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review183 = Review(service_id=184, owner="grantchanner826", description="He was simply amazing. Really responsive, understanding and got the work to us really quickly. Even though we had some errors on our side, he took these changes on board and quickly made any amendments. I would definitely work with him again.",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review184 = Review(service_id=185, owner="matthias_112", description="It's the second time that I work with shahidbahader. He is an absolute expert when it comes to custom email templates for Woocommerce. I can highly recommend him!",
    #                    score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review185 = Review(service_id=186, owner="scotty_dog", description="Gokaran offers a fantastic service from start to finish and will always make sure the job is done on time and to a very high standard.",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review186 = Review(service_id=187, owner="nicksfikas", description="the best seller!!!",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review187 = Review(service_id=188, owner="asafyeshoa", description="Good service Skilled developer Highly recommend",
    #                    score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review188 = Review(service_id=189, owner="alcmarket", description="Thorough work, good communication!",
    #                    score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review189 = Review(service_id=190, owner="jmgconesa", description="Amazing, 100% recommended",
    #                    score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review190 = Review(service_id=191, owner="rrwinton", description="This is my 3rd order with moklas. Excellent delivery as always!",
    #                    score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review191 = Review(service_id=192, owner="dyu121", description="Excellment work on optimization of an email template design. Communication was seamless and Aisa was incredibly responsive to all modifications. I would definitely recommend her and will continue to engage her for future work.",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review192 = Review(service_id=193, owner="jgray143", description="Very quick to complete the task. He was also open for making adjusts and did so in a timely manner. I'll be calling on him again for help next month.",
    #                    score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review193 = Review(service_id=194, owner="chrisirving1911", description="This guy was awesome. I had like 10 different changes and he NEVER complained. The work was spot on and very effective.",
    #                    score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review194 = Review(service_id=195, owner="justthebiz", description="Great to work with. A true professional, highly recommend. Very skilled, lightning fast.",
    #                    score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review195 = Review(service_id=196, owner="estellehetault", description="Merci Younès c'est parfait !",
    #                    score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review196 = Review(service_id=197, owner="alfonsoalcala", description="Thanks for the quick turnaround! It is much appreciated.",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review197 = Review(service_id=198, owner="straphaelresort", description="Great communication, excellent result!",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review198 = Review(service_id=199, owner="joseelegault", description="He has done several mandates for us and are very satisfied. The job is well done and it is very fast :)",
    #                    score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review199 = Review(service_id=200, owner="grantchanner826", description="He was simply amazing. Really responsive, understanding and got the work to us really quickly. Even though we had some errors on our side, he took these changes on board and quickly made any amendments. I would definitely work with him again.",
    #                    score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review200 = Review(service_id=201, owner="pranavyanturu", description="Fast easy smooth",
    #                    score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review201 = Review(service_id=202, owner="maksim_aksenov", description="Very kind, professional and responsive artist! Make sure you give a good starting brief and you will get the outstanding result!",
    #                    score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review202 = Review(service_id=203, owner="samnguy", description="2nd assignment...",
    #                    score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review203 = Review(service_id=204, owner="lilydoka", description="Excellent, will use again",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review204 = Review(service_id=205, owner="cpaveit", description="Very pleased with the outcome, will order again",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review205 = Review(service_id=206, owner="tiberiusf", description="Perfect execution! Thank you email_design :)",
    #                    score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review206 = Review(service_id=207, owner="dyu121", description="Excellment work on optimization of an email template design. Communication was seamless and Aisa was incredibly responsive to all modifications. I would definitely recommend her and will continue to engage her for future work.",
    #                    score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review207 = Review(service_id=208, owner="dingle1234", description="Very easy to work with. Will definitely work with him again in the future.",
    #                    score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review208 = Review(service_id=209, owner="sjbtwenty", description="Excellent collaborator",
    #                    score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review209 = Review(service_id=210, owner="gav903uk", description="Great job. The code is clear and well written. Very professional with excellent communication skills. A+++",
    #                    score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review210 = Review(service_id=211, owner="azyy_k", description="Best go to guy for extensions clear and understandable programme with a decent UI also I asked for extra help which he executed in a professional manner",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review211 = Review(service_id=212, owner="mjordantmac", description="He was extremely knowledgeable and works very quick. He knew exactly what I wanted and did it to perfection. I would definitely work with him again and recommend him to anyone.",
    #                    score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review212 = Review(service_id=213, owner="dossagency", description="Just about everyone I spoke with about my project requirements turned the extension down, he was able to get it done very quickly within a week! Could tell from the first call he knew what he was doing based on the questions he asked, and he’s been very responsive since. Immediately will be doing more projects with him, definitely recommended!", score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review213 = Review(service_id=214, owner="grovestreet330", description="This guy right here is the ONLY ONE you need for your needs, he will go beyond your imaginations to delivery the project with extra added features, I would not look anywhere else other than YassInya. Really pleased with the overall communication as well as the delivery.",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review214 = Review(service_id=215, owner="dougfunnee", description="We are working on several projects in construction of a complex Chrome extension. Very pleasant experience. This developer is knowledgable, and flexible, working with me, a co-developer on the projects.",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review215 = Review(service_id=216, owner="nyjayla", description="I worked with Nenads a year or so ago, I was impressed with his ability to do what I can't and I pleased with the results then. I just looked him up again for another project and again I am very pleased with the results he provided. I would recommend giving him a try he really does everything he can to make your project meet and exceed your expectations.", score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review216 = Review(service_id=217, owner="cheesytacoboy", description="very nice!",
    #                    score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review217 = Review(service_id=218, owner="bryben84", description="Vladimir was prepared and professional and did an excellent job explaining the possibilities to me in layman's terms. The initial conversation was well worth the money. I'll for sure be back to contract him and his team when I have larger projects.",
    #                    score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review218 = Review(service_id=219, owner="moussasigma", description="Perfect job !!!",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review219 = Review(service_id=220, owner="boomlux", description="I've done many orders with iqbal, great work as well. he will fix any problems you have with the work.",
    #                    score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review220 = Review(service_id=221, owner="mattavm", description="Easy to work with",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review221 = Review(service_id=222, owner="maheshwarkum768", description="Amazing work and patience by hassan.",
    #                    score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review222 = Review(service_id=223, owner="jopeyes", description="One of my best experiences working with a programmer. Not only because the final product is exactly what I was looking for, but because of his professionalism and attention to details. Daltamim takes his time to understand everything you need to provide the best version of the product possible. Before processing with the order, we chatted for numerous weeks and everyone of his responses to my questions were meticulous. After a month plus, we figured out the best solution for my needs and he executed perfectly while making sure the process was smooth and updating me throughout. He also finished the project in a timely manner, much faster than I anticipated. A++.", score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review223 = Review(service_id=224, owner="presstwood7", description="Perfect! Quick, easy and no fuss. Gave a clear brief and the work was completed exactly as outlined. Great experience overall, thanks!",
    #                    score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review224 = Review(service_id=225, owner="gravvis", description="Great communication and very timely. Hope to work with you again!",
    #                    score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review225 = Review(service_id=226, owner="ignaciodoncel", description="Fantastic job! Accurate and fast with great quality code. Totally recommended.",
    #                    score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review226 = Review(service_id=227, owner="ammoss12332", description="A++++ Thanks",
    #                    score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review227 = Review(service_id=228, owner="kthacker71", description="greenitsolution went above and beyond what I expected from them. They had some problems due to my not being able to provide them with needed information. They managed to do the job anyway. I totally recommend their service!",
    #                    score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review228 = Review(service_id=229, owner="remty1", description="Great dev work, helped solve problems, and provided excellent videos to help work through issues together. Would highly recommend.",
    #                    score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review229 = Review(service_id=230, owner="newspypig", description="fast and high quality delivery, he is the expert of chrome extension, will hire again later",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review230 = Review(service_id=231, owner="dougfunnee", description="We are working on several projects in construction of a complex Chrome extension. Very pleasant experience. This developer is knowledgable, and flexible, working with me, a co-developer on the projects.",
    #                    score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review231 = Review(service_id=232, owner="itsmeaelg404", description="I highly recommend this guy, thanks",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review232 = Review(service_id=233, owner="rocktaze", description="Great services, thanks a ton Raju!",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review233 = Review(service_id=234, owner="royalcompagnie", description="He is genius, professional, good communication, super quick I will work with him again next few days",
    #                    score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review234 = Review(service_id=235, owner="brainxstudio", description="This person is super fast and did the job how we wanted Cheers!! Highly Recommended 👍",
    #                    score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review235 = Review(service_id=236, owner="wanghao590", description="Published 1 month ago",
    #                    score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review236 = Review(service_id=237, owner="damiansantos", description="This seller is very good. They communicate extremely well pre-development, during development, and post-development in the follow up. I'd highly recommend this developer for short term projects, as well as long term projects. Very satisfied customer!",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review237 = Review(service_id=238, owner="dammyadeniye", description="nice job done",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review238 = Review(service_id=239, owner="kanico0", description="Excellent seller. well versed in Twilio and has done an excellent programming job. I look forward to using this seller again",
    #                    score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review239 = Review(service_id=240, owner="zero_science", description="It worked and the delivery was fast.",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review240 = Review(service_id=241, owner="mcgregorysqrl", description="fast and responsive",
    #                    score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review241 = Review(service_id=242, owner="snakra", description="Marty is your go-to when you almost lost hope in zendesk. Zendesk knowledge center is great but without some degree of actual practical experience, I find it challenging to get started. But Marty is your man!",
    #                    score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review242 = Review(service_id=243, owner="keryn_thompson", description="Fast and efficient! A pleasure setting up my emails.",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review243 = Review(service_id=244, owner="simonthan", description="Isaac communicates very clearly and is very experienced with PowerAutomate. He was able to help me setup what I needed on the spot and explained each step along the way. I look forward to working with him again and highly recommend him.",
    #                    score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review244 = Review(service_id=245, owner="nicolatelford", description="Really helpful Would work with Steve again Personalised instruction video was very helpful Thanks!",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review245 = Review(service_id=246, owner="judy4alv", description="Charan was very knowledgeable about Sharepoint and extremely helpful with some issues we had spent significant efforts trying to sort out. He went out of his way to understand and troubleshoot us and make sure we were satisfied. He is someone I would certainly come back to for further support.",
    #                    score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review246 = Review(service_id=247, owner="apsphoenix", description="We have been working with Zeeshan on a couple of features and I can tell that he's very professional. He cares about getting the job done. We'll keep working with him.",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review247 = Review(service_id=248, owner="adampluck", description="Andy was fantastic at quickly identifying a solution to a problem I'd spent weeks trying to figure out. Efficient, friendly and overall - fantastic value for money. $200 spent to save thousands! Thanks Andy",
    #                    score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review248 = Review(service_id=249, owner="digitalsolut902", description="Great work and advice, highly recommend working with Amar!",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review249 = Review(service_id=250, owner="lstephl", description="Great Communication, Great Work Was Done In A Quick Amount Of Time, And Still Provides Support After.",
    #                    score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review250 = Review(service_id=251, owner="tomlopy", description="Excellent work. Very responsive.",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review251 = Review(service_id=252, owner="earthlyacres", description="Thank you!",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review252 = Review(service_id=253, owner="fchow1", description="Once again extremely satisfied with working with Clemens on development of my website. He was highly responsive and flexible and took into account the ease with which I would be able to adapt the changes he implemented on my website on my own. Definitely planning to work more with Clemens!",
    #                    score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review253 = Review(service_id=254, owner="sasifs", description="Super talented and nice person to work with",
    #                    score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review254 = Review(service_id=255, owner="hwegbe", description="Responsive and quick to help and act.",
    #                    score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review255 = Review(service_id=256, owner="anandafethersto", description="Ordered a completely custom old school mostly HTML site, super random and eccentric. He completely understood everything I wanted and went above and beyond to make all my old-school internet dreams come true. Extremely punctual, helpful, and fair. 10/10 would and WILL hire again, so glad I found someone this great on my first fiverr hire. Look no further, he's your man.", score=4, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review256 = Review(service_id=257, owner="eeazee24", description="Aqib (website developer), communicates very well. We are happy to proceed to the next step which is developing our website. Essential information's were all discussed in just 1 hour consultation. I would highly recommend this service to anyone needing it. He is also friendly.",
    #                    score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review257 = Review(service_id=258, owner="mksimms", description="Hamza was extremely helpful and provided a detailed breakdown for the steps required to create the web database i need for my business and would definitely recommend.",
    #                    score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review258 = Review(service_id=259, owner="sanjuanmedellin", description="Adam, is not your average WordPress expert..his knowledge is well above most developers. I contacted several people who could not solve the issue but thankfully I found Adam, he was very thorough on explaining the problem I had and how it was fixed. I got screen shots and also long explanation with examples on how it works. I am very happy with the results!!!", score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review259 = Review(service_id=260, owner="foster890", description="Perfect preview",
    #                    score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review260 = Review(service_id=261, owner="pulava", description="Haseeb is a true pleasure to work with!",
    #                    score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review261 = Review(service_id=262, owner="thepishedfish", description="Pavel was quick to respond to questions. The gig was exactly what I was looking for. Having got too bogged down in certain aspects of design its great to get a second pair of eyes on the design and overall experience of the website. I had a basic understanding of CRO before, and everything that Pavel explained made perfect sense. An excellent seller, highly recommended service.", score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review262 = Review(service_id=263, owner="johndbf", description="This gig was devoted to discussing plans for a project, an online system that supports automatic population of government forms. This seller was extremely responsive and quick to understand details of the project. He proposed appropriate ways to address project needs and prepared the way for implementation. I look forward to working with him on the project.", score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review263 = Review(service_id=264, owner="saraplasencia1", description="This has been an amazing months working with this guy who has helped us to grow very fast our business and we are thinking in a long term relationship with him! THANK YOU SO MUCH!",
    #                    score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review264 = Review(service_id=265, owner="maryjunet", description="Something that took hours of me trying to figure out on my own, was taken care of in literally 7 mins. Best money I’ve ever spent and such a breeze to work with. Looking forward to working with him again.",
    #                    score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review265 = Review(service_id=266, owner="willbubenik", description="Seller was able to help break down my needs in the consultation and guide me in the right direction to complete my workflow automation.",
    #                    score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review266 = Review(service_id=267, owner="youngcardi", description="The Best on fiver for any programing services.",
    #                    score=5, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review267 = Review(service_id=268, owner="ladawnjones", description="Saminaa was AWESOME! This project was important but unfortunately my schedule made it difficult for me to follow up with her timely. I asked for something very unique and Sam figured it out for me, accomplished it and WAS BEYOND patient with me. My delay in communicating with her likely hurt her algorithm but she still handled me professionally.", score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review268 = Review(service_id=269, owner="shokry_99", description="This is the best freelancer I have ever worked with, I am afraid of giving him a good review to the point a company might hire him full time! He fixed an emergency for me and put out a fire when I was desperate, he didn't take advantage of my situation and was fair in pricing and diligent in his work. He offered support throughout the way. Thank You ashasahmad from the bottom of my heart!", score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))
    # review269 = Review(service_id=270, owner="hellosunshine10", description="It's a pleasure working with this Seller! He is always prompt, professional and courteous in his communications. Also, very knowledgeable about web accessibility compliance and WordPress. I look forward to working with him again on additional projects.",
    #                    score=3, date_created=fake.date_between(start_date="-20y", end_date="today"))

    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)
    db.session.add(review4)
    db.session.add(review5)
    db.session.add(review6)
    db.session.add(review7)
    db.session.add(review8)
    db.session.add(review9)
    db.session.add(review10)
    db.session.add(review11)
    db.session.add(review12)
    db.session.add(review13)
    db.session.add(review14)
    db.session.add(review15)
    db.session.add(review16)
    db.session.add(review17)
    db.session.add(review18)
    db.session.add(review19)
    db.session.add(review20)
    db.session.add(review21)
    db.session.add(review22)
    db.session.add(review23)
    db.session.add(review24)
    db.session.add(review25)
    db.session.add(review26)
    db.session.add(review27)
    # db.session.add(review28)
    # db.session.add(review29)
    # db.session.add(review30)
    # db.session.add(review31)
    # db.session.add(review32)
    # db.session.add(review33)
    # db.session.add(review34)
    # db.session.add(review35)
    # db.session.add(review36)
    # db.session.add(review37)
    # db.session.add(review38)
    # db.session.add(review39)
    # db.session.add(review40)
    # db.session.add(review41)
    # db.session.add(review42)
    # db.session.add(review43)
    # db.session.add(review44)
    # db.session.add(review45)
    # db.session.add(review46)
    # db.session.add(review47)
    # db.session.add(review48)
    # db.session.add(review49)
    # db.session.add(review50)
    # db.session.add(review51)
    # db.session.add(review52)
    # db.session.add(review53)
    # db.session.add(review54)
    # db.session.add(review55)
    # db.session.add(review56)
    # db.session.add(review57)
    # db.session.add(review58)
    # db.session.add(review59)
    # db.session.add(review60)
    # db.session.add(review61)
    # db.session.add(review62)
    # db.session.add(review63)
    # db.session.add(review64)
    # db.session.add(review65)
    # db.session.add(review66)
    # db.session.add(review67)
    # db.session.add(review68)
    # db.session.add(review69)
    # db.session.add(review70)
    # db.session.add(review71)
    # db.session.add(review72)
    # db.session.add(review73)
    # db.session.add(review74)
    # db.session.add(review75)
    # db.session.add(review76)
    # db.session.add(review77)
    # db.session.add(review78)
    # db.session.add(review79)
    # db.session.add(review80)
    # db.session.add(review81)
    # db.session.add(review82)
    # db.session.add(review83)
    # db.session.add(review84)
    # db.session.add(review85)
    # db.session.add(review86)
    # db.session.add(review87)
    # db.session.add(review88)
    # db.session.add(review89)
    # db.session.add(review90)
    # db.session.add(review91)
    # db.session.add(review92)
    # db.session.add(review93)
    # db.session.add(review94)
    # db.session.add(review95)
    # db.session.add(review96)
    # db.session.add(review97)
    # db.session.add(review98)
    # db.session.add(review99)
    # db.session.add(review100)
    # db.session.add(review101)
    # db.session.add(review102)
    # db.session.add(review103)
    # db.session.add(review104)
    # db.session.add(review105)
    # db.session.add(review106)
    # db.session.add(review107)
    # db.session.add(review108)
    # db.session.add(review109)
    # db.session.add(review110)
    # db.session.add(review111)
    # db.session.add(review112)
    # db.session.add(review113)
    # db.session.add(review114)
    # db.session.add(review115)
    # db.session.add(review116)
    # db.session.add(review117)
    # db.session.add(review118)
    # db.session.add(review119)
    # db.session.add(review120)
    # db.session.add(review121)
    # db.session.add(review122)
    # db.session.add(review123)
    # db.session.add(review124)
    # db.session.add(review125)
    # db.session.add(review126)
    # db.session.add(review127)
    # db.session.add(review128)
    # db.session.add(review129)
    # db.session.add(review130)
    # db.session.add(review131)
    # db.session.add(review132)
    # db.session.add(review133)
    # db.session.add(review134)
    # db.session.add(review135)
    # db.session.add(review136)
    # db.session.add(review137)
    # db.session.add(review138)
    # db.session.add(review139)
    # db.session.add(review140)
    # db.session.add(review141)
    # db.session.add(review142)
    # db.session.add(review143)
    # db.session.add(review144)
    # db.session.add(review145)
    # db.session.add(review146)
    # db.session.add(review147)
    # db.session.add(review148)
    # db.session.add(review149)
    # db.session.add(review150)
    # db.session.add(review151)
    # db.session.add(review152)
    # db.session.add(review153)
    # db.session.add(review154)
    # db.session.add(review155)
    # db.session.add(review156)
    # db.session.add(review157)
    # db.session.add(review158)
    # db.session.add(review159)
    # db.session.add(review160)
    # db.session.add(review161)
    # db.session.add(review162)
    # db.session.add(review163)
    # db.session.add(review164)
    # db.session.add(review165)
    # db.session.add(review166)
    # db.session.add(review167)
    # db.session.add(review168)
    # db.session.add(review169)
    # db.session.add(review170)
    # db.session.add(review171)
    # db.session.add(review172)
    # db.session.add(review173)
    # db.session.add(review174)
    # db.session.add(review175)
    # db.session.add(review176)
    # db.session.add(review177)
    # db.session.add(review178)
    # db.session.add(review179)
    # db.session.add(review180)
    # db.session.add(review181)
    # db.session.add(review182)
    # db.session.add(review183)
    # db.session.add(review184)
    # db.session.add(review185)
    # db.session.add(review186)
    # db.session.add(review187)
    # db.session.add(review188)
    # db.session.add(review189)
    # db.session.add(review190)
    # db.session.add(review191)
    # db.session.add(review192)
    # db.session.add(review193)
    # db.session.add(review194)
    # db.session.add(review195)
    # db.session.add(review196)
    # db.session.add(review197)
    # db.session.add(review198)
    # db.session.add(review199)
    # db.session.add(review200)
    # db.session.add(review201)
    # db.session.add(review202)
    # db.session.add(review203)
    # db.session.add(review204)
    # db.session.add(review205)
    # db.session.add(review206)
    # db.session.add(review207)
    # db.session.add(review208)
    # db.session.add(review209)
    # db.session.add(review210)
    # db.session.add(review211)
    # db.session.add(review212)
    # db.session.add(review213)
    # db.session.add(review214)
    # db.session.add(review215)
    # db.session.add(review216)
    # db.session.add(review217)
    # db.session.add(review218)
    # db.session.add(review219)
    # db.session.add(review220)
    # db.session.add(review221)
    # db.session.add(review222)
    # db.session.add(review223)
    # db.session.add(review224)
    # db.session.add(review225)
    # db.session.add(review226)
    # db.session.add(review227)
    # db.session.add(review228)
    # db.session.add(review229)
    # db.session.add(review230)
    # db.session.add(review231)
    # db.session.add(review232)
    # db.session.add(review233)
    # db.session.add(review234)
    # db.session.add(review235)
    # db.session.add(review236)
    # db.session.add(review237)
    # db.session.add(review238)
    # db.session.add(review239)
    # db.session.add(review240)
    # db.session.add(review241)
    # db.session.add(review242)
    # db.session.add(review243)
    # db.session.add(review244)
    # db.session.add(review245)
    # db.session.add(review246)
    # db.session.add(review247)
    # db.session.add(review248)
    # db.session.add(review249)
    # db.session.add(review250)
    # db.session.add(review251)
    # db.session.add(review252)
    # db.session.add(review253)
    # db.session.add(review254)
    # db.session.add(review255)
    # db.session.add(review256)
    # db.session.add(review257)
    # db.session.add(review258)
    # db.session.add(review259)
    # db.session.add(review260)
    # db.session.add(review261)
    # db.session.add(review262)
    # db.session.add(review263)
    # db.session.add(review264)
    # db.session.add(review265)
    # db.session.add(review266)
    # db.session.add(review267)
    # db.session.add(review268)
    # db.session.add(review269)

    db.session.commit()



def undo_reviews():
    db.session.execute('TRUNCATE Reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
