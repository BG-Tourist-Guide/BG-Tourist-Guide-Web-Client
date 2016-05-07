(function() {
  let packages = [
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/http',
    '@angular/router',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    'rxjs'
  ];

  let systemConfigPackages = {
    app: {
      defaultExtension: "js"
    }
  };

  packages.forEach((packageName) => {
    systemConfigPackages[packageName] = { main: 'index' };
  });

  System.config({
    map: {
      "@angular": "node_modules/@angular",
      "rxjs": "node_modules/rxjs"
    },
    packages: systemConfigPackages
  });

  System.import("app/main").then(null, console.error.bind(console));
} ());