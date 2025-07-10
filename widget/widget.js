class ShareButton{
    constructor(shareButton){
        this.shareButton = shareButton;

        this.config = {
            "text": "Share this content",
            "link": "https://example.com/",
            "shareOptions": [
                "sms",
                "whatsapp",
                "instagram",
                "X", 
                "facebook",
                "email"
            ]
        };


        this.link = this.config.link; 
        this.text = this.config.text && this.config.text !== "" ? this.config.text : this.config.link;
        this.init(this.config.shareOptions || []);
    }

    getShareButtonHtml(option) {
        switch(option) {
            case "sms":
                return `<button class="social-media-btn" role="button" aria-hidden="true"><a href="sms://?body=${this.text}"><i class="far fa-comment-dots"></i></a></button>`;
            case "whatsapp":
                return `<button class="social-media-btn" role="button" aria-hidden="true"><a href="whatsapp://send?text=${this.text}" target="_blank" aria-label="Share this site via WhatsApp."><i class="fab fa-whatsapp"></i></a></button>`;
            case "instagram":
                return `<button class="social-media-btn" role="button" aria-hidden="true"><a href="#" aria-label="Share this site via Instagram."><i class="fab fa-instagram"></i></a></button>`;
            case "X": // WTF is this name really?
                return `<button class="social-media-btn" role="button" aria-hidden="true"><a href="https://x.com/intent/post?text=${this.text}" target="_blank" aria-label="Share this site via X (Twitter)."><i class="fab fa-twitter"></i></a></button>`;
            case "facebook":
                return `<button class="social-media-btn" role="button" aria-hidden="true"><a href="https://www.facebook.com/sharer/sharer.php?u=${this.text}" target="_blank" aria-label="Share this site via Facebook."><i class="fab fa-facebook-f"></i></a></button>`;
            case "email":
                return `<button class="social-media-btn" role="button" aria-hidden="true"><a href="mailto:?subject=${this.text}" aria-label="Share this site via E-Mail."><i class="fa fa-envelope"></i></a></button>`;
            default:
                return "";
        }
    }

    init(enabledOptions) {
        // Build social media buttons dynamically
        const socialButtonsHtml = enabledOptions.map(opt => this.getShareButtonHtml(opt)).join("\n");

        this.html = `
            <style>
                .share-options{
                    display: none;
                }
                .share-options.active {
                    display: block;
                }
            </style>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
            <button class="share-btn" alt="share-button" aria-label="share-button">
                <i class="fas fa-share-alt"></i>
            </button>
            <div class="share-options">
                <p class="title_share">Share</p>
                <div class="social-media">
                    ${socialButtonsHtml}
                </div>
                <div class="link-container">
                    <p class="link" id="share-link">${this.link}</p>
                    <button class="copy-btn" role="button">Copy  <i class="fa-regular fa-clipboard"></i></button>
                </div>
            </div>
        `;

        this.shareButton.innerHTML = this.html;

        const shareBtn = this.shareButton.querySelector(".share-btn");
        const shareOptions = this.shareButton.querySelector(".share-options");
        shareBtn.addEventListener("click", () => {
            shareOptions.classList.toggle("active");
        });

        const copyBtn = this.shareButton.querySelector(".copy-btn");
        copyBtn.addEventListener("click", () => {
            const copyText = this.shareButton.querySelector("#share-link").innerText;
            navigator.clipboard.writeText(copyText);
        });
    }
}


const shareButton = document.getElementById("share-button");
new ShareButton(shareButton);



