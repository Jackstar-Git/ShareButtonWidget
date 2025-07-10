# Simple JS Share Widget

A simple, customizable JavaScript share widget that allows users to share links via various social media platforms. Easily configure which share options to display using a JSON config file.

---

## Features

- **Easy integration**: Just include the widget files and a container div.
- **Configurable**: Choose which share buttons to display via `config.json`.
- **Clipboard support**: Copy the share link with a single click.
- **Responsive and accessible**: Works on all modern browsers and devices.
- **No dependencies**: Only uses vanilla JS and Font Awesome for icons.


---

## Installation

1. **Clone or download** this repository.

2. **Include the following file** in your project directory:
   - `widget.js`

3. **Add Font Awesome** (already included via CDN in the widget).

---

## Usage

1. **Add the container div** to your HTML where you want the share button to appear:

    ```html
    <div id="share-button"></div>
    ```

2. **Include the widget script** at the end of your HTML body:

    ```html
    <script src="widget.js"></script>
    ```

3. **Configure share options** in `widges.js`:

    ```json
    {
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
    }
    ```

    - `text`: The message or subject to share.
    - `link`: The URL to share.
    - `shareOptions`: Array of share buttons to display. Supported values:
        - `sms`
        - `whatsapp`
        - `instagram`
        - `X` (Twitter/X)
        - `facebook`
        - `email`

---

## Customization

- **Styling**: Styling (change colors, positioning, or appearance) can be done via a normal CSS file, default styles are included too. You can find the file here: [default_styles.css](showcase/default_styles.css) 
- **Icons**: Uses [Font Awesome](https://fontawesome.com/) for social icons.


---

## Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Share Widget Example</title>
</head>
<body>
    <div id="share-button"></div>
    <script src="widget.js"></script>
</body>
</html>
```

---

## License

MIT

---

## Credits

- [Font Awesome](https://fontawesome.com/)
