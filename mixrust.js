var curcontent = new Array();

var BlockListArrays = [
  /* 1 час    */ ["pistol.revolver", "shotgun.double",],
  /* 2 часа   */ ["pistol.python", "pistol.semiauto", "riot.helmet"],
  /* 4 часа   */ ["shotgun.pump", "pistol.m92", "coffeecan.helmet", "roadsign.jacket", "roadsign.kilt"],
  /* 8 часов  */ ["flamethrower", "shotgun.spas12", "smg.2", "smg.thompson", "rifle.semiauto"],
  /* 12 часов */ ["smg.mp5", "rifle.bolt", "rifle.m39", "metal.facemask", "metal.plate.torso", "grenade.f1"],
  /* 24 часа  */ ["rifle.ak", "rifle.lr300", "rifle.l96", "grenade.beancan", "surveycharge", "explosive.satchel"],
  /* 36 часов */ ["lmg.m249", "heavy.plate.helmet", "heavy.plate.jacket", "heavy.plate.pants"],
  /* 48 часов */ ["ammo.rifle.explosive", "ammo.rocket.basic", "rocket.launcher", "explosive.timed"],
];

var lvlsys = {
  "free": {
    "list": [
      {
        "lvl": 1,
        "exp": 10,
        "img": "https://cdn.discordapp.com/attachments/497033957418991627/777092958281007134/1.png",
      },
      {
        "lvl": 2,
        "exp": 25,
        "img": "https://cdn.discordapp.com/attachments/497033957418991627/777092989000351754/2.png",
      },
      {
        "lvl": 3,
        "exp": 50,
        "img": "https://cdn.discordapp.com/attachments/497033957418991627/777093004950896650/3.png",
      },
      {
        "lvl": 4,
        "exp": 75,
        "img": "https://cdn.discordapp.com/attachments/497033957418991627/777093033837199380/4.png",
      },
      {
        "lvl": 5,
        "exp": 100,
        "img": "https://cdn.discordapp.com/attachments/497033957418991627/777093050932527114/5.png",
      },
      {
        "lvl": 6,
        "exp": 125,
        "img": "https://cdn.discordapp.com/attachments/497033957418991627/777093083644166174/6.png",
      },
      {
        "lvl": 7,
        "exp": 150,
        "img": "https://cdn.discordapp.com/attachments/497033957418991627/778945180514254858/7.png",
      },
      {
        "lvl": 8,
        "exp": 175,
        "img": "https://cdn.discordapp.com/attachments/497033957418991627/777093122936537108/8.png",
      },
      {
        "lvl": 9,
        "exp": 200,
        "img": "https://cdn.discordapp.com/attachments/497033957418991627/777127804432023592/17.png",
      },
      {
        "lvl": 10,
        "exp": 250,
        "img": "https://cdn.discordapp.com/attachments/497033957418991627/777127994309345280/10.png",
      },
      {
        "lvl": 11,
        "exp": 300,
        "img": "https://cdn.discordapp.com/attachments/497033957418991627/777127936234881024/11.png",
      },
      {
        "lvl": 12,
        "exp": 350,
        "img": "https://cdn.discordapp.com/attachments/497033957418991627/777127820630687764/12.png",
      },
      {
        "lvl": 13,
        "exp": 400,
        "img": "https://cdn.discordapp.com/attachments/497033957418991627/777093169082925066/13.png",
      },
      {
        "lvl": 14,
        "exp": 500,
        "img": "https://cdn.discordapp.com/attachments/497033957418991627/778945188042768394/14.png",
      },
      {
        "lvl": 15,
        "exp": 600,
        "img": "https://cdn.discordapp.com/attachments/497033957418991627/778943351080747008/15.png",
      },
      {
        "lvl": 16,
        "exp": 700,
        "img": "https://cdn.discordapp.com/attachments/497033957418991627/777093004950896650/3.png",
      },
      {
        "lvl": 17,
        "exp": 800,
        "img": "https://cdn.discordapp.com/attachments/497033957418991627/778925923096330240/17.png",
      },
      {
        "lvl": 18,
        "exp": 900,
        "img": "https://cdn.discordapp.com/attachments/497033957418991627/778944888221204510/18.png",
      },
      {
        "lvl": 19,
        "exp": 1000,
        "img": "https://cdn.discordapp.com/attachments/497033957418991627/777093083644166174/6.png",
      },
      {
        "lvl": 20,
        "exp": 1100,
        "img": "https://cdn.discordapp.com/attachments/497033957418991627/767983554973663292/4.png",
      },
      {
        "lvl": 21,
        "exp": 1200,
        "img": "https://cdn.discordapp.com/attachments/497033957418991627/778945202794004480/21.png",
      },
      {
        "lvl": 22,
        "exp": 1350,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778952934838763530/22.png",
      },
      {
        "lvl": 23,
        "exp": 1500,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778954243854827520/23.png",
      },
      {
        "lvl": 24,
        "exp": 1650,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/782855026309726208/75.png",
      },
      {
        "lvl": 25,
        "exp": 1800,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778955432001667072/25.png",
      },
      {
        "lvl": 26,
        "exp": 1950,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778952742240518144/4.png",
      },
      {
        "lvl": 27,
        "exp": 2100,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778952751635103744/8.png",
      },
      {
        "lvl": 28,
        "exp": 2250,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778956923289468958/28.png",
      },
      {
        "lvl": 29,
        "exp": 2400,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778957462450602024/29.png",
      },
      {
        "lvl": 30,
        "exp": 2550,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778957779254902804/30.png",
      },
      {
        "lvl": 31,
        "exp": 2700,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778958981196021781/3.png",
      },
      {
        "lvl": 32,
        "exp": 2850,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778959480196169768/32.png",
      },
      {
        "lvl": 33,
        "exp": 3000,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778959672974770187/33.png",
      },
      {
        "lvl": 34,
        "exp": 3200,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778959939725033492/19.png",
      },
      {
        "lvl": 35,
        "exp": 3400,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778956929619853332/35.png",
      },
      {
        "lvl": 36,
        "exp": 3600,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778952984402198539/36.png",
      },
      {
        "lvl": 37,
        "exp": 3700,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778952973173915698/37.png",
      },
      {
        "lvl": 38,
        "exp": 3800,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778959939725033492/19.png",
      },
      {
        "lvl": 39,
        "exp": 3900,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778959672974770187/33.png",
      },
      {
        "lvl": 40,
        "exp": 4000,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778962703640297492/40.png",
      },
      {
        "lvl": 41,
        "exp": 4100,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778962911472255039/41.png",
      },
      {
        "lvl": 42,
        "exp": 4200,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778962951939686400/42.png",
      },
      {
        "lvl": 43,
        "exp": 4300,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778963412478328872/43.png",
      },
      {
        "lvl": 44,
        "exp": 4400,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778963424721240075/44.png",
      },
      {
        "lvl": 45,
        "exp": 4500,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778952992689881088/45.png",
      },
      {
        "lvl": 46,
        "exp": 4600,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778964855351672863/11.png",
      },
      {
        "lvl": 47,
        "exp": 4700,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778965045988163644/13.png",
      },
      {
        "lvl": 48,
        "exp": 4800,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778965094885228574/34.png",
      },
      {
        "lvl": 49,
        "exp": 4900,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778965146499940353/49.png",
      },
      {
        "lvl": 50,
        "exp": 5000,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778966077916184626/50.png",
      },
      {
        "lvl": 51,
        "exp": 5100,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/780675659319607316/9.png",
      },
      {
        "lvl": 52,
        "exp": 5200,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/779327848485486602/0183ce10f03898b8e7fc125d6f3d2414.png",
      },
      {
        "lvl": 53,
        "exp": 5300,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/780669895390134272/3.png",
      },
      {
        "lvl": 54,
        "exp": 5400,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/780696828907225108/18.png",
      },
      {
        "lvl": 55,
        "exp": 5500,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/782855452848554034/100.png",
      },
      {
        "lvl": 56,
        "exp": 5600,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/779330169194283018/14.png",
      },
      {
        "lvl": 57,
        "exp": 5700,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/780669895390134272/3.png",
      },
      {
        "lvl": 58,
        "exp": 5800,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778963424721240075/44.png",
      },
      {
        "lvl": 59,
        "exp": 5900,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/782849264829202442/61ee9fca69e7fa44.png",
      },
      {
        "lvl": 60,
        "exp": 6000,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/779331258110574612/60.png",
      },
      {
        "lvl": 61,
        "exp": 6100,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/782856702235508736/12.png",
      },
      {
        "lvl": 62,
        "exp": 6200,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/779332413595582484/34.png",
      },
      {
        "lvl": 63,
        "exp": 6300,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/779332700632514570/63.png",
      },
      {
        "lvl": 64,
        "exp": 6400,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/782849277521035274/272560f628ce8cda.png",
      },
      {
        "lvl": 65,
        "exp": 6500,
        "img": "https://www.rust-items.com/icons/abcf3b856b26c6b8a7c510b0c745c182.png",
      },
      {
        "lvl": 66,
        "exp": 6600,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/779334459211776010/16.png",
      },
      {
        "lvl": 67,
        "exp": 6700,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/782849299423690762/f7ad2d95f1c40ea8.png",
      },
      {
        "lvl": 68,
        "exp": 6800,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/779335368980824064/19.png",
      },
      {
        "lvl": 69,
        "exp": 6900,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/782849248776683541/941a786d8dc0df54.png",
      },
      {
        "lvl": 70,
        "exp": 7000,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/779335520827604992/70.png",
      }
    ]
  },
  "epic": {
    "list": [
      {
        "lvl": 1,
        "exp": 10,
        "img": "https://cdn.discordapp.com/attachments/497033957418991627/778945226940088350/1.png",
      },
      {
        "lvl": 2,
        "exp": 25,
        "img": "https://cdn.discordapp.com/attachments/497033957418991627/777103161227608114/8.png",
      },
      {
        "lvl": 3,
        "exp": 50,
        "img": "https://cdn.discordapp.com/attachments/497033957418991627/777101408372785162/3.png",
      },
      {
        "lvl": 4,
        "exp": 75,
        "img": "https://cdn.discordapp.com/attachments/497033957418991627/777104308658765824/4.png",
      },
      {
        "lvl": 5,
        "exp": 100,
        "img": "https://cdn.discordapp.com/attachments/497033957418991627/777105540361879552/5.png",
      },
      {
        "lvl": 6,
        "exp": 125,
        "img": "https://cdn.discordapp.com/attachments/497033957418991627/777101424612868096/6.png",
      },
      {
        "lvl": 7,
        "exp": 150,
        "img": "https://cdn.discordapp.com/attachments/497033957418991627/778945233903026186/7.png",
      },
      {
        "lvl": 8,
        "exp": 175,
        "img": "https://cdn.discordapp.com/attachments/497033957418991627/777103161227608114/8.png",
      },
      {
        "lvl": 9,
        "exp": 200,
        "img": "https://cdn.discordapp.com/attachments/497033957418991627/777127662627454986/17.png",
      },
      {
        "lvl": 10,
        "exp": 250,
        "img": "https://cdn.discordapp.com/attachments/497033957418991627/778921742520287252/10.png",
      },
      {
        "lvl": 11,
        "exp": 300,
        "img": "https://cdn.discordapp.com/attachments/497033957418991627/777127731074826250/11.png",
      },
      {
        "lvl": 12,
        "exp": 350,
        "img": "https://cdn.discordapp.com/attachments/497033957418991627/777127719024459816/12.png",
      },
      {
        "lvl": 13,
        "exp": 400,
        "img": "https://cdn.discordapp.com/attachments/497033957418991627/777127690683547678/13.png",
      },
      {
        "lvl": 14,
        "exp": 500,
        "img": "https://cdn.discordapp.com/attachments/497033957418991627/778945240543264789/14.png",
      },
      {
        "lvl": 15,
        "exp": 600,
        "img": "https://cdn.discordapp.com/attachments/497033957418991627/778943484030877706/15.png",
      },
      {
        "lvl": 16,
        "exp": 700,
        "img": "https://cdn.discordapp.com/attachments/497033957418991627/777101408372785162/3.png",
      },
      {
        "lvl": 17,
        "exp": 800,
        "img": "https://cdn.discordapp.com/attachments/497033957418991627/777127662627454986/17.png",
      },
      {
        "lvl": 18,
        "exp": 900,
        "img": "https://cdn.discordapp.com/attachments/497033957418991627/778941595177320468/18.png",
      },
      {
        "lvl": 19,
        "exp": 1000,
        "img": "https://cdn.discordapp.com/attachments/497033957418991627/777101424612868096/6.png",
      },
      {
        "lvl": 20,
        "exp": 1100,
        "img": "https://cdn.discordapp.com/attachments/497033957418991627/767983572996718632/3.png",
      },
      {
        "lvl": 21,
        "exp": 1200,
        "img": "https://cdn.discordapp.com/attachments/497033957418991627/778945254061506580/21.png",
      },
      {
        "lvl": 22,
        "exp": 1350,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778952763551776798/22.png",
      },
      {
        "lvl": 23,
        "exp": 1500,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778952772170022912/23.png",
      },
      {
        "lvl": 24,
        "exp": 1650,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/782855034571849748/90.png",
      },
      {
        "lvl": 25,
        "exp": 1800,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778972049473273936/25.png",
      },
      {
        "lvl": 26,
        "exp": 1950,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778952806949322762/32.png",
      },
      {
        "lvl": 27,
        "exp": 2100,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778959672974770187/33.png",
      },
      {
        "lvl": 28,
        "exp": 2250,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778975273361080330/28.png",
      },
      {
        "lvl": 29,
        "exp": 2400,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778975496934785034/29.png",
      },
      {
        "lvl": 30,
        "exp": 2550,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778975502961475594/30.png",
      },
      {
        "lvl": 31,
        "exp": 2700,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778976440934334484/3.png",
      },
      {
        "lvl": 32,
        "exp": 2850,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778976455597621248/32.png",
      },
      {
        "lvl": 33,
        "exp": 3000,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778976900755357736/33.png",
      },
      {
        "lvl": 34,
        "exp": 3200,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778976910310113280/6.png",
      },
      {
        "lvl": 35,
        "exp": 3400,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778978120723857428/35.png",
      },
      {
        "lvl": 36,
        "exp": 3600,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778978404728307732/12.png",
      },
      {
        "lvl": 37,
        "exp": 3700,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778978415637168168/37.png",
      },
      {
        "lvl": 38,
        "exp": 3800,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778952721507287058/6.png",
      },
      {
        "lvl": 39,
        "exp": 3900,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778976900755357736/33.png",
      },
      {
        "lvl": 40,
        "exp": 4000,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778979349558198312/40.png",
      },
      {
        "lvl": 41,
        "exp": 4100,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778981975351623720/41.png",
      },
      {
        "lvl": 42,
        "exp": 4200,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778982154004201512/42.png",
      },
      {
        "lvl": 43,
        "exp": 4300,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778982165219508255/43.png",
      },
      {
        "lvl": 44,
        "exp": 4400,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778983558080757770/44.png",
      },
      {
        "lvl": 45,
        "exp": 4500,
        "img": "https://cdn.discordapp.com/attachments/765182382461681664/778984669219127316/11.png",
      },
      {
        "lvl": 46,
        "exp": 4600,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778984981657288734/32.png",
      },
      {
        "lvl": 47,
        "exp": 4700,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778985358753792030/23.png",
      },
      {
        "lvl": 48,
        "exp": 4800,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778976910310113280/6.png",
      },
      {
        "lvl": 49,
        "exp": 4900,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778984893203480596/49.png",
      },
      {
        "lvl": 50,
        "exp": 5000,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778986318587756575/50.png",
      },
      {
        "lvl": 51,
        "exp": 5100,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/780675673517850655/32.png",
      },
      {
        "lvl": 52,
        "exp": 5200,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/780669864099446785/2.png",
      },
      {
        "lvl": 53,
        "exp": 5300,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/780669908546748425/4.png",
      },
      {
        "lvl": 54,
        "exp": 5400,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/782849257962733638/8ed6f689a2f12fc0.png",
      },
      {
        "lvl": 55,
        "exp": 5500,
        "img": "https://cdn.discordapp.com/attachments/497033957418991627/767983679062147082/5.png",
      },
      {
        "lvl": 56,
        "exp": 5600,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/779338646645506048/56.png",
      },
      {
        "lvl": 57,
        "exp": 5700,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/780669908546748425/4.png",
      },
      {
        "lvl": 58,
        "exp": 5800,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/779334459211776010/16.png",
      },
      {
        "lvl": 59,
        "exp": 5900,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/782849271460134922/3dc44f6c8274bd8e.png",
      },
      {
        "lvl": 60,
        "exp": 6000,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/779339616636895232/60.png",
      },
      {
        "lvl": 61,
        "exp": 6100,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/778978404728307732/12.png",
      },
      {
        "lvl": 62,
        "exp": 6200,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/779335368980824064/19.png",
      },
      {
        "lvl": 63,
        "exp": 6300,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/779340356219174912/63.png",
      },
      {
        "lvl": 64,
        "exp": 6400,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/782849285129371648/2428bf54fd02bc22.png",
      },
      {
        "lvl": 65,
        "exp": 6500,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/779340361751330836/65.png",
      },
      {
        "lvl": 66,
        "exp": 6600,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/779340994297462794/11.png",
      },
      {
        "lvl": 67,
        "exp": 6700,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/782849293459128320/aeb2df6da512341f.png",
      },
      {
        "lvl": 68,
        "exp": 6800,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/780669917586128896/5.png",
      },
      {
        "lvl": 69,
        "exp": 6900,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/782859376914333696/11.png",
      },
      {
        "lvl": 70,
        "exp": 7000,
        "img": "https://cdn.discordapp.com/attachments/778951942453854241/779342001257578506/70.png",
      }
    ]
  }
};

curcontent["rules"] = {
  xhead: 'Правила',
  xcon: '<div class="xbox_custom_rules"><ul><p class="MsoNormal"><span>Информация</span></p>\
<p><li>Не знание правил не освобождает Вас от ответственности.</li></p>\
<p><li>Зайдя на сервер Вы автоматически соглашаетесь со всеми нижеперечисленными пунктами правил.</li></p>\
<p><li>Вы несете ответственность за все свои аккаунты. Получив бан за нарушение на одном аккаунте, вы получите его и на последующих. То же самое будет если на одном из ваших аккаунтах имеется EAC блокировка.</li></p>\
<p><li>Если Вы уже были замечены с читами / макросами на другом сервере / проекте и на вас есть пруфы - мы имеем право забанить Вас без проверки.</li></p>\
<p><li>Администрация не обязуется компенсировать игровые ценности, утраченные по причине вашей ошибки, багов игры или технических проблем на сервере.</li></p>\
<p><li>Запрещена продажа или реклама Читов/Макросов.</li></p>\
<p><li>Запрещено выдавать себя за Администратора, модератора или проверяющего.</li></p>\
<p><li>Администрация сама выбирает наказание для игрока в зависимости от степени нарушения и обстоятельств. Игрок может получить просто предупреждение, а может получить и перманентный бан.</li></p>\
<p class="MsoNormal"><span>Геймплей</span></li></p>\
<p><li>Запрещено использовать/хранить читы/макросы или любой другой софт дающий преимущество перед честными игроками.</li></p>\
<p><li>Запрещена игра с читерами/макросниками.</li></p>\
<p><li>Запрещено использование услуг читеров.</li></p>\
<p><li>Запрещено использование любых видов багов с целью или без цели получения преимущества над другими игроками.</li></p>\<br>\
<p class="MsoNormal"><span>Нарушение лимита игроков в команде</span></li></p>\
<p><li>Нельзя жить больше положенного максимума в одном доме</li></p>\
<p><li>Нельзя устраивать альянсы и перемирия с соседями если в сумме вас больше указанного в названии сервера максимума</li></p>\
<p><li>Частая смена тиммейта будет считаться за нарушения правила о лимите</li></p>\
<p><li>Нельзя рейдить и антирейдить в 1+/2+/3+ (подсад, доп.люди на обороне)</li></p><br>\
<p class="MsoNormal"><span>Игровой Чат</span></li></p>\
<p><li>Запрещены ссылки в чате на сторонние сервисы и сайты.</li></p>\
<p><li>Запрещен флуд (многократное повторение бессмысленных фраз, символов) или многократное отправление одинаковых фраз за короткий промежуток времени.</li></p>\
<p><li>Запрещены провокационные сообщения, по типу - "я читер, проверь меня".</li></p>\<br>\
<p class="MsoNormal"><span>Проверки</span></li></p>\
<p><li>Вы имеете полное право отказаться проходить проверку, но в этом случае вы и ваши тиммейты получат блокировку на всех наших серверах.</li></p>\
<p><li>При согласии на проверку вы разрешаете устанавливать сторонние программы нужные администрации для проверки вашего PC.</li></p>\
<p><li>Проверки проходят только через программы «DISCORD» и «SKYPE». Каждый игрок на нашем проекте, в обязательном порядке должен иметь одну из данных программ на своём пк (или хотя-бы аккаунт в дискорде).</li></p>\
<p><li>Выход с сервера во время вызова на проверку увенчается блокировкой.</li></p>\
<p><u><br>\
</u></p>\
</ul></div></div>'
};

curcontent["lvl-system-free"] = {
  xhead: 'Система уровней',
  patternxcon: `<div class="store-categories">
    <button class="btn btn-secondary active" onclick="Open('lvl-system-free', false);">FREE LEVELS</button>
    <button class="btn btn-secondary" onclick="Open('lvl-system-epic', false);">EPIC LEVELS</button>
    
    <div class="xbox_custom_lvlsys">`,
  xcon: '',
};

curcontent["lvl-system-epic"] = {
  xhead: 'Система уровней',
  patternxcon: `<div class="store-categories">
    <button class="btn btn-secondary" onclick="Open('lvl-system-free', false);">FREE LEVELS</button>
    <button class="btn btn-secondary active" onclick="Open('lvl-system-epic', false);">EPIC LEVELS</button>
    
    <div class="xbox_custom_lvlsys">`,
  xcon: '',
};

curcontent["block"] = {
  xhead: 'Блокировка предметов после вайпа', 
  xcon: '<div class="xbox_custom_block"><div class="kit-items">',
};

function Open(el, usefade = true, zind = false) {
  closepage();
  var div1 = document.createElement("div");
    div1.id = 'Modal';
  var div2 = document.createElement("div");
  div2.className = 'modal modal-xacku fade';
  if(!usefade) div2.classList.add("show");
  div2.style = 'display: block; z-index: 1100;';
  div2.id = 'closer';
  //div2.onclick = closepage;
  var div3 = document.createElement("div");
  div3.className = "modal-dialog modal-lg";
  if(el=="block")div3.className+=" modal-lg-block"
  var div4 = document.createElement("div");
  div4.className = "modal-content";
  var div5 = document.createElement("div");
  div5.className = "modal-header";
  div5.innerHTML = '<h4 class="modal-title">'+curcontent[el].xhead+'</h4>';
  var div6 = document.createElement("div");
  div6.className = "modal-body";
  div6.innerHTML = curcontent[el].xcon;
  var div7 = document.createElement("div");
  div7.className = "modal-footer";
  div7.innerHTML = '<button type="button" class="btn btn-secondary" id="closer" onclick="closepage()">Закрыть</button>';
  var div8 = document.createElement("div");
  div8.className = "modal-backdrop fade show";
  div8.style = 'z-index: 1050;';
  
  div1.appendChild(div2);
  //div2.appendChild(div2_5);
  div2.appendChild(div3);
  div3.appendChild(div4);
  div4.appendChild(div5);
  div4.appendChild(div6);
  div4.appendChild(div7);
  div1.appendChild(div8);
  if(usefade) setTimeout(()=> div2.classList.add("show"), 0);
  
  var body = document.getElementsByTagName('body')[0];
  body.appendChild(div1);
  body.className = "modal-open";
}


function closepage() {
  var Modal = document.getElementById('Modal');
  var Modalparent = null;
  try {
    Modalparent = ((Modal.parentElement) ? Modal.parentElement : ((Modal.parentNode) ? Modal.parentNode : null));
  } catch (error) {
    return;
  }
  if (Modalparent == null) return;
  Modalparent.removeChild(Modal);
  document.getElementsByTagName('body')[0].className = "";
}

function search(e){
  if (e.offsetX < 1) { 
    console.log(e.target.innerText + ' | ' + e.clientX);
    if (document.selection) { // IE
      var range = document.body.createTextRange();
      range.moveToElementText(e.target);
      range.select();
    } else if (window.getSelection) {
      var range = document.createRange();
      range.selectNode(e.target);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
    }
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('успешно скопирован, нажмите CTRL + V чтобы вставить в консоль F1 в игре.'); 
      } catch (err) {
      console.log('Oops, unable to copy' + err);
      }
    }
}

var promoWrap,
    scratch,
    scratchParts,
    scratched = false;
    screatchProperties = {
      h: 10, l: -70,
      speed: 2,  t: 20,
      bgt: 65, bgl: 35,
    };

window.onload = function () {
  document.body.onclick=function(event)
  {
    if(event.target.id == 'closer')closepage();
    if(event.target.className == 'MsoCommand')search(event);
  }
  
  for (var i = 0; i < BlockListArrays.length; i++) {
    curcontent["block"].xcon += '<div class="block_by_category block_category_'+ (i + 1) +'">';
    for (var b = 0; b < BlockListArrays[i].length; b++) {
      curcontent["block"].xcon += '<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/'+ BlockListArrays[i][b] +'.png">\
                    <div class="kit-item__quantity block-lvl-'+ (i + 1) +'"></div></div></div>';
    }
    curcontent["block"].xcon += '</div>';
  }
  curcontent["block"].xcon += '</div>\<br></i></div>';

  // lvl sys init
  Object.keys(lvlsys).forEach(function(type, numKey){
    let lvls = lvlsys[type].list;
    let needExp = 0;
    lvls.forEach(function(value){
      needExp += value.exp;
      curcontent["lvl-system-"+type].patternxcon += `<div class="lvl-el"><div class="lvl-header">Уровень ${value.lvl}</div><div class="lvl-body"><img src="${value.img}" alt=""></div><div class="lvl-footer">Exp: ${needExp}</div></div>`;
    });
    curcontent["lvl-system-"+type].patternxcon += '</div></div>';
    curcontent["lvl-system-"+type].xcon = curcontent["lvl-system-"+type].patternxcon;
  });
  //

  //scratched widget init
  scratchInit();
}

document.addEventListener("load", scratchInit);

function scratchInit() {
  promoWrap = document.getElementById('promo');
  scratch = promoWrap.children[1];
  scratchParts = [];

  //gen scratch parts
  let partsCount = (promoWrap.offsetWidth+screatchProperties.l*-1)/screatchProperties.h;
  for (let a = 0; a < partsCount; a++) {
    let part = document.createElement('div');
    let bg = document.createElement('div');
    part.className = 's-part';
    part.style.height = screatchProperties.h+'px';
    part.style.top = screatchProperties.t+'px';
    part.style.left = (screatchProperties.l+screatchProperties.h*a)+'px';
    bg.className = 'bg';
    bg.style.top = (screatchProperties.bgt-(screatchProperties.h*0.7)*a)+'px';
    bg.style.left = (screatchProperties.bgl-(screatchProperties.h*0.7)*a)+'px';
    part.append(bg);
    scratch.append(part);
    scratchParts.push(part);
  }
  promoWrap.style.opacity = 1;
  promoWrap.children[0].style.display = 'block';
  scratch.onclick=function(event){
    if (!scratched) {
      scratched = true;
      // scratch.getElementsByTagName('img')[0].remove();
      toscratch();
    }
  }
}

function toscratch() {
  if (Object.keys(scratchParts).length > 0) {
    let part2scratch = Math.floor(Math.random() * (Object.keys(scratchParts).length + 1));
    if (typeof scratchParts[Object.keys(scratchParts)[part2scratch]] != 'undefined') {
      let part = scratchParts[Object.keys(scratchParts)[part2scratch]];
      part.style.width = '0px';
      delete(scratchParts[Object.keys(scratchParts)[part2scratch]]);
      part.remove();
    }
    setTimeout(toscratch, 50);
  } else {
    scratch.remove();
  }
}