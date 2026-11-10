# OBSIDIAN — animated e-commerce template

A premium, animated storefront template in plain HTML, CSS and JavaScript. There's no build step and nothing to install.

## Choose your store type

The same template can sell different kinds of products. Pick one in **`config.js`**:

```js
const STORE_TYPE = 'fashion';
```

| `STORE_TYPE` | What it sells | Size picker |
|---|---|---|
| `fashion` | Clothing & accessories | XS–XL + "Find my fit" size finder |
| `bags` | Bags & leather goods | none (one size) |
| `sneakers` | Sneakers & footwear | EU 39–45 |
| `jewelry` | Jewelry & watches | none |
| `beauty` | Skincare & beauty | 30ml / 50ml / 100ml |
| `tech` | Headphones, speakers, desk gear | none |

Each type changes the hero text and image, scrolling banner, categories, filters, products, sizes, upcoming drop and lookbook.

You can also preview a type without editing anything:

- Add `?store=bags` (or any key above) to the URL, or
- Use the **Store type** dropdown in the footer. It's a demo switcher you can delete from `index.html` before launch.

### Make your own store type

1. Copy a preset in `config.js` (for example `bags`) and give it a new key, such as `furniture`.
2. Edit its text, `categories` and `products`. Images are Unsplash photo IDs, or you can put full URLs in `imgs`.
3. Set `sizes` to a list such as `['Small','Large']`, or to `null` to hide the size picker.
4. Set `STORE_TYPE = 'furniture'`.

## Run locally

```bash
python -m http.server 5173
```

Then open http://localhost:5173.

## Features

- Loading screen, word-by-word headline reveals, custom cursor, buttons that follow the mouse, tilting cards, parallax scrolling, a sideways-scrolling lookbook, and a scrolling banner that speeds up with your scroll
- Filters, price slider, sorting and instant search (press `/`)
- Quick view with image gallery, colour and size choice, low-stock alerts and a size finder (fashion only)
- Cart and wishlist saved in the browser separately for each store type, a free-shipping progress bar and promo codes (`NOIR10`, `WELCOME15`)
- Drop countdown, rotating reviews, newsletter sign-up, and a light/dark theme
- Mobile: bottom tab bar, products slide up from the bottom of the screen, swipe to close, and a swipeable lookbook

Checkout is a placeholder. Connect it to Stripe, Shopify or another payment service.
