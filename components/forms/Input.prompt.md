Labeled text field — used in the Free Assessment form and portal. Light rest fill; focus turns the border blue with a soft ring.

```jsx
<Input label="Business name" placeholder="Acme Logistics LLC" />
<Input label="Email" type="email" icon={<Mail/>} placeholder="you@business.com" />
<Input label="Outstanding MCA balance" error="Enter an amount" />
```

Pass `icon` (leading glyph), `hint`, or `error`. Spreads native input props.
