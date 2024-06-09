
// Sayfa2 nin içeriğini oluştur.
var createA2 = function() {
    
    // Kapatma düğmesi.
    a2.closeButton = createCloseButton()
    a2.add(that)
    that.onClick(hideA2)
    
    // Sayfa2 yazısı.
    a2.lblDesc = createLabel()
    a2.add(that)
    that.text = "Sayfa 2"
    that.fontSize = 40
    that.textColor = "white"
    that.textAlign = "center"
    that.onResize(function(self) {
        self.center()
    })
    
    // Ekranın dışına çıkan içerik. yazısı.
    a2.imgContent = createImage(0, 0, 100, 100)
    a2.add(that)
    that.load("images/app-logo.svg")
    that.space = 20
    // Resmi, sayfa yüksekliğinden 200px daha aşağıya yerleştir.
    that.top = page.height + 200
    
}

// Sayfa2 yi gizle.
var hideA2 = function() {
    a2.visible = 0
    
}
