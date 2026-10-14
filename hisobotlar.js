/* =====================================================================
   HISOBOTLAR BAZASI — shu faylni tahrirlab hisobot qo'shasiz
   =====================================================================
   QADAMLAR:
   1) PDF faylni GitHub'ga yuklang (Add file → Upload files).
   2) Shu faylda kerakli mavzu va o'quv yilini toping, qator qo'shing.
   3) "Commit changes" bosing, 1-2 daqiqadan so'ng saytda ko'rinadi.

   QATOR NAMUNASI (vergul bilan ajratib bir nechta yozish mumkin):
     { "nom":"Hisobot nomi", "pdf":"fayl nomi.pdf", "flipbook":"https://...", "izoh":"ixtiyoriy" }

   MUHIM:
   - "pdf" nomi GitHub'ga yuklangan fayl nomi bilan harfma-harf bir xil bo'lsin.
   - pdf yoki flipbook bo'sh ("") qolsa, o'sha tugma chiqmaydi.
   - Oxirgi qatordan keyin vergul qo'ymang; qo'shtirnoq " lardan foydalaning.
   ===================================================================== */

/* ===== HISOBOTLAR BAZASI (o'quv yillari kesimida) =====
   Yangi hisobot qo'shish: tegishli mavzuning "hisobotlar" ichiga, kerakli o'quv yili ostiga qator qo'shing:
     "2024-2025": [ { nom:"Hisobot nomi", pdf:"fayl nomi.pdf", flipbook:"https://...", izoh:"ixtiyoriy" } ]
   Bir yilga bir nechta hisobot qo'shish mumkin (qatorlarni vergul bilan ajrating).
   pdf yoki flipbook bo'sh ("") qolsa, o'sha tugma chiqmaydi. Yillar ro'yxatini YILLAR dan o'zgartiring. */
const YILLAR = ["2022-2023","2023-2024","2024-2025","2025-2026","2026-2027"];
const MAVZULAR = {
  "yillik": {
    "nom": "Birinchi prorektorning yillik rejasi ijrosi",
    "tavsif": "Sentabrdan maygacha oylar kesimida bajarilgan tadbirlar bo'yicha hisobotlar — o'quv yillari kesimida",
    "hisobotlar": {
     "2024-2025": [
        {
          "nom": "Birinchi prorektorning yillik rejasi ijrosi (2024-2025)",
          "pdf": "Birinchi_prorektorning_yillik_rejasi_ijrosi_2024-2025.pdf",
          "flipbook": "https://online.pubhtml5.com/ketlg/rqau/",
          "izoh": ""
        },
        {
    "nom": "Birinchi prorektorning yillik rejasi (2024-2025)",
    "pdf": "Birinchi_prorektorning_yillik_rejasi_2024-2025.pdf",
    "flipbook": "",
    "izoh": ""
  }
      ],
      "2025-2026": [
        {
    "nom": "Birinchi prorektorning yillik rejasi (2025-2026)",
    "pdf": "Birinchi_prorektorning_yillik_rejasi_2025-2026.pdf",
    "flipbook": "",
    "izoh": ""
  },
         {
          "nom": "Yillik reja ijrosi bo'yicha hisobot",
          "pdf": "yillik-reja-ijrosi-hisobot.pdf",
          "flipbook": "https://online.pubhtml5.com/ketlg/ybhl/",
          "izoh": "Sentabrdan maygacha oylar kesimida bajarilgan barcha tadbirlar, ularning tavsifi va manbalar havolalari bilan"
        }
      ]
    }
  },
  "umumiy": {
    "nom": "Ma'naviy-ma'rifiy ishlar yuzasidan umumiy hisobot",
    "tavsif": "Ma'naviy-ma'rifiy ishlar bo'yicha umumlashtirilgan hisobotlar — o'quv yillari kesimida",
    "hisobotlar": {
      "2025-2026": [
        {
          "nom": "Umumiy hisobot",
          "pdf": "manaviy-marifiy-umumiy-hisobot.pdf",
          "flipbook": "https://online.pubhtml5.com/ketlg/ybhl/",
          "izoh": "962 ta tadbir, respublika musobaqalaridagi natijalar va tanlovlardagi g'alabalar bo'yicha to'liq hisobot"
        }
      ]
    }
  },
  "madaniy": {
    "nom": "Ma'naviy-ma'rifiy, madaniy tadbirlar hisoboti",
    "tavsif": "Konsertlar, teatr, ochiq eshiklar kuni va kino kechalari bo'yicha hisobotlar",
    "hisobotlar": {
      "2025-2026": [
        {
          "nom": "Ma'naviy-ma'rifiy, madaniy tadbirlar hisoboti",
          "pdf": "01-ma'naviy-ma'rifiy, madaniy.pdf",
          "flipbook": "",
          "izoh": ""
        }
      ]
    }
  },
  "muzey": {
    "nom": "Muzey va ichki turizm",
    "tavsif": "Muzeylarga tashriflar va ichki turizm bo'yicha hisobotlar",
    "hisobotlar": {}
  },
  "sport": {
    "nom": "Sport musobaqalari hisoboti",
    "tavsif": "Institut va viloyat miqyosidagi sport musobaqalari bo'yicha hisobotlar",
    "hisobotlar": {
      "2025-2026": [
        {
          "nom": "Sport musobaqalari hisoboti",
          "pdf": "02-sport.pdf",
          "flipbook": "https://online.pubhtml5.com/ketlg/jhcb/",
          "izoh": ""
        }
      ]
    }
  },
  "davra": {
    "nom": "Davra suhbatlari va uchrashuvlar hisoboti",
    "tavsif": "Turli mavzudagi uchrashuvlar va davra suhbatlari bo'yicha hisobotlar",
    "hisobotlar": {
      "2025-2026": [
        {
          "nom": "Davra suhbatlari va uchrashuvlar hisoboti",
          "pdf": "03-davra suhbatlari va uchrashuv.pdf",
          "flipbook": "",
          "izoh": ""
        }
      ]
    }
  },
  "intellektual": {
    "nom": "Intellektual o'yin va tanlovlar hisoboti",
    "tavsif": "Intellektual o'yinlar, viktorinalar va tanlovlar bo'yicha hisobotlar",
    "hisobotlar": {
      "2025-2026": [
        {
          "nom": "Intellektual o'yin va tanlovlar hisoboti",
          "pdf": "04-Intellektual o'yin va tanlovlar.pdf",
          "flipbook": "",
          "izoh": ""
        }
      ]
    }
  },
  "kitobxonlik": {
    "nom": "Kitobxonlik",
    "tavsif": "Kitobxonlik tadbirlari, kitob muhokamalari va tanlovlar bo'yicha hisobotlar",
    "hisobotlar": {}
  },
  "profilaktik": {
    "nom": "Profilaktik suhbatlar hisoboti",
    "tavsif": "Soha mutaxassislari ishtirokidagi profilaktik suhbatlar bo'yicha hisobotlar",
    "hisobotlar": {
      "2025-2026": [
        {
          "nom": "Profilaktik suhbatlar hisoboti",
          "pdf": "05-profilaktik suhbatlar.pdf",
          "flipbook": "https://online.pubhtml5.com/ketlg/vtqy/",
          "izoh": ""
        }
      ]
    }
  },
  "giyohvandlik": {
    "nom": "Giyohvandlikka qarshi kurashish",
    "tavsif": "Giyohvandlikning oldini olish bo'yicha hisobotlar",
    "hisobotlar": {}
  },
  "jinoyatchilik": {
    "nom": "Jinoyatchilik va huquqbuzarliklarni oldini olish",
    "tavsif": "Huquqiy targ'ibot va profilaktik tadbirlar bo'yicha hisobotlar",
    "hisobotlar": {}
  },
  "psixologik": {
    "nom": "Psixologik tadbirlar hisoboti",
    "tavsif": "Talabalar bilan olib borilgan psixologik treninglar va tadbirlar bo'yicha hisobotlar",
    "hisobotlar": {
      "2025-2026": [
        {
          "nom": "Psixologik tadbirlar hisoboti",
          "pdf": "06-psixologik.pdf",
          "flipbook": "",
          "izoh": ""
        }
      ]
    }
  },
  "ijara": {
    "nom": "Ijara va TTJ hisoboti",
    "tavsif": "Ijara va TTJ bo'yicha olib borilgan ishlar hisobotlari",
    "hisobotlar": {}
  },
  "marifat": {
    "nom": "Ma'rifat ulashib loyihasi hisoboti",
    "tavsif": "Loyiha doirasida amalga oshirilgan ishlar hisobotlari",
    "hisobotlar": {}
  }
};
