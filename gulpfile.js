
// Declarmos las dependecias
var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify')
var obfuscate = require('gulp-obfuscate')
var browserSync = require('browser-sync').create();

// Declaramos el arreglo de rutas
var arrayRutas ={
  rutaJs : "./assets/js/app.js",
  rutaScss : "./assets/scss/main.scss",
  rutaHTML: "index.html"
}
// ******TAREAS DE CSS****
gulp.task ('sass' , function(){
  // console.log("Hola mundo");
  gulp.src(arrayRutas.rutaCss)
  .
  

})
gulp.task('watchCss', function (){
   return gulp.watch ('scss/**/*.scss')
    .pipe(sass({outputStyle:'compressed'}).on ('error',sass.logError))
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.reload)
    gulp.watch(rutaScss , browserSync.reload)
})
// 
//****TAREA DE JAVASCRIPT*******

//Llamamos a uglify (minifica el código js) & obfuscate
gulp.task("js", function(){
   return gulp.src(arrayRutas.rutaJs)
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest("./public/js"))
});

gulp.task("watch-js",function(){
    gulp.watch("./assets/js/*.js",["js"]);
    gulp.watch(arrayRutas.rutaJs , browserSync.reload)
})

//***TAREAS DE HTML***
gulp.task('html', function(){
  return gulp.src(arrayRutas.rutaHTML)
    .pipe(gulp.dest('./public'))
})

gulp.task("html-watch",["html"],function(done){
  browserSync.reload();
  done();
})

gulp.task('browserSync', function(){
  browserSync.init({
    server: {
      baseDir : './public/'
    }
  });
  gulp.watch(arrayRutas.rutaScss, ["watchCss"]);
  gulp.watch(arrayRutas.rutaJs,["watch-js"]);
 gulp.watch("./index.html",["html-watch"]);
})
