document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------------------
    // #1. İletişim Formu İşlevi
    // ----------------------------------------------------
    
    // Gerekli elementleri buluyoruz
    const sendButton = document.getElementById('sendButton');
    const responseMessage = document.getElementById('responseMessage');
    const contactForm = document.getElementById('contactForm'); // Form elementini de aldık

    // Eğer 'sendButton' elementini bulabiliyorsak (yani İletişim sayfasındaysak)
    if (sendButton && responseMessage && contactForm) {
        
        sendButton.addEventListener('click', () => {
            
            // Tarayıcının HTML5 doğrulamasını çalıştırır (required alanlar boş mu?)
            if (contactForm.checkValidity()) {
                
                responseMessage.textContent = 'Mesajınız başarıyla gönderildi! Kısa süre içinde size dönüş yapılacaktır.';
                responseMessage.classList.add('visible-message');

                // Formu temizle
                contactForm.reset();

                // 5 saniye sonra mesajı gizle
                setTimeout(() => {
                    responseMessage.classList.remove('visible-message');
                }, 5000); 
                
            } else {
               
            }
        });
    }

    // ----------------------------------------------------
    // #2. Resim Galerisi İşlevi
    // ----------------------------------------------------
    
    // Gerekli elementleri buluyoruz
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const closeBtn = document.getElementsByClassName("close-btn")[0];
    const galleryItems = document.getElementsByClassName("gallery-item");

    // Eğer 'modal' elementini bulabiliyorsak (yani Galeri sayfasındaysak)
    if (modal) {
        
        // Tüm küçük resimlere tıklama olayını dinleme
        for (let i = 0; i < galleryItems.length; i++) {
            galleryItems[i].addEventListener('click', function() {
                const largeImageSrc = this.getAttribute('data-src');
                
                // Modal'ı ve içeriğini ayarla
                modal.style.display = "block";
                modalImage.src = largeImageSrc;
            });
        }

        // Kapatma butonuna tıklama olayını dinleme (X işareti)
        closeBtn.addEventListener('click', function() {
            modal.style.display = "none";
        });

        // Modal dışına tıklama olayını dinleme (Arka plana tıklayınca kapatma)
        window.addEventListener('click', function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });
    }
}); 