webpackJsonp([9],{"./app/molecules/MoviesList/Movie/component/styles.scss":function(e,s,o){var n=o('./node_modules/css-loader/index.js?{"modules":true}!./node_modules/postcss-loader/lib/index.js!./app/molecules/MoviesList/Movie/component/styles.scss');"string"==typeof n&&(n=[[e.i,n,""]]);var i={};i.transform=void 0;o("./node_modules/style-loader/lib/addStyles.js")(n,i);n.locals&&(e.exports=n.locals)},"./app/molecules/MoviesList/Movie/container/index.js":function(e,s,o){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=o("./node_modules/react-redux/es/index.js"),i=o("./node_modules/reselect/es/index.js"),r=o("./node_modules/react-router-dom/index.js"),t=o("./app/store/movies/selectors.js"),l=(o("./node_modules/react/index.js"),o("./node_modules/prop-types/index.js"),o("./app/env/index.js")),d=o("./app/molecules/MoviesList/Movie/component/styles.scss"),c=o.n(d),p=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(s,o,n,i){var r=s&&s.defaultProps,t=arguments.length-3;if(o||0===t||(o={}),o&&r)for(var l in r)void 0===o[l]&&(o[l]=r[l]);else o||(o=r||{});if(1===t)o.children=i;else if(t>1){for(var d=Array(t),c=0;c<t;c++)d[c]=arguments[c+3];o.children=d}return{$$typeof:e,type:s,key:void 0===n?null:""+n,ref:null,props:o,_owner:null}}}(),u=function(e){var s=e.history,o=e.genres,n=e.genre_ids,i=e.id,r=e.poster_path,t=e.title;return p("div",{className:c.a.movie,onClick:function(){return s.push("/movie/"+i)}},void 0,p("h5",{},void 0,t),p("img",{src:l.c+"/w185"+r}),p("div",{className:c.a["genre-list"]},void 0,n.map(function(e){return o.hasOwnProperty(e)?o[e]:""}).join(" ")))},a=u,m=Object(i.b)({genres:Object(t.b)()}),v=Object(n.connect)(m,null)(Object(r.withRouter)(a));s.default=v},'./node_modules/css-loader/index.js?{"modules":true}!./node_modules/postcss-loader/lib/index.js!./app/molecules/MoviesList/Movie/component/styles.scss':function(e,s,o){s=e.exports=o("./node_modules/css-loader/lib/css-base.js")(void 0),s.push([e.i,"._234wwcVpOicOdXDhhr1epp{font-size:60%}._2f1-7K5pMPQAxcErAeEJhU{cursor:pointer}",""]),s.locals={"genre-list":"_234wwcVpOicOdXDhhr1epp",movie:"_2f1-7K5pMPQAxcErAeEJhU"}}});