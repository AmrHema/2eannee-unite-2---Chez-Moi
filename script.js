// 1. تعريف مصفوفة الكلمات (تم تحديثها بالكلمات من صورك المرفقة)
const vocabulary = [
    // أسماء مذكرة (Noms masculins) - Module 2: Chez moi
    { french: "un immeuble", arabic: "عمارة", category: "أسماء مذكرة" },
    { french: "un appartement", arabic: "شقة", category: "أسماء مذكرة" },
    { french: "un étage", arabic: "طابق", category: "أسماء مذكرة" },
    { french: "un meuble", arabic: "أثاث", category: "أسماء مذكرة" },
    { french: "un balcon", arabic: "بلكونة (شرفة)", category: "أسماء مذكرة" },
    { french: "un espace", arabic: "مساحة", category: "أسماء مذكرة" },
    { french: "un piano", arabic: "بيانو (آلة موسيقية)", category: "أسماء مذكرة" },
    { french: "un objet", arabic: "شيء", category: "أسماء مذكرة" },
    { french: "les escaliers", arabic: "سلالم", category: "أسماء مذكرة" },
    { french: "un poster", arabic: "بوستر (ملصق)", category: "أسماء مذكرة" },
    { french: "un placard", arabic: "دولاب", category: "أسماء مذكرة" },
    { french: "un ordinateur", arabic: "كمبيوتر", category: "أسماء مذكرة" },
    { french: "un voisin", arabic: "جار", category: "أسماء مذكرة" },
    { french: "un repas", arabic: "وجبة", category: "أسماء مذكرة" },
    { french: "le week-end", arabic: "عطلة نهاية الأسبوع", category: "أسماء مذكرة" },
    { french: "un tableau", arabic: "لوحة", category: "أسماء مذكرة" },
    { french: "un bureau", arabic: "مكتب", category: "أسماء مذكرة" },
    { french: "un parc", arabic: "منتزه عام", category: "أسماء مذكرة" },

    // أسماء مؤنثة (Noms féminins)
    { french: "une maison", arabic: "منزل", category: "أسماء مؤنثة" },
    { french: "une pièce", arabic: "حجرة", category: "أسماء مؤنثة" },
    { french: "une porte", arabic: "باب", category: "أسماء مؤنثة" },
    { french: "une fenêtre", arabic: "شباك", category: "أسماء مؤنثة" },
    { french: "une décoration", arabic: "ديكور", category: "أسماء مؤنثة" },
    { french: "une voisine", arabic: "جارة", category: "أسماء مؤنثة" },
    { french: "une terrasse", arabic: "تراس / بلكونة كبيرة", category: "أسماء مؤنثة" },
    { french: "une chaise-longue", arabic: "كرسي طويل للاسترخاء", category: "أسماء مؤنثة" },
    { french: "une ville", arabic: "مدينة", category: "أسماء مؤنثة" },
    { french: "une bibliothèque", arabic: "مكتبة", category: "أسماء مؤنثة" },

    // أجزاء المنزل (Les parties de la maison)
    { french: "un salon", arabic: "صالون", category: "أجزاء المنزل" },
    { french: "un couloir", arabic: "ممر", category: "أجزاء المنزل" },
    { french: "une chambre", arabic: "غرفة نوم", category: "أجزاء المنزل" },
    { french: "une cuisine", arabic: "مطبخ", category: "أجزاء المنزل" },
    { french: "un jardin", arabic: "حديقة", category: "أجزاء المنزل" },
    { french: "une salle à manger", arabic: "غرفة طعام", category: "أجزاء المنزل" },
    { french: "une entrée", arabic: "مدخل", category: "أجزاء المنزل" },
    { french: "une salle de bains", arabic: "حمام", category: "أجزاء المنزل" },
    { french: "les toilettes", arabic: "الحمام (دورات المياه)", category: "أجزاء المنزل" },
    { french: "un garage", arabic: "جراج", category: "أجزاء المنزل" },

    // أفعال (Verbes)
    { french: "prendre", arabic: "يتناول", category: "أفعال" },
    { french: "préparer", arabic: "يعد / يجهز", category: "أفعال" },
    { french: "dormir", arabic: "ينام", category: "أفعال" },
    { french: "voir", arabic: "يرى", category: "أفعال" },
    { french: "travailler", arabic: "يعمل", category: "أفعال" },
    { french: "savoir", arabic: "يعرف", category: "أفعال" },
    { french: "passer", arabic: "يقضي", category: "أفعال" },
    { french: "inviter", arabic: "يدعو", category: "أفعال" },
    { french: "situer", arabic: "يحدد موقع", category: "أفعال" },
    { french: "arriver", arabic: "يصل", category: "أفعال" },
    { french: "téléphoner", arabic: "يتصل تلفونياً", category: "أفعال" },
    { french: "regarder", arabic: "يشاهد", category: "أفعال" },
    { french: "étudier", arabic: "يدرس", category: "أفعال" },
    { french: "jouer", arabic: "يلعب", category: "أفعال" },
    { french: "décorer", arabic: "يزين", category: "أفعال" },
    { french: "se doucher", arabic: "يأخذ دش", category: "أفعال" },
    { french: "se coucher", arabic: "يرقد", category: "أفعال" },
    { french: "se déplacer", arabic: "يتنقل", category: "أفعال" },
    { french: "partager", arabic: "يتقاسم", category: "أفعال" },

    // صفات وظروف وتعبيرات (Adjectives, Adverbs, Expressions)
    { french: "petit", arabic: "صغير", category: "صفات / تعبيرات" },
    { french: "grand", arabic: "كبير", category: "صفات / تعبيرات" },
    { french: "seul", arabic: "بمفرده", category: "صفات / تعبيرات" },
    { french: "nouveau / nouvel", arabic: "جديد", category: "صفات / تعبيرات" },
    { french: "nouvelle", arabic: "جديدة", category: "صفات / تعبيرات" },
    { french: "propre", arabic: "نظيف", category: "صفات / تعبيرات" },
    { french: "confortable", arabic: "مريح", category: "صفات / تعبيرات" },
    { french: "idéal", arabic: "مثالي / نموذجي", category: "صفات / تعبيرات" },
    { french: "aussi", arabic: "أيضاً", category: "صفات / تعبيرات" },
    { french: "voici", arabic: "ها هو / ها هي", category: "صفات / تعبيرات" },
    { french: "dehors", arabic: "بالخارج", category: "صفات / تعبيرات" },
    { french: "désolé", arabic: "آسف", category: "صفات / تعبيرات" },
    { french: "super", arabic: "رائع", category: "صفات / تعبيرات" },
    { french: "chez moi", arabic: "عندي (في منزلي)", category: "صفات / تعبيرات" },
    { french: "chez lui", arabic: "عنده (في منزله)", category: "صفات / تعبيرات" },
    { french: "autre", arabic: "آخر", category: "صفات / تعبيرات" },
    { french: "même", arabic: "حتى / نفس", category: "صفات / تعبيرات" },
    { french: "être assis", arabic: "جالس", category: "صفات / تعبيرات" },
    { french: "être composé de", arabic: "مكون من", category: "صفات / تعبيرات" },
    { french: "c'est l'heure", arabic: "حان الوقت", category: "صفات / تعبيرات" },
    { french: "au nord de", arabic: "في شمال", category: "صفات / تعبيرات" },
    { french: "poser une question", arabic: "يوجه سؤال", category: "صفات / تعبيرات" },
    { french: "on regarde la TV", arabic: "نشاهد التلفزيون", category: "صفات / تعبيرات" },
    { french: "on dort", arabic: "ننام", category: "صفات / تعبيرات" },
    { french: "on prépare les repas", arabic: "نعد الوجبات", category: "صفات / تعبيرات" },
    { french: "on prend les repas", arabic: "نتناول الوجبات", category: "صفات / تعبيرات" },
    { french: "on se déplace d'une pièce à une autre", arabic: "نتنقل من غرفة إلى أخرى", category: "صفات / تعبيرات" },
    { french: "faire sa toilette", arabic: "الاعتناء بالنظافة الشخصية", category: "صفات / تعبيرات" },
    { french: "aller aux toilettes", arabic: "الذهاب إلى الحمام", category: "صفات / تعبيرات" },
];

const cardsContainer = document.getElementById('cards-container');
const utterance = new SpeechSynthesisUtterance();

/**
 * دالة لتشغيل النطق الصوتي للكلمة الفرنسية
 * @param {string} textToSpeak - الكلمة الفرنسية المراد نطقها
 * @param {HTMLElement} cardElement - عنصر البطاقة لتطبيق تنسيق "جاري النطق"
 */
function speakFrenchWord(textToSpeak, cardElement) {
    if (!('speechSynthesis' in window)) {
        alert("عذراً، متصفحك لا يدعم ميزة النطق الصوتي (Speech Synthesis).");
        return;
    }

    // إيقاف أي نطق سابق
    window.speechSynthesis.cancel();
    
    // إعداد النطق
    utterance.text = textToSpeak;
    utterance.lang = 'fr-FR'; // تحديد اللغة الفرنسية
    utterance.rate = 1; 
    
    // إضافة تنسيق "جاري النطق" عند البدء
    cardElement.classList.add('speaking');

    // إزالة تنسيق "جاري النطق" عند الانتهاء
    utterance.onend = () => {
        cardElement.classList.remove('speaking');
    };
    
    // تشغيل النطق
    window.speechSynthesis.speak(utterance);
}

/**
 * دالة لإنشاء بطاقة الكلمة وإضافتها إلى الصفحة
 */
function renderCards() {
    vocabulary.forEach(item => {
        // إنشاء عنصر البطاقة
        const card = document.createElement('div');
        card.classList.add('word-card');
        
        // بناء المحتوى الداخلي للبطاقة
        card.innerHTML = `
            <div class="french-word">${item.french}</div>
            <div class="arabic-translation"> (${item.category}) ${item.arabic}</div>
            <div class="pronounce-icon">🔊</div>
        `;
        
        // إضافة حدث النقر لتشغيل النطق
        card.addEventListener('click', () => {
            speakFrenchWord(item.french, card);
        });

        // إضافة البطاقة إلى الحاوية
        cardsContainer.appendChild(card);
    });
}

// تشغيل دالة إنشاء البطاقات عند تحميل الصفحة
window.onload = renderCards;