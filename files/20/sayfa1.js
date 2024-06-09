// Sayfa1 in içeriğini oluştur.
var createA1 = function() {
            
    // Kapatma düğmesi olutur.
    a1.closeButton = createCloseButton()
    a1.add(that)
    that.onClick(hideA1)

    // NOT: createCloseButton() fonksiyonu, ortak kullanım için
    // dosyalar/20/close-button.js dosyasına yazılmıştır.
    
    // Sayfa1 yazısı.
    a1.lblDesc = createLabel()
    a1.add(that)
    that.text = "Sayfa 1"
    that.fontSize = 40
    that.textColor = "white"
    that.textAlign = "center"
    that.onResize(function(self) {
        self.center()
    })
    
    
}

// Sayfa1 i gizle.
var hideA1 = function() {
    a1.visible = 0
    
}