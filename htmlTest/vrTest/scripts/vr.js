VirtualTour = {
    init: function() {
        if (isTransform3DAvailable()) {
            window.kRingRadius = 150;
            this.setup();
        }
    },
    didShow: function() {
        this.init();
    },
    willHide: function() {
        recycleObjectValueForKey(this, "_gSpinner");
        this._gSpinner = null;
    },
    _imageSrcs: ["https://developer.apple.com/safaridemos/showcase/vr/images/5th_ave_1.jpg",
                         "https://developer.apple.com/safaridemos/showcase/vr/images/5th_ave_2.jpg",
                         "https://developer.apple.com/safaridemos/showcase/vr/images/5th_ave_3.jpg",
                         "https://developer.apple.com/safaridemos/showcase/vr/images/5th_ave_4.jpg",
                         "https://developer.apple.com/safaridemos/showcase/vr/images/5th_ave_5.jpg",
                         "https://developer.apple.com/safaridemos/showcase/vr/images/5th_ave_6.jpg"],
    _iPhoneImageSrcs: ["https://developer.apple.com/safaridemos/showcase/vr/images/5th_ave_1-iphone.jpg",
                               "https://developer.apple.com/safaridemos/showcase/vr/images/5th_ave_2-iphone.jpg",
                               "https://developer.apple.com/safaridemos/showcase/vr/images/5th_ave_3-iphone.jpg",
                               "https://developer.apple.com/safaridemos/showcase/vr/images/5th_ave_4-iphone.jpg",
                               "https://developer.apple.com/safaridemos/showcase/vr/images/5th_ave_5-iphone.jpg",
                               "https://developer.apple.com/safaridemos/showcase/vr/images/5th_ave_6-iphone.jpg"],
    setup: function() {
        var container = document.getElementById('vr-container');
        var cube = document.getElementById('cube')
        if (!AC.Detector.isiPhone()) {
            var images = this._imageSrcs,
                imagesWidth = 840,
                imagesHeight = 840;
        } else {
            var images = this._iPhoneImageSrcs,
                imagesWidth = 500,
                imagesHeight = 500;
        };
        var imageDocumentFragment = document.createDocumentFragment();
        for (var i = 0, countI = images.length, img;
        (imageURL = images[i]); i++) {
            img = new Image();
            img.src = imageURL;
            img.id = "face" + (i + 1);
            img.className = "face";
            img.width = imagesWidth;
            img.height = imagesHeight;
            imageDocumentFragment.appendChild(img);
        }
        cube.appendChild(imageDocumentFragment);
        this._gSpinner = new Spinner(document.getElementById('rotateX'), document.getElementById('rotor-x'), document.getElementById('rotateY'), document.getElementById('rotor-y'), container);
        container = null;
        imageDocumentFragment = null;
    }
}
if (!window.isLoaded) {
    window.addEventListener("load", function() {
        VirtualTour.init();
    }, false);
}