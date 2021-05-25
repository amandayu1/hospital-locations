# HEALTH TECH

# Check out the demo video!

https://www.youtube.com/watch?v=jlXJHF5yQXQ

</br>
# Live at: https://hospital-locations.herokuapp.com/
</br>

Health Tech consists of a chatbot recognizing COVID-19 symptoms, it displays a ranked list of recommended hospitals based on detected location on a map. Facilitating a more efficient patient-care system. It's web app made for Hack the North 2021 hackathon.

# Inspiration
Covid-19 has put a great strain on the current healthcare system. With hospitals reaching full capacity quicker than before, and patients filing in to see whether they have COVID, it is harder for everyone to get help. Furthermore, it is harder for healthcare professionals to focus on patients with Covid-19 when other patients are continuously lining up. Therefore, we were inspired to build an app that would be able to help facilitate a better patient-care system during the pandemic, lessening the strain on hospitals while also ensuring people get the help they need.

# What it does
HealthTech helps connect patients with a server bot where they can write down their symptoms to check whether those relate to COVID-19. If they do, the bot lists the top 4 hospitals that the patient could visit, ranked based upon the proximity.

# How we built it
For the frontend we used React, HTML, CSS, and JavaScript. In the backend, we used Node.js and Express.js for the server and Heroku for deployment. The messaging feature was created with the help of the Facebook messaging API. The Google Maps Places and Google Maps Nearby APIs were used to locate users and find hospitals nearest to them.

# Challenges we ran into
We had issues concerning the Facebook messaging API that we were to use for the chatbox and bot part of our app. We started off looking into the Vonage API for sending SMS, pivoted to Facebook API and spent a lot of time working on setting up the web-hook. However, once we accomplished we were able to use successfully use the Facebook messenger API to chat with concerned citizens.

# Accomplishments that we are proud of
We are proud that we were able to use tools that we haven't used before and accomplish what we set for in a short period of time.

# What we learned
We learned many new technologies and skills such as how to fetch an API, and how to handle the data responses. It was our first time using the Google APIs, so it was certainly challenging but rewarding to produce a working prototype.

# What's next for HealthTech
We hope to expand our services to more people in the future and look for ways to increase our app scalability. We'd like to add more robust google map features as well as a way for hospitals/testing sites to indicate they have a high volume of patients and are to be avoided. We would also like to dabble in wit.ai and use it to improve our bot response. We would also like to explore the possibility of a database and populated map with the general locations of people who reported serious symptoms, so that hospitals can monitor possible outbreaks. It would be awesome to see this app developed on a native platform in the future!

#Built With
<li>css</li>
<li>express.js</li>
<li>facebook-chat-api</li>
<li>figma</li>
<li>google</li>
<li>google-latitude</li>
<li>google-maps</li>
<li>heroku</li>
<li>html</li>
<li>node.js</li>
<li>react</li>
