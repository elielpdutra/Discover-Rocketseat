## margin

Espaços entre os elementos

- margin-top | margin-right | margin-bottom | margin-left
- value: `<length>` | `<percentage>` | auto

```css
div {
    /* shorhand */
    margin: 12px 16px 10px 4px;
    margin: 12px 16px 0;
    margin: 8px 16px;
    margin: 8px;
}
```

    * Cuidado com margin collapsing (top se ajusta ao bottom)