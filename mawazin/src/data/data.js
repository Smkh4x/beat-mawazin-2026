import img1 from '../assets/arbi.jpg'
import img2 from '../assets/saidmjred.jpeg'
import img3 from '../assets/stati.jpeg'

const myData = [
  {
    id: 1,
    name: "Chab Arbi",
    img: img1,
    discription: "19:00",

  },
  {
    id: 2,
    name: "Said elmjared",
    img: img2,
    discription: "22:00",
  },
  {
    id: 3,
    Name: "stati",
    img: img3,
    discription: "18:00",
  },
/*
  {
    "id": "saad-lamjarred",
    "name": "Saad Lamjarred",
    "genre": "Pop",
    "scene": "OLM Souissi",
    "day": "19 Juin",
    "time": "22:00"
  },
  {
    "id": "hatim-ammor",
    "name": "Hatim Ammor",
    "genre": "Pop",
    "scene": "Nahda",
    "day": "19 Juin",
    "time": "20:00"
  },
  {
    "id": "asmaa-lmnawar",
    "name": "Asmaa Lmnawar",
    "genre": "Tarab",
    "scene": "Théâtre Mohammed V",
    "day": "19 Juin",
    "time": "21:00"
  },
  {
    "id": "muslim",
    "name": "Muslim",
    "genre": "Rap",
    "scene": "Bouregreg",
    "day": "20 Juin",
    "time": "23:00"
  },
  {
    "id": "don-big",
    "name": "Don Bigg",
    "genre": "Rap",
    "scene": "Bouregreg",
    "day": "20 Juin",
    "time": "21:30"
  },
  {
    "id": "elgrande-toto",
    "name": "ElGrande Toto",
    "genre": "Rap",
    "scene": "OLM Souissi",
    "day": "20 Juin",
    "time": "22:30"
  },
  {
    "id": "manal",
    "name": "Manal",
    "genre": "Pop",
    "scene": "Nahda",
    "day": "20 Juin",
    "time": "20:30"
  },
  {
    "id": "dizzy-dros",
    "name": "Dizzy DROS",
    "genre": "Rap",
    "scene": "Bouregreg",
    "day": "21 Juin",
    "time": "22:00"
  },
  {
    "id": "7liwa",
    "name": "7liwa",
    "genre": "Rap",
    "scene": "Bouregreg",
    "day": "21 Juin",
    "time": "20:00"
  },
  {
    "id": "snor",
    "name": "Snor",
    "genre": "Rap",
    "scene": "Bouregreg",
    "day": "21 Juin",
    "time": "19:00"
  },
  {
    "id": "zina-daoudia",
    "name": "Zina Daoudia",
    "genre": "Chaabi",
    "scene": "Nahda",
    "day": "21 Juin",
    "time": "23:00"
  },
  {
    "id": "daoudia",
    "name": "Daoudia",
    "genre": "Chaabi",
    "scene": "Nahda",
    "day": "22 Juin",
    "time": "22:00"
  },
  {
    "id": "abdelfattah-grini",
    "name": "Abdelfattah Grini",
    "genre": "Pop",
    "scene": "OLM Souissi",
    "day": "22 Juin",
    "time": "21:00"
  },
  {
    "id": "douzi",
    "name": "Douzi",
    "genre": "Pop",
    "scene": "Nahda",
    "day": "22 Juin",
    "time": "20:30"
  },
  {
    "id": "najat-aatabou",
    "name": "Najat Aatabou",
    "genre": "Chaabi",
    "scene": "Chellah",
    "day": "22 Juin",
    "time": "19:30"
  },
  {
    "id": "hoba-hoba-spirit",
    "name": "Hoba Hoba Spirit",
    "genre": "Rock",
    "scene": "Bouregreg",
    "day": "23 Juin",
    "time": "22:00"
  },
  {
    "id": "fnaire",
    "name": "Fnaire",
    "genre": "Fusion",
    "scene": "OLM Souissi",
    "day": "23 Juin",
    "time": "21:00"
  },
  {
    "id": "oum",
    "name": "Oum",
    "genre": "Jazz",
    "scene": "Chellah",
    "day": "23 Juin",
    "time": "20:00"
  },
  {
    "id": "amina-karram",
    "name": "Amina Karram",
    "genre": "Chaabi",
    "scene": "Nahda",
    "day": "23 Juin",
    "time": "19:00"
  },
  {
    "id": "hind-ziadi",
    "name": "Hind Ziadi",
    "genre": "Jazz",
    "scene": "Chellah",
    "day": "24 Juin",
    "time": "21:00"
  },
  {
    "id": "ahmed-soultan",
    "name": "Ahmed Soultan",
    "genre": "Afro",
    "scene": "OLM Souissi",
    "day": "24 Juin",
    "time": "22:00"
  },
  {
    "id": "zakaria-ghafouli",
    "name": "Zakaria Ghafouli",
    "genre": "Pop",
    "scene": "Nahda",
    "day": "24 Juin",
    "time": "20:00"
  },
  {
    "id": "salma-rachid",
    "name": "Salma Rachid",
    "genre": "Pop",
    "scene": "Nahda",
    "day": "24 Juin",
    "time": "19:30"
  },
  {
    "id": "jamal-debbouze-band",
    "name": "Jamal Debbouze Band",
    "genre": "Fusion",
    "scene": "Bouregreg",
    "day": "25 Juin",
    "time": "22:30"
  },
  {
    "id": "tagne",
    "name": "Tagne",
    "genre": "Rap",
    "scene": "Bouregreg",
    "day": "25 Juin",
    "time": "21:00"
  },
  {
    "id": "draganov",
    "name": "Draganov",
    "genre": "Rap",
    "scene": "Bouregreg",
    "day": "25 Juin",
    "time": "20:00"
  },
  {
    "id": "nouamane-belaiachi",
    "name": "Nouamane Belaiachi",
    "genre": "Pop",
    "scene": "Nahda",
    "day": "26 Juin",
    "time": "22:00"
  },
  {
    "id": "ghita-benhiyoune",
    "name": "Ghita Benhiyoune",
    "genre": "Jazz",
    "scene": "Chellah",
    "day": "26 Juin",
    "time": "20:30"
  },
  {
    "id": "mouad-lmohajir",
    "name": "Mouad Lmohajir",
    "genre": "Fusion",
    "scene": "Théâtre Mohammed V",
    "day": "27 Juin",
    "time": "21:00"
  },
  {
    "id": "abdelaziz-statati",
    "name": "Abdelaziz Stati",
    "genre": "Chaabi",
    "scene": "Nahda",
    "day": "27 Juin",
    "time": "23:00"
  }

*/
]

export default myData

