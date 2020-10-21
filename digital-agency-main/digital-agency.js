//(function border(){
//    console.log(`    |==========================================================|
  //  |                       Portfolio                          |
   // |                                                          |
   // |==========================================================|`)
//})();
//console.log("     project 1: let's pretend the 80s didn't happen")
//console.log("   ==========================================================")
const project ={
    synopsis: 'synopsis',
    thumbnailUrl: 'thumbnailurl',
    likes: 'likes',
    views: 'views',
    created: 'date',
    modified: 'date'
}
const portfolio = project;
    portfolio.synopsis= "make an image that resembles the 80's",
    portfolio.thumbnailUrl= "https://dl.airtable.com/.attachments/ca9779233d9833ac63d06381a1ac327c/8601a8d3/A_5_Otti_Ekene_opt.jpg",
    portfolio.creator= "Ekene Otti",
    portfolio.likes=getRandomLikes(),
    portfolio.views=getRandomViews(),
    portfolio.created=Date(1592604),
    portfolio.modified=Date (16031448)

//console.log(portfolio) 
//console.log(`-------------------------------------------------------------
 //                       assets                             
//-------------------------------------------------------------`)
    
    
   const asset1 ={
    asset_1: 'lets pretend the 80s didnt happen - image 1 (type: image)',
    thumbnailUrl: 'https://dl.airtable.com/.attachments/1bbd7e036d71d1b2ac5e544cfe9a38f8/5f37cb9b/A_5_Rossignol_Babette_opt.jpg',
    creator: 'Babette Rossignol',
   }

//console.log(asset1)    

const asset2 ={
    asset_2: 'lets pretend the 80s didnt happen - image 2 (type: image)',
    thumbnailUrl: 'https://dl.airtable.com/.attachments/91a8e4d5d42f9803811d6ef7a1b26bef/f740d71f/C_5_Pede_Freya_opt.jpg',
    creator: 'Freya Pede',
}
//console.log(asset2)

const asset3={
    asset_3: 'lets pretend the 80s didnt happen - image 3 (type: image)',
    thumbnailUrl: 'https://dl.airtable.com/.attachments/4dabf9941bec6a1b7fe8756dcf53bf2f/2dddf5e8/E_5_Serpentier_Margot_opt.jpg',
    creator: 'Margot Serpentier',
}

//console.log(asset3)

//console.log("   ==========================================================")
//console.log("     404-Design challenge theme corona")
//console.log("   ==========================================================")

const portfolio1 = project;
portfolio1.synopsis ='students had 3 hours of time to create an original 404 page'
portfolio1.thumbnailUrl= 'https://dl.airtable.com/.attachments/d558b25b9cbc83b84faee0b0afec9b1f/2a42beba/eerstepagina.png'
portfolio1.likes=getRandomLikes(),
portfolio1.views=getRandomViews(),
portfolio1.created= Date(15929496)
portfolio1.modified= Date(16031448)
portfolio1.creator= '1CMO'
//console.log(portfolio1)

//console.log(`-------------------------------------------------------------
 //                       assets                             
//-------------------------------------------------------------`)

const asset404 = asset1;
asset404.asset_1= '404 design -image 1 (type: image)',
asset404.thumbnailUrl= 'https://dl.airtable.com/.attachments/35ab06ca59735aef3b79c980466f4cef/cebd4776/Lennart.png',
asset404.creator= 'Lennart Dubois' 

//console.log(asset404)

const asset405 = asset2;
asset405.asset_2='404 design -image 2 (type image)',
asset405.thumbnailUrl='https://dl.airtable.com/.attachments/47e4b4d250fb9a1ff49e997f3578b6dc/5243b78f/Annick.png',
asset405.creator='Annick'

//console.log(asset405)

//console.log(`    |==========================================================|
  //  |                       News                               |
    //|                                                          |
    //|==========================================================|`)

    const news ={
        title: 'title',
        synopsis: 'text',
        body: 'text',
        thumbnailUrl: 'link',
        creator: 'name',
    }
const news1 = news;
news1.title= 'Ground 2 sky student-ondernemer'
news1.synopsis= 'Dinsdag 20 februari ging er een workshop rond drones door op onze campus. En welk bedrijf kwam deze workshop geven?'
news1.body= 'Niemand minder dan onze eigenste GDM-student Tomas Hoste, met zijn bedrijf Ground2Sky.Gelukkig viel het weer mee, waardoor de geïnteresseerde studenten een initiatie “vliegen met drones” konden meevolgen in de gezonde buitenlucht.Hoe ging dat eraan toe? Tomas runt het bedrijf Ground2Sky samen met zijn vader, naast zijn studentenleven. In 2014 werd hij reeds door GoPro geprezen als “video van de dag”, met zijn knappe compilatie van zijn roadtrip door Utah. Iets dat ook de VRT en andere persbedrijven zeker niet ongemerkt voorbij lieten gaan!Je kan zijn voorbije producties volgen via zijn YouTube-kanaal.Naast zijn audiovisuele producties en drones-business, is Tomas ook een fervente reiziger. Zijn roadmaps & blog kan je vinden onder Kalaman Travel.',
news1.creator= 'Lisa de Wilde'

const comments ={
    nickName: 'name',
    message: 'text',
}
const comment1 = comments;
comment1.nickName= 'Bliksem B'
comment1.message= 'Ik vind het prima passen hier. Ook doordat Youtubers populair zijn. Met name de meer tech-oriented kanalen vertellen graag over hun gear. Zie bijvoorbeeld de laatste video van een subchannel van Linus Tech Tips over Black Magic 12k camera: https://www.youtube.com/watch?v=MWR2Y6ch2Wo . Maar goed om te zien dat Panasonic een uniek modulair kastje presenteert op basis van m4/3. Wat onbekendere Chinese makelarij kwamen al met dergelijke kastjes, als goedkope oplossing voor een Red. (want daar komt natuurlijk het modulaire ontwerp vandaan).'

const comment2 = comments;
comment2. nickname= 'xmenno'
comment2.messagd= "Dit is eigenlijk helemaal niks voor een Tweakers publiek als ik de reacties hier bekijk, vergelijken met een iPhone etc... Het gaat om een camera voor (semi) professionele productie. De BNC aansluiting is eigenlijk 3G-SDI, dit vind je normaal terug op broadcast (TV) grade apparatuur. Waarbij je kunt schakelen tussen meerdere bronnen, de kleur live bij kunt stellen zodat alle camera's er hetzelfde uit zien, multiviewers, encoders etc... HDMI is leuk want daarmee kun je het ook gebruiken voor een goedkopere ATEM Mini en voor weinig een professionele setup maken voor bijvoorbeeld je eigen show op YouTube of video conference. Hij doet ook Desqueezed Anamorphic en dat is weet iets wat je in films en series terug vind. Er kan een XLR microfoon worden aangesloten waarmee audio dan meteen in sync is met je video."
//console.log(news1)
console.log( `|==========================================================|
|                       Portfolio                          |
|                                                          |
|==========================================================|`, `\n project 1: let's pretend the 80s didn't happen
==========================================================`, portfolio, `-------------------------------------------------------------
assets                             
-------------------------------------------------------------`, asset1, asset2, asset3,`==========================================================
 404-Design challenge theme corona
 ==========================================================`, portfolio1,`-------------------------------------------------------------
  assets                             
  -------------------------------------------------------------`, asset404, asset405, `|==========================================================|
  |                       News                               |
  |                                                          |
  |==========================================================|`, news1, comment1, comment2)

    
function getRandomLikes(min, max) {
    min = Math.ceil(1);
    max = Math.floor(1000);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomViews(min, max) {
    min = Math.ceil(1000);
    max = Math.floor(1500);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}