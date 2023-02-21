# @stradivario/payment-providers


#### How to install ?

Open your browser and paste inside the console the following code

```js
const script = document.createElement('script');
script.setAttribute('src', 'https://cdn.jsdelivr.net/gh/stradivario/payment-providers/release/payment-widget-winbet.js');
document.body.appendChild(script);

const widget = document.createElement('winbet-payment-widget');
widget.apiKey = 'api-key-goes-here';
document.body.appendChild(widget);
```


It can be used also inside the html

```html
<!DOCTYPE html>

<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport"
    content="width=device-width, minimum-scale=1.0, initial-scale=1.0, user-scalable=yes, maximum-scale=5.0" />
  <title>@Stradivario payment providers</title>

  <base href="/" />
</head>

<body>
  <winbet-payment-widget apiKey="1234"></winbet-payment-widget>
  <script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stradivario/payment-providers/release/payment-widget-winbet.js"></script>
</body>

</html>
```


#### Installing it via `npm`

```
npm install @winbet/payment-widget
```


Usage inside typescript
```ts
import { WidgetComponent } from '@winbet/payment-widget';


@Module({
  components: [WidgetComponent]
})
export class AppModule {}
```


#### Usage inside other framework


```ts
import '@winbet/payment-widget';
```


After importing widget component we can then use it inside the html itself with specific api-key

```html
<winbet-payment-widget apiKey="1234"></winbet-payment-widget>
```