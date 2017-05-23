# angular-email
Building an email clone using angularjs

```
npm init
npm install jquery --save
npm install angular@1.5.6 --save
```

### Required Tools
jQuery - Shorthand framework for Vanilla JavaScript. By default Angular uses jQLite, we will be loading jQuery before Angular to have Angular use jQuery instead.
```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
```

AngularJS - Frontend framework
```
<script src="/node_modules/angular/angular.js"></script>
```

### gulp
<!-- Starts server -->

```
gulp connect
```

### Browserify

"bundle": "watchify -t [ babelify --presets [react es2015 ] ] public/js/script.js -o public/js/bundle.js -d"
npm run bundle
