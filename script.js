const bg = document.querySelector(".container");

const screenHeight = 1080;
const screenWidth = 1920;

const hexHeight = 110; //Change to 140 for row-style hexagons
const hexWidth = 140;

const marginTop = 10;
const marginLeft = 20;
const hexColor = '#F3A712';
const changeHex = 100;
const rowGap = 2;
const showSpeed = 3;  //Lower == more speed
const hideSpeed = 1;   //Higher == more speed

const rows = Math.floor(screenHeight/hexHeight) + 1;
const columns = Math.floor(screenWidth/hexWidth) + 1;

//Wait 9s before changing the slide


createHex()
stayLit();

function createHex(){
    for (let r = 0; r < rows + 1; r++) {
        for (let c = 0; c < columns + 1; c++) {
            const hexagon = document.createElement('div');
            hexagon.className = 'hex';
            hexagon.id = r.toString() + "-" + c.toString();
            hexagon.style.top = (r * hexHeight) - marginTop + 'px';
            hexagon.style.left = (c * hexWidth) - marginLeft + 'px';
            hexagon.style.height = hexHeight + 'px';
            hexagon.style.width = hexWidth + 'px';
            hexagon.style.opacity = 0;
            addHex(hexagon);
            fillHex(hexagon);
            bg.appendChild(hexagon, hexHeight, hexWidth);
            
            if (r % 2 == 0) {
                hexagon.style.left = (c * hexWidth) - marginLeft - 70 + 'px';
                // hexagon.style.top = (r * hexHeight) - 30 + 'px';
            }
        }
    }
}

function fillHex(hex) {
    hex.innerHTML = `<svg width="140" height="140" viewBox="0 0 140 140" fill="black" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.49733 110.64V30.2381L69.0719 1.62278L138.503 30.2484V110.63L69.0717 138.384L1.49733 110.64Z" stroke="#F3A712" stroke-width="2.99465"/>
    <path d="M125 37.9791L70.7353 15L15 37.9791V102.72L70.7353 125L125 102.72V37.9791Z" fill="url(#paint0_linear_1775_4384)"/>
    <defs>
    <linearGradient id="paint0_linear_1775_4384" x1="70" y1="20.1071" x2="70" y2="125" gradientUnits="userSpaceOnUse">
    <stop stop-color="#F3A712"/>
    <stop offset="0.9999" stop-color="#F3A712" stop-opacity="1"/>
    <stop offset="1"/>
    </linearGradient>
    </defs>
    </svg>
    
            `;

}



function addHex(hex, hexHeight, hexWidth) {
    const hexSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const hexPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');

        hexSvg.setAttribute('fill', 'black');
        // hexSvg.setAttribute('viewBox', '0 0 ' + hexWidth + ' ' + hexHeight);
        // hexSvg.setAttribute('width', hexWidth);
        // hexSvg.setAttribute('height', hexHeight);

        hexSvg.setAttribute('stroke', hexColor); 

        // hexSvg.classList.add('hex');

        hexPath.setAttribute('d', 'M1.49733 110.64V30.2381L69.0719 1.62278L138.503 30.2484V110.63L69.0717 138.384L1.49733 110.64Z');
        hexPath.setAttribute('stroke-linecap', 'round');
        hexPath.setAttribute('stroke-linejoin', 'round');
        hexPath.setAttribute('stroke-width', '2.99465');

        hexSvg.appendChild(hexPath);
        return hex.appendChild(hexSvg);
}

function numberVisible() {
    var isVisible = 0;
    for (let r = 0; r < rows + 1; r++) {
        for (let c = 0; c < columns + 1; c++) {
            var hex = document.getElementById(r + "-" + c);
            if (hex.style.opacity == '1') {
                isVisible++;
            }
        }
    }
    return isVisible;
}

let haveIt = [];

function generateUniqueRandom(maxNr) {
    //Generate random number
    let random = (Math.random() * maxNr).toFixed();

    //Coerce to number by boxing
    random = Number(random);

    if(!haveIt.includes(random)) {
        haveIt.push(random);
        return random;
    } else {
        if(haveIt.length < maxNr) {
          //Recursively generate number
         return  generateUniqueRandom(maxNr);
        } else {
          console.log('No more numbers available.')
          return false;
        }
    }
}

function hideLit(){
    document.getElementById('4-5').style.opacity = 0;
    document.getElementById('5-5').style.opacity = 0;
    document.getElementById('5-4').style.opacity = 0;
    document.getElementById('1-2').style.opacity = 0;
    document.getElementById('1-4').style.opacity = 0;
    document.getElementById('1-6').style.opacity = 0;
    document.getElementById('1-8').style.opacity = 0;
    document.getElementById('1-10').style.opacity = 0;
    document.getElementById('3-5').style.opacity = 0;
    document.getElementById('4-8').style.opacity = 0;
    document.getElementById('4-11').style.opacity = 0;
    document.getElementById('5-8').style.opacity = 0;
    document.getElementById('5-10').style.opacity = 0;
    document.getElementById('6-4').style.opacity = 0;
    document.getElementById('6-8').style.opacity = 0;
    document.getElementById('7-6').style.opacity = 0;


    setTimeout(() => {
        document.getElementById('4-6').style.opacity = 0;
        document.getElementById('4-4').style.opacity = 0;
        document.getElementById('1-3').style.opacity = 0;
        document.getElementById('1-5').style.opacity = 0;
        document.getElementById('1-7').style.opacity = 0;
        document.getElementById('1-9').style.opacity = 0;
        document.getElementById('4-9').style.opacity = 0;
        document.getElementById('5-9').style.opacity = 0;
        document.getElementById('6-11').style.opacity = 0;
        document.getElementById('6-6').style.opacity = 0;

    }, 500);

    setTimeout(() => {
        document.getElementById('3-4').style.opacity = 0;
        document.getElementById('4-10').style.opacity = 0;
        document.getElementById('5-7').style.opacity = 0;
        document.getElementById('5-11').style.opacity = 0;
        document.getElementById('6-10').style.opacity = 0;
        document.getElementById('6-5').style.opacity = 0;

    }, 800);

    setTimeout(() => {
        document.getElementById('6-9').style.opacity = 0;
        document.getElementById('6-7').style.opacity = 0;
        document.getElementById('7-4').style.opacity = 0;
    }, 1000);
}

function stayLit() {
    document.getElementById('0-0').style.opacity = 1;
    document.getElementById('0-1').style.opacity = 1;
    document.getElementById('1-0').style.opacity = 1;
    fillHex(document.getElementById('1-0'));

    document.getElementById('0-13').style.opacity = 1;
    document.getElementById('0-14').style.opacity = 1;
    document.getElementById('1-13').style.opacity = 1;

    document.getElementById('6-0').style.opacity = 1;
    document.getElementById('7-0').style.opacity = 1;
    document.getElementById('8-0').style.opacity = 1;
    document.getElementById('8-1').style.opacity = 1;
    document.getElementById('9-0').style.opacity = 1;
    document.getElementById('9-1').style.opacity = 1;
    document.getElementById('9-2').style.opacity = 1;
    document.getElementById('9-3').style.opacity = 1;
    document.getElementById('9-4').style.opacity = 1;

    document.getElementById('6-14').style.opacity = 1;
    document.getElementById('7-13').style.opacity = 1;
    document.getElementById('8-13').style.opacity = 1;
    document.getElementById('8-14').style.opacity = 1;
    document.getElementById('9-9').style.opacity = 1;
    document.getElementById('9-10').style.opacity = 1;
    document.getElementById('9-11').style.opacity = 1;
    document.getElementById('9-12').style.opacity = 1;
    document.getElementById('9-13').style.opacity = 1;
}
var glowTimeout = [];
var hideTimeout = [];
var timeoutValue = 0;

function randomValue(min, max) 
{
    var r = Math.floor(Math.random() * (max - min)) + min;
    return r;
}

function lightUp(){
    
    for (let k = 0; k < rows * columns * 5 ; k++) {
        glowTimeout[k] =  setTimeout(() => {
            var r = Math.floor(Math.random() * rows);
            var c = Math.floor(Math.random() * columns);
            var selectedHex = document.getElementById(r + "-" + c);
            selectedHex.style.opacity = 1;
        }, k * showSpeed);
    }
        
    var timeoutValue = setTimeout(() => {
        for (let k = 0; k < rows * columns * 6; k++) {
            hideTimeout[k] = setTimeout(() => {
                var r = Math.floor(Math.random() * rows);
                var c = Math.floor(Math.random() * columns);
                var selectedHex = document.getElementById(r + "-" + c);
                selectedHex.style.opacity = 0;
                stayLit();
                hideLit();
            }, (k * showSpeed) / hideSpeed );
        }
    }, 2500);
    

    
}




const dept = document.querySelector(".dept");
const deptName = document.querySelector(".dept h1");
const photo = document.querySelector(".photo");
const imageContainer = document.querySelector(".image");
const image = document.querySelector(".image img");
const nameCostaa = document.querySelector(".name h2");
const nameContainer = document.querySelector(".name")
const desc = document.querySelector(".desc")
let currentData = 0; 

data = [
    {
      name: "Adarsh Bhardwaj",
      dept: "Department of Visual Media",
      photo: "Assets/adarsh.png",
      desc: "Adarsh Bharadwaj is always found sleeping during the day, and daydreaming during the night.In his free time he fantasizes about impromptu trips, specially to Delhi. It wasn’t too late that he was found cold-mailing GB Road Institutions for 'research' and possible PS-2 opportunities. Speaking of emails, his makeup requests are quite often reciprocated with NC threats (p.s. It’s not a threat anymore). To call attention to his perverse inclinations, Adarsh’s motive while choosing his major (pharmacy) and his PORs (Meera Mess tech lead) was quite clear, picking up chics, and yet he failed miserably One such example is him simping over a senior for an entire semester (by the way his best friend ends up proposing to her). The weird part is, this wasn’t even the first time he was forced into submission by his best friend.  This was enough of a backstory to throw him into the loop of intoxication. The hindrance being his monthly allowance, Adarsh takes a proactive stance on cheap thrills, subsequently earning the title of “Thandai advocate”. In all fairness, Adarsh is one of the most approachable and heartfelt e-bois on campus so feel free to reach out to him for any help or guidance, cause he really needs some. P.s. pharma juniors, help him graduate, or else he’s gonna be here for a long, long time. Presenting the coord of dvm, aadarsh bahradwaj.",
    },
    {
      name: "Ishpreet Singh Sood",
      dept: "Department of Paper Evaluation and Presentation",
      photo: "Assets/ishpreet.png",
      desc: "Bacchan in the sheets, costaan in the streets seems to be the life motto of paaji. Gaming ka isko itna shauk hai ki First year mein iska ice breaker hota tha valo khelega kya? Paaji ne valo se lekar fifa se lekar costaan elections tak, bohot try hard kiya lekin uske life mein ek hi constant tha, uska pep coord. This man is so creative that he was the graphic designer intern of the month at owled. His love for graphic designing knows no bounds as he joined multiple clubs for the role and got kicked out from all of them. Pep ka costaan bhi pata nahi kaise ban gaya. Maybe if he would have applied for the official graphic designer post, then uske co-ords uske saath shayad abhi bhi kaam karte. This man has taken his long legs fetish so seriously ki usne apne department ke ex costaan ko bhi nahi chhoda aur uski chaatne lag gaya.Being the masterchef of vyas, he once randomly said that we’ll cook chicken in the hostel QT, and the man actually did it. They say what happens in the family stays in the family, unfortunately in his case it didnt. Presenting to you the CoStAAN of Paaji Evaluation and Presentation, oh sorry, the costaan of paper evaluation and presentation, Ishpreet Singh Sood.",

    },
    {
      name: "Poorvansh Kavta",
      dept: "Department of Art, Design and Publicity",
      photo: "Assets/poorvansh.png",
      desc: "Well, well, well, if it isn't Poorvansh - the 21-year-old uncle. Speaking of being outdated,he is studying civil engineering, which is about as relevant as a fax machine in 2023. But it's a good thing, because at least he will know how to bridge the age gap between him and his girlfriend. But hey, age is just a number, right? He's barely cleared his courses each semester, so he is practically in his first year . At least he has something in common with your girlfriend. Presenting the ADP Costaan, Poorvansh.     ",

    },
    {
      name: "Mayan Agrawal",
      dept: "Department of Publications and Correspondence",
      photo: "Assets/mayan.png",
      desc: "Mayan says \“I feel I am the smartest costaan bits has ever seen\” yet the only work he has done the entire sem is “pachaas nahi chaar posters chahiye toh bolo”. He is the CoStAAN of Publications and Correspondence, but the only correspondence he does is with girls of other colleges yet they never come. Mayan jab paida hua tha tab uske muh se Pehle shabd mom ya dad nahi, Nagpur aur taadoba tha. Iski nagpur waali baate sunkar lagta hai deaf people are privileged. Mayan ki resort itni badi hai ki woh humare sab conversations mein aa jati hai. He is so desperate to look cool ki woh apne neck ke allergy ko hickey batate ghumta hai. This man is such a wannabe that he fakes hookups he did over the summer and when asked for proof says \"DM nahi hai kyunki Vanish mode mein baat ki thi\". Describing him in one line, pre-costaan Mayan ko ladkiya aise hi reject karti thi aur post-costaan Mayan ko ladkiyan blind date pe reject karti hai. From a national level rifle shooter to the CoStAAN of Publications and Correspondence, presenting to you Mayan Agrawal.",

    },
    {
      name: "Nishit Gupta",
      dept: "Department of Controls",
      photo: "Assets/nishit.png",
      desc: "Coming from the small city of Kota, Nishit used to be as you would expect, a humble, well-educated, suicidal kid. Our “chanchal” boy, who could barely write, took a keen interest in writing “kavya” as he came to BITS. From trembling with the thought of holding hands with his first girlfriend to trembling the bed post just 3 months into his new relationship, he has come a long way. The news of getting into controls took control of him to an extent that he started ghosting his potential gf. Then he went on to propose her for marriage twice after the first rejection. The first time by giving her a balloon and the second time while he was wearing one. Taking a page out of game of thrones, Nishit is weirdly obsessed with chairs. Be it him right now, or at new years with his gf. Like a true costaan, this wannabe dom spent his days preparing for apogee and power tripping over his wingies. Having said all this, Nishit’s “mei hun na'' attitude has always helped not just his department but his friends too. This assures everyone that he is a reliable shoulder for support and an amazing peer to work with. Presenting to you the last brain cell of Controls, NISHIT GUPTA.",

    },
    {
      name: "Lalit Adithya",
      dept: "Department of Reception and Accomodation",
      photo: "Assets/lalit.png",
      desc: "Lalit has always had his fair share of quirky habits. From betting 2,000 that he will never drink again to sticking his head straight into the bushes . From giving his best in an SI interview only to run to the PU Office to get rid of it a day later. Lalit has shown numerous times that none of his life decisions are firm, including his will to be a CoStAAn.  Despite his unpredictability, Lalit is surely a complete workaholic when it comes to RecNAcc work. It's ironic, however, for someone who handles accommodations, the number of times he's been locked out of his own room. First by his roommate and then by the supposed ghosts of Gandhi-137. But Lalit is beyond all this, continuing to sleep and hold meetings in the very same cordyceps-infested room.  Fest work may come and go, but his ultimate goal of graduating early remains constant, even if it means taking up a 30-credit Sem just because it fits in his calendar. Unfortunately for him, this always ends up with him standing in front of AUGSD office. Presenting to you the CoStAAn with the highest CG among them all, Lalit Adithya Prakash. ",

    },
    {
      name: "Sahil Shah",
      dept: "Department of Sponsorship",
      photo: "Assets/sahil.png",
      desc: "This man is going to enjoy the next minute because “All I want is a little attention” is his life's motto. Before we begin, everyone should note that Sahil is the worst thing that has happened to Sponz and sponz has recently been on probation. Sahil itna chindi hai ki wo sponz ke juniors ko sponsors lane par mango bite deta hai, aur wo bhi sirf ek. Sahil is so insecure about his height that he tried to get Complan as a sponsor but they still rejected him. He needs so much validation on a daily basis that he asked the UC “ki chaahe to Sponz ko probation pe daal do par mera tweet like kar do” He also asked 3 random girls if they would like to feed dogs with him, all of them rejected the offer. In one line, Sahil is a tharki unfunny Gujarati, who scratches his chest like a pervert whenever he gets to know about a new girl and hits on anything that is even close to a female. Presenting to you, the costaan of Sponz, SAHIL SHAH.",

    },
    {
      name: "Naman Jalan",
      dept: "General Secretary, Students' Union",
      photo: "Assets/naman.png",
      desc: "Firstly this would be mostly in hindi bcoz english me kya haal hai iske woh toh oasis ke speech se yaad aa hi gaya hoga      We still think ki since naman jalan is from Asansol, ye sunke hi uska candidature cancel kardena chhiye but then realized that he had ‘high’ ambitions when we first met him. The best part of his journey is ki jalan itna stuff karta hai ki MAL ne hi ussey gen sec bana diya.  This gentleman and his companion wanted the system to be transparent, so they revealed how much of a share they take to get the work done. He is so hungry for respect ki he dated the first girl who called him jalan “ji”. His work ethic is directly proportional to the free nicotine he gets. Presenting to you, the general secretary of students union, Naman Jalan. ",

    },
  
    {
      name: "Ashirwad Karande",
      dept: "President, Students' Union",
      photo: "Assets/ashirwad.png",
      desc: "Ashirwad Karande, is very famous for pulling out, DLE, from the charter, as that was his only achievement as SU prez. He is so open minded that he doesn't consider red hair as a red flag. Being extremely skinny didn't stop him from  fist fighting the only guy he thought he could beat up, only to be beat up by a 40 kg lanky boy. He was once seen getting his girl snuck and had to get her out within 2 and a half minuts. The irony is that this was the second time CRC caught him with a 2.5 cut. Alas he couldn't wriggle out of this one despite his skininess. Presenting the Costaan of Finance and the Students’ Union President - ASHIRWAD KARANDE.",

    },
  ];

var timeout1 = 0;
var timeout2 = 0;
var timeout3 = 0;


function changeData() {
    timeout1 = setTimeout(() => {
        photo.style.opacity = 0;
        nameContainer.style.opacity = 0;
        dept.style.opacity = 0;
        desc.style.opacity= 0;
    }, 400);
    timeout2 = setTimeout(() => {
        updateValue();
    }, 600);
    timeout3 = setTimeout(() => {
        photo.style.opacity = 1;
        nameContainer.style.opacity = 1;
        dept.style.opacity = 1;
        desc.style.opacity=1;
    }, 800);
}
function updateValue() {
let d = data[currentData];
nameCostaa.innerHTML = d.name;
deptName.innerHTML = d.dept;
image.src = d.photo;
desc.innerHTML=d.desc
}


window.addEventListener('keydown', e => {
    keyPressed = parseInt(e.key);
    clearTimeout(timeout1);
        clearTimeout(timeout2);
        clearTimeout(timeout3);
        for (let k = 0; k < rows * columns * 5; k++) {
            clearTimeout(glowTimeout[k]);
        }
        for (let k = 0; k < rows * columns * 6; k++) {
            clearTimeout(hideTimeout[k]);
        }
        clearTimeout(timeoutValue);


    if (keyPressed >= 1 && keyPressed <=9   ) {
        currentData = keyPressed - 1;
        console.log(currentData);
        lightUp();
        setTimeout(() => {
            changeData();
        }, 2000);


        
    }

})

