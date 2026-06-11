Primary call-to-action. Marketing CTAs are usually `primary` + `size="lg"` with an arrow ("Free Assessment"); the phone CTA is `outline`. Display font, rounded, blue glow + -2px lift on hover.

```jsx
<Button variant="primary" size="lg" iconRight={<ArrowRight/>}>Free Assessment</Button>
<Button variant="outline" iconLeft={<Phone/>}>Call Us 866-757-3339</Button>
<Button variant="green">Get Started</Button>
```

Variants: `primary` (royal blue), `outline` (white + blue border, fills pale blue on hover), `green` (brand green accent), `navy` (deep), `ghost` (text-only). Sizes `sm`/`md`/`lg`. Pass `href` for links, `fullWidth` for forms.
