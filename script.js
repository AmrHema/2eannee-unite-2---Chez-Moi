// ملف JavaScript: script.js
const vocabulary = [
    // ===============================================================
    // Module 1: مفردات المدرسة والرياضة والأساسيات
    // ===============================================================
    // Noms masculins (Module 1)
    { french: "un collège mixte", arabic: "مدرسة مشتركة", category: "Module 1 - Noms masculins" },
    { french: "un directeur", arabic: "مدير", category: "Module 1 - Noms masculins" },
    { french: "un objet", arabic: "شيء", category: "Module 1 - Noms masculins" },
    { french: "un plan", arabic: "شكل تخطيطي", category: "Module 1 - Noms masculins" },
    { french: "un sac", arabic: "حقيبة", category: "Module 1 - Noms masculins" },
    { french: "un restaurant self", arabic: "مطعم خدمة ذاتية", category: "Module 1 - Noms masculins" },
    { french: "un terrain de sport", arabic: "صالة ألعاب رياضية", category: "Module 1 - Noms masculins" },
    { french: "un sport", arabic: "رياضة", category: "Module 1 - Noms masculins" },
    { french: "un ballon", arabic: "كرة كبيرة", category: "Module 1 - Noms masculins" },
    { french: "un maillot", arabic: "زي رياضي (تي شيرت)", category: "Module 1 - Noms masculins" },
    { french: "un drapeau", arabic: "علم", category: "Module 1 - Noms masculins" },
    { french: "un adolescent (un ado)", arabic: "مراهق", category: "Module 1 - Noms masculins" },
    { french: "un jeune", arabic: "شاب", category: "Module 1 - Noms masculins" },
    { french: "un chanteur", arabic: "مطرب / مغني", category: "Module 1 - Noms masculins" },
    { french: "un mélange", arabic: "خليط", category: "Module 1 - Noms masculins" },
    { french: "le théâtre", arabic: "المسرح", category: "Module 1 - Noms masculins" },
    { french: "le cinéma", arabic: "السينما", category: "Module 1 - Noms masculins" },
    { french: "le poisson", arabic: "السمك", category: "Module 1 - Noms masculins" },
    { french: "un short", arabic: "شورت", category: "Module 1 - Noms masculins" },
    { french: "des goûts", arabic: "ميول", category: "Module 1 - Noms masculins" },
    { french: "des jeux vidéo", arabic: "ألعاب فيديو", category: "Module 1 - Noms masculins" },
    { french: "l'arbre généalogique", arabic: "شجرة العائلة", category: "Module 1 - Noms masculins" },
    { french: "un membre", arabic: "عضو - فرد", category: "Module 1 - Noms masculins" },
    { french: "un homme", arabic: "رجل", category: "Module 1 - Noms masculins" },
    { french: "un étudiant", arabic: "طالب جامعي", category: "Module 1 - Noms masculins" },
    { french: "un joueur", arabic: "لاعب", category: "Module 1 - Noms masculins" },
    { french: "le visage", arabic: "الوجه", category: "Module 1 - Noms masculins" },
    { french: "les yeux", arabic: "العينين", category: "Module 1 - Noms masculins" },
    { french: "les cheveux", arabic: "الشعر", category: "Module 1 - Noms masculins" },

    // Noms féminins (Module 1)
    { french: "une école", arabic: "مدرسة", category: "Module 1 - Noms féminins" },
    { french: "une classe", arabic: "فصل", category: "Module 1 - Noms féminins" },
    { french: "une bibliothèque", arabic: "مكتبة", category: "Module 1 - Noms féminins" },
    { french: "une directrice", arabic: "مديرة", category: "Module 1 - Noms féminins" },
    { french: "une préférence", arabic: "تفضيل", category: "Module 1 - Noms féminins" },
    { french: "une tenue de sport", arabic: "زي رياضي", category: "Module 1 - Noms féminins" },
    { french: "une chanteuse", arabic: "مطربة / مغنية", category: "Module 1 - Noms féminins" },
    { french: "la danse", arabic: "الرقص", category: "Module 1 - Noms féminins" },
    { french: "la télévision", arabic: "التلفزيون", category: "Module 1 - Noms féminins" },
    { french: "la musique", arabic: "الموسيقى", category: "Module 1 - Noms féminins" },
    { french: "la gymnastique", arabic: "التربية البدنية", category: "Module 1 - Noms féminins" },
    { french: "une chanson", arabic: "أغنية", category: "Module 1 - Noms féminins" },
    { french: "la viande", arabic: "اللحمة", category: "Module 1 - Noms féminins" },
    { french: "des frites", arabic: "بطاطس محمرة", category: "Module 1 - Noms féminins" },
    { french: "des chaussures", arabic: "حذاء", category: "Module 1 - Noms féminins" },
    { french: "une famille", arabic: "عائلة / أسرة", category: "Module 1 - Noms féminins" },
    { french: "une femme", arabic: "امرأة / سيدة", category: "Module 1 - Noms féminins" },
    { french: "une photo", arabic: "صورة", category: "Module 1 - Noms féminins" },
    { french: "une photographie", arabic: "صورة", category: "Module 1 - Noms féminins" },
    { french: "une taille", arabic: "طول القامة", category: "Module 1 - Noms féminins" },
    { french: "une description physique", arabic: "وصف جسماني", category: "Module 1 - Noms féminins" },

    // Verbes (Module 1)
    { french: "manger", arabic: "يأكل", category: "Module 1 - Verbes" },
    { french: "identifier", arabic: "يحدد هوية", category: "Module 1 - Verbes" },
    { french: "préparer", arabic: "يعد / يجهز", category: "Module 1 - Verbes" },
    { french: "mettre", arabic: "يضع / يرتدي", category: "Module 1 - Verbes" },
    { french: "décrire", arabic: "يصف", category: "Module 1 - Verbes" },
    { french: "lire", arabic: "يقرأ", category: "Module 1 - Verbes" },
    { french: "aimer", arabic: "يحب", category: "Module 1 - Verbes" },
    { french: "jouer", arabic: "يلعب", category: "Module 1 - Verbes" },
    { french: "se passer", arabic: "يحدث", category: "Module 1 - Verbes" },
    { french: "exprimer", arabic: "يعبر عن", category: "Module 1 - Verbes" },
    { french: "mélanger", arabic: "يخلط", category: "Module 1 - Verbes" },
    { french: "colorier", arabic: "يلوّن", category: "Module 1 - Verbes" },
    { french: "marcher", arabic: "يمشي", category: "Module 1 - Verbes" },
    { french: "danser", arabic: "يرقص", category: "Module 1 - Verbes" },
    { french: "parler", arabic: "يتكلم", category: "Module 1 - Verbes" },
    { french: "étudier", arabic: "يدرس", category: "Module 1 - Verbes" },
    { french: "regarder", arabic: "يشاهد", category: "Module 1 - Verbes" },
    { french: "donner", arabic: "يعطي", category: "Module 1 - Verbes" },

    // Adj., adv., prép. et expressions (Module 1)
    { french: "maintenant", arabic: "الآن", category: "Module 1 - Adj. & Expressions" },
    { french: "super", arabic: "رائع", category: "Module 1 - Adj. & Expressions" },
    { french: "idéal (e)", arabic: "مثالي", category: "Module 1 - Adj. & Expressions" },
    { french: "bienvenue", arabic: "مرحباً", category: "Module 1 - Adj. & Expressions" },
    { french: "très", arabic: "جداً", category: "Module 1 - Adj. & Expressions" },
    { french: "il y a", arabic: "يوجد", category: "Module 1 - Adj. & Expressions" },
    { french: "préféré (e)", arabic: "مفضل", category: "Module 1 - Adj. & Expressions" },
    { french: "mais", arabic: "لكن", category: "Module 1 - Adj. & Expressions" },
    { french: "châtain", arabic: "كستنائي اللون", category: "Module 1 - Adj. & Expressions" },
    { french: "sympa", arabic: "لطيف / رفيق", category: "Module 1 - Adj. & Expressions" },
    { french: "beau / laid", arabic: "جميل / قبيح", category: "Module 1 - Adj. & Expressions" },
    { french: "belle", arabic: "جميلة", category: "Module 1 - Adj. & Expressions" },
    { french: "riche / pauvre", arabic: "غني / فقير", category: "Module 1 - Adj. & Expressions" },
    
    // ===============================================================
    // Module Mes vêtements: الملابس والإكسسوارات
    // ===============================================================
    // Noms masculins (Mes vêtements)
    { french: "un vêtement", arabic: "ملبس", category: "Module Mes vêtements - Noms masculins" },
    { french: "un look", arabic: "مظهر - هيئة", category: "Module Mes vêtements - Noms masculins" },
    { french: "un uniforme", arabic: "زي موحد", category: "Module Mes vêtements - Noms masculins" },
    { french: "un accessoire", arabic: "إكسسوار", category: "Module Mes vêtements - Noms masculins" },
    { french: "un modèle", arabic: "نموذج / موديل", category: "Module Mes vêtements - Noms masculins" },
    { french: "un magasin", arabic: "محل", category: "Module Mes vêtements - Noms masculins" },
    { french: "un vendeur", arabic: "بائع", category: "Module Mes vêtements - Noms masculins" },
    { french: "un animal", arabic: "حيوان", category: "Module Mes vêtements - Noms masculins" },
    { french: "un homme", arabic: "رجل", category: "Module Mes vêtements - Noms masculins" },
    { french: "un ado", arabic: "مراهق", category: "Module Mes vêtements - Noms masculins" },
    { french: "un jeune", arabic: "شاب", category: "Module Mes vêtements - Noms masculins" },
    { french: "un travail", arabic: "عمل", category: "Module Mes vêtements - Noms masculins" },
    { french: "un site", arabic: "موقع", category: "Module Mes vêtements - Noms masculins" },
    { french: "un client", arabic: "زبون", category: "Module Mes vêtements - Noms masculins" },
    { french: "un enfant", arabic: "طفل", category: "Module Mes vêtements - Noms masculins" },
    { french: "un club", arabic: "نادي", category: "Module Mes vêtements - Noms masculins" },
    { french: "des motifs (vêtements)", arabic: "زخارف (رسوم على الملابس)", category: "Module Mes vêtements - Noms masculins" },
    { french: "le prix", arabic: "السعر", category: "Module Mes vêtements - Noms masculins" },

    // Noms féminins (Mes vêtements)
    { french: "une tenue", arabic: "زي - ملبس", category: "Module Mes vêtements - Noms féminins" },
    { french: "une taille", arabic: "مقاس الملابس", category: "Module Mes vêtements - Noms féminins" },
    { french: "une valise", arabic: "حقيبة سفر", category: "Module Mes vêtements - Noms féminins" },
    { french: "la pointure", arabic: "مقاس الحذاء", category: "Module Mes vêtements - Noms féminins" },
    { french: "une femme", arabic: "إمرأة", category: "Module Mes vêtements - Noms féminins" },
    { french: "une fête", arabic: "حفلة", category: "Module Mes vêtements - Noms féminins" },
    { french: "une occasion", arabic: "مناسبة", category: "Module Mes vêtements - Noms féminins" },
    { french: "une chambre", arabic: "غرفة", category: "Module Mes vêtements - Noms féminins" },
    { french: "une différence", arabic: "إختلاف", category: "Module Mes vêtements - Noms féminins" },
    { french: "une chanson", arabic: "أغنية", category: "Module Mes vêtements - Noms féminins" },
    { french: "une enfant", arabic: "طفلة", category: "Module Mes vêtements - Noms féminins" },
    { french: "des chaussures", arabic: "حذاء", category: "Module Mes vêtements - Noms féminins" },
    { french: "des baskets", arabic: "حذاء رياضي", category: "Module Mes vêtements - Noms féminins" },
    { french: "des vacances", arabic: "إجازة", category: "Module Mes vêtements - Noms féminins" },
    
    // Les vêtements (الملابس)
    { french: "un pantalon", arabic: "بنطلون", category: "Module Mes vêtements - Les vêtements" },
    { french: "un pull", arabic: "بلوفر", category: "Module Mes vêtements - Les vêtements" },
    { french: "un short", arabic: "شورت", category: "Module Mes vêtements - Les vêtements" },
    { french: "un anorak", arabic: "سترة بمظلة بغطاء للرأس", category: "Module Mes vêtements - Les vêtements" },
    { french: "un tee-shirt", arabic: "تي شيرت", category: "Module Mes vêtements - Les vêtements" },
    { french: "un jean", arabic: "بنطلون جينز", category: "Module Mes vêtements - Les vêtements" },
    { french: "un costume", arabic: "بذلة", category: "Module Mes vêtements - Les vêtements" },
    { french: "un survêtement", arabic: "بدلة رياضية (تريكو)", category: "Module Mes vêtements - Les vêtements" },
    { french: "un manteau", arabic: "معطف / بلطو", category: "Module Mes vêtements - Les vêtements" },
    { french: "un blouson", arabic: "جاكيت قصير", category: "Module Mes vêtements - Les vêtements" },
    { french: "un chemisier", arabic: "بلوزة (قميص للسيدات)", category: "Module Mes vêtements - Les vêtements" },
    { french: "un caleçon", arabic: "سروال داخلي / كلسون", category: "Module Mes vêtements - Les vêtements" },
    { french: "une robe", arabic: "فستان", category: "Module Mes vêtements - Les vêtements" },
    { french: "une jupe", arabic: "جيبة", category: "Module Mes vêtements - Les vêtements" },
    { french: "une chemise", arabic: "قميص", category: "Module Mes vêtements - Les vêtements" },
    { french: "une veste", arabic: "جاكيت", category: "Module Mes vêtements - Les vêtements" },
    { french: "des chaussettes (f)", arabic: "جورب", category: "Module Mes vêtements - Les vêtements" },

    // Des accessoires (إكسسوارات)
    { french: "un chapeau", arabic: "قبعة", category: "Module Mes vêtements - Des accessoires" },
    { french: "un bonnet", arabic: "طاقية", category: "Module Mes vêtements - Des accessories" },
    { french: "un sac", arabic: "حقيبة", category: "Module Mes vêtements - Des accessories" },
    { french: "un collier", arabic: "عقد", category: "Module Mes vêtements - Des accessories" },
    { french: "une casquette", arabic: "كاسكيت", category: "Module Mes vêtements - Des accessories" },
    { french: "une cravate", arabic: "كرافتة / رباط عنق", category: "Module Mes vêtements - Des accessories" },
    { french: "une écharpe", arabic: "إيشارب (لفاف عنق)", category: "Module Mes vêtements - Des accessories" },
    { french: "des lunettes de soleil", arabic: "نظارة شمس", category: "Module Mes vêtements - Des accessories" },

    // Verbes (Mes vêtements)
    { french: "mettre", arabic: "يرتدي", category: "Module Mes vêtements - Verbes" },
    { french: "porter", arabic: "يرتدي", category: "Module Mes vêtements - Verbes" },
    { french: "s'habiller", arabic: "يرتدي", category: "Module Mes vêtements - Verbes" },
    { french: "acheter", arabic: "يشتري", category: "Module Mes vêtements - Verbes" },
    { french: "montrer", arabic: "يشير إلى", category: "Module Mes vêtements - Verbes" },
    { french: "connaître", arabic: "يعرف", category: "Module Mes vêtements - Verbes" },
    { french: "coûter", arabic: "يكلف", category: "Module Mes vêtements - Verbes" },
    { french: "lire", arabic: "يقرأ", category: "Module Mes vêtements - Verbes" },
    { french: "prendre", arabic: "يأخذ", category: "Module Mes vêtements - Verbes" },
    { french: "faire", arabic: "يفعل / يمارس", category: "Module Mes vêtements - Verbes" },
    { french: "aller", arabic: "يذهب", category: "Module Mes vêtements - Verbes" },
    { french: "sortir", arabic: "يخرج", category: "Module Mes vêtements - Verbes" },
    { french: "vendre", arabic: "يبيع", category: "Module Mes vêtements - Verbes" },
    { french: "vouloir", arabic: "يريد", category: "Module Mes vêtements - Verbes" },
    { french: "pouvoir", arabic: "يستطيع", category: "Module Mes vêtements - Verbes" },
    { french: "s'informer sur", arabic: "يستعلم عن", category: "Module Mes vêtements - Verbes" },

    // Adj., adv., prép. et expressions (Mes vêtements)
    { french: "nouveau / nouvel", arabic: "جديد", category: "Module Mes vêtements - Adj. & Expressions" },
    { french: "nouvelle", arabic: "جديدة", category: "Module Mes vêtements - Adj. & Expressions" },
    { french: "pour", arabic: "من أجل / لكي", category: "Module Mes vêtements - Adj. & Expressions" },
    { french: "à la mode", arabic: "على الموضة", category: "Module Mes vêtements - Adj. & Expressions" },
    { french: "à fleurs", arabic: "مشجر", category: "Module Mes vêtements - Adj. & Expressions" },
    { french: "à paillettes", arabic: "مزين بالترتر", category: "Module Mes vêtements - Adj. & Expressions" },
    { french: "en voyage", arabic: "في رحلة سفر", category: "Module Mes vêtements - Adj. & Expressions" },
    { french: "précis (e)", arabic: "محدد", category: "Module Mes vêtements - Adj. & Expressions" },
    { french: "seulement", arabic: "فقط", category: "Module Mes vêtements - Adj. & Expressions" },
    { french: "intéressant (e)", arabic: "شيّق", category: "Module Mes vêtements - Adj. & Expressions" },
    { french: "très", arabic: "جداً", category: "Module Mes vêtements - Adj. & Expressions" },
    { french: "faire du sport", arabic: "يمارس رياضة", category: "Module Mes vêtements - Adj. & Expressions" },
    { french: "faire des achats", arabic: "يعمل مشتريات", category: "Module Mes vêtements - Adj. & Expressions" },
    { french: "faire du shopping", arabic: "يتسوق", category: "Module Mes vêtements - Adj. & Expressions" },
    { french: "partir en vacances", arabic: "يرحل في إجازة", category: "Module Mes vêtements - Adj. & Expressions" },
    { french: "il fait beau", arabic: "الجو جميل", category: "Module Mes vêtements - Adj. & Expressions" },
    { french: "il fait chaud", arabic: "الجو حار", category: "Module Mes vêtements - Adj. & Expressions" },
    { french: "il fait froid", arabic: "الجو بارد", category: "Module Mes vêtements - Adj. & Expressions" },

    // ===============================================================
    // Module 2: Chez moi (المنزل وأجزاؤه)
    // ===============================================================
    // Noms masculins (Module 2)
    { french: "un immeuble", arabic: "عمارة", category: "Module 2 - Noms masculins" },
    { french: "un appartement", arabic: "شقة", category: "Module 2 - Noms masculins" },
    { french: "un étage", arabic: "طابق", category: "Module 2 - Noms masculins" },
    { french: "un meuble", arabic: "أثاث", category: "Module 2 - Noms masculins" },
    { french: "un balcon", arabic: "بلكونة (شرفة)", category: "Module 2 - Noms masculins" },
    { french: "un espace", arabic: "مساحة", category: "Module 2 - Noms masculins" },
    { french: "un piano", arabic: "بيانو (آلة موسيقية)", category: "Module 2 - Noms masculins" },
    { french: "un objet", arabic: "شيء", category: "Module 2 - Noms masculins" },
    { french: "les escaliers", arabic: "سلالم", category: "Module 2 - Noms masculins" },
    { french: "un poster", arabic: "بوستر (ملصق)", category: "Module 2 - Noms masculins" },
    { french: "un placard", arabic: "دولاب", category: "Module 2 - Noms masculins" },
    { french: "un ordinateur", arabic: "كمبيوتر", category: "Module 2 - Noms masculins" },
    { french: "un voisin", arabic: "جار", category: "Module 2 - Noms masculins" },
    { french: "un repas", arabic: "وجبة", category: "Module 2 - Noms masculins" },
    { french: "le week-end", arabic: "عطلة نهاية الأسبوع", category: "Module 2 - Noms masculins" },
    { french: "un tableau", arabic: "لوحة", category: "Module 2 - Noms masculins" },
    { french: "un bureau", arabic: "مكتب", category: "Module 2 - Noms masculins" },
    { french: "un parc", arabic: "منتزه عام", category: "Module 2 - Noms masculins" },

    // Noms féminins (Module 2)
    { french: "une maison", arabic: "منزل", category: "Module 2 - Noms féminins" },
    { french: "une pièce", arabic: "حجرة", category: "Module 2 - Noms féminins" },
    { french: "une porte", arabic: "باب", category: "Module 2 - Noms féminins" },
    { french: "une fenêtre", arabic: "شباك", category: "Module 2 - Noms féminins" },
    { french: "une décoration", arabic: "ديكور", category: "Module 2 - Noms féminins" },
    { french: "une voisine", arabic: "جارة", category: "Module 2 - Noms féminins" },
    { french: "une terrasse", arabic: "تراس / بلكونة كبيرة", category: "Module 2 - Noms féminins" },
    { french: "une chaise-longue", arabic: "كرسي طويل للاسترخاء", category: "Module 2 - Noms féminins" },
    { french: "une ville", arabic: "مدينة", category: "Module 2 - Noms féminins" },
    { french: "une bibliothèque", arabic: "مكتبة", category: "Module 2 - Noms féminins" },
    
    // Les parties de la maison (أجزاء المنزل)
    { french: "un salon", arabic: "صالون", category: "Module 2 - Les parties de la maison" },
    { french: "un couloir", arabic: "ممر", category: "Module 2 - Les parties de la maison" },
    { french: "une chambre", arabic: "غرفة نوم", category: "Module 2 - Les parties de la maison" },
    { french: "une cuisine", arabic: "مطبخ", category: "Module 2 - Les parties de la maison" },
    { french: "un jardin", arabic: "حديقة", category: "Module 2 - Les parties de la maison" },
    { french: "une salle à manger", arabic: "غرفة طعام", category: "Module 2 - Les parties de la maison" },
    { french: "une entrée", arabic: "مدخل", category: "Module 2 - Les parties de la maison" },
    { french: "une salle de bains", arabic: "حمام", category: "Module 2 - Les parties de la maison" },
    { french: "les toilettes", arabic: "الحمام (دورات المياه)", category: "Module 2 - Les parties de la maison" },
    { french: "un garage", arabic: "جراج", category: "Module 2 - Les parties de la maison" },

    // Verbes (Module 2)
    { french: "prendre", arabic: "يتناول", category: "Module 2 - Verbes" },
    { french: "préparer", arabic: "يعد / يجهز", category: "Module 2 - Verbes" },
    { french: "dormir", arabic: "ينام", category: "Module 2 - Verbes" },
    { french: "voir", arabic: "يرى", category: "Module 2 - Verbes" },
    { french: "travailler", arabic: "يعمل", category: "Module 2 - Verbes" },
    { french: "savoir", arabic: "يعرف", category: "Module 2 - Verbes" },
    { french: "passer", arabic: "يقضي", category: "Module 2 - Verbes" },
    { french: "inviter", arabic: "يدعو", category: "Module 2 - Verbes" },
    { french: "situer", arabic: "يحدد موقع", category: "Module 2 - Verbes" },
    { french: "arriver", arabic: "يصل", category: "Module 2 - Verbes" },
    { french: "téléphoner", arabic: "يتصل تلفونياً", category: "Module 2 - Verbes" },
    { french: "regarder", arabic: "يشاهد", category: "Module 2 - Verbes" },
    { french: "étudier", arabic: "يدرس", category: "Module 2 - Verbes" },
    { french: "jouer", arabic: "يلعب", category: "Module 2 - Verbes" },
    { french: "décorer", arabic: "يزين", category: "Module 2 - Verbes" },
    { french: "se doucher", arabic: "يأخذ دش", category: "Module 2 - Verbes" },
    { french: "se coucher", arabic: "يرقد", category: "Module 2 - Verbes" },
    { french: "se déplacer", arabic: "يتنقل", category: "Module 2 - Verbes" },
    { french: "partager", arabic: "يتقاسم", category: "Module 2 - Verbes" },

    // Adj., adv., prép. et expressions (Module 2)
    { french: "petit", arabic: "صغير", category: "Module 2 - Adj. & Expressions" },
    { french: "grand", arabic: "كبير", category: "Module 2 - Adj. & Expressions" },
    { french: "seul", arabic: "بمفرده", category: "Module 2 - Adj. & Expressions" },
    { french: "nouveau / nouvel", arabic: "جديد", category: "Module 2 - Adj. & Expressions" },
    { french: "nouvelle", arabic: "جديدة", category: "Module 2 - Adj. & Expressions" },
    { french: "propre", arabic: "نظيف", category: "Module 2 - Adj. & Expressions" },
    { french: "confortable", arabic: "مريح", category: "Module 2 - Adj. & Expressions" },
    { french: "idéal", arabic: "مثالي / نموذجي", category: "Module 2 - Adj. & Expressions" },
    { french: "aussi", arabic: "أيضاً", category: "Module 2 - Adj. & Expressions" },
    { french: "voici", arabic: "ها هو / ها هي", category: "Module 2 - Adj. & Expressions" },
    { french: "dehors", arabic: "بالخارج", category: "Module 2 - Adj. & Expressions" },
    { french: "désolé", arabic: "آسف", category: "Module 2 - Adj. & Expressions" },
    { french: "super", arabic: "رائع", category: "Module 2 - Adj. & Expressions" },
    { french: "chez moi", arabic: "عندي (في منزلي)", category: "Module 2 - Adj. & Expressions" },
    { french: "chez lui", arabic: "عنده (في منزله)", category: "Module 2 - Adj. & Expressions" },
    { french: "autre", arabic: "آخر", category: "Module 2 - Adj. & Expressions" },
    { french: "même", arabic: "حتى / نفس", category: "Module 2 - Adj. & Expressions" },
    { french: "être assis", arabic: "جالس", category: "Module 2 - Adj. & Expressions" },
    { french: "être composé de", arabic: "مكون من", category: "Module 2 - Adj. & Expressions" },
    { french: "c'est l'heure", arabic: "حان الوقت", category: "Module 2 - Adj. & Expressions" },
    { french: "au nord de", arabic: "في شمال", category: "Module 2 - Adj. & Expressions" },
    { french: "poser une question", arabic: "يوجه سؤال", category: "Module 2 - Adj. & Expressions" },
    { french: "on regarde la TV", arabic: "نشاهد التلفزيون", category: "Module 2 - Adj. & Expressions" },
    { french: "on dort", arabic: "ننام", category: "Module 2 - Adj. & Expressions" },
    { french: "on prend les repas", arabic: "نتناول الوجبات", category: "Module 2 - Adj. & Expressions" },
    { french: "on prépare les repas", arabic: "نعد الوجبات", category: "Module 2 - Adj. & Expressions" },
    { french: "on se déplace d'une pièce à une autre", arabic: "نتنقل من غرفة إلى أخرى", category: "Module 2 - Adj. & Expressions" },
    { french: "faire sa toilette", arabic: "الاعتناء بالنظافة الشخصية", category: "Module 2 - Adj. & Expressions" },
    { french: "aller aux toilettes", arabic: "الذهاب إلى الحمام", category: "Module 2 - Adj. & Expressions" },

    // ===============================================================
    // Module 3: Je prends le train pour Alexandrie (السفر والمواصلات)
    // ===============================================================
    // Noms masculins (Module 3)
    { french: "un moyen de transport", arabic: "وسيلة مواصلات", category: "Module 3 - Noms masculins" },
    { french: "un lieu", arabic: "مكان", category: "Module 3 - Noms masculins" },
    { french: "un touriste", arabic: "سائح", category: "Module 3 - Noms masculins" },
    { french: "un voyageur", arabic: "مسافر", category: "Module 3 - Noms masculins" },
    { french: "un employé", arabic: "موظف", category: "Module 3 - Noms masculins" },
    { french: "un océan", arabic: "محيط", category: "Module 3 - Noms masculins" },
    { french: "un fleuve", arabic: "نهر", category: "Module 3 - Noms masculins" },
    { french: "le Nil", arabic: "نهر النيل", category: "Module 3 - Noms masculins" },
    { french: "un voyage", arabic: "رحلة", category: "Module 3 - Noms masculins" },
    { french: "un aéroport", arabic: "مطار", category: "Module 3 - Noms masculins" },
    { french: "un pays", arabic: "دولة", category: "Module 3 - Noms masculins" },
    { french: "un monument", arabic: "أثر سياحي", category: "Module 3 - Noms masculins" },
    { french: "le matin", arabic: "الصباح", category: "Module 3 - Noms masculins" },
    { french: "le soir", arabic: "المساء", category: "Module 3 - Noms masculins" },
    { french: "le cheval", arabic: "حصان", category: "Module 3 - Noms masculins" },
    { french: "un slogan", arabic: "شعار", category: "Module 3 - Noms masculins" },
    { french: "un site", arabic: "موقع", category: "Module 3 - Noms masculins" },
    { french: "un déplacement", arabic: "موقع / مكان", category: "Module 3 - Noms masculins" },
    { french: "un billet", arabic: "تذكرة", category: "Module 3 - Noms masculins" },
    { french: "un ticket", arabic: "تذكرة", category: "Module 3 - Noms masculins" },
    { french: "un conseil", arabic: "نصيحة", category: "Module 3 - Noms masculins" },
    { french: "le sud", arabic: "الجنوب", category: "Module 3 - Noms masculins" },
    { french: "le nord", arabic: "الشمال", category: "Module 3 - Noms masculins" },
    { french: "l'est", arabic: "الشرق", category: "Module 3 - Noms masculins" },
    { french: "l'ouest", arabic: "الغرب", category: "Module 3 - Noms masculins" },
    { french: "un bureau du tourisme", arabic: "مكتب سياحة", category: "Module 3 - Noms masculins" },
    { french: "le départ", arabic: "الرحيل", category: "Module 3 - Noms masculins" },
    { french: "le centre", arabic: "الوسط / المنتصف", category: "Module 3 - Noms masculins" },
    { french: "le maximum", arabic: "الحد الأقصى", category: "Module 3 - Noms masculins" },

    // Noms féminins (Module 3)
    { french: "une carte", arabic: "خريطة", category: "Module 3 - Noms féminins" },
    { french: "une ville", arabic: "مدينة", category: "Module 3 - Noms féminins" },
    { french: "la mer", arabic: "البحر", category: "Module 3 - Noms féminins" },
    { french: "la mer Rouge", arabic: "البحر الأحمر", category: "Module 3 - Noms féminins" },
    { french: "la mer Méditerranée", arabic: "البحر المتوسط", category: "Module 3 - Noms féminins" },
    { french: "une capitale", arabic: "عاصمة", category: "Module 3 - Noms féminins" },
    { french: "la gare", arabic: "محطة القطار", category: "Module 3 - Noms féminins" },
    { french: "la gare routière", arabic: "موقف الحافلات الرئيسي", category: "Module 3 - Noms féminins" },
    { french: "une heure", arabic: "ساعة زمنية", category: "Module 3 - Noms féminins" },
    { french: "une arrivée", arabic: "وصول", category: "Module 3 - Noms féminins" },
    { french: "une journée", arabic: "فترة نهار", category: "Module 3 - Noms féminins" },
    { french: "une durée", arabic: "مدة", category: "Module 3 - Noms féminins" },
    { french: "des informations", arabic: "معلومات", category: "Module 3 - Noms féminins" },
    { french: "une rose des vents", arabic: "بوصلة الاتجاهات", category: "Module 3 - Noms féminins" },

    // Verbes (Module 3)
    { french: "prendre", arabic: "يأخذ", category: "Module 3 - Verbes" },
    { french: "aller", arabic: "يذهب", category: "Module 3 - Verbes" },
    { french: "localiser", arabic: "يحدد موقع", category: "Module 3 - Verbes" },
    { french: "situer", arabic: "يحدد موقع", category: "Module 3 - Verbes" },
    { french: "se trouver", arabic: "يقع", category: "Module 3 - Verbes" },
    { french: "se déplacer", arabic: "يتنقل", category: "Module 3 - Verbes" },
    { french: "partir", arabic: "يرحل", category: "Module 3 - Verbes" },
    { french: "visiter", arabic: "يزور", category: "Module 3 - Verbes" },
    { french: "conseiller de", arabic: "ينصح بـ / يوجّه", category: "Module 3 - Verbes" },
    { french: "expliquer", arabic: "يشرح", category: "Module 3 - Verbes" },
    { french: "utiliser", arabic: "يستخدم", category: "Module 3 - Verbes" },
    { french: "marcher", arabic: "يمشي", category: "Module 3 - Verbes" },
    { french: "traverser", arabic: "يعبر", category: "Module 3 - Verbes" },
    { french: "voyager", arabic: "يسافر", category: "Module 3 - Verbes" },
    { french: "arriver", arabic: "يصل", category: "Module 3 - Verbes" },
    { french: "donner sur", arabic: "يطل على", category: "Module 3 - Verbes" },
    { french: "découvrir", arabic: "يستكشف", category: "Module 3 - Verbes" },
    { french: "voir", arabic: "يرى", category: "Module 3 - Verbes" },
    { french: "connaître", arabic: "يعرف", category: "Module 3 - Verbes" },
    { french: "prévoir", arabic: "يخطط مسبقاً / يتوقع", category: "Module 3 - Verbes" },

    // Adj., adv., prép. et expressions (Module 3)
    { french: "rapide", arabic: "سريع", category: "Module 3 - Adj. & Expressions" },
    { french: "vite", arabic: "بسرعة", category: "Module 3 - Adj. & Expressions" },
    { french: "pratique", arabic: "عملي", category: "Module 3 - Adj. & Expressions" },
    { french: "confortable", arabic: "مريح", category: "Module 3 - Adj. & Expressions" },
    { french: "belle", arabic: "جميلة", category: "Module 3 - Adj. & Expressions" },
    { french: "bienvenue", arabic: "مرحباً", category: "Module 3 - Adj. & Expressions" },
    { french: "avant", arabic: "قبل", category: "Module 3 - Adj. & Expressions" },
    { french: "environ", arabic: "حوالي / تقريباً", category: "Module 3 - Adj. & Expressions" },
    { french: "ou", arabic: "أو (تخيير)", category: "Module 3 - Adj. & Expressions" },
    { french: "depuis", arabic: "منذ / من", category: "Module 3 - Adj. & Expressions" },
    { french: "il faut", arabic: "يلزم", category: "Module 3 - Adj. & Expressions" },
    { french: "discuter le prix", arabic: "يفاوض بخصوص السعر", category: "Module 3 - Adj. & Expressions" },
    { french: "aller-retour", arabic: "ذهاب وعودة", category: "Module 3 - Adj. & Expressions" },
    { french: "aller-simple", arabic: "ذهاب فقط", category: "Module 3 - Adj. & Expressions" },
    { french: "ça coûte", arabic: "هذا يكلف", category: "Module 3 - Adj. & Expressions" },
    { french: "au bord de", arabic: "على شاطئ / على حافة", category: "Module 3 - Adj. & Expressions" },
    { french: "bon voyage !", arabic: "رحلة سعيدة", category: "Module 3 - Adj. & Expressions" },
    { french: "bonne arrivée !", arabic: "وصول سعيد (بسلامة الوصول)", category: "Module 3 - Adj. & Expressions" },
];

const cardsContainer = document.getElementById('cards-container');
let utterance = null; 

/**
 * دالة لتجميع الكلمات حسب الفئة (الجدول)
 */
function groupByCategory(arr) {
    return arr.reduce((acc, item) => {
        const category = item.category;
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(item);
        return acc;
    }, {});
}

/**
 * دالة لتشغيل النطق الصوتي للكلمة الفرنسية باستخدام Web Speech API
 */
function speakFrenchWord(textToSpeak, cardElement) {
    if (!('speechSynthesis' in window)) {
        alert("عذراً، متصفحك لا يدعم ميزة النطق الصوتي (Speech Synthesis). يرجى تحديث المتصفح أو استخدام متصفح يدعم هذه الميزة (مثل Chrome أو Firefox).");
        return;
    }
    
    // تهيئة Utterance مرة واحدة
    if (!utterance) {
        utterance = new SpeechSynthesisUtterance();
        utterance.lang = 'fr-FR'; // تحديد اللغة الفرنسية
        utterance.rate = 1; // سرعة النطق
    }

    // إيقاف أي نطق سابق قبل بدء نطق جديد
    window.speechSynthesis.cancel();
    
    // إعداد النص
    utterance.text = textToSpeak;
    
    // تطبيق تنسيق "جاري النطق"
    cardElement.classList.add('speaking');
    utterance.onend = () => {
        cardElement.classList.remove('speaking');
    };
    utterance.onerror = (event) => {
        console.error('SpeechSynthesisUtterance.onerror', event);
        cardElement.classList.remove('speaking');
    };
    
    // تشغيل النطق
    window.speechSynthesis.speak(utterance);
}

/**
 * دالة لإنشاء بطاقة الكلمة
 */
function createCard(item) {
    const card = document.createElement('div');
    card.classList.add('word-card');
    card.setAttribute('data-category', item.category); 
    
    card.innerHTML = `
        <div class="french-word">${item.french}</div>
        <div class="arabic-translation">${item.arabic}</div>
        <div class="pronounce-icon">🔊</div>
    `;
    
    card.addEventListener('click', () => {
        speakFrenchWord(item.french, card);
    });
    return card;
}

/**
 * دالة لإنشاء البطاقات مجمعة حسب الفئات مع الحفاظ على الترتيب المطلوب
 */
function renderCards() {
    const groupedWords = groupByCategory(vocabulary);
    cardsContainer.innerHTML = ''; 

    // ترتيب الفئات بنفس تسلسل الجداول المرفقة (من module 1 إلى module 3) لضمان دقة التنظيم
    const categoryOrder = [
        "Module 1 - Noms masculins", "Module 1 - Noms féminins", "Module 1 - Verbes", "Module 1 - Adj. & Expressions",
        "Module Mes vêtements - Noms masculins", "Module Mes vêtements - Noms féminins", "Module Mes vêtements - Les vêtements", "Module Mes vêtements - Des accessoires", "Module Mes vêtements - Verbes", "Module Mes vêtements - Adj. & Expressions",
        "Module 2 - Noms masculins", "Module 2 - Noms féminins", "Module 2 - Les parties de la maison", "Module 2 - Verbes", "Module 2 - Adj. & Expressions",
        "Module 3 - Noms masculins", "Module 3 - Noms féminins", "Module 3 - Verbes", "Module 3 - Adj. & Expressions"
    ]; 
    
    // التأكد من أننا نعالج الفئات الموجودة فقط وبالترتيب المحدد
    const categoriesToRender = categoryOrder.filter(cat => groupedWords[cat]);
    
    categoriesToRender.forEach(category => {
        const words = groupedWords[category];

        // 1. إنشاء عنوان الفئة
        const title = document.createElement('h2');
        title.classList.add('category-title');
        
        // تقسيم العنوان ليظهر بشكل أجمل (مثلاً: "Module 3" و "Noms masculins")
        const parts = category.split(' - ');
        const mainTitle = parts[0];
        const subTitle = parts.length > 1 ? parts.slice(1).join(' - ') : '';
        
        title.innerHTML = `${mainTitle} <span>(${subTitle})</span>`;
        cardsContainer.appendChild(title);

        // 2. إنشاء حاوية مجموعة البطاقات (Grid)
        const groupContainer = document.createElement('div');
        groupContainer.classList.add('category-group');
        
        // 3. إنشاء البطاقات وإضافتها للمجموعة
        words.forEach(item => {
            const card = createCard(item);
            groupContainer.appendChild(card);
        });
        
        // 4. إضافة المجموعة إلى الحاوية الرئيسية
        cardsContainer.appendChild(groupContainer);
    });
}

// تشغيل دالة إنشاء البطاقات عند تحميل الصفحة
window.onload = renderCards;
