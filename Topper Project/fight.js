function sriram(imgs,id) {
    var good = document.getElementById("expandedImg");
    good.src = imgs.src;
    var evil = document.getElementById("expandedImg2");
    var weapon = document.getElementById("myImage");
    switch(id)
    {
      case 1:
        
        evil.src = "evil1.png";
        weapon.src = "weapon1.png"
        document.getElementById("cont").innerHTML = "The festival Dussehra is the celebration of Lord Rama's triumph over Ravana : the victory of good over evil. Ravan had abducted Sita , the wife of Lord Rama and took her with him to his kingdom of Lanka. Then Lord Ram killed Ravana on the tenth day. Ravana was a demon by birth but very learned and a devotee of Lord Brahma, however in the end his evil side got the better of him.";
        document.getElementById("head").innerHTML = "Lord Rama Vs Ravana";
        break;

      case 3:
        evil.src="evil2.png";
        weapon.src="weapon2.png";
        document.getElementById("cont").innerHTML = " In the Bible, Satan comes to appear as the representative of evil. Jesus defeated Satan in His silent years. Though He gave no sermons, performed no miracles, and was unknown to the public, He lived all these years without sin, doing everything that was pleasing to God the Father. Satan was also defeated by Jesus at the cross. Shortly before his death." ;
        document.getElementById("head").innerHTML = "Jesus Vs Satan"
        break;

      case 4:
        evil.src="evil4.png";
        weapon.src="thor.png";
        document.getElementById("cont").innerHTML ="In the final act of Avengers: Endgame, Thanos brings his final battle to Earth, unleashing his army on the few surviving Avengers. Final battle against Thanos in Avengers: Endgame was a team effort, some of Earth's Mightiest Heroes brought unique elements to the fight that ultimately led to his defeat. And finally, Avengers gain victory over one of the strongest villian in the history of Cinema.";
        document.getElementById("head").innerHTML = "Avengers Vs Thanos"
        break;

      case 5:
        evil.src="evil5.png";
        weapon.src="https://www.transparentpng.com/thumb/bullets/tpgMx3-bullet-transparent-background.png";
        document.getElementById("cont").innerHTML = "A decade of relentless efforts by India to get Pakistan-based Jaish-e-Mohammed chief Masood Azhar listed as a global terrorist by the UN Security Council finally came to fruition in 2019, signifying India's leadership in global counter-terrorism efforts, as New Delhi also led from the front on climate action and sustainable development."
        document.getElementById("head").innerHTML = "Indian Army Vs Terrorists"
        break;

      case 6:
        evil.src="covid.png";
        weapon.src="http://www.pngall.com/wp-content/uploads/2/Medicine-PNG-Pic.png";
        document.getElementById("cont").innerHTML = " Doctors, health-care workers, and medical staff members are leading the battle against COVID-19 from the front. Putting their own lives at risk with selfless determination for the sake of saving lives, they truly are our heroes in these challenging times. Soon we will have the vaccine which will defeat this pandemic and once again good will win against evil."
        document.getElementById("head").innerHTML = "Doctors Vs Corona Virus"
        break;
    
    }
    
   
  }



  
var imgObj = null;
            
function init() {
    imgObj = document.getElementById('myImage');
    imgObj.style.position= 'relative'; 
    imgObj.style.left = '0px'; 
}

function moveRight() {
    var em = document.getElementById("expandedImg2");
    var  temp = window.getComputedStyle(em).getPropertyValue("opacity");
    document.getElementById("expandedImg2").style.opacity = temp-0.1;
    document.getElementById("myImage").style.transform = 30;
    if(document.getElementById("expandedImg2").style.opacity==0)
    {
        document.getElementById("myImage").style.opacity=0;
        window.location.reload();

    }
    imgObj.style.left = parseInt(imgObj.style.left) + 20 + 'px';
}

window.onload = init;