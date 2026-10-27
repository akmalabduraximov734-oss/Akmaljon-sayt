/* =====================================================================
   XODIMLAR BAZASI — Rahbariyat, xodimlar, fakultetlar va tyutorlar
   Shu faylni GitHub'da ✏️ bilan tahrirlab, saytdagi 01, 02 va 09-bo'limlarni o'zgartirasiz.
   =====================================================================

   YANGI ODAM QO'SHISH:   tegishli ro'yxatga yangi qator yozing, oldingi qator oxirida vergul bo'lsin.
   ODAMNI O'CHIRISH:      uning qatorini butunlay o'chirib tashlang (vergulga e'tibor bering).
   ODAMNI ALMASHTIRISH:   qatordagi ism, lavozim va telefonni yangisiga o'zgartiring.

   RASM:  rasmni GitHub'dagi "images" papkasiga yuklang (Add file → Upload files),
          so'ng "rasm": "images/fayl-nomi.jpg" deb yozing. Fayl nomi harfma-harf bir xil bo'lsin.
          Rasm bo'sh ("") yoki topilmasa, o'rniga oddiy belgi chiqadi.

   TELEFON: "+998 90 123 45 67" shaklida yozing, tugma avtomatik ishlaydi.

   TYUTORLAR: fakultetning "tyutorlar" ro'yxatidagi odam ham 02-bo'limda (fakultet ichida),
              ham 09-bo'limda (umumiy jadval) avtomatik chiqadi, sanog'i ham o'zi hisoblanadi.

   MUHIM: qo'shtirnoq " ishlating, qatorlar orasida vergul, oxirgi qatorda vergul YO'Q.
   ===================================================================== */

/* ---------- 01 · RAHBARIYAT ---------- */
const RAHBARIYAT = [
  { "lavozim": "Birinchi prorektor", "ism": "Parpiyev Muhammadjon Tolibovich", "telefon": "+998 93 787 80 30", "rasm": "images/parpiyev-muhammadjon.jpg" },
  { "lavozim": "Bo'lim boshlig'i", "ism": "O'rinboyev Muxammadzoxir Iqboljon o'g'li", "telefon": "+998 93 630 97 95", "rasm": "images/orinboyev-muxammadzoxir.jpg" }
];

/* ---------- 01 · XODIMLAR ---------- */
const XODIMLAR = [
  { "ism": "Abduraximov Akmaljon Baxtiyorjon o'g'li", "lavozim": "Bo'lim uslubchisi", "telefon": "+998 97 991 62 72", "rasm": "images/abduraximov-akmaljon.jpg" },
  { "ism": "Mirzayev Muhammadaziz Erkinjon o'g'li", "lavozim": "Bo'lim uslubchisi", "telefon": "+998 97 778 09 01", "rasm": "images/mirzayev-muhammadaziz.jpg" },
  { "ism": "Zaynobiddinov Fayzullo Muhammadkarim o'g'li", "lavozim": "Bo'lim uslubchisi", "telefon": "+998 97 060 27 60", "rasm": "images/zaynobiddinov-fayzullo.jpg" },
  { "ism": "Umarov Bekzodbek Ulug'bek o'g'li", "lavozim": "Bo'lim uslubchisi", "telefon": "+998 88 236 28 27", "rasm": "images/umarov-bekzodbek.jpg" },
  { "ism": "Soliyev Jamshidbek Nozimjon o'g'li", "lavozim": "Bo'lim uslubchisi", "telefon": "+998 90 210 21 13", "rasm": "images/soliyev-jamshidbek.jpg" },
  { "ism": "Shavkatova Muzifa Shodibek qizi", "lavozim": "Kotiba", "telefon": "+998 93 736 64 66", "rasm": "images/shavkatova-muzifa.jpg" },
  { "ism": "Qodirov Bahodir Odiljonovich", "lavozim": "Profilaktika inspektori (podpolkovnik)", "telefon": "+998 91 476 66 34", "rasm": "images/qodirov-bahodir.jpg" },
  { "ism": "Qurbonova Mohidil", "lavozim": "Xotin-qizlar masalalari bo'yicha Profilaktika inspektori (mayor)", "telefon": "+998 99 353 20 43", "rasm": "images/M.Qurbonova.jpg" },
  { "ism": "Ismoilova Mahliyo Sobirjonovna", "lavozim": "Institut psixologi", "telefon": "+998 91 495 67 29", "rasm": "images/M.Ismoilova.jpg" },
  { "ism": "G'aniyeva Gulandon Ibragimovna", "lavozim": "Institut psixologi, xotin-qizlar masalalari yuzasidan rektor maslahatchisi", "telefon": "+998 90 210 70 16", "rasm": "images/ganiyeva-gulandon.jpg" }
];

/* ---------- 02 · FAKULTETLAR (dekan o'rinbosari + tyutorlar) ----------
   "rang": indigo | amber | teal | coral | violet   (fakultet kartasining chizig'i rangi) */
const FAKULTETLAR = [
  {
    "nom": "Ijtimoiy va amaliy fanlar fakulteti",
    "rang": "indigo",
    "dekan": { "ism": "To'rayev Axrorbek Tojdinovich", "telefon": "+998 94 563 70 01", "rasm": "images/torayev-axrorbek.jpg" },
    "telegram": "https://t.me/Ijtimoiy_fanlarsana",
    "tyutorlar": [
      { "ism": "Xasanov Anvarjon Ravshanbek o'g'li", "telefon": "+998 91 490 43 43" },
      { "ism": "Orifjonov Xusanboy Sohibjon o'g'li", "telefon": "+998 90 545 66 90" },
      { "ism": "Abdukarimov Jaxongir Mahammadjon o'g'li", "telefon": "+998 99 533 07 00" },
      { "ism": "Mannabov Muhammadrasul Abdumalikovich", "telefon": "+998 90 259 91 17" },
      { "ism": "Abduraxmonova Madinaxon G'olibjon qizi", "telefon": "+998 91 617 12 93" },
      { "ism": "Saidov Boburjon Sobirjon o'g'li", "telefon": "+998 99 117 17 93" },
      { "ism": "Ergashev Shoxruxbek Fayzullo o'g'li", "telefon": "+998 91 289 68 66" },
      { "ism": "Sotvoldiyev Jamshidbek Olimovich", "telefon": "+998 88 998 77 76" },
      { "ism": "Qodirov Baxromjon Odiljonovich", "telefon": "+998 77 387 55 57" }
    ]
  },
  {
    "nom": "Aniq va tabiiy fanlar fakulteti",
    "rang": "amber",
    "dekan": { "ism": "G'ulomiddinov Azamatjon Sherzodbek o'g'li", "telefon": "+998 88 980 95 01", "rasm": "images/gulomiddinov-azamatjon.jpg" },
    "telegram": "https://t.me/adpitffuz",
    "tyutorlar": [
      { "ism": "Badalova Mavjuda Zokirjonovna", "telefon": "+998 91 489 60 94" },
      { "ism": "Xakimov Yodgorbek Qo'chqorbek o'g'li", "telefon": "+998 88 999 00 54" },
      { "ism": "Yuldasheva Mohinur Shavkatbek qizi", "telefon": "+998 93 443 86 86" },
      { "ism": "Mamadinov Odilbek Mashrabjonovich", "telefon": "+998 88 837 37 01" },
      { "ism": "Raxmonova Ozoda Abduvosiyevna", "telefon": "+998 94 836 33 77" },
      { "ism": "Raximov G'olibjon Yoqubjonovich", "telefon": "+998 97 232 84 82" },
      { "ism": "Nurmatov Murodjon Azimjon o'g'li", "telefon": "+998 95 322 90 90" },
      { "ism": "Ro'ziyev Muhammadrasul Ravshanboy o'g'li", "telefon": "+998 50 850 44 83" },
      { "ism": "Mamadaliyeva Gulassarxon Baxodir qizi", "telefon": "+998 97 503 01 01" },
      { "ism": "Sobirov Azizbek Sadiqjanovich", "telefon": "+998 99 602 42 22" }
    ]
  },
  {
    "nom": "Filologiya fakulteti",
    "rang": "teal",
    "dekan": { "ism": "Ahmadjonov To'lqinbek Akramjon o'g'li", "telefon": "+998 99 900 17 51", "rasm": "images/ahmadjonov-tolqinbek.jpg" },
    "telegram": "https://t.me/adpi_filologiyafakulteti",
    "tyutorlar": [
      { "ism": "Azimxodjayeva Dilfuza Pazildinova", "telefon": "+998 93 252 44 28" },
      { "ism": "Kosimova Xurshidaxon Maxammadsaidovna", "telefon": "+998 91 607 52 97" },
      { "ism": "Karimova Shaxnoza Ibrohimjonovna", "telefon": "+998 91 620 18 10" },
      { "ism": "Xojiqulova Umida Xotamjon qizi", "telefon": "+998 94 437 19 90" },
      { "ism": "Orifjonova Nargizaxon Ma'ripovna", "telefon": "+998 77 067 66 90" },
      { "ism": "Azimov Azizbek Azamjon o'g'li", "telefon": "+998 93 312 45 55" },
      { "ism": "Habibullayev Muhammadsodiq Mahmudjon o'g'li", "telefon": "+998 93 549 47 00" },
      { "ism": "Sobirova Jumagul Erkinovna", "telefon": "+998 97 973 73 93" }
    ]
  },
  {
    "nom": "Pedagogika fakulteti",
    "rang": "coral",
    "dekan": { "ism": "Karimov Ulug'bek Dilmurodjonovich", "telefon": "+998 93 440 42 42", "rasm": "images/karimov-ulugbek.jpg" },
    "telegram": "https://t.me/adpipedagogikafakulteti",
    "tyutorlar": [
      { "ism": "Xoldarova Nigora Kamilovna", "telefon": "+998 88 831 06 66" },
      { "ism": "Bozorboyeva Mohira Shavkatbek qizi", "telefon": "+998 99 027 31 96" },
      { "ism": "Qayumov Abrorbek Ravshanbek o'g'li", "telefon": "+998 90 201 27 27" },
      { "ism": "Mamadaliyeva Shahnoza Muladalimovna", "telefon": "+998 90 621 29 44" },
      { "ism": "Jumaboyeva Gulzoda Nodir qizi", "telefon": "+998 91 168 67 87" },
      { "ism": "Jo'rayeva Dilnoza Asqarjanovna", "telefon": "+998 99 901 12 28" },
      { "ism": "Temirova Sarvinoz Ravshanbekovna", "telefon": "+998 90 548 69 66" },
      { "ism": "Xo'jamova Feruzaxon Anvarjon qizi", "telefon": "+998 90 145 10 51" }
    ]
  },
  {
    "nom": "Maktabgacha ta'lim va maxsus pedagogika fakulteti",
    "rang": "violet",
    "dekan": { "ism": "Ergasheva Muhayyo G'anijonovna", "telefon": "+998 94 444 83 27", "rasm": "images/ergasheva-muhayyo.jpg" },
    "telegram": "https://t.me/adpi_maktabgachatalim",
    "tyutorlar": [
      { "ism": "Bozorboyev Xamidullo Nosirjon o'g'li", "telefon": "+998 88 978 38 08" },
      { "ism": "Mamadaliyev Hayrullo", "telefon": "+998 99 987 37 42" },
      { "ism": "Mamatqodirov Azizbek Avazbek o'g'li", "telefon": "+998 94 434 37 56" },
      { "ism": "Nazarova Dilnoza Adildjanovna", "telefon": "+998 97 610 77 78" },
      { "ism": "Erkinova Marina Zokirjon qizi", "telefon": "+998 93 114 71 13" },
      { "ism": "Imataliyeva Xuriyat Asilbekovna", "telefon": "+998 90 256 03 29" }
    ]
  }
];

/* ---------- 09 · QO'SHIMCHA TYUTORLAR ----------
   Fakultet ro'yxatida bo'lmagan, faqat 09-bo'limdagi umumiy jadvalda ko'rinadigan tyutorlar (ixtiyoriy).
   Namuna: { "ism": "Ism Familiya", "fakultet": "Yo'nalish nomi", "telefon": "+998 90 123 45 67" } */
const QOSHIMCHA_TYUTORLAR = [
];
