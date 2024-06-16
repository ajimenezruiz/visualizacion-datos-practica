module.exports = function() {
    let environmentVal = process.env.MY_ENVIRONMENT || "dev";
    let domainVal, basedomainVal, assetsVal, development_siteVal;
  
    if ( environmentVal === "dev") {
        domainVal = "http://localhost:8080";
        assetsVal = "http://localhost:8080/assets";
        basedomainVal = "http://localhost:8080";
        development_siteVal = true;
    } else if ( environmentVal === "github" ) {
        domainVal = "https://ajimenezruiz.github.io/visualizacion-datos-practica";
        assetsVal = "https://ajimenezruiz.github.io/visualizacion-datos-practica/assets";
        basedomainVal = "https://ajimenezruiz.github.io";
        development_siteVal = true;
      } 
  
    return {
      environment: environmentVal,
      domain : domainVal,
      basedomain: basedomainVal,
      assets : assetsVal,
      development_site : development_siteVal,
      cookie_banner: true,
      googleOptimize: true,
      version: "0.4"
    };
  };
  